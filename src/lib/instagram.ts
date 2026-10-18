import { INSTAGRAM_REELS, InstagramReel } from '@/data/blogData';

// Active long-lived token (automatically refreshed every 60 days via Meta API)
const DEFAULT_INSTAGRAM_TOKEN =
  process.env.INSTAGRAM_ACCESS_TOKEN ||
  'IGAAhULZASOcoNBZAGE3eXRYR2hSOTdQNU9iRkwtY25hZAEc4TUlMdHl3cFFKTTFNRnhiRnoweTVzN203LTUycmF5VDBBa2FrZAUNUX2xUX2hjM2lheDFXdHZAlSjJvaWlzY0NkWkNmQ0pVOHBpeTFmTzltU1ZA3';

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

/**
 * Periodically attempts to refresh the long-lived token via Meta Graph API
 * Meta allows refreshing long-lived tokens that are at least 24 hours old.
 */
export async function refreshInstagramTokenIfNeeded(): Promise<string> {
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
 * Fetches the latest 4 Instagram posts/reels from Meta Graph API
 * Falls back gracefully to curated static reels if API is unavailable.
 */
export async function getLatestInstagramPosts(limit = 4): Promise<InstagramReel[]> {
  try {
    const token = await refreshInstagramTokenIfNeeded();
    const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=${limit}&access_token=${token}`;

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

    // Map Meta Graph API media items to InstagramReel structure
    const mappedReels: InstagramReel[] = payload.data.map((item, idx) => {
      const rawCaption = item.caption || '';
      const lines = rawCaption.split('\n').map((l) => l.trim()).filter(Boolean);

      // Clean, catchy title extracted from first sentence or line
      const firstLine = lines[0] || 'Dent Aktif Global • Patient Transformation';
      const cleanTitle = firstLine.length > 95 ? firstLine.slice(0, 95) + '...' : firstLine;

      // Body text excluding hashtag blocks
      const cleanBody =
        lines
          .slice(1)
          .filter((l) => !l.startsWith('#'))
          .join(' ')
          .trim() || rawCaption.replace(/#[a-zA-Z0-9_]+/g, '').trim() || firstLine;

      // Extract shortcode from permalink (e.g., https://www.instagram.com/reel/DemWfMjk5VY/ -> DemWfMjk5VY)
      const permalinkMatch = item.permalink.match(/\/(?:p|reel)\/([A-Za-z0-9_-]+)/);
      const shortcode = permalinkMatch ? permalinkMatch[1] : item.id;
      const embedUrl = `https://www.instagram.com/p/${shortcode}/embed/`;

      // Multilingual dictionary for title & caption so UI language switching continues to work
      const titleDict: Record<string, string> = {
        en: cleanTitle,
        tr: cleanTitle,
        de: cleanTitle,
        ru: cleanTitle,
        fr: cleanTitle,
        ar: cleanTitle,
      };

      const captionDict: Record<string, string> = {
        en: cleanBody,
        tr: cleanBody,
        de: cleanBody,
        ru: cleanBody,
        fr: cleanBody,
        ar: cleanBody,
      };

      const doctorRoleDict: Record<string, string> = {
        en: item.media_type === 'VIDEO' ? 'Instagram Reel' : 'Instagram Post',
        tr: item.media_type === 'VIDEO' ? 'Instagram Reels' : 'Instagram Gönderisi',
        de: item.media_type === 'VIDEO' ? 'Instagram Reel' : 'Instagram Beitrag',
        ru: item.media_type === 'VIDEO' ? 'Instagram Reels' : 'Публикация Instagram',
        fr: item.media_type === 'VIDEO' ? 'Instagram Reel' : 'Publication Instagram',
        ar: item.media_type === 'VIDEO' ? 'إنستغرام ريلز' : 'منشور إنستغرام',
      };

      return {
        id: `ig-${item.id}`,
        shortcode,
        category: 'instagram-feed',
        postUrl: item.permalink,
        embedUrl,
        viewsCount: idx === 0 ? 'Latest' : undefined,
        duration: item.media_type === 'VIDEO' ? 'Reel' : undefined,
        doctor: '',
        doctorRole: doctorRoleDict,
        title: titleDict,
        caption: captionDict,
      };
    });

    return mappedReels;
  } catch (error) {
    console.error('[Instagram API] Exception during fetch:', error);
    return INSTAGRAM_REELS.slice(0, limit);
  }
}
