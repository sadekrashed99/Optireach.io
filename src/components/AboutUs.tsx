export function AboutUs() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4">
          [ ABOUT US ]
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight mb-6">
          Who We Are.
        </h2>
        <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">
          Sharpify is a digital marketing agency built for businesses that want real, measurable growth. We build, run and manage marketing & sales systems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="bg-brand hover:bg-brand-hover text-zinc-950 text-sm font-bold px-8 py-3 rounded-full transition-all w-full sm:w-auto"
          >
            Book a session
          </a>
          <a
            href="#services"
            className="bg-transparent border border-zinc-700 hover:border-zinc-500 text-white text-sm font-medium px-8 py-3 rounded-full transition-all w-full sm:w-auto"
          >
            All Services
          </a>
        </div>
      </div>
    </section>
  );
}
