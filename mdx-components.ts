import { A as a } from '@/components/mdx/a';
import { Blockquote as blockquote } from '@/components/mdx/blockquote';
import { H1 as h1 } from '@/components/mdx/h1';
import { H2 as h2 } from '@/components/mdx/h2';

export function useMDXComponents(components: { [component: string]: React.ComponentType }) {
    return {
        ...components,
        a,
        h1,
        h2,
        blockquote
    };
}
