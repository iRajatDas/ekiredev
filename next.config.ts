import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // redirect to / to /dashboard
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
