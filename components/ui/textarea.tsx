import * as React from "react";
import { cn } from "@/lib/utils";
import { formInputClass } from "@/components/ui/form-styles";
export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return <textarea data-slot="textarea" className={cn(formInputClass, "min-h-32 resize-y", className)} {...props} />;
}
