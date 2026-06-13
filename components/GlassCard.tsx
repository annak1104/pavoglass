import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import type React from "react";

type GlassCardProps = {
  icon?: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({ icon: Icon, title, children, className }: GlassCardProps) {
  return (
    <article className={cn("glass-surface group overflow-hidden rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:shadow-glass", className)}>
      <div className="absolute -inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      {Icon ? (
        <div className="glass-surface mb-5 flex size-12 items-center justify-center rounded-full text-primary">
          <Icon className="size-6" />
        </div>
      ) : null}
      <h3 className="text-xl font-semibold tracking-tight text-foreground">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-muted">{children}</div>
    </article>
  );
}
