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
    "Paul Ambrose",
    "Ikegbulam Ugochukwu Paul"
  ],
  authors: [{ name: "Paul Ambrose" }],
  creator: "Paul Ambrose",
  publisher: "Paul Ambrose",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Paul Ambrose - Fullstack Developer",
    title: "Paul Ambrose | Fullstack Developer",
    description: "Fullstack Developer building scalable web applications — frontend and backend.",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Paul Ambrose - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Ambrose | Fullstack Developer",
    description: "Fullstack Developer building scalable web applications — frontend and backend.",
    images: ["/profile.jpeg"],
  },
  icons: {
    icon: "/profile.jpeg",
    shortcut: "/profile.jpeg",
    apple: "/profile.jpeg",
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
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
