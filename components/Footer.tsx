import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="glass-surface after:content-none section-shell flex flex-col gap-5 rounded-[28px] p-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <a
          href="#"
          className="flex items-center gap-3 text-foreground"
          aria-label="PavoGlass"
        >
          <span className="glass-surface after:content-none flex size-9 items-center justify-center rounded-full text-primary">
            <Image
              src="/favicon.png"
              alt="PavoGlass logo"
              fill
              className="object-contain p-1"
              priority
            />
          </span>
          <span className="font-bold">PavoGlass</span>
        </a>
        <p>Автоскло Луцьк. Продаж, заміна, ремонт, тонування та полірування.</p>
      </div>
    </footer>
  );
}
