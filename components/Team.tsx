import MotionReveal from "@/components/MotionReveal";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const team = [
  {
    name: "Олександр Коваль",
    position: "Майстер зі встановлення",
    experience: "12 років досвіду",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=520&q=80",
  },
  {
    name: "Ігор Мельник",
    position: "Спеціаліст з ремонту скла",
    experience: "9 років досвіду",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=520&q=80",
  },
  {
    name: "Марина Савчук",
    position: "Консультант з підбору",
    experience: "7 років досвіду",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=520&q=80",
  },
];

export default function Team() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Команда"
        title="Майстри, яким довіряють авто"
        description="Фахівці з практичним досвідом у встановленні, ремонті, тонуванні та поліруванні автоскла."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {team.map((person, index) => (
          <MotionReveal delay={index * 0.08} key={person.name}>
            <article className="glass-surface overflow-hidden rounded-[28px] transition duration-300 hover:-translate-y-1 hover:shadow-glass">
              <div className="relative aspect-[4/4]">
                <Image src={person.image} alt={person.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover grayscale-[18%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
                <p className="mt-1 text-sm text-primary">{person.position}</p>
                <p className="mt-4 text-sm text-muted">{person.experience}</p>
              </div>
            </article>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}
