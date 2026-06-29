import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "Koushik",
    "Senior Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Software Engineer",
  ],

  authors: [{ name: "Koushik" }],
  creator: "Koushik",

  verification: {
    google: "6FaGTQZgyrSHGi-KxJVqC1qvJ4aQwKlek0X9uYKB9GA",
  },
  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Koushik | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, TypeScript and modern web applications.",
    url: siteConfig.url,
    siteName: "Koushik Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Koushik Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Koushik | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer specializing in React, Next.js and TypeScript.",
    images: ["/og-image.png"],
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
          <Toaster richColors position="top-right" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
