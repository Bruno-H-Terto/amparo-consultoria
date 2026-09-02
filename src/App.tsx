import './App.css'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h1 className="text-5xl font-bold tracking-tight">
          Meu projeto
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          Plataforma para conectar famílias e profissionais de cuidado.
        </p>

        <button
          className="
            mt-8
            rounded-lg
            bg-white
            px-6
            py-3
            font-medium
            text-slate-950
            transition
            hover:bg-slate-200
          "
        >
          Conheça nossos serviços
        </button>
      </section>
    </main>
  );
}

export default App;
