import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  experimental: {
    swcPlugins: [["@lingui/swc-plugin", {}]],
    turbo: {
      rules: {
        "*.po": {
          loaders: ["@lingui/loader"],
          as: "*.js",
        },
      },
    },
  },

  webpack: (config: Configuration) => {
    config.module?.rules?.push({
      test: /\.po$/,
      use: {
        loader: "@lingui/loader",
      },
    });
    return config;
  },
};

export default nextConfig;
