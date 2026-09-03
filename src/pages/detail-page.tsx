import { ChevronDown } from "@untitledui/icons";
import { Link } from "react-router-dom";
import Footer from "@/components/footer";

interface DetailSection {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

interface DetailPageProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  sections?: DetailSection[];
}

const processDetails = [
  "Nossa equipe especializada escuta a história, as preocupações e as dificuldades relacionadas ao cuidado, sem partir de uma solução pronta.",
  "Consideramos rotina, autonomia, saúde, horários, frequência, atividades necessárias e o grau de suporte já oferecido pela família.",
  "A solução pode envolver um único profissional ou uma rede multidisciplinar, sempre dimensionada para a realidade apresentada.",
  "Formação, experiência, preparo, perfil, disponibilidade e compatibilidade orientam a seleção e a homologação de cada profissional.",
  "A família recebe uma proposta clara com profissionais envolvidos, quantidade de horas, frequência, duração e formato do atendimento.",
  "Com a aprovação, a equipe inicia o atendimento de acordo com o planejamento construído em conjunto com a família.",
  "Mantemos contato periódico, recolhemos feedbacks e reavaliamos necessidades para ajustar profissionais ou formato quando necessário.",
];

const serviceDetails = [
  "Companhia, acompanhamento, apoio à rotina e auxílio em atividades compatíveis com a formação e o perfil de cada cuidador.",
  "Atuação em demandas de enfermagem de acordo com a habilitação profissional e com as necessidades identificadas na avaliação.",
  "Avaliação e acompanhamento médico podem integrar a solução sempre que o contexto exigir esse suporte especializado.",
  "Mobilidade, recuperação, funcionalidade e alimentação podem ser acompanhadas por profissionais habilitados da nossa rede.",
  "O atendimento pode incluir companhia, acompanhamento da rotina e apoio em atividades cotidianas dentro do escopo definido.",
  "Organizamos suporte para consultas, compromissos e atividades externas, favorecendo segurança sem retirar a autonomia.",
  "A proposta pode contemplar plantões ou períodos prolongados conforme horários, frequência e intensidade de suporte necessários.",
  "Quando o caso pede diferentes especialidades, coordenamos a composição da equipe para oferecer continuidade e clareza à família.",
];

export default function DetailPage({ eyebrow, title, description, image, imageAlt, sections = [] }: DetailPageProps) {
  const isProcess = eyebrow === "Como funciona";
  const details = isProcess ? processDetails : serviceDetails;
  let itemIndex = 0;

  return (
    <div className="min-h-svh bg-amparo-50 pt-20 text-amparo-900">
      <main>
        <section className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-container items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-amparo-600 uppercase">{eyebrow}</p>
            <h1 className="mt-6 font-editorial text-5xl leading-[1.1] font-medium tracking-tight sm:text-6xl">{title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-amparo-slate sm:text-xl sm:leading-9">{description}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/#contato" className="inline-flex min-h-12 items-center rounded-lg bg-amparo-900 px-6 py-3 text-base font-semibold text-amparo-50 transition hover:bg-amparo-700">Entrar em contato</Link>
              <a href="#fluxo" className="inline-flex min-h-12 items-center rounded-lg border border-amparo-300 bg-white px-6 py-3 text-base font-semibold transition hover:border-amparo-500">Ver {isProcess ? "etapas" : "serviços"}</a>
            </div>
          </div>
          <figure className="h-[52svh] max-h-[620px] overflow-hidden bg-amparo-100">
            <img src={image} alt={imageAlt} className="size-full object-cover object-[62%_48%]" />
          </figure>
        </section>

        <section id="fluxo" className="bg-white">
          <div className="mx-auto grid max-w-container gap-14 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8 lg:py-28">
            <div>
              <div className="mb-12 max-w-3xl">
                <p className="text-sm font-semibold tracking-[0.2em] text-amparo-600 uppercase">{isProcess ? "Jornada de cuidado" : "Cuidado coordenado"}</p>
                <h2 className="mt-5 text-4xl leading-tight font-semibold sm:text-5xl">{isProcess ? "Um processo claro, do primeiro contato ao acompanhamento." : "Conheça cada possibilidade de cuidado."}</h2>
                <p className="mt-5 text-lg leading-8 text-amparo-slate">Selecione um item para consultar os detalhes.</p>
              </div>

          <div className={isProcess ? "relative grid gap-3 before:absolute before:top-8 before:bottom-8 before:left-7 before:w-px before:bg-amparo-200" : "grid gap-3"}>
            {sections.flatMap((section) => section.items).map((item) => {
              const currentIndex = itemIndex++;
              return (
                <details key={item} className="group relative rounded-xl border border-amparo-200 bg-amparo-50 open:border-amparo-400 open:bg-white">
                  <summary className="flex min-h-24 cursor-pointer list-none items-center justify-between gap-5 rounded-xl p-5 outline-amparo-400 transition hover:border-amparo-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-3 sm:p-6">
                    <div className="relative z-10 flex items-center gap-5">
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-amparo-900 text-base font-bold text-white">{String(currentIndex + 1).padStart(2, "0")}</span>
                      <h3 className="text-lg leading-7 font-semibold sm:text-xl">{item}</h3>
                    </div>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full text-amparo-700 transition group-open:rotate-180 group-open:bg-amparo-100"><ChevronDown className="size-5" /></span>
                  </summary>
                  <div className="pr-6 pb-6 pl-[5.75rem]">
                    <p className="border-t border-amparo-200 pt-5 text-base leading-7 text-amparo-slate sm:text-lg sm:leading-8">{details[currentIndex]}</p>
                  </div>
                </details>
              );
            })}
          </div>
            </div>

            <aside className="hidden lg:block">
              <figure className="sticky top-28 h-[32rem] overflow-hidden bg-amparo-100">
                <img src={sections[0]?.image ?? image} alt={sections[0]?.imageAlt ?? imageAlt} loading="lazy" className={`size-full object-cover ${sections[0]?.imagePosition ?? "object-center"}`} />
              </figure>
              <p className="mt-4 text-sm leading-6 text-amparo-slate">Cada solução é definida após compreender a realidade da pessoa idosa e de sua família.</p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
