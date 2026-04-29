import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Brainstorm Web — We Build Digital Products That Work",
  description:
    "Websites, web apps, mobile apps, desktop software & AI solutions — built fast, built right, at an affordable cost for local and international clients.",
  keywords: "web development, mobile app, AI automation, chatbot, software company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`} suppressHydrationWarning>
      <body className="bg-bg text-txt font-sans antialiased">{children}</body>
    </html>
  );
}
