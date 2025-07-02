import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ugochukwu Paul | Web Developer",
  description: "Experienced Web Developer specializing in web development, cloud engineering, and system design. Building robust and scalable solutions with modern technologies.",
  keywords: [
    "web developer",
    "web developer",
    "cloud engineer",
    "system design",
    "Node.js",
    "TypeScript",
    "AWS",
    "database design",
    "API development",
    "Ugochukwu Paul"
  ],
  authors: [{ name: "Ugochukwu Paul" }],
  creator: "Ugochukwu Paul",
  publisher: "Ugochukwu Paul",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Ugochukwu Paul - Web Developer",
    title: "Ugochukwu Paul | Web Developer",
    description: "Experienced Web Developer specializing in web development, cloud engineering, and system design.",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Ugochukwu Paul - Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ugochukwu Paul | Web Developer",
    description: "Experienced Web Developer specializing in web development, cloud engineering, and system design.",
    images: ["/profile.jpeg"],
    creator: "@your-twitter-handle",
  },
  icons: {
    icon: "/profile.jpeg",
    shortcut: "/profile.jpeg",
    apple: "/profile.jpeg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/profile.jpeg",
    },
  },

  verification: {
    google: "your-google-verification-code", // Add this when you have it
  },
  alternates: {
    canonical: "https://your-domain.com",
  },
  metadataBase: new URL('https://your-domain.com'),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="theme-color" content="#5b78e5" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
