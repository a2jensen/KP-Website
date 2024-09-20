import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import  "./globals.css";
import Nav from "@/components/nav/nav";
import Footer from "@/components/footer/footer"
import Head from "next/head";
const outfit = Outfit({ subsets: ['latin'], weight: ['100', '400', '700', '900'] });

export const metadata: Metadata = {
  title: "KP at UCSD",
  description: "Official Website for Kaibigang Filipino Org at UCSD!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  );
}
