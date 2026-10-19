import { getLatestInstagramPosts } from '@/lib/instagram';
import BlogMediaClient from './BlogMediaClient';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const initialReels = await getLatestInstagramPosts(4);
  return <BlogMediaClient initialReels={initialReels} />;
}
