/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "dummyimage.com",
      "s.milimaj.com",
      "img.piri.net",
      "www.mapsharita.com",
    ],
  },
};

module.exports = nextConfig;
