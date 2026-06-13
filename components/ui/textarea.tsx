import { cn } from "@/lib/utils";
import * as React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "glass-surface flex min-h-32 w-full rounded-[24px] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-[rgb(var(--placeholder))] focus:border-white/35 focus:ring-2 focus:ring-primary/25",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
