import { ArrowDown, ArrowUpRight, CalendarDays, Code2, Globe2, Layers, ShieldCheck, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container, IconBox, StatusDot } from "@/components/primitives";

const heroButton = "max-tablet:px-[17px] max-tablet:text-[13px] max-compact:h-11 max-compact:px-[15px] max-compact:text-[13px]";

export function Hero() {
  return <section id="home" className="w-full pt-[94px] pb-[88px] wide:pt-[120px] wide:pb-[110px] max-mobile:py-[68px] max-compact:pt-[46px] max-compact:pb-[56px]">
    <Container className="grid grid-cols-[1.45fr_1fr] items-center gap-20 wide:grid-cols-[1.4fr_1fr] wide:gap-[100px] max-tablet:grid-cols-[1.3fr_1fr] max-tablet:gap-[50px] max-mobile:grid-cols-[1.25fr_1fr] max-mobile:gap-[35px] max-compact:grid-cols-1 max-compact:gap-[52px]">
      <div className="max-w-[730px]">
        <Badge className="gap-[9px] rounded-full px-[13px] py-2 font-semibold tracking-[0.01em] max-compact:px-[11px] max-compact:py-[7px]"><StatusDot />Available for Freelance Projects</Badge>
        <p className="mt-6 flex flex-wrap gap-[10px] text-xs font-semibold uppercase tracking-[0.09em] text-muted-foreground max-tablet:gap-1.5 max-compact:mt-[23px] max-compact:gap-[7px]">Hi, I'm Saibal <span className="opacity-45">/</span> React Native &amp; Full-Stack Developer</p>
        <h1 className="mt-[17px] max-w-[700px] text-[clamp(44px,4vw,60px)] font-bold leading-[1.1] tracking-[-0.055em] wide:text-[68px] max-tablet:text-[46px] max-mobile:text-[40px] max-compact:mt-[15px] max-compact:max-w-[540px] max-compact:text-[clamp(37px,8.7vw,54px)] max-compact:leading-[1.12] max-compact:tracking-[-0.045em] max-tiny:text-[34px]">I Build Mobile Apps &amp; Custom Web Solutions<span className="text-cta-text">.</span></h1>
        <p className="mt-[25px] max-w-[610px] text-[17px] leading-[1.8] text-muted-foreground max-tablet:text-[15px] max-compact:mt-[22px]">I help startups, founders, and growing businesses turn ideas into reliable cross-platform mobile applications, fast MVPs, and custom web platforms — from intuitive interfaces to scalable backend infrastructure.</p>
        <div className="mt-[29px] flex flex-wrap gap-3 max-compact:mt-6 max-compact:gap-2.5 max-tiny:flex-col max-tiny:items-stretch">
          <Button asChild size="lg" variant="cta" className={heroButton}><a href="#contact">Let's Discuss Your Project <CalendarDays /></a></Button>
          <Button asChild size="lg" variant="outline" className={heroButton}><a href="#work">View My Work <ArrowDown /></a></Button>
        </div>
        <div className="mt-[30px] flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-semibold max-compact:mt-[25px] max-compact:gap-x-[9px] [&>span]:flex [&>span]:items-center [&>span]:gap-3 [&>span:not(:last-child)]:after:content-['·'] [&>span:not(:last-child)]:after:text-muted-foreground max-compact:[&>span]:gap-[9px]">{["React Native", "Next.js", "TypeScript", "Node.js", "MongoDB"].map(tech => <span key={tech}>{tech}</span>)}</div>
        <div className="mt-[30px] flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted-foreground max-compact:mt-[23px] max-compact:gap-2.5 [&_svg]:size-[15px] [&_svg]:text-primary [&_svg]:stroke-[1.7]"><span className="inline-flex items-center gap-[7px]"><Globe2 />Based in India · Serving Global Clients</span><span className="inline-flex items-center gap-[7px]"><ShieldCheck />Direct collaboration. Thoughtful delivery.</span></div>
      </div>
      <div className="relative w-full max-w-[440px] justify-self-end pb-2.5 wide:max-w-[480px] max-compact:mx-2.5 max-compact:w-[calc(100%-20px)] max-compact:max-w-[390px] max-compact:justify-self-center">
        <div className="rounded-[18px] border border-border bg-card p-3 shadow-[0_16px_35px_-18px_rgb(var(--shadow-color)_/_0.2)]">
          <div className="relative aspect-[1.06] overflow-hidden rounded-[11px] bg-portrait text-portrait-foreground max-mobile:aspect-[0.9] max-compact:aspect-[1.12]">
            <Badge className="absolute left-[15px] top-[15px] z-[1] gap-[9px] rounded-full bg-card text-[11px] text-foreground shadow-[0_2px_5px_rgb(var(--shadow-color)_/_0.04)] max-mobile:left-2.5 max-mobile:top-2.5 max-compact:left-[13px] max-compact:top-[13px]"><StatusDot />React Native Specialist</Badge>
            <div className="relative flex h-full flex-col justify-center px-[30px] pb-[44px] pt-[66px] max-tablet:px-6 max-mobile:px-5 max-compact:px-[30px] max-compact:pb-[34px] max-compact:pt-12 [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--portrait-foreground)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--portrait-foreground)_6%,transparent)_1px,transparent_1px)] [background-size:36px_36px]" aria-label="Saibal Kole developer monogram">
              <span className="self-end opacity-50 [&_svg]:size-[31px]"><Code2 /></span>
              <span className="font-heading text-[164px] font-bold leading-[1.05] tracking-[-16px] wide:text-[190px] max-tablet:text-[140px] max-mobile:text-[120px] max-mobile:tracking-[-12px] max-compact:text-[clamp(130px,35vw,160px)] max-compact:tracking-[-13px]">sk<span className="text-primary">.</span></span>
              <div className="mt-2.5 flex items-center justify-between max-mobile:mt-[17px] max-compact:mt-1.5"><span className="max-w-[120px] text-[10px] font-semibold leading-[1.7] tracking-[0.18em] max-compact:max-w-[110px]">DESIGN. DEVELOP. DELIVER.</span><ArrowUpRight className="size-[25px] stroke-1" /></div>
            </div>
            <div className="absolute bottom-[15px] right-4 flex gap-2.5 text-[10px] [&_svg]:size-3"><span className="flex items-center gap-1"><Smartphone /> Mobile</span><span className="flex items-center gap-1"><Layers /> Full-stack</span></div>
          </div>
          <div className="flex items-center justify-between gap-3.5 px-1.5 pb-2.5 pt-[18px] max-tablet:flex-wrap max-tablet:gap-2 max-compact:flex-nowrap"><div><h2 className="text-lg font-semibold tracking-[-0.5px] max-tablet:text-[17px] max-compact:text-lg">Saibal Kole</h2><p className="text-xs text-muted-foreground">Full-Stack &amp; Mobile Engineer</p></div><span className="flex items-center gap-[5px] whitespace-nowrap text-[11px] text-muted-foreground max-tiny:hidden"><span className="inline-block size-1 rounded-full bg-primary" /> Kolkata, India</span></div>
        </div>
        <div className="absolute -bottom-[14px] -left-6 flex items-center gap-2.5 rounded-[10px] border border-border bg-card px-4 py-3 shadow-[0_6px_15px_rgb(var(--shadow-color)_/_0.04)] max-tablet:left-[-15px] max-tablet:p-2.5 max-compact:-bottom-[9px] max-compact:-left-2.5"><IconBox size="platform"><Smartphone /></IconBox><div><strong className="block text-xs font-semibold">Built for every screen</strong><span className="block text-[11px] text-muted-foreground">iOS · Android · Web</span></div></div>
      </div>
    </Container>
  </section>;
}
