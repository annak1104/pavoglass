"use client";

import { Button } from "@/components/ui/button";
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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
      <nav
        className="section-shell flex h-16 items-center justify-between py-4"
        aria-label="Головна навігація"
      >
        <a href="#" className="flex items-center gap-3" aria-label="PavoGlass">
          <span className="relative flex size-16 items-center justify-center">
            <Image
              src="/favicon.png"
              alt="PavoGlass logo"
              fill
              className="object-contain p-1"
              priority
            />
          </span>

          <span className="text-lg font-bold tracking-tight text-pearl">
            PavoGla11ss
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button asChild className="hidden lg:inline-flex">
          <a href="#contact">Записатися</a>
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-black/80 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.08]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
