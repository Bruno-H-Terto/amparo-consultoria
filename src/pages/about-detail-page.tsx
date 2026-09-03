import { Link } from "react-router-dom";
import Footer from "@/components/footer";
import ImageMosaic from "@/components/image-mosaic";

const images = [
  { src: "/images/gallery-01.jpg", alt: "Mãos maduras unidas", imageClassName: "opacity-45" },
  { src: "/images/gallery-02.jpg", alt: "Avós em uma atividade criativa", imageClassName: "opacity-80" },
  { src: "/images/gallery-04.jpg", alt: "Avós e criança ao ar livre", imageClassName: "opacity-55" },
  { src: "/images/gallery-07.jpg", alt: "Família reunida em um retrato", imageClassName: "opacity-70" },
  { src: "/images/gallery-10.jpg", alt: "Mulher madura sorrindo", imageClassName: "opacity-40" },
  { src: "/images/gallery-12.jpg", alt: "Mulher madura com autonomia", imageClassName: "opacity-65" },
  { src: "/images/gallery-13.jpg", alt: "Mulher madura celebrando a vida", imageClassName: "opacity-50" },
];

export default function AboutDetailPage() {
  return (
    <div className="min-h-svh bg-amparo-50 pt-20">
      <main className="relative min-h-[calc(100svh-5rem)] overflow-hidden">
        <ImageMosaic images={images} className="absolute inset-0 grid grid-cols-6 grid-rows-3 gap-2 bg-amparo-50 [&>*]:col-span-2" />
        <div aria-hidden="true" className="absolute inset-0 bg-white/12" />
        <div className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center justify-center px-6 py-12">
          <article className="w-full max-w-[52rem] bg-white/88 p-7 text-center shadow-2xl backdrop-blur-md sm:p-10 lg:p-12">
            <p className="text-xs font-semibold tracking-[0.22em] text-amparo-600 uppercase">Sobre a Amparo</p>
            <h1 className="mt-4 font-editorial text-4xl leading-tight font-medium tracking-tight text-amparo-900 sm:text-5xl lg:text-6xl">Cuidado sério, próximo e profundamente humano.</h1>
            <div className="mx-auto mt-5 grid max-w-2xl gap-4 text-base leading-7 text-amparo-slate sm:text-lg">
              <p>A Amparo Consultoria surgiu em setembro de 2026, a partir de uma ideia desenvolvida dentro da sala de aula por sete estudantes de Ciências Contábeis da Universidade Federal de Juiz de Fora — UFJF.</p>
              <p>A ideia nasceu da dificuldade enfrentada por muitas famílias para encontrar profissionais preparados e confiar em quem estará ao lado de uma pessoa importante. Não buscamos apenas conectar: compreendemos a necessidade, organizamos a rede e acompanhamos essa relação.</p>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-5">
              <Link to="/#contato" className="bg-amparo-900 px-6 py-3 text-sm font-semibold text-amparo-50 transition hover:bg-amparo-600">Fale com a Amparo</Link>
              <Link to="/" className="border-b border-amparo-600 px-1 py-3 text-sm font-semibold text-amparo-900 hover:text-amparo-600">Voltar ao início</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
