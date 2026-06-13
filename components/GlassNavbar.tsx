"use client";

import GlassButton from "@/components/GlassButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { cn } from "@/lib/utils";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#services", label: "Послуги" },
  { href: "#shop", label: "Склад" },
  { href: "#about", label: "Про нас" },
  { href: "#process", label: "Процес" },
  { href: "#contact", label: "Контакт" },
];

export default function GlassNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className="glass-surface after:content-none mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2"
        aria-label="Головна навігація"
      >
        <a
          href="#"
          className="flex min-w-0 items-center gap-2 rounded-full px-2 text-foreground"
          aria-label="PavoGlass"
        >
          <span className="relative flex size-16 items-center justify-center">
            <Image
              src="/favicon.png"
              alt="PavoGlass logo"
              fill
              className="object-contain p-1"
              priority
            />
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-transparent px-4 py-2 text-sm font-medium text-muted transition hover:border-white/20 hover:bg-white/15 hover:text-foreground hover:shadow-glow"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeSwitcher />
          <GlassButton href="#contact" variant="primary" className="h-11">
            Записатися
          </GlassButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeSwitcher />
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Закрити меню" : "Відкрити меню"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "glass-surface mx-auto mt-2 grid max-w-6xl overflow-hidden rounded-[28px] px-4 transition-all duration-300 lg:hidden",
          open ? "max-h-80 py-4 opacity-100" : "max-h-0 py-0 opacity-0",
        )}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-full px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-white/15"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
