"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ArrowUpRight, Menu, Moon, Sun } from "lucide-react";
import { navigation } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

function isActive(href: string, pathname: string, section: string) {
  if (href.startsWith("/#")) return pathname === "/" && section === href.slice(2);
  return pathname === href || pathname.startsWith(href + "/");
}

export function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -65% 0px" });
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return <header className="site-header">
    <div className="container header-inner">
      <Link className="wordmark" href="/#home" aria-label="Saibal home">Saibal<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(item => <Link key={item.href} href={item.href} aria-current={isActive(item.href, pathname, active) ? "page" : undefined}>{item.label}</Link>)}
      </nav>
      <div className="header-actions">
        <Button asChild size="sm" variant="cta" className="header-contact"><Link href="/#contact">Let's Talk <ArrowUpRight /></Link></Button>
        <Button variant="ghost" size="icon" aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
          {mounted && resolvedTheme === "dark" ? <Sun /> : <Moon />}
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button variant="outline" size="icon" className="mobile-menu-button" aria-label="Open navigation"><Menu /></Button></DialogTrigger>
          <DialogContent className="mobile-navigation">
            <DialogTitle className="wordmark">Saibal<span>.</span></DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">Explore my work and get in touch.</DialogDescription>
            <nav aria-label="Mobile navigation">{navigation.map(item => <DialogPrimitive.Close key={item.href} asChild><Link href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight className="size-4" /></Link></DialogPrimitive.Close>)}</nav>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  </header>;
}
