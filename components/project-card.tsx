"use client";
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ProjectPreview } from "@/components/project-preview";
import { profile, type Project } from "@/lib/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <Card className="grid grid-cols-[1.42fr_1fr] overflow-hidden shadow-none transition-shadow hover:border-primary/30 hover:shadow-[0_8px_24px_rgb(var(--shadow-color)_/_0.04)] max-mobile:grid-cols-[1.2fr_1fr] max-compact:grid-cols-1">
    <div className="flex flex-col items-start p-[38px] max-tablet:p-7 max-mobile:p-[25px] max-compact:p-[25px_22px]">
      <div className="flex w-full flex-wrap items-center gap-[7px]"><Badge className="px-2 py-[3px] text-[11px]">{project.category}</Badge><Badge variant="secondary" className="px-2 py-[3px] text-[11px] max-tablet:hidden max-compact:inline-flex">{project.status}</Badge><span className="ml-auto text-xs text-muted-foreground">0{index + 1}</span></div>
      <h3 className="mt-4 text-[22px] font-semibold leading-[1.35] tracking-[-0.6px] max-tablet:text-[20px] max-mobile:text-[19px] max-compact:mt-[17px] max-compact:text-[20px]">{project.name} <span>— {project.title}</span></h3>
      <p className="mt-[13px] text-sm leading-[1.8] text-muted-foreground">{project.description}</p>
      <ul className="my-[21px] grid list-none grid-cols-2 gap-x-3.5 gap-y-2.5 p-0 max-tablet:grid-cols-1 max-tablet:gap-2 max-compact:my-5 max-compact:grid-cols-2 max-compact:gap-2.5 max-tiny:grid-cols-1">{project.features.map(feature => <li key={feature} className="flex items-center gap-[7px] text-xs leading-normal max-compact:gap-[5px]"><CheckCircle2 className="size-[14px] shrink-0 stroke-[1.6] text-primary max-compact:size-3" />{feature}</li>)}</ul>
      <div className="flex flex-wrap gap-1.5">{project.stack.map(tech => <Badge key={tech} variant="secondary" className="px-2 py-[3px] text-[11px]">{tech}</Badge>)}</div>
      <div className="mt-auto flex flex-wrap items-center gap-6 pt-7 max-tablet:gap-[15px] max-compact:gap-6">
        <Dialog>
          <DialogTrigger asChild><Button variant="link" className="h-auto p-0 text-[13px]">View Case Study <ArrowRight /></Button></DialogTrigger>
          <DialogContent>
            <Badge className="w-fit">{project.category}</Badge>
            <DialogTitle className="text-2xl font-semibold tracking-tight pr-5">{project.name} — {project.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground leading-relaxed">{project.description}</DialogDescription>
            {[["The challenge", project.challenge], ["The approach", project.approach], ["The result", project.outcome]].map(([label, text]) => <div key={label}><h4 className="font-semibold mb-2">{label}</h4><p className="text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
            <div className="flex flex-wrap gap-1.5">{project.stack.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}</div>
            <Button asChild className="w-fit"><a href={project.link} target="_blank" rel="noreferrer">Explore the original project <ArrowUpRight /></a></Button>
          </DialogContent>
        </Dialog>
        <Button asChild variant="ghost" className="h-auto p-0 text-[13px] text-muted-foreground hover:bg-transparent"><a href={profile.github} target="_blank" rel="noreferrer"><Code2 />GitHub Profile <ArrowUpRight className="size-3!" /></a></Button>
      </div>
    </div>
    <ProjectPreview project={project} />
  </Card>;
}
