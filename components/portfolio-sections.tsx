import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icon";
import { Container, Section, IconBox, textLinkClass } from "@/components/primitives";
import { experience, process, profile, projects, services, stack } from "@/lib/portfolio";

const grid4 = "grid grid-cols-4 gap-5 max-tablet:gap-3.5 max-mobile:grid-cols-2 max-mobile:gap-5 max-compact:gap-3.5 max-tiny:grid-cols-1";
const cardPad = "p-[26px_24px_22px] max-tablet:p-[22px_18px_18px] max-mobile:p-[26px_24px_22px] max-compact:p-[22px_16px_19px]";
const cardTitle = "text-[17px] leading-[1.4] max-mobile:text-[18px] max-compact:text-[16px]";
const cardDescription = "mt-[7px] text-[13px] leading-[1.8] max-compact:leading-[1.75]";

export function WorkSection() {
  return <Section id="work"><Container>
    <div className="mb-11 flex items-end justify-between gap-10 max-compact:mb-7 max-compact:block"><SectionHeading className="mb-0 max-compact:mb-0" eyebrow="Featured Projects" title="Selected Work" description="A selection of applications and products I've built, with intuitive design, solid architecture, and seamless cross-platform experiences." /><a className={textLinkClass + " mb-1.5 whitespace-nowrap max-compact:mt-[18px]"} href={profile.github} target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight /></a></div>
    <div className="grid gap-8 max-compact:gap-6">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}</div>
    <div className="mt-[42px] text-center max-compact:mt-7"><Button asChild variant="outline" className="text-[13px]"><a href={profile.github} target="_blank" rel="noreferrer">View All Projects on GitHub <ArrowRight /></a></Button></div>
  </Container></Section>;
}

export function ServicesSection() {
  return <Section id="services" surface><Container>
    <SectionHeading centered eyebrow="Capabilities & Value" title={<>What I Can Build <span className="text-cta-text">for You</span></>} description="Helping businesses and founders build practical, reliable digital products with thoughtful engineering from the start." />
    <div className={grid4}>{services.map(service => <Card key={service.title} className="flex flex-col bg-background shadow-none"><CardHeader className={cardPad}><IconBox size="service" className="mb-[15px]"><Icon name={service.icon} /></IconBox><CardTitle className={cardTitle}>{service.title}</CardTitle><CardDescription className={cardDescription}>{service.description}</CardDescription></CardHeader><CardContent className="mt-auto px-6 pb-[26px] pt-0 max-compact:px-4 max-compact:pb-[22px]"><p className="mb-[7px] text-xs font-semibold">Key deliverables</p><ul className="grid list-none gap-[5px] p-0">{service.deliverables.map(item => <li key={item} className="flex items-center gap-[7px] text-xs text-muted-foreground max-compact:items-baseline max-compact:gap-[5px]"><span className="size-[3px] shrink-0 rounded-full bg-primary" />{item}</li>)}</ul></CardContent></Card>)}</div>
  </Container></Section>;
}

export function ProcessSection() {
  return <Section id="process"><Container>
    <SectionHeading centered eyebrow="Collaborative Workflow" title="From Idea to Launch" description="A clear, iterative process designed for useful feedback, predictable delivery, and complete visibility." />
    <div className={grid4}>{process.map((step, index) => <Card key={step.title} className="flex flex-col shadow-none"><CardHeader className={cardPad}><div className="mb-3.5 flex items-center justify-between"><span className="text-[32px] font-semibold leading-none tracking-[-1px] text-[color-mix(in_srgb,var(--primary)_40%,var(--card))] max-compact:text-[28px]">0{index + 1}</span><Icon name={step.icon} className="size-[17px] stroke-[1.5] text-primary" /></div><CardTitle className={cardTitle}>{step.title}</CardTitle><CardDescription className={cardDescription}>{step.description}</CardDescription></CardHeader><CardContent className="mt-auto px-6 pt-0 max-compact:px-4"><span className="flex items-center justify-between gap-2 text-xs font-medium text-primary max-compact:gap-[5px]">{step.detail}<ArrowRight className="size-[13px] shrink-0 max-compact:size-[11px]" /></span></CardContent></Card>)}</div>
  </Container></Section>;
}

export function ExperienceSection() {
  return <Section id="experience" surface><Container>
    <SectionHeading eyebrow="Track Record" title="Experience & Real-World Work" description="Commercial engineering experience, independent development, and a hands-on approach to building useful software." />
    <div className="grid grid-cols-2 gap-8 max-compact:grid-cols-1 max-compact:gap-[30px]">{experience.map(group => <div key={group.title}><h3 className="mb-5 flex items-center gap-2 text-[13px] font-semibold text-primary max-compact:mb-[15px]"><Icon name={group.icon} className="size-[17px]" />{group.title}</h3><div className="grid gap-[18px]">{group.roles.map(role => <Card key={role.title} className="bg-background shadow-none"><CardHeader className="p-[26px_26px_17px] max-compact:p-[22px_20px_16px]"><div className="flex items-start justify-between gap-3 max-tablet:flex-col max-tablet:gap-[7px] max-compact:flex-row"><CardTitle className="text-[16px] leading-[1.4]">{role.title}</CardTitle><Badge variant="secondary" className="whitespace-nowrap px-1.5 py-[3px] text-[11px]">{role.period}</Badge></div><p className="mt-[3px] text-xs text-primary">{role.company}</p></CardHeader><CardContent className="px-[26px] pb-[26px] pt-0 max-compact:px-5 max-compact:pb-[22px]"><ul className="grid list-none gap-2.5 p-0">{role.points.map(point => <li key={point} className="flex items-start gap-2 text-[13px] leading-[1.75] text-muted-foreground"><Check className="mt-[3px] size-[13px] shrink-0 text-primary" />{point}</li>)}</ul></CardContent></Card>)}</div></div>)}</div>
  </Container></Section>;
}

export function StackSection() {
  return <Section id="stack"><Container>
    <SectionHeading centered eyebrow="Technical Stack" title="Technologies I Work With" description="A practical set of modern technologies for fast development, reliable performance, and long-term maintainability." />
    <div className="grid grid-cols-3 gap-6 max-tablet:gap-3.5 max-compact:grid-cols-1 max-compact:gap-4">{stack.map(category => <Card key={category.title} className="shadow-none"><CardHeader className="p-[28px_26px_23px] max-tablet:p-[24px_20px_20px] max-compact:p-[24px_22px_20px]"><div className="flex items-center gap-3 max-tablet:flex-col max-tablet:items-start max-compact:flex-row max-compact:items-center"><IconBox><Icon name={category.icon} /></IconBox><div><CardTitle className="text-[16px] max-tablet:text-[15px] max-compact:text-[17px]">{category.title}</CardTitle><CardDescription className="mt-[3px] text-xs">{category.subtitle}</CardDescription></div></div></CardHeader><CardContent className="px-[26px] pb-[28px] pt-0 max-tablet:px-5 max-compact:px-[22px] max-compact:pb-6"><div className="flex flex-wrap gap-2 [&_[data-slot=badge]]:px-2 [&_[data-slot=badge]]:py-[5px] [&_[data-slot=badge]]:text-[11px]">{category.items.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}</div></CardContent></Card>)}</div>
  </Container></Section>;
}
