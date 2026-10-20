import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, centered = false, className }: { eyebrow: string; title: ReactNode; description: string; centered?: boolean; className?: string }) {
  return <div className={cn("mb-12 max-w-[680px] max-compact:mb-[30px]", centered && "mx-auto text-center", className)}>
    <span className="inline-block font-heading text-xs font-semibold uppercase tracking-[0.15em] text-primary max-compact:text-[11px]">{eyebrow}</span>
    <h2 className="mt-2 text-[38px] font-semibold leading-[1.2] tracking-[-0.035em] max-compact:text-[30px]">{title}</h2>
    <p className={cn("mt-3.5 max-w-[610px] text-base leading-[1.75] text-muted-foreground max-compact:mt-3 max-compact:text-[15px]", centered && "mx-auto")}>{description}</p>
  </div>;
}
