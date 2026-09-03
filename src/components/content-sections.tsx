import { Button, Form, Input, Label, Link, TextArea, TextField } from "react-aria-components";
import { cx } from "@/utils/cx";

const sections = [
  {
    id: "servicos",
    eyebrow: "Nossos serviços",
    title: "Cuidado pensado para cada rotina.",
    description: "Estratégia, orientação e acompanhamento para decisões de cuidado mais conscientes — sempre respeitando a realidade de cada família.",
    image: "/images/granny-smiling.jpg",
    imageAlt: "Senhora idosa sorrindo",
  },
  {
    id: "como-funciona",
    eyebrow: "Como funciona",
    title: "Um caminho simples até o cuidado ideal.",
    description: "Escutamos, compreendemos o contexto e desenhamos um plano claro. Você sabe o que fazer, por que fazer e com quem contar.",
    image: "/images/granny-pointing.jpg",
    imageAlt: "Senhora apontando para a explicação",
  },
  {
    id: "sobre",
    eyebrow: "Sobre nós",
    title: "Relações humanas que transformam o cuidado.",
    description: "Somos uma consultoria movida pela convicção de que cuidado sério também pode ser próximo, elegante e profundamente humano.",
    image: "/images/family-grandparents.jpg",
    imageAlt: "Avós aproveitando um momento em família com a neta",
  },
];

export function ContentSections() {
  return (
    <>
      {sections.map((section, index) => (
        <section id={section.id} key={section.id} className={cx("relative scroll-mt-18 overflow-hidden py-24 sm:py-36", index === 1 ? "bg-amparo-900 text-amparo-50" : "bg-amparo-50 text-amparo-900")}>
          <div aria-hidden="true" className={cx("absolute -top-40 size-96 rounded-full border opacity-20", index % 2 ? "-left-44 border-amparo-400" : "-right-44 border-amparo-600")} />
          <div className="relative mx-auto grid max-w-container items-center gap-14 px-6 lg:grid-cols-12 lg:px-8">
            <div className={cx("overflow-hidden lg:col-span-7", index % 2 !== 0 && "lg:order-2")}>
              <img src={section.image} alt={section.imageAlt} loading="lazy" decoding="async" className="aspect-[5/4] size-full object-cover transition duration-700 hover:scale-[1.02]" />
            </div>
            <div className={cx("relative z-10 lg:col-span-5 lg:-ml-20", index % 2 !== 0 && "lg:order-1 lg:mr-[-5rem] lg:ml-0")}>
              <div className={cx("p-8 sm:p-12", index === 1 ? "bg-amparo-800/95" : "bg-white/90 shadow-2xl backdrop-blur-sm")}>
              <p className={cx("text-xs font-semibold tracking-[0.22em] uppercase", index === 1 ? "text-amparo-300" : "text-amparo-600")}>{section.eyebrow}</p>
              <h2 className="mt-5 font-editorial text-4xl leading-tight font-medium tracking-tight sm:text-5xl">{section.title}</h2>
              <p className={cx("mt-6 text-base leading-7", index === 1 ? "text-amparo-100" : "text-amparo-slate")}>{section.description}</p>
              <Link href="#contato" className={cx("mt-8 inline-flex border-b pb-1 text-sm font-semibold outline-amparo-400 transition", index === 1 ? "border-amparo-300 text-amparo-100 hover:text-amparo-300" : "border-amparo-600 text-amparo-900 hover:text-amparo-600")}>
                Saiba mais
              </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export function ContactSection() {
  return (
    <section id="contato" className="relative scroll-mt-18 overflow-hidden bg-amparo-600 py-24 text-amparo-50 sm:py-36">
      <div className="mx-auto grid max-w-container gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-amparo-200 uppercase">Contato</p>
          <h2 className="mt-5 font-editorial text-5xl leading-tight font-medium tracking-tight sm:text-6xl">Vamos conversar sobre cuidado?</h2>
          <p className="mt-6 text-lg leading-8 text-amparo-100">Conte-nos o que você precisa. A Amparo está pronta para ouvir com atenção e orientar com clareza.</p>
        </div>

        <Form onSubmit={(event) => event.preventDefault()} className="space-y-5 bg-amparo-50 p-7 text-amparo-900 shadow-2xl sm:p-10">
          <TextField name="name" isRequired className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-secondary">Nome</Label>
            <Input className="rounded-lg bg-white/80 px-3.5 py-2.5 text-primary outline-brand ring-1 ring-primary focus:outline-2" placeholder="Seu nome" />
          </TextField>
          <TextField name="email" type="email" isRequired className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-secondary">E-mail</Label>
            <Input className="rounded-lg bg-white/80 px-3.5 py-2.5 text-primary outline-brand ring-1 ring-primary focus:outline-2" placeholder="voce@exemplo.com" />
          </TextField>
          <TextField name="message" isRequired className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-secondary">Mensagem</Label>
            <TextArea className="min-h-32 resize-y rounded-lg bg-white/80 px-3.5 py-2.5 text-primary outline-brand ring-1 ring-primary focus:outline-2" placeholder="Como podemos ajudar?" />
          </TextField>
          <Button type="submit" className="w-full rounded-lg bg-brand-solid px-5 py-3 text-md font-semibold text-white outline-brand hover:bg-brand-solid_hover focus-visible:outline-2 focus-visible:outline-offset-2">Enviar mensagem</Button>
        </Form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-amparo-900/95 text-amparo-50">
      <div className="mx-auto flex max-w-container flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-xl font-semibold">Amparo</p>
          <p className="mt-1 text-sm text-amparo-200">Cuidado que aproxima.</p>
        </div>
        <nav aria-label="Redes sociais" className="flex flex-wrap gap-5 text-sm font-semibold">
          {["Instagram", "Facebook", "LinkedIn", "YouTube"].map((network) => (
            <a key={network} href="#" className="rounded text-amparo-100 outline-brand transition hover:text-amparo-400 focus-visible:outline-2 focus-visible:outline-offset-4">{network}</a>
          ))}
        </nav>
        <p className="text-sm text-amparo-200">© {new Date().getFullYear()} Amparo</p>
      </div>
    </footer>
  );
}
