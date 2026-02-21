import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Van Leer Consulting | AI Strategy & Implementation",
  description:
    "We help businesses implement AI systems that drive measurable results. Strategy, automation, and custom AI solutions for operations-driven companies.",
  openGraph: {
    title: "Van Leer Consulting | AI Strategy & Implementation",
    description:
      "We help businesses implement AI systems that drive measurable results.",
    url: "https://vanleer.us",
    siteName: "Van Leer Consulting",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
