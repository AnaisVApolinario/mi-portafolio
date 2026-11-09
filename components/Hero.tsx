export default function Hero() {
  return (
    <section
      className="min-h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col justify-center px-10"
      id="hero"
    >
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-4">Hola, soy Anais Valverde 👋</h1>

        <p className="text-xl text-slate-300 max-w-2xl">
          Desarrolladora Fullstack especializada en Spring y React. Construyo
          aplicaciones modernas y escalables.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Contáctame
          </button>

          <button className="border border-slate-500 px-6 py-2 rounded-lg hover:bg-slate-800 transition">
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
}
