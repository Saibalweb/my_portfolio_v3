"use client";
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ProjectPreview } from "@/components/project-preview";
import { profile, type Project } from "@/lib/portfolio";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <Card className="project-card">
    <div className="project-information">
      <div className="project-meta"><Badge>{project.category}</Badge><Badge variant="secondary">{project.status}</Badge><span className="project-number">0{index + 1}</span></div>
      <h3>{project.name} <span>— {project.title}</span></h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-features">{project.features.map(feature => <li key={feature}><CheckCircle2 />{feature}</li>)}</ul>
      <div className="tech-tags">{project.stack.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}</div>
      <div className="project-actions">
        <Dialog>
          <DialogTrigger asChild><Button variant="link" className="p-0 h-auto">View Case Study <ArrowRight /></Button></DialogTrigger>
          <DialogContent>
            <Badge className="w-fit">{project.category}</Badge>
            <DialogTitle className="text-2xl font-semibold tracking-tight pr-5">{project.name} — {project.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground leading-relaxed">{project.description}</DialogDescription>
            {[["The challenge", project.challenge], ["The approach", project.approach], ["The result", project.outcome]].map(([label, text]) => <div key={label}><h4 className="font-semibold mb-2">{label}</h4><p className="text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}
            <div className="tech-tags">{project.stack.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}</div>
            <Button asChild className="w-fit"><a href={project.link} target="_blank" rel="noreferrer">Explore the original project <ArrowUpRight /></a></Button>
          </DialogContent>
        </Dialog>
        <Button asChild variant="ghost" className="p-0 h-auto text-muted-foreground hover:bg-transparent"><a href={profile.github} target="_blank" rel="noreferrer"><Code2 />GitHub Profile <ArrowUpRight className="size-3!" /></a></Button>
      </div>
    </div>
    <ProjectPreview project={project} />
  </Card>;
}
