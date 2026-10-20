"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ArrowUpRight, Menu, Moon, Sun } from "lucide-react";
import { navigation } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Wordmark, Container } from "@/components/primitives";
import * as DialogPrimitive from "@radix-ui/react-dialog";

function isActive(href: string, pathname: string, section: string) {
  if (href.startsWith("/#")) return pathname === "/" && section === href.slice(2);
  return pathname === href || pathname.startsWith(href + "/");
}

const navLink = "font-heading text-sm font-medium tracking-[-0.005em] text-muted-foreground transition-colors hover:text-primary aria-[current=page]:font-semibold aria-[current=page]:text-primary";

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

  return <header className="sticky top-0 z-40 w-full border-b border-border bg-surface/92 backdrop-blur-[16px]">
    <Container className="flex h-[76px] items-center justify-between gap-[30px] max-tablet:gap-5 max-compact:h-[66px] max-compact:gap-3">
      <Link href="/#home" aria-label="Saibal home"><Wordmark /></Link>
      <nav className="flex items-center gap-[26px] max-tablet:gap-[17px] max-mobile:hidden" aria-label="Main navigation">
        {navigation.map(item => <Link key={item.href} href={item.href} aria-current={isActive(item.href, pathname, active) ? "page" : undefined} className={navLink + " max-tablet:text-[13px]"}>{item.label}</Link>)}
      </nav>
      <div className="flex items-center gap-3 max-tablet:gap-[5px] max-compact:gap-[5px]">
        <Button asChild size="sm" variant="cta" className="max-compact:h-[33px] max-compact:px-3 max-compact:text-xs max-compact:[&_svg]:size-[13px]"><Link href="/#contact">Let's Talk <ArrowUpRight /></Link></Button>
        <Button variant="ghost" size="icon" className="max-compact:size-[34px]" aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"} onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
          {mounted && resolvedTheme === "dark" ? <Sun /> : <Moon />}
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button variant="outline" size="icon" className="hidden max-mobile:inline-flex max-compact:size-[34px]" aria-label="Open navigation"><Menu /></Button></DialogTrigger>
          <DialogContent>
            <DialogTitle><Wordmark /></DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">Explore my work and get in touch.</DialogDescription>
            <nav className="grid gap-[3px]" aria-label="Mobile navigation">{navigation.map(item => <DialogPrimitive.Close key={item.href} asChild><Link href={item.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-border px-1.5 py-3.5 font-heading text-base font-medium">{item.label}<ArrowUpRight className="size-4" /></Link></DialogPrimitive.Close>)}</nav>
          </DialogContent>
        </Dialog>
      </div>
    </Container>
  </header>;
}
