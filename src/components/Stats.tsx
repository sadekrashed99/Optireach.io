import { TrendingUp, Globe2, Users } from 'lucide-react';

export function Stats() {
  const stats = [
    {
      icon: <TrendingUp className="w-5 h-5 text-brand" />,
      tag: "growing every quarter",
      value: "$50M+",
      label: "IN TRACKABLE REVENUE",
      desc: "Tracked across all active client campaigns",
    },
    {
      icon: <Globe2 className="w-5 h-5 text-brand" />,
      tag: "global experience",
      value: "25+",
      label: "COUNTRIES SERVED",
      desc: "Countries we have battle-tested our strategies in",
    },
    {
      icon: <Users className="w-5 h-5 text-brand" />,
      tag: "and growing",
      value: "2300+",
      label: "CLIENTS SERVED",
      desc: "Serving clients all around the world",
    }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4">
            [ DIGITAL DOMINANCE ]
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
            Trusted by 2,300+ <br /> leading organizations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 flex flex-col items-start glow-border hover:bg-zinc-900/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-mono uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
                {stat.tag}
              </div>
              <div className="text-5xl font-heading font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xs font-mono text-zinc-400 tracking-widest uppercase mb-4">{stat.label}</div>
              <p className="text-sm text-zinc-500">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
