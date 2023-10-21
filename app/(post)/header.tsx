import { useEffect, useRef } from 'react';
import { useSelectedLayoutSegments } from 'next/navigation';

import useSWR from 'swr';
import { ago } from 'time-ago';

import { Post } from '@/app/getPosts';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Header({ posts }: { posts: Post[] }) {
    const segments = useSelectedLayoutSegments();

    const initialPost = posts.find((post) => post.id === segments[segments.length - 1]);

    const { data: post, mutate } = useSWR(`/api/view?id=${initialPost?.id ?? ''}`, fetcher, {
        fallbackData: initialPost,
        refreshInterval: 5000
    });

    if (initialPost == null) return <></>;

    return (
        <>
            <h1 className="text-2xl font-bold mb-1 dark:text-gray-100">{post.title}</h1>
            <p className="font-mono flex text-xs text-gray-500 dark:text-gray-500">
                <span className="flex-grow">
                    <span suppressHydrationWarning={true}>
                        {post.date} ({ago(post.date, true)} ago)
                    </span>
                </span>

                <span className="pr-1.5">
                    <Views id={post.id} mutate={mutate} defaultValue={post.viewsFormatted} />
                </span>
            </p>
        </>
    );
}

function Views({ id, mutate, defaultValue }) {
    const views = defaultValue;
    const didLogViewRef = useRef(false);

    useEffect(() => {
        if ('development' === process.env.NODE_ENV) return;
        if (!didLogViewRef.current) {
            const url = '/api/view?incr=1&id=' + encodeURIComponent(id);
            fetch(url)
                .then((res) => res.json())
                .then((obj) => {
                    mutate(obj);
                })
                .catch(console.error);
            didLogViewRef.current = true;
        }
    });

    return <>{views != null ? <span>{views} views</span> : null}</>;
}
