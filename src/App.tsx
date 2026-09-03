import Header from "@/components/header";
import HeroCarousel from "@/components/carousel";
import { ContactSection, ContentSections, Footer } from "@/components/content-sections";

function App() {
  return (
    <div className="relative min-h-screen bg-amparo-50 text-primary">
      <Header />
      <main className="bg-amparo-50">
        <HeroCarousel />
        <ContentSections />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
