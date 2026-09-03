import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutDetailPage from "@/pages/about-detail-page";
import ContactPage from "@/pages/contact-page";
import DetailPage from "@/pages/detail-page";
import PresentationPage from "@/pages/presentation-page";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return null;
}

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-amparo-50 text-primary">
      <main className="bg-amparo-50">
        <PresentationPage />
      </main>
      <div className="min-h-svh">
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToRoute />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/servicos" element={<DetailPage eyebrow="Cuidado 360°" title="Uma rede de cuidado construída para cada necessidade." description="Cada pessoa idosa possui uma história, uma rotina e necessidades diferentes. Por isso, construímos uma proposta personalizada, reunindo os profissionais necessários para um cuidado completo, coordenado e humanizado." image="/images/gallery-06.jpg" imageAlt="Casal maduro compartilhando um olhar de confiança" sections={[
          { eyebrow: "Mais do que um profissional", title: "Uma equipe organizada ao redor de cada história.", description: "A Amparo estrutura a rede para que a família não precise enfrentar sozinha a complexidade do cuidado.", image: "/images/gallery-02.jpg", imageAlt: "Avós participando de uma atividade com a neta", imagePosition: "object-[50%_48%]", items: ["Cuidadores para companhia, acompanhamento e apoio à rotina.", "Enfermeiros para demandas compatíveis com sua habilitação.", "Médicos para avaliação e acompanhamento quando necessários.", "Fisioterapeutas e nutricionistas para necessidades especializadas."] },
          { eyebrow: "Serviços personalizados", title: "A necessidade determina o perfil profissional adequado.", description: "Formação, experiência, preparo, disponibilidade e compatibilidade são considerados em cada seleção e homologação.", image: "/images/gallery-12.jpg", imageAlt: "Mulher madura vivendo com independência", imagePosition: "object-[50%_38%]", items: ["Companhia e acompanhamento da rotina.", "Consultas, compromissos e atividades externas.", "Plantões e acompanhamentos prolongados.", "Equipes multidisciplinares definidas após avaliação."] },
        ]} />} />
        <Route path="/como-funciona" element={<DetailPage eyebrow="Como funciona" title="Você conta. Nós entendemos. A Amparo cuida da organização." description="O primeiro passo não é escolher um profissional. É entender a história, avaliar cada necessidade e construir uma equipe compatível com a realidade da família." image="/images/gallery-03.jpg" imageAlt="Mulher abraçando uma pessoa idosa na praia" sections={[
          { eyebrow: "Etapas 1 a 4", title: "Entender antes de propor.", description: "Nossa equipe começa pela escuta e transforma as informações da família em critérios objetivos para a escolha da rede.", image: "/images/gallery-04.jpg", imageAlt: "Família compartilhando um momento de proximidade", imagePosition: "object-[58%_48%]", items: ["A família apresenta sua realidade, preocupações e dificuldades.", "Avaliamos rotina, autonomia, horários, saúde e suporte familiar.", "Construímos uma equipe com um ou diferentes profissionais.", "Selecionamos por formação, experiência, preparo, perfil e compatibilidade."] },
          { eyebrow: "Etapas 5 a 7", title: "O cuidado começa. O acompanhamento continua.", description: "A Amparo permanece como ponto de apoio para a família e para todos os profissionais envolvidos.", image: "/images/gallery-08.jpg", imageAlt: "Casal maduro em um abraço acolhedor", imagePosition: "object-[62%_46%]", items: ["Apresentamos uma proposta personalizada com formato, frequência e duração.", "Após a aprovação, o atendimento começa conforme o planejamento.", "Acompanhamos feedbacks, qualidade e ajustes porque as necessidades mudam."] },
        ]} />} />
        <Route path="/sobre-nos" element={<AboutDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
