import MotionReveal from "@/components/MotionReveal";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  { title: "Заявка", text: "Приймаємо дані авто та уточнюємо задачу." },
  { title: "Підбір скла", text: "Перевіряємо сумісність, датчики та наявність." },
  { title: "Встановлення", text: "Готуємо посадкову зону та монтуємо скло." },
  { title: "Перевірка якості", text: "Контролюємо герметичність і чистоту результату." },
];

export default function Process() {
  return (
    <Section id="process">
      <SectionHeader eyebrow="Процес" title="Прозорий шлях від заявки до готового авто" />
      <div className="relative grid gap-5 md:grid-cols-4">
        <div className="liquid-line absolute left-0 right-0 top-8 hidden h-px md:block" />
        {steps.map((step, index) => (
          <MotionReveal delay={index * 0.08} key={step.title}>
            <article className="glass-surface relative rounded-[28px] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glass">
              <div className="glass-surface mb-6 flex size-16 items-center justify-center rounded-full text-2xl font-bold text-foreground">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.text}</p>
            </article>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
