import { config } from "dotenv";
import type { NextConfig } from "next";

config({ path: "optimizelyconfig.env" });

const nextConfig: NextConfig = {/* config options here */};

export default nextConfig;
