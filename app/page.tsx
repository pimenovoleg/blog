import { Posts } from '@/components/Posts';
import { getPosts } from '@/app/getPosts';

export const revalidate = 60;

export default async function HomePage() {
    const posts = await getPosts();

    return <Posts posts={posts} />;
}
