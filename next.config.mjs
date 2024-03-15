import { createRequire } from "module";
const require = createRequire(import.meta.url);
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
  // experimental: {
  //   appDir: true,
  // },
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
};


export default {
  ...nextConfig,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.externals.push({
        bufferutil: "bufferutil",
        "utf-8-validate": "utf-8-validate",
        "supports-color": "supports-color",
      });
    }

    return config;
  },
};
