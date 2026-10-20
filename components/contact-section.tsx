"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Clock3, Copy, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { SectionHeading } from "@/components/section-heading";
import { Container, Section, IconBox, textLinkClass } from "@/components/primitives";
import { profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

const scopes = ["Mobile App", "Web Platform", "MVP from Scratch", "App Maintenance"];
const budgets = ["$1,000 – $3,000 USD", "$3,000 – $6,000 USD", "$6,000 – $12,000 USD", "$12,000+ USD", "Let's discuss"];
const timelines = ["As soon as possible", "Within 1 month", "2 – 3 months", "Flexible / Exploring"];

export function ContactSection() {
  const [scope, setScope] = useState("Mobile App");
  const [budget, setBudget] = useState(budgets[1]);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [prepared, setPrepared] = useState(false);
  const [draftUrl, setDraftUrl] = useState("");
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setCopyError(false); window.setTimeout(() => setCopied(false), 2500); }
    catch { setCopyError(true); }
  }
  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = scope + " project inquiry from " + String(form.get("name"));
    const body = ["Hi Saibal,", "", String(form.get("overview")), "", "Project type: " + scope, "Budget: " + budget, "Target launch: " + timeline, "", "Name: " + String(form.get("name")), "Reply to: " + String(form.get("email"))].join("\n");
    const url = "mailto:" + profile.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    setDraftUrl(url);
    setPrepared(true);
    window.location.href = url;
  }
  return <Section id="contact" surface><Container>
    <SectionHeading eyebrow="Start a Conversation" title={<>Have a Project in Mind? <span className="text-cta-text">Let's Build It.</span></>} description="Whether you're validating an MVP, building a React Native mobile app, or upgrading your web platform — let's talk scope and schedule." />
    <div className="grid grid-cols-[0.85fr_1.4fr] gap-10 max-tablet:grid-cols-[0.9fr_1.3fr] max-tablet:gap-7 max-mobile:grid-cols-1 max-mobile:gap-7">
      <div className="flex flex-col gap-4 max-mobile:grid max-mobile:grid-cols-2 max-mobile:gap-4 max-compact:grid-cols-1">
        <Card className="relative flex items-start gap-3.5 bg-background p-[22px] shadow-none max-tablet:gap-2.5 max-tablet:p-[20px_16px] max-mobile:p-[22px]"><IconBox><Mail /></IconBox><div className="min-w-0"><span className="block text-xs text-muted-foreground">Direct email</span><a className="mt-[3px] block text-[17px] font-semibold leading-[1.5] tracking-[-0.3px] [overflow-wrap:anywhere] hover:text-primary max-tablet:text-[16px] max-compact:text-[17px]" href={"mailto:" + profile.email}>{profile.email}</a><p className="mt-[5px] text-xs leading-[1.7] text-muted-foreground">Tell me a little about your project.</p></div><Button size="icon" variant="ghost" className="absolute right-2 top-2 size-[26px] text-muted-foreground [&_svg]:size-3" aria-label={copied ? "Email copied" : "Copy email address"} onClick={copyEmail}>{copied ? <Check /> : <Copy />}</Button></Card>
        <span className="sr-only" aria-live="polite">{copied ? "Email address copied to clipboard." : copyError ? "Could not copy. The email address is displayed above." : ""}</span>
        <Card className="relative flex items-start gap-3.5 bg-background p-[22px] shadow-none max-tablet:gap-2.5 max-tablet:p-[20px_16px] max-mobile:p-[22px]"><IconBox><Phone /></IconBox><div className="min-w-0"><span className="block text-xs text-muted-foreground">Phone &amp; WhatsApp</span><a className="mt-[3px] block text-[17px] font-semibold leading-[1.5] tracking-[-0.3px] [overflow-wrap:anywhere] hover:text-primary max-tablet:text-[16px] max-compact:text-[17px]" href={"tel:" + profile.phone}>{profile.phoneDisplay}</a><a className="mt-[5px] inline-flex items-center gap-1 text-xs leading-[1.7] text-muted-foreground hover:text-primary [&_svg]:size-[11px]" href={"https://wa.me/" + profile.phone.slice(1)} target="_blank" rel="noreferrer">Start a WhatsApp conversation <ArrowUpRight /></a></div></Card>
        <Card className="relative flex items-start gap-3.5 bg-background p-[22px] shadow-none max-tablet:gap-2.5 max-tablet:p-[20px_16px] max-mobile:p-[22px]"><IconBox><Clock3 /></IconBox><div className="min-w-0"><span className="block text-xs text-muted-foreground">Timezone &amp; availability</span><span className="mt-[3px] block text-[17px] font-semibold leading-[1.5] tracking-[-0.3px] [overflow-wrap:anywhere] max-tablet:text-[16px] max-compact:text-[17px]">IST (UTC+5:30)</span><p className="mt-[5px] text-xs leading-[1.7] text-muted-foreground">Based in Kolkata, India. Flexible overlap with your business hours.</p></div></Card>
        <div className="mt-1 rounded-[14px] bg-accent p-[25px] max-tablet:mt-0 max-tablet:p-[22px] max-mobile:p-6"><span className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-primary">A direct partnership</span><h3 className="mt-2 text-xl font-semibold leading-[1.35] tracking-[-0.5px] max-tablet:text-[18px] max-mobile:text-[21px]">Your idea. <span className="text-cta-text">One dedicated developer.</span></h3><p className="mt-2.5 text-[13px] leading-[1.8] text-muted-foreground">From the first conversation to the final handover, you'll work directly with the person building your product.</p><a className={cn(textLinkClass, "mt-4 text-xs")} href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight /></a></div>
      </div>
      <Card className="self-start bg-background p-[34px] shadow-none max-tablet:p-[26px] max-mobile:p-8 max-compact:p-[25px_20px]">
        <div className="mb-7 flex items-center gap-3"><IconBox size="sm"><Send /></IconBox><div><h3 className="text-xl font-semibold tracking-[-0.5px] max-compact:text-xl">Project Inquiry</h3><p className="text-xs text-muted-foreground">Tell me about your vision and key requirements.</p></div></div>
        <form onSubmit={submitInquiry} className="grid gap-[22px] max-compact:gap-5">
          <fieldset><legend className="mb-2 text-[13px] font-medium">What are you looking to build?</legend><ToggleGroup type="single" value={scope} onValueChange={value => { if(value) setScope(value); }} aria-label="Project type">{scopes.map(item => <ToggleGroupItem key={item} value={item} className="max-compact:px-2.5 max-compact:py-2">{item}</ToggleGroupItem>)}</ToggleGroup></fieldset>
          <div className="grid grid-cols-2 gap-[17px] max-compact:grid-cols-1 max-compact:gap-[18px]"><div><Label htmlFor="client-name">Your name</Label><Input id="client-name" name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} /></div><div><Label htmlFor="client-email">Work email</Label><Input id="client-email" name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={254} /></div></div>
          <div><Label htmlFor="project-overview">Project overview &amp; goals</Label><Textarea id="project-overview" name="overview" placeholder="What are you building? Tell me about your idea, requirements, and what success looks like..." rows={5} required minLength={20} maxLength={4000} /></div>
          <div className="grid grid-cols-2 gap-[17px] max-compact:grid-cols-1 max-compact:gap-[18px]"><div><Label htmlFor="budget">Estimated budget</Label><Select value={budget} onValueChange={setBudget}><SelectTrigger id="budget"><SelectValue /></SelectTrigger><SelectContent>{budgets.map(item => <SelectItem value={item} key={item}>{item}</SelectItem>)}</SelectContent></Select></div><div><Label htmlFor="timeline">Target launch</Label><Select value={timeline} onValueChange={setTimeline}><SelectTrigger id="timeline"><SelectValue /></SelectTrigger><SelectContent>{timelines.map(item => <SelectItem value={item} key={item}>{item}</SelectItem>)}</SelectContent></Select></div></div>
          <div className="flex flex-col items-start gap-3"><Button size="lg" variant="cta" type="submit" className="max-compact:w-full max-compact:text-sm">Prepare Project Inquiry <ArrowUpRight /></Button><p className="text-xs text-muted-foreground">Opens a draft in your email app. Review and send when ready.</p></div>
          {prepared && <div role="status" className="flex items-start gap-2 rounded-lg border border-primary bg-accent p-3 text-xs text-accent-foreground"><Check className="size-4 shrink-0" /><div>Your inquiry is ready in your email app. It hasn't been sent yet. <a href={draftUrl} className="underline">Open the draft again</a>.</div></div>}
        </form>
      </Card>
    </div>
  </Container></Section>;
}
