import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Enable static exports if needed
    // output: 'export',

    // Image optimization configuration
    images: {
        unoptimized: false,
    },

    // Disable x-powered-by header
    poweredByHeader: false,

    // Enable React strict mode
    reactStrictMode: true,
};

export default nextConfig;
