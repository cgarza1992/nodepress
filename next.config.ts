import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    const base = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ];
    return [
      {
        // The live in-action demo (/autofill) is a static, self-contained mock with
        // nothing to clickjack; allow our own pages to frame just this one file.
        source: '/autofill/demo.html',
        headers: [{ key: 'X-Frame-Options', value: 'SAMEORIGIN' }, ...base],
      },
      {
        // Everything else stays DENY — no framing at all.
        source: '/((?!autofill/demo\\.html).*)',
        headers: [{ key: 'X-Frame-Options', value: 'DENY' }, ...base],
      },
    ];
  },
};

export default nextConfig;
