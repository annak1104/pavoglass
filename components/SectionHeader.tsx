type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-5xl">{title}</h2>
      {description ? <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">{description}</p> : null}
    </div>
  );
}
