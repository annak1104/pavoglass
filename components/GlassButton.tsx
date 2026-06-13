import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type React from "react";

type GlassButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "icon";
  children: React.ReactNode;
};

export default function GlassButton({ icon: Icon, variant = "secondary", children, className, ...props }: GlassButtonProps) {
  return (
    <a
      className={cn(
        "glass-surface group inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55",
        variant === "primary" && "bg-primary/15 shadow-glow",
        variant === "icon" && "size-12 px-0",
        className,
      )}
      {...props}
    >
      {Icon ? <Icon className="size-5 text-primary transition group-hover:scale-110" /> : null}
      {children}
    </a>
  );
}
