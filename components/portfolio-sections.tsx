import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { experience, process, profile, projects, services, stack } from "@/lib/portfolio";

export function WorkSection() {
  return <section id="work" className="section work-section"><div className="container">
    <div className="work-heading"><SectionHeading eyebrow="Featured Projects" title="Selected Work" description="A selection of applications and products I've built, with intuitive design, solid architecture, and seamless cross-platform experiences." /><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight /></a></div>
    <div className="project-list">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
    <div className="section-bottom-action"><Button asChild variant="outline"><a href={profile.github} target="_blank" rel="noreferrer">View All Projects on GitHub <ArrowRight /></a></Button></div>
  </div></section>;
}

export function ServicesSection() {
  return <section id="services" className="section section-surface"><div className="container">
    <SectionHeading centered eyebrow="Capabilities & Value" title={<>What I Can Build <span className="text-cta-text">for You</span></>} description="Helping businesses and founders build practical, reliable digital products with thoughtful engineering from the start." />
    <div className="services-grid">{services.map(service => <Card key={service.title} className="service-card"><CardHeader><span className="icon-box"><Icon name={service.icon} /></span><CardTitle>{service.title}</CardTitle><CardDescription>{service.description}</CardDescription></CardHeader><CardContent><p className="deliverables-label">Key deliverables</p><ul className="deliverables">{service.deliverables.map(item => <li key={item}><span />{item}</li>)}</ul></CardContent></Card>)}</div>
  </div></section>;
}

export function ProcessSection() {
  return <section id="process" className="section"><div className="container">
    <SectionHeading centered eyebrow="Collaborative Workflow" title="From Idea to Launch" description="A clear, iterative process designed for useful feedback, predictable delivery, and complete visibility." />
    <div className="process-grid">{process.map((step, index) => <Card key={step.title} className="process-card"><CardHeader><div className="process-step"><span>0{index + 1}</span><Icon name={step.icon} /></div><CardTitle>{step.title}</CardTitle><CardDescription>{step.description}</CardDescription></CardHeader><CardContent><span className="process-detail">{step.detail}<ArrowRight /></span></CardContent></Card>)}</div>
  </div></section>;
}

export function ExperienceSection() {
  return <section id="experience" className="section section-surface"><div className="container">
    <SectionHeading eyebrow="Track Record" title="Experience & Real-World Work" description="Commercial engineering experience, independent development, and a hands-on approach to building useful software." />
    <div className="experience-grid">{experience.map(group => <div key={group.title}><h3 className="experience-group-title"><Icon name={group.icon} />{group.title}</h3><div className="experience-roles">{group.roles.map(role => <Card key={role.title} className="experience-card"><CardHeader><div className="role-title"><CardTitle>{role.title}</CardTitle><Badge variant="secondary">{role.period}</Badge></div><p className="company-name">{role.company}</p></CardHeader><CardContent><ul>{role.points.map(point => <li key={point}><Check />{point}</li>)}</ul></CardContent></Card>)}</div></div>)}</div>
  </div></section>;
}

export function StackSection() {
  return <section id="stack" className="section"><div className="container">
    <SectionHeading centered eyebrow="Technical Stack" title="Technologies I Work With" description="A practical set of modern technologies for fast development, reliable performance, and long-term maintainability." />
    <div className="stack-grid">{stack.map(category => <Card key={category.title} className="stack-card"><CardHeader><div className="stack-heading"><span className="icon-box"><Icon name={category.icon} /></span><div><CardTitle>{category.title}</CardTitle><CardDescription>{category.subtitle}</CardDescription></div></div></CardHeader><CardContent><div className="tech-tags">{category.items.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}</div></CardContent></Card>)}</div>
  </div></section>;
}
