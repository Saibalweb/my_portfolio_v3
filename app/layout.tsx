import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saibal.dev"),
  title: "Saibal Kole — Freelance Mobile & Full-Stack Developer",
  description: "Freelance React Native and full-stack developer based in India. Thoughtful mobile applications, Next.js web platforms, and reliable backend systems.",
  openGraph: { title: "Saibal Kole — Mobile & Full-Stack Developer", description: "From idea to launch. React Native apps, Next.js platforms, and practical engineering.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader />{children}<SiteFooter /></ThemeProvider></body></html>;
}
