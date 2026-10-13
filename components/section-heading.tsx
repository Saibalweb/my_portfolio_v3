import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow: string; title: ReactNode; description: string; centered?: boolean }) {
  return <div className={cn("section-heading", centered && "section-heading-center")}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>;
}
