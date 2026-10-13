import { ArrowDown, ArrowUpRight, CalendarDays, Code2, Globe2, Layers, ShieldCheck, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return <section id="home" className="hero">
    <div className="container hero-grid">
      <div className="hero-copy">
        <Badge className="availability"><span className="status-dot" />Available for Freelance Projects</Badge>
        <p className="hero-kicker">Hi, I'm Saibal <span>/</span> React Native & Full-Stack Developer</p>
        <h1>I Build Mobile Apps & Custom Web Solutions<span className="text-cta-text">.</span></h1>
        <p className="hero-description">I help startups, founders, and growing businesses turn ideas into reliable cross-platform mobile applications, fast MVPs, and custom web platforms — from intuitive interfaces to scalable backend infrastructure.</p>
        <div className="hero-actions">
          <Button asChild size="lg" variant="cta"><a href="#contact">Let's Discuss Your Project <CalendarDays /></a></Button>
          <Button asChild size="lg" variant="outline"><a href="#work">View My Work <ArrowDown /></a></Button>
        </div>
        <div className="hero-stack">{["React Native", "Next.js", "TypeScript", "Node.js", "MongoDB"].map(tech => <span key={tech}>{tech}</span>)}</div>
        <div className="hero-trust"><span><Globe2 />Based in India · Serving Global Clients</span><span><ShieldCheck />Direct collaboration. Thoughtful delivery.</span></div>
      </div>
      <div className="profile-wrap">
        <div className="profile-card">
          <div className="profile-visual">
            <Badge className="profile-specialty"><span className="status-dot" />React Native Specialist</Badge>
            <div className="profile-art" aria-label="Saibal Kole developer monogram">
              <span className="profile-code"><Code2 /></span>
              <span className="monogram">sk<span>.</span></span>
              <div className="profile-art-label"><span>DESIGN. DEVELOP. DELIVER.</span><ArrowUpRight /></div>
            </div>
            <div className="profile-platforms"><span><Smartphone /> Mobile</span><span><Layers /> Full-stack</span></div>
          </div>
          <div className="profile-caption"><div><h2>Saibal Kole</h2><p>Full-Stack & Mobile Engineer</p></div><span className="profile-location"><span className="status-dot" /> Kolkata, India</span></div>
        </div>
        <div className="platform-note"><span className="icon-box"><Smartphone /></span><div><strong>Built for every screen</strong><span>iOS · Android · Web</span></div></div>
      </div>
    </div>
  </section>;
}
