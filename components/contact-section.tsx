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
import { profile } from "@/lib/portfolio";

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
  return <section id="contact" className="section section-surface contact-section"><div className="container">
    <SectionHeading eyebrow="Start a Conversation" title="Have a Project in Mind? Let's Build It." description="Whether you're validating an MVP, building a React Native mobile app, or upgrading your web platform — let's talk scope and schedule." />
    <div className="contact-grid">
      <div className="contact-details">
        <Card className="contact-card"><span className="icon-box"><Mail /></span><div><span className="contact-label">Direct email</span><a className="contact-value" href={"mailto:" + profile.email}>{profile.email}</a><p>Tell me a little about your project.</p></div><Button size="icon" variant="ghost" className="copy-email" aria-label={copied ? "Email copied" : "Copy email address"} onClick={copyEmail}>{copied ? <Check /> : <Copy />}</Button></Card>
        <span className="sr-only" aria-live="polite">{copied ? "Email address copied to clipboard." : copyError ? "Could not copy. The email address is displayed above." : ""}</span>
        <Card className="contact-card"><span className="icon-box"><Phone /></span><div><span className="contact-label">Phone & WhatsApp</span><a className="contact-value" href={"tel:" + profile.phone}>{profile.phoneDisplay}</a><a className="contact-sub-link" href={"https://wa.me/" + profile.phone.slice(1)} target="_blank" rel="noreferrer">Start a WhatsApp conversation <ArrowUpRight /></a></div></Card>
        <Card className="contact-card"><span className="icon-box"><Clock3 /></span><div><span className="contact-label">Timezone & availability</span><span className="contact-value">IST (UTC+5:30)</span><p>Based in Kolkata, India. Flexible overlap with your business hours.</p></div></Card>
        <div className="contact-note"><span className="eyebrow">A direct partnership</span><h3>Your idea. One dedicated developer.</h3><p>From the first conversation to the final handover, you'll work directly with the person building your product.</p><a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight /></a></div>
      </div>
      <Card className="inquiry-card">
        <div className="inquiry-heading"><span className="icon-box"><Send /></span><div><h3>Project Inquiry</h3><p>Tell me about your vision and key requirements.</p></div></div>
        <form onSubmit={submitInquiry} className="inquiry-form">
          <fieldset><legend className="mb-2 text-sm font-medium">What are you looking to build?</legend><ToggleGroup type="single" value={scope} onValueChange={value => { if(value) setScope(value); }} aria-label="Project type">{scopes.map(item => <ToggleGroupItem key={item} value={item}>{item}</ToggleGroupItem>)}</ToggleGroup></fieldset>
          <div className="form-row"><div><Label htmlFor="client-name">Your name</Label><Input id="client-name" name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={100} /></div><div><Label htmlFor="client-email">Work email</Label><Input id="client-email" name="email" type="email" autoComplete="email" placeholder="alex@company.com" required maxLength={254} /></div></div>
          <div><Label htmlFor="project-overview">Project overview & goals</Label><Textarea id="project-overview" name="overview" placeholder="What are you building? Tell me about your idea, requirements, and what success looks like..." rows={5} required minLength={20} maxLength={4000} /></div>
          <div className="form-row"><div><Label htmlFor="budget">Estimated budget</Label><Select value={budget} onValueChange={setBudget}><SelectTrigger id="budget"><SelectValue /></SelectTrigger><SelectContent>{budgets.map(item => <SelectItem value={item} key={item}>{item}</SelectItem>)}</SelectContent></Select></div><div><Label htmlFor="timeline">Target launch</Label><Select value={timeline} onValueChange={setTimeline}><SelectTrigger id="timeline"><SelectValue /></SelectTrigger><SelectContent>{timelines.map(item => <SelectItem value={item} key={item}>{item}</SelectItem>)}</SelectContent></Select></div></div>
          <div className="form-submit"><Button size="lg" type="submit">Prepare Project Inquiry <ArrowUpRight /></Button><p>Opens a draft in your email app. Review and send when ready.</p></div>
          {prepared && <div role="status" className="form-feedback"><Check className="size-4 shrink-0" /><div>Your inquiry is ready in your email app. It hasn't been sent yet. <a href={draftUrl} className="underline">Open the draft again</a>.</div></div>}
        </form>
      </Card>
    </div>
  </div></section>;
}
