import GlassCard from "@/components/GlassCard";
import MotionReveal from "@/components/MotionReveal";
import SectionHeader from "@/components/SectionHeader";
import Section from "@/components/Section";
import { CarFront, Gem, Sparkles, Wrench } from "lucide-react";

const services = [
  { icon: CarFront, title: "Заміна скла", items: ["Лобове", "Бокове", "Заднє скло", "Професійне встановлення"] },
  { icon: Wrench, title: "Ремонт тріщин", items: ["Ремонт сколів", "Усунення тріщин", "Відновлення прозорості"] },
  { icon: Sparkles, title: "Тонування автоскла", items: ["UV захист", "Комфорт салону", "Якісна плівка"] },
  { icon: Gem, title: "Полірування скла", items: ["Видалення подряпин", "Відновлення блиску"] },
];

export default function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="Послуги"
        title="Комплексний сервіс автомобільного скла"
        description="Від підбору скла до фінальної перевірки герметичності: все в одному місці, з акуратною роботою та гарантією."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <MotionReveal key={service.title} delay={index * 0.08}>
            <GlassCard icon={service.icon} title={service.title} className="h-full">
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li className="flex items-center gap-2" key={item}>
                    <span className="size-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
