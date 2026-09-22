import { config } from "dotenv";
import type { NextConfig } from "next";

config({ path: "optimizelyconfig.env" });

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.cms.optimizely.com",
			},
		],
	},
};

export default nextConfig;
