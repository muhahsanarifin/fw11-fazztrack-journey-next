/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: "custom-value",
  },
  basePath: "/app",
  rewrites: async () => {
    return [
      {
        source: "/ssr", // endpoint yang di hit user
        destination: "/rendering/ssr", // endpoint yang sebenarnya
      },
      {
        source: "/register",
        destination: "/",
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/", // endpoint yang di hit user
        destination: "/users/login", // endpoint tujuan redirect
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
