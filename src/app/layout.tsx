import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "Koushik",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Engineer",
    "Software Engineer",
    "Portfolio",
  ],
  metadataBase: new URL(siteConfig.url),

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
