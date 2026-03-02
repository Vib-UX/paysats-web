import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@predator_757/bitflation-idr-dca"],
  webpack: (config) => {
    config.resolve.alias["@predator_757/bitflation-idr-dca"] = path.resolve(
      __dirname,
      "node_modules/@predator_757/bitflation-idr-dca/dist/index.js"
    );
    return config;
  },
};

export default nextConfig;
