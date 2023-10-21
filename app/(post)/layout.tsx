import { getPosts } from '@/app/getPosts';

export const revalidate = 60;

export default async function Layout({ children }) {
    const posts = await getPosts();

    return <article className="text-gray-800 dark:text-gray-300 mb-10">{children}</article>;
}
