import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vkoushik.com"),

  title: {
    default: "Koushik | Senior Frontend Engineer",
    template: "%s | Koushik",
  },

  description:
    "Senior Frontend Engineer specializing in React, Next.js, TypeScript, and modern web applications.",

  keywords: [
    "Koushik",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Engineer",
    "Software Engineer",
    "Portfolio",
  ],

  authors: [{ name: "Koushik" }],
  creator: "Koushik",

  openGraph: {
    title: "Koushik Portfolio",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, and TypeScript.",
    url: "https://vkoushik.com",
    siteName: "Koushik Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Koushik Portfolio",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, and TypeScript.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}