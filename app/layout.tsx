import type { Metadata } from "next";
import Script from "next/script"; 
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nestora | Premium Renovation & Tech",
  description: "Premium renovation, smart home, and security solutions in Vancouver.",
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

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-Y5KZ8TZXYW"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-Y5KZ8TZXYW');
    `}
  </Script>
</body>
    </html>
  );
}