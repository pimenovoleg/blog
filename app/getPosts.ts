import commaNumber from 'comma-number';

import postsData from '../data/posts.json';
import redis from '../utils/redis';

export type Post = {
    id: string;
    date: string;
    title: string;
    views: number;
    viewsFormatted: string;
};

type Views = {
    [key: string]: string;
};

export const getPosts = async () => {
    const allViews: null | Views = await redis.hgetall('views');

    return postsData.posts.map((post): Post => {
        const views = Number(allViews?.[post.id] ?? 0);
        return {
            ...post,
            views,
            viewsFormatted: commaNumber(views)
        };
    });
};
