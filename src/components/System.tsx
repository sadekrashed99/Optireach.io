import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function System() {
  return (
    <section className="py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4">
            [ WE ARE SHARPIFY ]
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight">
            We build, run and manage <br className="hidden md:block" />
            marketing & sales <span className="text-zinc-500">systems.</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-zinc-800 glow-border bg-zinc-900/50 aspect-[16/9] shadow-2xl">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="text-center group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-brand/90 flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 shadow-lg shadow-brand/20 backdrop-blur">
                  <Play className="w-10 h-10 text-zinc-950 ml-2" fill="currentColor" />
                </div>
                <p className="font-mono text-sm tracking-widest text-zinc-300 font-medium bg-zinc-900/80 px-4 py-2 rounded-full border border-zinc-700/50 backdrop-blur inline-block">WATCH HOW WE DO IT</p>
             </div>
          </div>
          {/* Mock UI overlay to simulate the video presentation style */}
          <div className="absolute top-4 left-4 right-4 h-12 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-lg flex items-center px-4 gap-4 opacity-80 shadow-lg">
             <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500" />
               <div className="w-3 h-3 rounded-full bg-yellow-500" />
               <div className="w-3 h-3 rounded-full bg-green-500" />
             </div>
             <div className="h-6 w-full max-w-2xl bg-zinc-950 rounded-md flex items-center px-3 border border-zinc-800 text-zinc-500 font-mono text-xs overflow-hidden text-ellipsis whitespace-nowrap">
               https://sharpify.io/presentation/q3-marketing-systems-overview
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
