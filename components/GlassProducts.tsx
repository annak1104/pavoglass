import GlassCard from "@/components/GlassCard";
import MotionReveal from "@/components/MotionReveal";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { BadgeCheck, Car, Gauge, ScanSearch } from "lucide-react";

const categories = ["Windshields", "Side windows", "Rear windows", "Mirrors"];
const support = ["European cars", "Japanese cars", "Korean cars", "American cars"];

export default function GlassProducts() {
  return (
    <Section id="shop">
      <div className="absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-accent/10 blur-3xl" />
        <SectionHeader
          eyebrow="Automotive Glass Shop"
          title="Продаж автоскла для популярних марок"
          description="Допомагаємо підібрати правильне скло під комплектацію, датчики, підігрів, камери та особливості кузова."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal>
            <GlassCard icon={ScanSearch} title="Категорії скла" className="h-full">
              <div className="grid gap-3 sm:grid-cols-2">
                {categories.map((item) => (
                  <div className="glass-surface  after:content-none rounded-full px-4 py-4 font-semibold text-foreground" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </GlassCard>
          </MotionReveal>
          <MotionReveal delay={0.1}>
            <GlassCard icon={Car} title="Підтримка авто" className="h-full">
              <div className="grid gap-3">
                {support.map((item) => (
                  <div className="flex items-center gap-3" key={item}>
                    <BadgeCheck className="size-5 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="glass-surface mt-6 rounded-[22px] p-4 text-foreground">
                <Gauge className="mb-3 size-5 text-primary" />
                Швидко перевіряємо доступність скла та сумісність з вашим авто.
              </div>
            </GlassCard>
          </MotionReveal>
        </div>
    </Section>
  );
}
