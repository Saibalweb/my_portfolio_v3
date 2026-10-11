import { ArrowUpRight, Clock3, Code2, UserRound, Mail, Phone } from "lucide-react";
import { navigation, profile } from "@/lib/portfolio";

export function SiteFooter() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-grid">
      <div className="footer-brand"><a className="wordmark" href="#home">Saibal<span>.</span></a><p>React Native & Full-Stack Developer building thoughtful mobile applications, web platforms, and reliable digital experiences.</p><span className="footer-availability"><span className="status-dot" />Available for freelance projects</span></div>
      <div><h3>Navigation</h3><nav aria-label="Footer navigation">{navigation.filter(item => !["Process", "Stack"].includes(item.label)).map(item => <a href={item.href} key={item.href}>{item.label}</a>)}</nav></div>
      <div><h3>Connect</h3><nav aria-label="Social links"><a href={profile.github} target="_blank" rel="noreferrer"><Code2 />GitHub <ArrowUpRight /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><UserRound />LinkedIn <ArrowUpRight /></a><a href={profile.twitter} target="_blank" rel="noreferrer">Twitter / X <ArrowUpRight /></a></nav></div>
      <div><h3>Direct Contact</h3><div className="footer-contact"><a href={"mailto:" + profile.email}><Mail />{profile.email}</a><a href={"tel:" + profile.phone}><Phone />{profile.phoneDisplay}</a><span><Clock3 />IST (UTC+5:30) · Kolkata, IN</span></div></div>
    </div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} Saibal Kole. Built with care and Next.js.</p><a href="#home">Back to top <ArrowUpRight /></a></div>
  </div></footer>;
}
