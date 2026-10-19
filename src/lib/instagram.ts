import { INSTAGRAM_REELS, InstagramReel } from '@/data/blogData';

// Active long-lived token from environment variable (never exposed to client or git)
const DEFAULT_INSTAGRAM_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN || '';

// Pinned post shortcodes in exact profile order (matches Instagram profile grid)
const PINNED_SHORTCODES = ['DehZO5oG9oR', 'DXZgS2xCInS', 'Db27TChsr_R'];

interface MetaInstagramItem {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

interface MetaInstagramResponse {
  data?: MetaInstagramItem[];
  error?: {
    message: string;
    type: string;
    code: number;
  };
}

let activeToken = DEFAULT_INSTAGRAM_TOKEN;
let lastRefreshTime = Date.now();
const ratioCache = new Map<string, 'horizontal' | 'vertical' | 'portrait'>();

/**
 * Periodically attempts to refresh the long-lived token via Meta Graph API
 * Meta allows refreshing long-lived tokens that are at least 24 hours old.
 */
export async function refreshInstagramTokenIfNeeded(): Promise<string> {
  if (!activeToken) {
    return '';
  }
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  const SEVEN_DAYS_MS = 7 * ONE_DAY_MS;

  // Attempt refresh if last checked more than 7 days ago
  if (Date.now() - lastRefreshTime > SEVEN_DAYS_MS) {
    try {
      const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${activeToken}`;
      const res = await fetch(refreshUrl, { method: 'GET' });
      if (res.ok) {
        const data = await res.json();
        if (data.access_token) {
          activeToken = data.access_token;
          lastRefreshTime = Date.now();
          console.log('[Instagram API] Successfully auto-refreshed 60-day access token.');
        }
      }
    } catch (err) {
      console.warn('[Instagram API] Token auto-refresh warning:', err);
    }
  }

  return activeToken;
}

/**
 * Fast aspect ratio detection by reading JPEG SOF marker headers (0-2048 bytes)
 */
async function detectAspectRatio(imgUrl?: string): Promise<'horizontal' | 'vertical' | 'portrait'> {
  if (!imgUrl) return 'vertical';
  if (ratioCache.has(imgUrl)) return ratioCache.get(imgUrl)!;

  try {
    const res = await fetch(imgUrl, { headers: { Range: 'bytes=0-2048' } });
    const buf = Buffer.from(await res.arrayBuffer());
    let w = 0;
    let h = 0;
    for (let i = 0; i < buf.length - 8; i++) {
      if (buf[i] === 0xff && buf[i + 1] >= 0xc0 && buf[i + 1] <= 0xc3) {
        h = buf.readUInt16BE(i + 5);
        w = buf.readUInt16BE(i + 7);
        break;
      }
    }
    if (w > 0 && h > 0) {
      const ratio = w / h;
      const result: 'horizontal' | 'vertical' | 'portrait' =
        ratio >= 1.2 ? 'horizontal' : ratio < 0.75 ? 'vertical' : 'portrait';
      ratioCache.set(imgUrl, result);
      return result;
    }
  } catch {
    // Return fallback
  }

  return 'vertical';
}

/**
 * Fetches the Instagram posts/reels matching the clinic profile (pinned posts in order + newest posts)
 * Falls back gracefully to curated static reels if API is unavailable.
 */
export async function getLatestInstagramPosts(limit = 4): Promise<InstagramReel[]> {
  try {
    const token = await refreshInstagramTokenIfNeeded();
    if (!token) {
      return INSTAGRAM_REELS.slice(0, limit);
    }

    // Fetch batch of recent posts to cover pinned items and newest uploads
    const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=30&access_token=${token}`;

    const res = await fetch(endpoint, {
      method: 'GET',
      next: { revalidate: 1800 }, // Next.js ISR: Cache for 30 minutes
    });

    if (!res.ok) {
      console.warn(`[Instagram API] HTTP error ${res.status}, using static fallback.`);
      return INSTAGRAM_REELS.slice(0, limit);
    }

    const payload: MetaInstagramResponse = await res.json();

    if (payload.error || !payload.data || payload.data.length === 0) {
      console.warn('[Instagram API] Payload error or empty data:', payload.error);
      return INSTAGRAM_REELS.slice(0, limit);
    }

    // 1. Order posts to match profile: Pinned items first in exact pinned order, then newest unpinned items
    const pinnedItems: MetaInstagramItem[] = [];
    PINNED_SHORTCODES.forEach((code) => {
      const match = payload.data!.find((item) => item.permalink.includes(code));
      if (match) pinnedItems.push(match);
    });

    const unpinnedItems = payload.data.filter(
      (item) => !PINNED_SHORTCODES.some((code) => item.permalink.includes(code))
    );

    const orderedItems = [...pinnedItems, ...unpinnedItems].slice(0, limit);

    // 2. Map items with aspect ratio detection and curiosity-teaser captions
    const mappedReels: InstagramReel[] = await Promise.all(
      orderedItems.map(async (item, idx) => {
        const rawCaption = item.caption || '';
        const lines = rawCaption
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean);

        // Clean title (first line, max 65 chars)
        const firstLine = lines[0] || 'Dent Aktif Global';
        let cleanTitle = firstLine.replace(/#[a-zA-Z0-9_]+/g, '').trim();
        if (cleanTitle.length > 65) {
          cleanTitle = cleanTitle.slice(0, 62).trim() + '...';
        }

        // Curiosity teaser (max ~110 chars so user is motivated to view full reel on Instagram)
        const bodyLines = lines
          .slice(1)
          .filter(
            (l) =>
              !l.startsWith('#') &&
              !l.startsWith('http') &&
              !l.startsWith('---') &&
              !l.includes('www.')
          );
        let combined = bodyLines
          .join(' ')
          .replace(/#[a-zA-Z0-9_]+/g, '')
          .replace(/\s+/g, ' ')
          .trim();
        if (!combined || combined.length < 15) {
          combined = rawCaption
            .replace(/#[a-zA-Z0-9_]+/g, '')
            .replace(/\s+/g, ' ')
            .trim();
        }

        let cleanTeaser = combined;
        if (cleanTeaser.length > 110) {
          const cut = cleanTeaser.slice(0, 105);
          const lastSpace = cut.lastIndexOf(' ');
          cleanTeaser = (lastSpace > 50 ? cut.slice(0, lastSpace) : cut).trim() + '...';
        }
        if (!cleanTeaser || cleanTeaser.length < 25 || cleanTeaser.startsWith('@')) {
          cleanTeaser = `${cleanTitle} — Dent Aktif Global hekim kadrosu ve klinik tedavi deneyimini Instagram'da keşfedin...`;
        }

        // Extract shortcode from permalink (e.g., https://www.instagram.com/reel/DemWfMjk5VY/ -> DemWfMjk5VY)
        const permalinkMatch = item.permalink.match(/\/(?:p|reel)\/([A-Za-z0-9_-]+)/);
        const shortcode = permalinkMatch ? permalinkMatch[1] : item.id;
        const embedUrl = `https://www.instagram.com/p/${shortcode}/embed/`;

        // Detect aspect ratio from thumbnail
        const coverUrl = item.thumbnail_url || item.media_url;
        const aspectRatio = await detectAspectRatio(coverUrl);
        const isPinned = PINNED_SHORTCODES.includes(shortcode);

        // Multilingual dictionaries for title & teaser
        const titleDict: Record<string, string> = {
          en: cleanTitle,
          tr: cleanTitle,
          de: cleanTitle,
          ru: cleanTitle,
          fr: cleanTitle,
          ar: cleanTitle,
        };

        const captionDict: Record<string, string> = {
          en: cleanTeaser,
          tr: cleanTeaser,
          de: cleanTeaser,
          ru: cleanTeaser,
          fr: cleanTeaser,
          ar: cleanTeaser,
        };

        const doctorRoleDict: Record<string, string> = {
          en:
            item.media_type === 'VIDEO'
              ? aspectRatio === 'horizontal'
                ? 'Instagram Video'
                : 'Instagram Reel'
              : 'Instagram Post',
          tr:
            item.media_type === 'VIDEO'
              ? aspectRatio === 'horizontal'
                ? 'Instagram Video'
                : 'Instagram Reels'
              : 'Instagram Gönderisi',
          de:
            item.media_type === 'VIDEO'
              ? aspectRatio === 'horizontal'
                ? 'Instagram Video'
                : 'Instagram Reel'
              : 'Instagram Beitrag',
          ru:
            item.media_type === 'VIDEO'
              ? aspectRatio === 'horizontal'
                ? 'Instagram Видео'
                : 'Instagram Reels'
              : 'Публикация Instagram',
          fr:
            item.media_type === 'VIDEO'
              ? aspectRatio === 'horizontal'
                ? 'Vidéo Instagram'
                : 'Instagram Reel'
              : 'Publication Instagram',
          ar:
            item.media_type === 'VIDEO'
              ? aspectRatio === 'horizontal'
                ? 'فيديو إنستغرام'
                : 'إنستغرام ريلز'
              : 'منشور إنستغرام',
        };

        return {
          id: `ig-${item.id}`,
          shortcode,
          category: 'instagram-feed',
          postUrl: item.permalink,
          embedUrl,
          thumbnailUrl: coverUrl,
          mediaType: item.media_type,
          aspectRatio,
          isPinned,
          viewsCount: isPinned ? 'Öne Çıkan' : idx === 3 ? 'En Yeni' : undefined,
          duration: item.media_type === 'VIDEO' ? 'Reel' : undefined,
          doctor: '',
          doctorRole: doctorRoleDict,
          title: titleDict,
          caption: captionDict,
        };
      })
    );

    return mappedReels;
  } catch (error) {
    console.error('[Instagram API] Exception during fetch:', error);
    return INSTAGRAM_REELS.slice(0, limit);
  }
}
