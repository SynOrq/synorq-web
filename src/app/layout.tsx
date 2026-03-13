import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Synorq — Operasyonel Zeka Platformu",
  description:
    "Synorq, iş operasyonlarını ve AI destekli süreçleri tek merkezden yöneten yeni nesil bir B2B SaaS ve yazılım markasıdır.",
  keywords: ["Synorq", "SaaS", "operasyon yönetimi", "proje yönetimi", "AI iş akışı", "KOBİ"],
  authors: [{ name: "Synorq" }],
  openGraph: {
    title: "Synorq — Operasyonel Zeka Platformu",
    description:
      "Synorq, iş operasyonlarını ve AI destekli süreçleri tek merkezden yöneten yeni nesil bir B2B SaaS ve yazılım markasıdır.",
    url: "https://synorq.com",
    siteName: "Synorq",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
