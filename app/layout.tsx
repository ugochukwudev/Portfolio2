import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

// TODO: point this at the real deployed domain (or set NEXT_PUBLIC_SITE_URL).
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com";

export const metadata: Metadata = {
  title: "Ikegbulam Ugochukwu Paul | Fullstack Developer",
  description: "Fullstack Developer, Technical Writer, and Community Leader — building scalable web applications front to back with React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "fullstack developer",
    "software engineer",
    "web developer",
    "React developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Ikegbulam Ugochukwu Paul"
  ],
  authors: [{ name: "Ikegbulam Ugochukwu Paul" }],
  creator: "Ikegbulam Ugochukwu Paul",
  publisher: "Ikegbulam Ugochukwu Paul",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Ikegbulam Ugochukwu Paul - Fullstack Developer",
    title: "Ikegbulam Ugochukwu Paul | Fullstack Developer",
    description: "Fullstack Developer building scalable web applications — frontend and backend.",
    images: [
      {
        url: "/profile.jpeg",
        width: 980,
        height: 988,
        alt: "Ikegbulam Ugochukwu Paul - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ikegbulam Ugochukwu Paul | Fullstack Developer",
    description: "Fullstack Developer building scalable web applications — frontend and backend.",
    images: ["/profile.jpeg"],
  },
  icons: {
    icon: "/profile.jpeg",
    shortcut: "/profile.jpeg",
    apple: "/profile.jpeg",
  },
  alternates: {
    canonical: SITE_URL,
  },
  metadataBase: new URL(SITE_URL),
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
        <meta name="theme-color" content="#eae5db" />
      </head>
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
