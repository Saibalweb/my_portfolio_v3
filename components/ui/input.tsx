import * as React from "react";
import { cn } from "@/lib/utils";
import { formInputClass } from "@/components/ui/form-styles";
export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return <input data-slot="input" type={type} className={cn(formInputClass, className)} {...props} />;
}
