import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nestora | Premium Renovation & Tech",
  description:
    "Premium renovation, smart home, and security camera services in Vancouver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <SiteFooter />

        <GoogleAnalytics gaId="G-Y5KZ8T7ZYW" />
      </body>
    </html>
  );
}