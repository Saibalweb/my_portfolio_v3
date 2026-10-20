import Link from "next/link";
import { ArrowUpRight, Clock3, Code2, UserRound, Mail, Phone } from "lucide-react";
import { navigation, profile } from "@/lib/portfolio";
import { Container, Wordmark } from "@/components/primitives";

const footerLink = "flex items-center gap-[7px] hover:text-primary [&_svg]:size-[13px] [&_svg]:shrink-0";

export function SiteFooter() {
  return <footer className="bg-card pt-[62px] max-compact:pt-[42px]"><Container>
    <div className="grid grid-cols-[1.5fr_0.7fr_0.7fr_1.05fr] gap-[52px] pb-[45px] max-tablet:gap-[30px] max-mobile:grid-cols-[1.5fr_1fr_1fr] max-mobile:gap-[35px] max-compact:grid-cols-2 max-compact:gap-[30px] max-compact:pb-[30px]">
      <div className="max-mobile:col-span-full max-mobile:flex max-mobile:flex-wrap max-mobile:items-center max-mobile:gap-x-10 max-mobile:gap-y-5 max-compact:block">
        <Link href="/#home"><Wordmark /></Link>
        <p className="mt-[18px] max-w-[310px] text-[13px] leading-[1.8] text-muted-foreground max-mobile:mt-0 max-mobile:max-w-[340px] max-compact:mt-4 max-compact:max-w-[360px]">React Native &amp; Full-Stack Developer building thoughtful mobile applications, web platforms, and reliable digital experiences.</p>
        <span className="mt-4 inline-flex items-center gap-[7px] rounded-full bg-accent px-2 py-1 text-xs text-primary max-mobile:mt-0 max-compact:mt-[15px]"><span className="inline-block size-1 rounded-full bg-primary" />Available for freelance projects</span>
      </div>
      <div><h3 className="mb-[15px] text-xs font-semibold uppercase tracking-[0.06em]">Navigation</h3><nav className="flex flex-col gap-[9px] text-[13px] text-muted-foreground" aria-label="Footer navigation">{navigation.map(item => <Link href={item.href} key={item.href} className={footerLink}>{item.label}</Link>)}</nav></div>
      <div><h3 className="mb-[15px] text-xs font-semibold uppercase tracking-[0.06em]">Connect</h3><nav className="flex flex-col gap-[9px] text-[13px] text-muted-foreground" aria-label="Social links"><a href={profile.github} target="_blank" rel="noreferrer" className={footerLink}><Code2 />GitHub <ArrowUpRight /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className={footerLink}><UserRound />LinkedIn <ArrowUpRight /></a><a href={profile.twitter} target="_blank" rel="noreferrer" className={footerLink}>Twitter / X <ArrowUpRight /></a></nav></div>
      <div className="max-compact:col-span-full"><h3 className="mb-[15px] text-xs font-semibold uppercase tracking-[0.06em]">Direct Contact</h3><div className="flex flex-col gap-[9px] text-[13px] text-muted-foreground max-compact:flex-row max-compact:flex-wrap max-compact:gap-x-[25px] max-compact:gap-y-3"><a href={"mailto:" + profile.email} className={footerLink}><Mail className="text-primary" />{profile.email}</a><a href={"tel:" + profile.phone} className={footerLink}><Phone className="text-primary" />{profile.phoneDisplay}</a><span className={footerLink}><Clock3 className="text-primary" />IST (UTC+5:30) · Kolkata, IN</span></div></div>
    </div>
    <div className="flex items-center justify-between gap-5 border-t border-border py-6 text-xs text-muted-foreground max-compact:flex-col max-compact:items-start max-compact:gap-3 max-compact:py-[22px]"><p>© {new Date().getFullYear()} Saibal Kole. Built with care and Next.js.</p><Link href="/#home" className="inline-flex items-center gap-[5px] [&_svg]:size-[13px]">Back to top <ArrowUpRight /></Link></div>
  </Container></footer>;
}
