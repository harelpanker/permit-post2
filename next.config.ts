import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.graphassets.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'media.graphcms.com',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
