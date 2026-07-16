import { Play, Calendar as CalIcon } from 'lucide-react';

export function Resources() {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4">
            [ RESOURCES & INSIGHTS ]
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
            What we do.
          </h2>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-heading font-bold text-zinc-100 mb-6">Educational Content</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Video */}
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer aspect-video md:aspect-[21/9]">
              <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Podcast" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand/90 flex items-center justify-center backdrop-blur shadow-lg shadow-brand/20 group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white ml-1 pl-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-2xl font-heading font-bold text-white mb-2">TET CEO Uldis Tatarčuks: AI, Cybersecurity & the Future</h4>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-zinc-400">BlackBox Šovs • New Episode</p>
                  <button className="bg-brand text-zinc-950 hover:bg-brand-hover text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
                    <Play className="w-3 h-3" fill="currentColor" /> Watch Episode
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {/* YouTube Card */}
              <div className="flex-1 bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">YouTube Channel</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold font-heading">BB</div>
                   <div>
                     <h4 className="font-heading font-bold text-white">BlackBox Šovs</h4>
                     <p className="text-xs text-zinc-400">@blackbox_latvija • 19.9 tūkst. abonenti</p>
                   </div>
                </div>
                <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-medium py-3 rounded-xl transition-colors">
                  Subscribe →
                </button>
              </div>

              {/* Skool Card */}
              <div className="flex-1 bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className="w-2 h-2 bg-brand rounded-full" />
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Join Our Skool Community</span>
                  <span className="text-[10px] bg-brand/20 text-brand px-2 py-0.5 rounded-full ml-auto">FREE</span>
                </div>
                <div className="mb-4 relative z-10">
                  <h4 className="font-heading font-bold text-2xl text-white">sharpify</h4>
                </div>
                <button className="w-full bg-brand hover:bg-brand-hover text-zinc-950 text-sm font-bold py-3 rounded-xl transition-colors relative z-10">
                  Join Free →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold text-zinc-100 mb-6">Live Events</h3>
          <div className="relative rounded-2xl overflow-hidden group aspect-[21/9] md:aspect-[3/1]">
             <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Live Event" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent" />
             
             <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CalIcon className="w-4 h-4 text-brand" />
                    <span className="text-brand font-mono text-xs uppercase tracking-wider">August 8, 2026 • Riga</span>
                  </div>
                  <h4 className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">Stay Sharp Live 2026</h4>
                  <p className="text-zinc-400 max-w-xl">A one-day event for business owners — AI systems, funnels, and sales hires that 10X your business. 500 seats, headlined by Niks Jansons and guests.</p>
                </div>
                <button className="bg-brand hover:bg-brand-hover text-zinc-950 text-sm font-bold px-8 py-4 rounded-full transition-all shrink-0">
                  Get your ticket →
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
