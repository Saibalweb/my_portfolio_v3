import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { WorkSection, ServicesSection, ProcessSection, ExperienceSection, StackSection } from "@/components/portfolio-sections";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content"><Hero /><WorkSection /><ServicesSection /><ProcessSection /><ExperienceSection /><StackSection /><ContactSection /></main><SiteFooter /></>;
}
