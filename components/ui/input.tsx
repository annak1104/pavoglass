import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      "glass-surface flex h-12 w-full rounded-full px-4 text-sm text-foreground outline-none transition placeholder:text-muted/70 focus:border-white/35 focus:ring-2 focus:ring-primary/25",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
