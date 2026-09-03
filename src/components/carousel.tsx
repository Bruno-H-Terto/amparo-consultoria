import { useEffect } from "react";
import { Link } from "react-aria-components";
import { Carousel, useCarousel } from "@/components/base/carousel-base";
import { cx } from "@/utils/cx";

const slides = [
  {
    eyebrow: "Cuidado que gera confiança",
    title: "Amparo para quem importa. Segurança para quem cuida.",
    description: "Consultoria especializada para transformar decisões complexas em jornadas de cuidado mais seguras, humanas e tranquilas.",
    image: "/images/granny-pointing.jpg",
    imageAlt: "Mulher madura sorridente em retrato editorial",
    position: "object-[72%_38%]",
  },
  {
    eyebrow: "Presença que acolhe",
    title: "Cuidado humano. Orientação segura.",
    description: "Soluções conduzidas com escuta, experiência e respeito à autonomia de cada pessoa e de cada família.",
    image: "/images/granny-smiling.jpg",
    imageAlt: "Mulher madura sorrindo com serenidade",
    position: "object-[72%_36%]",
  },
  {
    eyebrow: "Relações que protegem",
    title: "Tranquilidade para viver cada fase.",
    description: "Uma rede de apoio construída para que cuidado, independência e afeto caminhem sempre juntos.",
    image: "/images/family-grandparents.jpg",
    imageAlt: "Família compartilhando um momento espontâneo em casa",
    position: "object-[58%_center]",
  },
];

function ArrowIcon({ className }: { className?: string }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className={className}><path d="M8.91 19.92 15.43 13.4a1.98 1.98 0 0 0 0-2.8L8.91 4.08" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function AutoAdvance({ delay = 8000 }: { delay?: number }) {
  const { api, selectedIndex } = useCarousel();
  useEffect(() => {
    if (!api) return;
    const timeout = window.setTimeout(() => api.scrollNext(), delay);
    return () => window.clearTimeout(timeout);
  }, [api, delay, selectedIndex]);
  return null;
}

export default function HeroCarousel() {
  return (
    <section id="inicio" className="h-svh min-h-160 overflow-hidden bg-amparo-900">
      <Carousel.Root aria-label="Apresentação Amparo" opts={{ loop: true }} className="group h-full overflow-hidden">
        <AutoAdvance />
        <Carousel.Content className="h-full">
          {slides.map((slide, index) => (
            <Carousel.Item key={slide.title} aria-label={`${index + 1} de ${slides.length}`} className="relative h-full overflow-hidden">
              <img src={slide.image} alt={slide.imageAlt} loading={index === 0 ? "eager" : "lazy"} decoding="async" className={cx("absolute inset-0 size-full object-cover transition-transform duration-1000 group-hover:scale-[1.015]", slide.position)} />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-amparo-900/95 via-amparo-900/75 to-amparo-900/20" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-amparo-900/55 via-transparent to-amparo-900/20" />

              <div className="relative z-10 mx-auto flex h-full max-w-container items-center px-8 pt-24 pb-10 sm:px-14 lg:px-24">
                <div className="max-w-3xl text-amparo-50">
                  <p className="mb-6 text-xs font-semibold tracking-[0.28em] text-amparo-300 uppercase">{slide.eyebrow}</p>
                  <h1 className="font-editorial text-5xl leading-[0.98] font-medium tracking-[-0.04em] text-balance sm:text-7xl lg:text-[5.75rem]">{slide.title}</h1>
                  <p className="mt-8 max-w-2xl text-base leading-7 text-amparo-100 sm:text-lg">{slide.description}</p>
                  <Link href="#servicos" className="mt-10 inline-flex items-center bg-amparo-50 px-6 py-3.5 text-sm font-semibold text-amparo-900 outline-amparo-400 transition hover:bg-amparo-400 focus-visible:outline-2 focus-visible:outline-offset-4">Conheça nossas soluções</Link>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Content>

        <Carousel.PrevTrigger className="pointer-events-none absolute top-1/2 left-3 z-20 flex size-16 -translate-y-1/2 items-center justify-center text-amparo-50/60 opacity-0 transition hover:text-amparo-400 group-hover:pointer-events-auto group-hover:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100 sm:left-6"><ArrowIcon className="size-12 rotate-180" /></Carousel.PrevTrigger>
        <Carousel.NextTrigger className="pointer-events-none absolute top-1/2 right-3 z-20 flex size-16 -translate-y-1/2 items-center justify-center text-amparo-50/60 opacity-0 transition hover:text-amparo-400 group-hover:pointer-events-auto group-hover:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100 sm:right-6"><ArrowIcon className="size-12" /></Carousel.NextTrigger>

        <Carousel.IndicatorGroup className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-2" aria-label="Selecionar destaque">
          {({ index }) => <Carousel.Indicator key={index} index={index} className={({ isSelected }) => cx("h-0.5 transition-all hover:bg-amparo-400", isSelected ? "w-12 bg-amparo-50" : "w-7 bg-amparo-50/40")} />}
        </Carousel.IndicatorGroup>
      </Carousel.Root>
    </section>
  );
}
