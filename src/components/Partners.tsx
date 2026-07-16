export function Partners() {
  const partners = [
    { name: 'Meta', sub: 'Business Partner' },
    { name: 'Google', sub: 'Partner' },
    { name: 'TikTok', sub: 'Marketing Partners' },
    { name: 'LinkedIn', sub: 'MARKETING PARTNERS' },
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4">
          [ TECH PARTNERS ]
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white tracking-tight mb-16 max-w-3xl mx-auto">
          We've created long-term partnerships with all the leading tech platforms.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-8 rounded-xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/80 transition-colors"
            >
              <div className="text-xl font-heading font-bold text-zinc-300 mb-1">{p.name}</div>
              <div className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">{p.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
