import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ha Anna | Software Engineer · Computer Vision & ML",
  description:
    "Ha Anna is a software engineer and Computer Science & Engineering student at Sogang University in Seoul, with professional product development experience and a current focus on computer vision and machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-E6T1ZXKRY0"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E6T1ZXKRY0');
        `}
      </Script>
    </html>
  );
}