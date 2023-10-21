import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    experimental: {
        mdxRs: true
    },
    swcMinify: true,
    reactStrictMode: true
};

const withMDX = nextMDX();

export default withMDX(nextConfig);
