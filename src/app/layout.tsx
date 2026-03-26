import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Paperplane | 24x7 AI Clinic Infrastructure for Doctors",
  description:
    "Paperplane runs your clinic 24×7. Capture every patient, automate follow-ups, and never miss a consultation.",
  metadataBase: new URL("https://ppclinics.com"),
  openGraph: {
    title: "Paperplane | 24x7 AI Clinic Infrastructure",
    description:
      "Capture every patient, automate follow-ups, and never miss a consultation. Built for real clinics in India.",
    type: "website",
    url: "https://ppclinics.com/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#04110d",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#04110d] text-white font-[var(--font-inter)] antialiased overflow-x-hidden">
        <Analytics />
        <ScrollProgress />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
