import { ArrowLeft, ArrowRight, HeartHand, ShieldTick, UsersCheck } from "@untitledui/icons";
import { useEffect } from "react";
import { Link } from "react-aria-components";
import { Carousel, useCarousel } from "@/components/carousel-base";
import { cx } from "@/utils/cx";

const slides = [
  {
    eyebrow: "Cuidado que aproxima",
    title: "Encontre o cuidado certo para quem você ama.",
    description: "Conectamos famílias a profissionais preparados para oferecer companhia, segurança e atenção em cada momento.",
    icon: HeartHand,
    accent: "bg-brand-50 text-fg-brand-primary",
  },
  {
    eyebrow: "Profissionais verificados",
    title: "Confiança desde o primeiro contato.",
    description: "Perfis avaliados, informações transparentes e uma jornada simples para você escolher com tranquilidade.",
    icon: ShieldTick,
    accent: "bg-utility-success-50 text-utility-success-700",
  },
  {
    eyebrow: "Uma rede de apoio",
    title: "Mais presença para toda a família.",
    description: "Conte com uma comunidade de cuidadores que entende necessidades diferentes e valoriza relações humanas.",
    icon: UsersCheck,
    accent: "bg-utility-blue-50 text-utility-blue-700",
  },
];

function AutoAdvance({ delay = 10000 }: { delay?: number }) {
  const { api, selectedIndex } = useCarousel();

  useEffect(() => {
    if (!api) return;

    const timeout = window.setTimeout(() => {
      api.scrollNext();
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [api, delay, selectedIndex]);

  return null;
}

export default function HeroCarousel() {
  return (
    <section id="inicio" className="flex min-h-[calc(100svh-4.5rem)] items-center bg-primary">
      <div className="mx-auto w-full max-w-container px-4 py-12 sm:px-6 lg:px-8">
        <Carousel.Root
          aria-label="Destaques da Amparo"
          opts={{ loop: true }}
          className="overflow-hidden rounded-3xl bg-secondary shadow-xl"
        >
          <AutoAdvance />
          <Carousel.Content>
            {slides.map((slide, index) => {
              const Icon = slide.icon;

              return (
                <Carousel.Item
                  key={slide.title}
                  aria-label={`${index + 1} de ${slides.length}`}
                  className="grid min-h-[min(660px,calc(100svh-8.5rem))] items-center gap-12 px-6 py-12 lg:grid-cols-2 lg:px-16"
                >
                  <div className="max-w-2xl">
                    <span className="text-sm font-semibold text-brand-secondary">{slide.eyebrow}</span>
                    <h1 className="mt-3 text-display-sm font-semibold tracking-tight text-primary sm:text-display-md lg:text-display-lg">
                      {slide.title}
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-tertiary sm:text-xl">{slide.description}</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="#contato"
                        className="inline-flex justify-center rounded-lg bg-brand-solid px-5 py-3 text-md font-semibold text-white shadow-xs-skeuomorphic outline-brand hover:bg-brand-solid_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        Encontrar um cuidador
                      </Link>
                      <Link
                        href="#como-funciona"
                        className="inline-flex justify-center rounded-lg bg-primary px-5 py-3 text-md font-semibold text-secondary shadow-xs ring-1 ring-primary ring-inset outline-brand hover:bg-primary_hover focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        Como funciona
                      </Link>
                    </div>
                  </div>

                  <div className="hidden items-center justify-center lg:flex">
                    <div className={cx("flex size-72 items-center justify-center rounded-full ring-16 ring-primary", slide.accent)}>
                      <Icon aria-hidden="true" className="size-32 stroke-[1.25]" />
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel.Content>

          <div className="flex items-center justify-between border-t border-secondary px-6 py-4 lg:px-16">
            <Carousel.IndicatorGroup className="flex gap-2" aria-label="Selecionar slide">
              {({ index }) => (
                <Carousel.Indicator
                  key={index}
                  index={index}
                  className={({ isSelected }) =>
                    cx(
                      "h-2.5 rounded-full outline-brand transition-all focus-visible:outline-2 focus-visible:outline-offset-2",
                      isSelected ? "w-8 bg-brand-solid" : "w-2.5 bg-quaternary hover:bg-tertiary",
                    )
                  }
                />
              )}
            </Carousel.IndicatorGroup>

            <div className="flex gap-2">
              <Carousel.PrevTrigger className="flex size-10 items-center justify-center rounded-full bg-primary text-fg-secondary shadow-xs ring-1 ring-primary ring-inset outline-brand hover:bg-primary_hover focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <ArrowLeft aria-hidden="true" className="size-5" />
              </Carousel.PrevTrigger>
              <Carousel.NextTrigger className="flex size-10 items-center justify-center rounded-full bg-primary text-fg-secondary shadow-xs ring-1 ring-primary ring-inset outline-brand hover:bg-primary_hover focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <ArrowRight aria-hidden="true" className="size-5" />
              </Carousel.NextTrigger>
            </div>
          </div>
        </Carousel.Root>
      </div>
    </section>
  );
}
