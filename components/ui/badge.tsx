import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const badgeVariants = cva("inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium leading-4", {
  variants: { variant: { default: "bg-accent text-accent-foreground", secondary: "bg-secondary text-secondary-foreground", outline: "border text-muted-foreground" } },
  defaultVariants: { variant: "default" },
});
export function Badge({ className, variant, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}
