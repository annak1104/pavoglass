"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const options = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Laptop },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="glass-surface h-11 w-[132px] rounded-full" aria-hidden="true" />;
  }

  return (
    <div className="glass-surface after:content-none flex h-11 items-center rounded-full p-1" role="radiogroup" aria-label="Theme">
      {options.map((option) => {
        const Icon = option.icon;
        const active = theme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className={cn(
              "relative grid size-9 place-items-center rounded-full text-muted transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
              active && "text-foreground",
            )}
            role="radio"
            aria-checked={active}
            aria-label={option.label}
          >
            {active ? <motion.span layoutId="theme-pill" className="absolute inset-0 rounded-full bg-primary/16 shadow-glow" /> : null}
            <Icon className="relative size-4" />
          </button>
        );
      })}
    </div>
  );
}
