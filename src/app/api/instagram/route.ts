import { NextResponse } from 'next/server';
import { getLatestInstagramPosts } from '@/lib/instagram';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get('limit');
    const limit = limitParam ? Math.min(Math.max(parseInt(limitParam, 10) || 4, 1), 12) : 4;

    const posts = await getLatestInstagramPosts(limit);

    return NextResponse.json(
      {
        success: true,
        count: posts.length,
        data: posts,
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
        },
      }
    );
  } catch (error) {
    console.error('API /api/instagram error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch Instagram feed',
      },
      { status: 500 }
    );
  }
}
