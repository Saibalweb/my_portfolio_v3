import type { Metadata } from "next";
import { Geist, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saibal.dev"),
  title: "Saibal Kole — Freelance Mobile & Full-Stack Developer",
  description: "Freelance React Native and full-stack developer based in India. Thoughtful mobile applications, Next.js web platforms, and reliable backend systems.",
  openGraph: { title: "Saibal Kole — Mobile & Full-Stack Developer", description: "From idea to launch. React Native apps, Next.js platforms, and practical engineering.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`}><body><ThemeProvider><a className="fixed -top-20 left-4 z-[100] rounded-lg bg-primary px-5 py-3 text-primary-foreground focus:top-3" href="#main-content">Skip to content</a><SiteHeader />{children}<SiteFooter /></ThemeProvider></body></html>;
}
