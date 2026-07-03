/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out for GitHub Pages
  output: "export",
  // GitHub Pages can't run the Next.js image optimizer
  images: {
    unoptimized: true,
  },
  // Emit each route as a folder with index.html — plays nicely with static hosts
  trailingSlash: true,
};

export default nextConfig;
