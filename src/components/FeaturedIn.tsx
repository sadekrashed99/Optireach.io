export function FeaturedIn() {
  const logos = [
    { name: 'Forbes', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/1280px-Forbes_logo.svg.png' },
    { name: 'The New York Times', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_New_York_Times_logo.png/800px-The_New_York_Times_logo.png' },
    { name: 'Clutch', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Clutch_logo.svg/1280px-Clutch_logo.svg.png' },
  ];

  return (
    <section className="py-12 bg-zinc-100 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-zinc-400 font-mono text-[10px] tracking-widest uppercase mb-6">
          AS FEATURED IN
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
          {/* using text instead of images for reliable loading in the preview, representing logos */}
          <span className="font-serif text-2xl font-bold text-zinc-800">Forbes</span>
          <span className="font-serif text-xl font-bold text-zinc-800 italic">The New York Times</span>
          <span className="font-sans text-2xl font-bold text-zinc-800 tracking-tight">Clutch</span>
          <span className="font-heading text-2xl font-bold text-zinc-800 tracking-wider">LATKA</span>
          <span className="font-serif text-2xl font-bold text-zinc-800">MIRROR<span className="font-light">REVIEW</span></span>
        </div>
      </div>
    </section>
  );
}
