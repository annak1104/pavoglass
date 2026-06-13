import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const faq = [
  {
    question: "Скільки часу займає заміна скла?",
    answer: "Зазвичай заміна займає від 2 до 4 годин залежно від моделі авто, типу скла та додаткових датчиків.",
  },
  {
    question: "Чи є гарантія?",
    answer: "Так. Ми надаємо гарантію на якість встановлення, герметичність і використані матеріали.",
  },
  {
    question: "Чи можна підібрати скло під мою модель?",
    answer: "Так. Підбираємо лобове, бокове, заднє скло та дзеркала під конкретну модель, рік і комплектацію авто.",
  },
  {
    question: "Чи ремонтуєте тріщини?",
    answer: "Так. Ремонтуємо сколи та тріщини, якщо пошкодження дозволяє безпечно відновити прозорість скла.",
  },
];

export default function FAQ() {
  return (
    <Section>
      <SectionHeader eyebrow="FAQ" title="Відповіді на часті запитання" />
      <div className="glass-surface mx-auto max-w-3xl rounded-[30px] px-6">
        <Accordion type="single" collapsible>
          {faq.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
