"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ArrowUpRight, Menu, Moon, Sun } from "lucide-react";
import { navigation } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -65% 0px" });
    document.querySelectorAll("main section[id]").forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <header className="site-header">
    <div className="container header-inner">
      <a className="wordmark" href="#home" aria-label="Saibal home">Saibal<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map(item => <a key={item.href} href={item.href} aria-current={active === item.href.slice(1) ? "location" : undefined}>{item.label}</a>)}
      </nav>
      <div className="header-actions">
        <Button asChild size="sm" className="header-contact"><a href="#contact">Let's Talk <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
          {mounted && resolvedTheme === "dark" ? <Sun /> : <Moon />}
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button variant="outline" size="icon" className="mobile-menu-button" aria-label="Open navigation"><Menu /></Button></DialogTrigger>
          <DialogContent className="mobile-navigation">
            <DialogTitle className="wordmark">Saibal<span>.</span></DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">Explore my work and get in touch.</DialogDescription>
            <nav aria-label="Mobile navigation">{navigation.map(item => <DialogPrimitive.Close key={item.href} asChild><a href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight className="size-4" /></a></DialogPrimitive.Close>)}</nav>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  </header>;
}
