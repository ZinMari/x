import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  //переименование env
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    remotePatterns: [new URL("https://fakestoreapi.com/img/**")],
  },
};

export default nextConfig;
