import { cn } from "@/lib/utils";
import type React from "react";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  shellClassName?: string;
};

export default function Section({ id, children, className, shellClassName }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-16 md:py-24", className)}>
      <div className={cn("section-shell relative", shellClassName)}>{children}</div>
    </section>
  );
}
