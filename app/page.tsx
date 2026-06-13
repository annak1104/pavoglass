import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GlassProducts from "@/components/GlassProducts";
import Hero from "@/components/Hero";
import GlassNavbar from "@/components/GlassNavbar";
import Process from "@/components/Process";
import Section from "@/components/Section";
import Services from "@/components/Services";
import Team from "@/components/Team";
import { MapPin, Phone, Timer } from "lucide-react";

const contactItems = [
  { icon: MapPin, label: "Локація", value: "Луцьк, Україна" },
  { icon: Phone, label: "Телефон", value: "+380 XX XXX XX XX" },
  { icon: Timer, label: "Графік", value: "Пн-Сб" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background bg-liquid-radial text-foreground">
      <GlassNavbar />
      <Hero />
      <Services />
      <GlassProducts />
      <About />
      <Team />
      <Process />
      <FAQ />
      <Section id="contact" shellClassName="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">Контакт</p>
          <h2 className="text-balance max-w-xl text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Підберемо скло та заплануємо встановлення
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted">
            Залиште заявку, і майстер уточнить модель авто, доступність скла та зручний час візиту.
          </p>
          <div className="mt-10 grid gap-4">
            {contactItems.map((item) => (
              <div className="glass-surface flex items-center gap-4 rounded-[26px] p-5" key={item.label}>
                <div className="glass-surface flex size-11 shrink-0 items-center justify-center rounded-full text-primary">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm text-muted">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </Section>
      <Footer />
    </main>
  );
}
