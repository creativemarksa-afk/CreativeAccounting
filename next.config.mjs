/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // allows any path on this host
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
      {
  protocol: 'https',
  hostname: 'res.cloudinary.com',
  pathname: '/**',
},

    ],
  },
};

export default nextConfig;
