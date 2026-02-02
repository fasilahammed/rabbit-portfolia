import type { Metadata } from "next";
import { Geist, Geist_Mono, Silkscreen } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  weight: "400",
  variable: "--font-pixel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FASIL | Developer & Architect",
  description: "Portfolio of Fasil Ahammed KM - Inspired by Fantik Studio aesthetic",
};

import { Preloader } from "@/components/preloader";
import { RabbitCursor } from "@/components/rabbit-cursor";

import { ScrollNav } from "@/components/scroll-nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${silkscreen.variable} antialiased selection:bg-white selection:text-black noise cursor-none`}
      >
        <Preloader />
        <RabbitCursor />
        <ScrollNav />
        {children}
      </body>
    </html>
  );
}
