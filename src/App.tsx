import Header from "@/components/header";
import HeroCarousel from "@/components/carousel";

function App() {
  return (
    <>
      <Header />
      <main className="bg-primary text-primary">
        <HeroCarousel />
      </main>
    </>
  );
}

export default App;
