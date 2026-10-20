import * as React from "react";
import { cn } from "@/lib/utils";
export function Label({ className, ...props }: React.ComponentProps<"label">) {
  return <label data-slot="label" className={cn("mb-2 block text-[13px] font-medium", className)} {...props} />;
}
