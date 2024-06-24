/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "handover-developer-profile-files.s3.amazonaws.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
