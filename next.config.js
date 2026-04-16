const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: false,
  turbopack: {
    root: path.resolve(__dirname, ".."),
  },
  outputFileTracingRoot: path.resolve(__dirname, ".."),
};
module.exports = nextConfig;
