import type { NextConfig } from "next";

// ── HTTP security headers applied to every response ───────────────────────────
const securityHeaders = [
  // Prevent DNS prefetch leaking visited sub-resources
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Block the site from being iframed by any origin (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers guessing MIME types for scripts/styles
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only send the origin as the Referer on cross-origin requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable sensitive browser features that the portfolio doesn't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()",
  },
  // Force HTTPS for 2 years (only active when deployed on HTTPS)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
  // Content Security Policy
  // - unsafe-eval / unsafe-inline are required by GSAP and Three.js
  // - cdn.jsdelivr.net hosts devicon images used in the skills section
  // - images.unsplash.com hosts menu item preview photos
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://cdn.jsdelivr.net https://images.unsplash.com",
      // blob: is required for Three.js ImageBitmapLoader, which calls fetch()
      // on blob: URLs it creates internally when extracting textures from GLB files
      "connect-src 'self' blob:",
      "worker-src 'self' blob:",
      "frame-ancestors 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  /* Strip the X-Powered-By header — minor hardening + saves a few bytes */
  poweredByHeader: false,

  /*
    Tell the Next.js bundler to tree-shake these packages at the named-export
    level. Reduces the JS sent to the browser for packages with many exports
    where only a subset is used (e.g. lucide-react icons, framer-motion hooks).
  */
  experimental: {
    optimizePackageImports: ["motion", "lucide-react", "@react-three/drei"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
    ],
  },

  async headers() {
    return [
      {
        // Apply security headers to every route
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
