import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/layout/SmoothScroll";
import Cursor from "./components/layout/Cursor";
import Navbar from "./components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  title: {
    default: "Fayaz Mehdi",
    template: "%s | Fayaz Mehdi",
  },
  description:
    "CS undergraduate at Osmania University specialising in AI, ML, and interactive web systems. Building 3D web experiences, React applications, and Python-driven ML pipelines.",
  keywords: [
    "Syed Fayaz Mehdi",
    "Fayaz",
    "portfolio",
    "CS engineer",
    "React developer",
    "Three.js",
    "Machine Learning",
    "interactive web",
    "Hyderabad",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Syed Fayaz Mehdi" }],
  creator: "Syed Fayaz Mehdi",
  metadataBase: new URL("https://fayaz.engineering"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fayaz.engineering",
    siteName: "Syed Fayaz Mehdi",
    title: "Syed Fayaz Mehdi — CS Engineer & Interactive Web Developer",
    description:
      "CS undergraduate specialising in AI, ML, and interactive web systems. 3D web, React, Python.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Fayaz Mehdi — CS Engineer & Interactive Web Developer",
    description:
      "CS undergraduate specialising in AI, ML, and interactive web systems. 3D web, React, Python.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,300;0,400;0,700;1,300;1,400&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <Navbar />
        {children}
        <Cursor />
      </body>
    </html>
  );
}
