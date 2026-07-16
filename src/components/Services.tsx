import { Target, PenTool, Filter, Tag, Rocket, BarChart2, FileText, UserCog, Database, Settings, Lightbulb, TrendingUp, Calendar, Users2 } from 'lucide-react';

export function Services() {
  const services = [
    { icon: <Target />, title: "Paid advertising management", desc: "Result-driven ads on Meta, Google, TikTok, LinkedIn and YouTube that bring you qualified clients." },
    { icon: <PenTool />, title: "Ad creative & copy", desc: "Scroll-stopping creative and copy that turn cold viewers into booked calls." },
    { icon: <Filter />, title: "Sales funnels", desc: "Custom funnels that attract, qualify and convert — even ones that pay for your ads." },
    { icon: <Tag />, title: "Offer creation", desc: "A sharp offer built with our VILKM method — clients say yes before they see the price." },
    { icon: <Rocket />, title: "Launch strategy & support", desc: "We launch your campaigns in 14 business days and stay beside you the whole way." },
    { icon: <BarChart2 />, title: "SharpOS™ analytics", desc: "Track every metric with SharpOS™ — full visibility over your client pipeline." },
    { icon: <FileText />, title: "VSL scripts & funnel copy", desc: "Video sales letters and funnel copy, written with proven methods that sell and close." },
    { icon: <UserCog />, title: "Personalized management", desc: "A dedicated manager who owns your results — not just your invoices." },
    { icon: <Database />, title: "Sharpify CRM platform", desc: "Our own CRM — every client in one place, so you close more deals." },
    { icon: <Settings />, title: "AI marketing systems", desc: "Ads, content and replies automated with AI — leads without the constant manual work." },
    { icon: <Lightbulb />, title: "AI consulting", desc: "We find where AI saves your business time and money — then set it up for you." },
    { icon: <TrendingUp />, title: "Business development consulting", desc: "Strategy, pricing and the growth moves that actually pay off — worked out with you." },
    { icon: <Calendar />, title: "Weekly business consultations", desc: "Every week, live with Niks — business consultations for premium clients." },
    { icon: <Users2 />, title: "Networking in Riga", desc: "In-person events in Riga to meet other owners and build real connections." },
  ];

  return (
    <section id="services" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <p className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-4">
            [ OUR SERVICES ]
          </p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tight uppercase mb-4">
            WHAT WE DO <br />
            <span className="font-serif italic capitalize text-zinc-400 font-normal">Relentlessly</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl">
            We help service providers generate consistent, qualified leads with done-for-you ad systems, creative, and funnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-300 group"
            >
              <div className="w-10 h-10 flex items-center justify-center text-zinc-400 group-hover:text-brand transition-colors mb-4">
                {s.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-zinc-100 mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#demo"
            className="bg-brand hover:bg-brand-hover text-zinc-950 text-sm font-bold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105"
          >
            Book a free demo
          </a>
        </div>
      </div>
    </section>
  );
}
