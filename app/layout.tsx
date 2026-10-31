import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { meta } from "@/content/site";
import { BottomNav } from "@/components/BottomNav";
import { TopBrand } from "@/components/TopBrand";
import { FloatingMark } from "@/components/FloatingMark";
import { WaitlistSection } from "@/components/WaitlistSection";
import { Footer } from "@/components/Footer";
import { ScrollLockAtBottom } from "@/components/ScrollLockAtBottom";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  // TODO: swap for the real production domain once boardlytics.com is live.
  metadataBase: new URL("https://boardlytics-website.vercel.app"),
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <TopBrand />
        <FloatingMark />
        <main className="flex-1">{children}</main>
        <WaitlistSection />
        <Footer />
        <BottomNav />
        <ScrollLockAtBottom />
      </body>
    </html>
  );
}
