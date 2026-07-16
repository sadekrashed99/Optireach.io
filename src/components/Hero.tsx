import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const cards = [
    { title: "AVODECK", value: "25K€", label: "DEAL VALUE", sub: "9 CLOSED DEALS IN 2 WEEKS", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "PELDBASEINIEM.LV", value: "34K€", label: "DEAL VALUE", sub: "3 DEALS IN ONE MONTH", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "SCO TRADING", value: "3x", label: "REVENUE IN 3 MONTHS", sub: "50K A MONTH", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { title: "SUPERIOR REMODELERS", value: "$100K", label: "DEAL VALUE", sub: "3mo TO RESULT", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <span className="text-brand font-mono text-sm tracking-widest uppercase border border-brand/30 bg-brand/10 px-4 py-1.5 rounded-full">
            FOR SERVICE PROVIDERS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-tight max-w-5xl mx-auto mb-8"
        >
          We bring your business <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
            new projects and deals
          </span>
        </motion.h1>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div className="mt-20 relative w-full overflow-hidden flex">
        <motion.div
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...cards, ...cards].map((card, i) => (
            <div
              key={i}
              className="relative min-w-[300px] h-[400px] md:min-w-[400px] rounded-2xl overflow-hidden group border border-zinc-800/50"
            >
              <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-zinc-400 font-mono text-xs mb-3 tracking-widest uppercase">{card.title}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white font-heading">{card.value}</span>
                  <span className="text-sm font-medium text-brand">{card.label}</span>
                </div>
                <p className="text-zinc-300 text-sm font-medium border-t border-zinc-800 pt-4 mt-2">
                  {card.sub}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
