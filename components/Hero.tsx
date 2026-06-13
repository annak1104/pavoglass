"use client";

import GlassButton from "@/components/GlassButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, CalendarCheck, ShieldCheck } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "15+", label: "років досвіду" },
  { value: "5000+", label: "встановлених стекол" },
  { value: "100%", label: "Гарантія якості" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 70]);

  return (
    <section className="relative min-h-screen overflow-hidden pb-14 pt-28 md:pt-32">
      <div className="absolute inset-0">
        <div className="absolute left-[58%] top-[72%] size-1 rounded-full bg-foreground/70" />
        <div className="liquid-line absolute left-0 top-36 h-px w-full opacity-40" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[130%] -translate-x-1/2 bg-accent/10 blur-3xl" />
      </div>
      <div className="section-shell relative grid min-h-[calc(100vh-112px)] items-center gap-12 lg:grid-cols-[1fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground">
            <ShieldCheck className="size-4 text-primary" />
            Автоскло, встановлення, ремонт та тонування
          </div>
          <h1 className="text-balance max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Професійна заміна та ремонт автомобільного скла у Луцьку
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Продаж, встановлення та ремонт автоскла для будь-яких автомобілів. Швидко, якісно та з гарантією.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <GlassButton href="#contact" variant="primary" icon={CalendarCheck}>
              Записатися на встановлення
            </GlassButton>
            <GlassButton href="#services" icon={ArrowDown}>
              Переглянути послуги
            </GlassButton>
          </div>
          <div className="mt-11 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div className="rounded-lg px-5 py-4" key={stat.label}>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div style={{ y: imageY }} className="relative hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-glass">
            <Image
              src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=82"
              alt="Преміальний автомобіль із прозорим автосклом"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
            <div className="absolute -left-24 top-20 h-20 w-[150%] rotate-[-18deg] bg-white/20 blur-md animate-shimmer" />
            <div className="glass-surface after:content-none absolute bottom-6 left-6 right-6 rounded-[24px] p-5">
              <p className="text-sm text-muted">Pavo Glass Studio</p>
              <p className="mt-1 text-2xl font-semibold text-foreground">Точність монтажу до міліметра</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
