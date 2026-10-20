import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-16 max-tablet:px-9 max-compact:px-[22px] max-tiny:px-4 wide:max-w-[1680px] wide:px-20", className)} {...props} />;
}

export function Section({ className, surface, ...props }: React.ComponentProps<"section"> & { surface?: boolean }) {
  return <section className={cn("w-full py-[100px] max-mobile:py-[76px] max-compact:py-[60px]", surface && "bg-surface", className)} {...props} />;
}

export const wordmarkClass = "inline-flex font-heading text-[28px] font-bold leading-none tracking-[-1.2px] max-compact:text-[25px]";

export const textLinkClass = "inline-flex items-center gap-[7px] font-heading text-sm font-semibold text-primary hover:underline hover:underline-offset-4 [&_svg]:size-4";

export function Wordmark({ className, children, ...props }: React.ComponentProps<"span">) {
  return <span className={cn(wordmarkClass, className)} {...props}>{children ?? <>Saibal<span className="text-primary">.</span></>}</span>;
}

const iconBoxSizes = {
  md: "size-[42px] [&_svg]:size-[21px]",
  sm: "size-9 [&_svg]:size-[17px]",
  service: "size-9 [&_svg]:size-[21px]",
  platform: "size-[34px] [&_svg]:size-[18px]",
  mock: "size-[29px] rounded-[7px] [&_svg]:size-[17px]",
} as const;

export function IconBox({ size = "md", className, ...props }: React.ComponentProps<"span"> & { size?: keyof typeof iconBoxSizes }) {
  return <span className={cn("inline-flex shrink-0 items-center justify-center rounded-[10px] bg-accent text-primary [&_svg]:stroke-[1.7]", iconBoxSizes[size], className)} {...props} />;
}

export function StatusDot({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("inline-block size-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_0_3px_color-mix(in_srgb,var(--primary)_10%,transparent)]", className)} />;
}
