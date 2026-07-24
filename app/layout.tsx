import type { Metadata } from "next";
import { Tajawal, IBM_Plex_Sans_Arabic } from "next/font/google";
import { site } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const display = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "مؤسسة الخيارات الذكية الطبية | تجهيز عيادات الأسنان",
    template: "%s | مؤسسة الخيارات الذكية الطبية",
  },
  description: site.description,
  keywords: [
    "تجهيز عيادات الأسنان",
    "زراعة الأسنان",
    "تبييض الأسنان",
    "أجهزة طب الأسنان",
    "ASTRA TECH",
    "Flash Whitening",
    "السعودية",
  ],
  openGraph: {
    title: "مؤسسة الخيارات الذكية الطبية",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ar_SA",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
  icons: [
    {
      rel: "icon",
      url: "/smo-icon-square.png",
      type: "image/png",
      sizes: "331x331",
    },
    {
      rel: "shortcut icon",
      url: "/smo-icon-square.png",
      type: "image/png",
      sizes: "331x331",
    },
    {
      rel: "apple-touch-icon",
      url: "/smo-icon-square.png",
      type: "image/png",
      sizes: "331x331",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${display.variable} ${body.variable}`}
    >
      <body className="font-body antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
