import { Hero } from "@/components/hero";
import { WorkSection, ServicesSection, ProcessSection, ExperienceSection, StackSection } from "@/components/portfolio-sections";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return <main id="main-content"><Hero /><WorkSection /><ServicesSection /><ProcessSection /><ExperienceSection /><StackSection /><ContactSection /></main>;
}
