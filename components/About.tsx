import GlassCard from "@/components/GlassCard";
import MotionReveal from "@/components/MotionReveal";
import Section from "@/components/Section";
import { Award, BadgeCheck, Shield, Wrench } from "lucide-react";

const points = [
  { icon: Award, title: "Досвід", text: "15+ років роботи з автомобільним склом різних класів." },
  { icon: Wrench, title: "Обладнання", text: "Професійні інструменти для точного демонтажу та встановлення." },
  { icon: BadgeCheck, title: "Матеріали", text: "Якісні клеї, праймери, плівки та полірувальні системи." },
  { icon: Shield, title: "Гарантія", text: "Контроль герметичності, посадки скла та чистоти виконання." },
];

export default function About() {
  return (
    <Section id="about" shellClassName="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <MotionReveal>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Про компанію</p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          Професійне встановлення автомобільного скла у Луцьку
        </h2>
        <p className="mt-6 text-base leading-8 text-muted">
          Ми працюємо з автосклом як з елементом безпеки, комфорту та зовнішнього вигляду авто. Кожна заявка проходить підбір, підготовку поверхні, монтаж і фінальну перевірку.
        </p>
      </MotionReveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {points.map((point, index) => (
          <MotionReveal delay={index * 0.08} key={point.title}>
            <GlassCard icon={point.icon} title={point.title} className="h-full">
              <p>{point.text}</p>
            </GlassCard>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
