/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "i.pinimg.com",
      "cdn-icons-png.flaticon.com",
      "",
    ],
  },
};

module.exports = nextConfig;
