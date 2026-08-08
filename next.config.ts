import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // There's no real "home page" yet — send / straight to the portfolio.
  // `permanent: false` (a 307) so this is easy to change later; a 308
  // would get cached by browsers as a permanent redirect.
  async redirects() {
    return [{ source: "/", destination: "/projects", permanent: false }];
  },
};

export default nextConfig;
