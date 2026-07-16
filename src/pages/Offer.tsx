import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, Play, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Offer() {
  return (
    <div className="min-h-screen bg-[#111111] text-zinc-300 font-sans selection:bg-[#ccff00]/30 selection:text-white">
      <OfferNavbar />
      <main>
        <OfferHero />
        <OfferGallery />
        <OfferProblems />
        <OfferSteps />
        <OfferTestimonials />
        <OfferTarget />
        <OfferFeatures />
        <OfferComparison />
        <OfferPricing />
        <OfferTeam />
        <OfferFAQ />
        <OfferCTA />
      </main>
      <OfferFooter />
    </div>
  );
}

function OfferNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#ccff00] text-zinc-950 text-[11px] sm:text-xs font-bold tracking-wide py-2.5 px-4 text-center flex items-center justify-center gap-2 z-50 relative uppercase">
        <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
        LIMITED-TIME OFFER — Ends at midnight.
        <div className="flex gap-1 items-center bg-zinc-950 text-[#ccff00] px-2 py-0.5 rounded font-mono text-[10px]">
          <span>08<span className="opacity-50 text-[9px]">h</span></span>:
          <span>48<span className="opacity-50 text-[9px]">m</span></span>:
          <span>56<span className="opacity-50 text-[9px]">s</span></span>
        </div>
        <button className="bg-zinc-950 text-white hover:bg-zinc-800 text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full transition-colors ml-2 hidden sm:inline-flex items-center gap-1">
          START FOR €0 <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <header className="sticky top-0 z-40 bg-[#111111]/80 backdrop-blur-md border-b border-zinc-800/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="font-heading font-bold text-2xl tracking-tighter text-white">
                sharpify
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {['PLANS & PRICING', 'PORTFOLIO', 'HOW IT WORKS', 'FAQ', 'CONTACT'].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-xs font-bold text-zinc-400 hover:text-white transition-colors tracking-widest uppercase">
                  {link}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a href="#quote" className="bg-[#ccff00] hover:bg-[#b3e600] text-zinc-950 text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200">
                Get a quote
              </a>
            </div>

            <button className="md:hidden text-zinc-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function OfferHero() {
  return (
    <section className="pt-20 pb-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Get a website you absolutely <span className="italic font-light text-zinc-400">love</span><br />
            or it's <span className="text-[#ccff00] italic">free.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
            We make websites for home service businesses. A good website brings you more jobs. Yours is ready in 1–5 days — and you pay when you're happy.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <button className="bg-[#ccff00] hover:bg-[#b3e600] text-zinc-950 text-sm font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2">
              Start for €0 — pay on day 5 <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-zinc-500 font-medium text-sm">or</span>
            <button className="text-white hover:text-[#ccff00] font-bold text-sm underline decoration-zinc-700 underline-offset-4 transition-colors">
              see plans from €99 →
            </button>
          </div>
          <div className="flex items-start gap-3 text-xs text-zinc-500 font-medium">
             <div className="w-4 h-4 rounded-full bg-[#ccff00] flex items-center justify-center shrink-0 mt-0.5">
               <Check className="w-3 h-3 text-zinc-950" />
             </div>
             <p><span className="text-white">€0 now</span> — you only pay once you've seen your finished site and you're happy.</p>
          </div>
        </div>
        <div className="relative">
           {/* Placeholder for the laptop/mobile mockup image */}
           <div className="aspect-[4/3] rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-700 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-zinc-800 to-zinc-900 opacity-50" />
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Website Mockups" className="w-full h-full object-cover mix-blend-overlay opacity-30" />
              <span className="absolute text-sm font-mono tracking-widest text-zinc-500">LIVE PREVIEW - DESKTOP & MOBILE</span>
           </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto mt-24 border-t border-zinc-800/50 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-800/50">
          <div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">1–5</div>
            <div className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase">Days to launch</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">2,300+</div>
            <div className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase">Happy clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">26</div>
            <div className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase">Countries</div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-[10px] tracking-widest text-zinc-500 font-bold uppercase">Average rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferGallery() {
  return (
    <section className="py-24">
      {/* Scrolling Text Ribbon */}
      <div className="w-full bg-[#ccff00] text-zinc-950 py-3 overflow-hidden whitespace-nowrap border-y border-zinc-950">
        <div className="inline-block animate-marquee font-bold text-xs tracking-widest uppercase">
          MADE JUST FOR YOU • WORKS ON PHONES • EASY TO FIND ON GOOGLE • READY IN 1-5 DAYS • BRINGS YOU MORE JOBS • ANY LANGUAGE • PAY ONCE • MADE JUST FOR YOU • WORKS ON PHONES • EASY TO FIND ON GOOGLE • READY IN 1-5 DAYS • BRINGS YOU MORE JOBS • ANY LANGUAGE • PAY ONCE
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="mb-16">
          <div className="text-[#ccff00] font-mono text-xs font-bold tracking-widest mb-4">01 THE GALLERY</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Websites we've <span className="italic font-light text-zinc-400">built.</span>
          </h2>
          <p className="text-zinc-500 text-lg">Hover to browse, click to view the full page.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           {/* Mock Gallery Items */}
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="group cursor-pointer">
               <div className="aspect-[4/3] rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden relative mb-4">
                 <div className="absolute top-4 left-4 flex gap-1.5 z-10">
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                   <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                 </div>
                 <img src={`https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&sig=${i}`} alt={`Portfolio item ${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" />
               </div>
               <div className="flex justify-between items-center text-xs font-mono tracking-widest uppercase text-zinc-500">
                 <span>FIG. 0{i} — BUSINESS TYPE</span>
                 <span className="flex items-center gap-1 group-hover:text-white transition-colors">VIEW <ArrowRight className="w-3 h-3" /></span>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

function OfferProblems() {
  const problems = [
    "You lose people the moment they see it",
    "Your site looks old",
    "It doesn't work on phones",
    "They choose your competition",
    "You run ads and don't see results",
    "You have viewers but no applications",
    "Your site is focused on features instead of results",
    "Every change takes weeks",
    "I don't have content to provide, and I don't know where to start"
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <div className="text-zinc-500 font-mono text-xs font-bold tracking-widest mb-4">02 THE QUIET LEAKS</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            This is for you if you<br/>have <span className="italic font-light text-zinc-400">these problems.</span>
          </h2>
          <p className="text-zinc-500 text-lg">Small things that cost you jobs every week.</p>
        </div>

        <div className="space-y-4 mb-24 max-w-4xl">
          {problems.map((prob, i) => (
            <div key={i} className="group border-b border-zinc-800/50 pb-4">
              <button className="w-full flex items-center justify-between text-left">
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
                  <span className="text-xl md:text-2xl font-bold text-zinc-300 group-hover:text-white transition-colors">{prob}</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-600 group-hover:border-zinc-600 transition-colors">
                  <span className="text-xl leading-none">+</span>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* The Fix Banner */}
        <div className="bg-[#443333] rounded-3xl p-8 md:p-12 border border-red-900/30 flex flex-col md:flex-row gap-12 items-center">
           <div className="flex-1">
             <div className="text-red-400 font-mono text-[10px] font-bold tracking-widest uppercase mb-6 flex justify-between">
               <span>THE PROBLEM</span>
               <span>SOLVED IN 1-5 DAYS</span>
             </div>
             <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
               An old website — or no<br/>website — is <span className="italic">losing you clients.</span>
             </h3>
             <p className="text-zinc-300 mb-8">
               New, modern and easy to use — with one clear button for people to contact you. Flip the switch and see the difference.
             </p>
             <button className="bg-[#ccff00] hover:bg-[#b3e600] text-zinc-950 text-sm font-bold px-8 py-4 rounded-full transition-all">
               See the offer
             </button>
           </div>
           <div className="flex-1 w-full relative">
             <div className="aspect-[4/3] rounded-xl bg-zinc-200 border-4 border-zinc-800 overflow-hidden relative">
               <div className="p-8 text-center text-zinc-900">
                  <h1 className="text-4xl font-serif text-blue-800 underline mb-4">A GREAT CONSTRUCTION A</h1>
                  <h2 className="text-2xl text-red-600 mb-8 font-comic-sans">Welcome To My Website!!</h2>
                  <marquee className="bg-yellow-300 text-black p-2 font-bold mb-8">We build houses very good. Call now!!</marquee>
                  <button className="bg-green-500 border-4 border-green-700 text-white font-bold text-xl px-6 py-2 rounded">
                    &gt; CLICK HERE!! &lt;
                  </button>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function OfferSteps() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="sticky top-32 self-start">
            <div className="text-zinc-500 font-mono text-xs font-bold tracking-widest mb-4">03 THE FIX</div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-16">
              Your new<br/>website<br/>in <span className="italic font-light text-zinc-400">3 easy steps.</span>
            </h2>
            <div className="text-[12rem] font-bold text-zinc-900 leading-none">1</div>
          </div>
          
          <div className="space-y-24">
            {/* Step 1 */}
            <div>
              <div className="text-[#ccff00] font-mono text-[10px] font-bold tracking-widest uppercase mb-4">STEP 01 — CHOOSE</div>
              <h3 className="text-3xl font-bold text-white mb-4">Pick your plan</h3>
              <p className="text-zinc-400 mb-8">Choose the plan that suits you best.</p>
              
              <div className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800">
                <div className="flex bg-zinc-950 p-1 rounded-full mb-6">
                  <button className="flex-1 bg-zinc-800 text-white text-xs font-bold py-2 rounded-full">Pay now</button>
                  <button className="flex-1 text-zinc-400 text-xs font-bold py-2 rounded-full">Pay later</button>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-xl border border-[#ccff00]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border-4 border-[#ccff00] bg-zinc-950" />
                      <span className="font-bold text-white tracking-wide">STEEL</span>
                    </div>
                    <span className="font-mono text-white">€0</span>
                  </div>
                  <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border border-zinc-600 bg-zinc-950" />
                      <span className="font-bold text-zinc-400 tracking-wide">TITANIUM</span>
                    </div>
                    <span className="font-mono text-zinc-400">€999</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="text-[#ccff00] font-mono text-[10px] font-bold tracking-widest uppercase mb-4">STEP 02 — WE BUILD</div>
              <h3 className="text-3xl font-bold text-white mb-4">We build your site</h3>
              <p className="text-zinc-400 mb-8">We build it and send you the first version — by email or WhatsApp. Tell us what to change.</p>
              <div className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 aspect-video flex items-center justify-center">
                 <span className="text-zinc-600 font-mono text-xs">MOCKUP CHAT UI</span>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="text-[#ccff00] font-mono text-[10px] font-bold tracking-widest uppercase mb-4">STEP 03 — GO LIVE</div>
              <h3 className="text-3xl font-bold text-white mb-4">You get a beautiful website</h3>
              <p className="text-zinc-400 mb-8">We help publish your site live — and you start getting more clients and sales.</p>
              <div className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800 aspect-video flex items-center justify-center">
                 <span className="text-zinc-600 font-mono text-xs">MOCKUP LIVE SITE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferTestimonials() {
  return (
    <section className="py-24 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-zinc-500 font-mono text-xs font-bold tracking-widest mb-12">04 IN THEIR WORDS</div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Testimonial 1 */}
          <div className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-10 h-10 rounded-full bg-zinc-800" />
               <div>
                 <div className="font-bold text-white text-sm">Kaspars Cveigelis</div>
                 <div className="text-xs text-zinc-500">Wow. Perfect 👍 <span className="text-[10px] ml-2">16:52</span></div>
               </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-zinc-600 font-mono uppercase tracking-widest mt-4">
              <Check className="w-3 h-3" /> SENT ON WHATSAPP
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs">M</div>
               <div>
                 <div className="font-bold text-white text-sm">- MYETI Excavators</div>
                 <div className="text-xs text-zinc-400 mt-1 line-clamp-3">"We just popped up about creating a homepage for 99€ and only 5 days of work. Homeowners, take action before everyone sees it. The first version of the website was ready on time - all as promised. Fast communication, professional work and great results! I recommend this service for everyone!"</div>
               </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl">
             <div className="flex items-center gap-4 mb-4">
               <div className="w-10 h-10 rounded-full bg-zinc-800" />
               <div>
                 <div className="font-bold text-white text-sm">Jānis</div>
                 <div className="text-xs text-zinc-400 mt-1">Opāā! ❤️❤️❤️</div>
               </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="#pricing" className="text-zinc-400 hover:text-white text-sm font-medium transition-colors">
            Compare plans & pricing →
          </a>
        </div>
      </div>
    </section>
  );
}

function OfferTarget() {
  return (
    <section className="py-32 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-[#ccff00] font-mono text-[10px] font-bold tracking-widest uppercase mb-6">IS THIS FOR YOU?</div>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
          Made for <span className="italic text-[#ccff00]">home service</span><br/>business owners.
        </h2>
        <p className="text-zinc-400 text-lg mb-12">
          Whatever you build, fix or install — if you want more jobs, you're in the right place.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['Landscaping', 'Hardscaping', 'Lawn care', 'Deck builders', 'Mobile welders', 'Excavation', 'Concrete', 'Remodeling', 'HVAC', '+ any trade'].map((tag) => (
            <div key={tag} className="bg-zinc-900 border border-zinc-800 text-zinc-300 px-4 py-2 rounded-full text-sm font-medium">
              {tag}
            </div>
          ))}
        </div>

        <p className="text-zinc-500 font-medium">
          <span className="text-white">Any trade is welcome.</span> As long as you own a home service business, this is for you.
        </p>
      </div>
    </section>
  );
}

function OfferFeatures() {
  const features = [
    { title: "A unique hero section", desc: "A bold first screen with your name, your work and one clear button — so visitors get it in seconds and reach out." },
    { title: "Your services, laid out clearly", desc: "Every job you do, shown clearly — so customers know exactly what to book you for." },
    { title: "Your reviews, front and centre", desc: "Your 5-star reviews built right in — now customers trust you before they even call." },
    { title: "Contact form + WhatsApp button", desc: "One tap to message you or send a job. The lead lands straight on your phone." },
    { title: "Set up to be found on Google", desc: "Built so people searching your trade in your area find you — not just your competitors." },
    { title: "Your own favicon", desc: "Your little logo in the browser tab. A small detail that makes you look properly established." },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-[#ccff00] font-mono text-[10px] font-bold tracking-widest uppercase mb-4">WHAT'S INSIDE</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Here's <span className="italic font-light text-[#ccff00]">exactly</span><br/>what you get.
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Not just a pretty website — a complete tool to win you more jobs, with every piece done for you.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
             <div key={i} className="bg-zinc-900/30 border border-zinc-800/50 p-8 rounded-2xl">
               <div className="aspect-[3/2] bg-zinc-950 rounded-xl border border-zinc-800 mb-6 flex items-center justify-center">
                 <span className="text-zinc-700 font-mono text-[10px]">VISUAL MOCKUP</span>
               </div>
               <div className="text-[#ccff00] font-mono text-[10px] font-bold tracking-widest uppercase mb-3">IN BOTH PLANS</div>
               <h4 className="text-xl font-bold text-white mb-3">{f.title}</h4>
               <p className="text-sm text-zinc-400">{f.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferComparison() {
  return (
    <section className="py-24 bg-zinc-100 text-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <div className="text-zinc-500 font-mono text-xs font-bold tracking-widest mb-4">05 THE HONEST COMPARISON</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl">
            See how this <span className="italic font-light">compares</span><br/>to other solutions.
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
             <thead>
               <tr>
                 <th className="py-4 px-4 font-mono text-xs text-zinc-400 uppercase tracking-widest"></th>
                 <th className="py-4 px-6 bg-white rounded-t-2xl shadow-sm border-b-2 border-[#ccff00] min-w-[250px]">
                   <div className="inline-block bg-[#ccff00] text-xs font-bold px-2 py-1 rounded mb-2">⭐ RECOMMENDED</div>
                   <div className="text-2xl font-bold">Sharpify</div>
                 </th>
                 <th className="py-4 px-6 bg-zinc-200/50 rounded-t-2xl min-w-[250px]">
                   <div className="inline-block bg-red-200 text-red-900 text-xs font-bold px-2 py-1 rounded mb-2">THE OLD WAY</div>
                   <div className="text-xl font-bold">Agencies, freelancers, DIY, friends</div>
                   <div className="text-xs text-zinc-500 font-normal mt-1">Slower – pricier – more back-and-forth</div>
                 </th>
               </tr>
             </thead>
             <tbody className="divide-y divide-zinc-200">
               {[
                 ["PRICE", "€0 — pay only if you're happy", "€1000–€20,000", true],
                 ["TIMELINE", "Live in 1–5 days", "4-12 weeks", true],
                 ["DESIGN", "Modern — built to win jobs", "Often looks outdated", true],
                 ["SEO SYSTEM SETUP", "Done for you", "Often a paid add-on", true],
                 ["YOUR EFFORT", "~10 minutes", "5–30 hours of endless back-and-forth", true],
                 ["CHANGES", "1–3 rounds included", "Usually cost extra", true],
                 ["WORKS ON PHONES", "Always", "Not guaranteed", true],
                 ["GUARANTEE", "Pay only when you're happy — revisions until you love it", "None", true],
               ].map((row, i) => (
                 <tr key={i}>
                   <td className="py-4 px-4 font-mono text-[10px] text-zinc-400 uppercase tracking-widest text-right align-top w-32">{row[0]}</td>
                   <td className="py-4 px-6 bg-white shadow-sm border-b border-zinc-100">
                     <div className="flex items-start gap-3">
                       <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                       <span className="font-bold text-zinc-800">{row[1]}</span>
                     </div>
                   </td>
                   <td className="py-4 px-6 bg-zinc-200/50">
                     <div className="flex items-start gap-3 opacity-60">
                       <X className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                       <span className="font-medium text-zinc-600">{row[2]}</span>
                     </div>
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function OfferPricing() {
  return (
    <section id="plans-&-pricing" className="py-24 bg-[#FAF9F6] text-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-zinc-500 font-mono text-xs font-bold tracking-widest mb-4">06 THE COVER PRICE</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Choose your <span className="italic font-light">plan.</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">Save thousands, and weeks of waiting. We build the whole site for you, ready in days. You only pay when you're happy. Start small and grow any time.</p>
        </div>

        {/* Upsell Banner */}
        <div className="bg-[#ccff00] rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-[#ccff00]/20 max-w-5xl mx-auto border-2 border-zinc-950">
           <div>
             <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
               <span className="bg-zinc-950 text-white p-1 rounded">⚡</span> Prepay today — get 3 free bonuses
             </h4>
             <p className="text-sm font-medium">Worth €800 yours free when you pay upfront — on either plan.</p>
           </div>
           <div className="bg-zinc-950 text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-widest shrink-0">€800 VALUE</div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Steel Plan */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-zinc-200 hover:border-zinc-300 transition-colors shadow-lg">
             <div className="text-zinc-500 font-mono text-xs font-bold tracking-widest mb-4">STEEL</div>
             <div className="flex items-baseline gap-1 mb-2">
               <span className="text-6xl font-bold tracking-tighter">€0</span>
             </div>
             <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-6">TO START</div>
             
             <p className="text-zinc-600 mb-4 font-medium">Then <span className="font-bold text-zinc-950">€199</span> on day 5 — <span className="font-bold text-zinc-950">pay only if you love it.</span></p>
             
             <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-8 border border-green-200">
               Or prepay today only €99 - save €100
             </div>

             <ul className="space-y-4 mb-8">
               {['Custom website, built for you', 'Looks great on any device', 'Photo gallery of your work', 'Reviews section', '"Get a Quote" form', 'Click-to-call button', 'Basic SEO setup', 'Any language', 'Setup on your domain', 'Live in 1-3 days', '1 free round of changes'].map((feat, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm font-medium text-zinc-700">
                   <Check className="w-5 h-5 text-zinc-400 shrink-0" />
                   {feat}
                 </li>
               ))}
             </ul>

             <button className="w-full bg-[#ccff00] hover:bg-[#b3e600] text-zinc-950 font-bold py-4 rounded-xl transition-colors text-lg mb-4">
               Get started free →
             </button>
             <div className="text-center text-xs text-zinc-500 font-medium">
               Or prepay €99 & save →<br/><span className="text-[10px] uppercase tracking-widest mt-1 block">🔒 PAY WHEN YOU'RE HAPPY</span>
             </div>
          </div>

          {/* Titanium Plan */}
          <div className="bg-zinc-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative border border-zinc-800">
             <div className="absolute -top-4 right-8 bg-[#ccff00] text-zinc-950 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">ALL-INCLUSIVE</div>
             <div className="text-zinc-400 font-mono text-xs font-bold tracking-widest mb-4">TITANIUM</div>
             <div className="flex items-baseline gap-1 mb-2">
               <span className="text-6xl font-bold tracking-tighter">€0</span>
             </div>
             <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6">TO START</div>
             
             <p className="text-zinc-300 mb-4 font-medium">Then <span className="font-bold text-white">€1,499</span> on day 5 — <span className="font-bold text-white">pay only if you love it.</span></p>
             
             <div className="bg-green-900/30 text-green-400 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-8 border border-green-800">
               Or prepay today only €999 - save €500
             </div>

             <ul className="space-y-4 mb-8">
               {['Custom website, built for you', 'Looks great on any device', 'Photo gallery of your work', 'Reviews section', '"Get a Quote" form', 'Click-to-call button', 'Advanced SEO setup', 'Any language', 'Live in 1-3 days', '5 free rounds of changes', 'New domain included', 'Built-in quote/estimate tool', 'Google Maps review system', 'Additional services pages', 'Custom animations & special effects', 'Exit-intent pop-up', '12-month hosting & maintenance', '1-3 monthly changes included (if needed)', 'Priority same-day support'].map((feat, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm font-medium text-zinc-300">
                   <Check className="w-5 h-5 text-[#ccff00] shrink-0" />
                   {feat}
                 </li>
               ))}
             </ul>

             <button className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-bold py-4 rounded-xl transition-colors text-lg mb-4">
               Get started free →
             </button>
             <div className="text-center text-xs text-zinc-500 font-medium">
               Or prepay €999 & save →<br/><span className="text-[10px] uppercase tracking-widest mt-1 block">🔒 PAY WHEN YOU'RE HAPPY</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferTeam() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-zinc-500 font-mono text-xs font-bold tracking-widest mb-4">07 THE PEOPLE</div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Who will deliver your<br/>new <span className="italic font-light text-zinc-400">perfect</span> website.
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">A team of design, marketing and sales people in Riga. You get a whole team — not just one freelancer.</p>
        </div>
      </div>
      
      {/* Team strip */}
      <div className="w-full flex overflow-hidden mb-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
         {[1,2,3,4,5].map(i => (
           <img key={i} src={`https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&sig=${i+10}`} alt="Team" className="w-1/3 md:w-1/5 h-48 md:h-64 object-cover shrink-0" />
         ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
         <div>
           <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Founder" className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-500" />
         </div>
         <div>
           <div className="text-zinc-500 font-mono text-[10px] font-bold tracking-widest uppercase mb-4">ABOUT THE FOUNDER</div>
           <h3 className="text-4xl font-bold text-white mb-2">NIKS JANSONS</h3>
           <p className="text-[#ccff00] font-bold text-sm mb-6">Entrepreneur - Mad Scientist - Speaker</p>
           <p className="text-zinc-400 mb-8 leading-relaxed">
             He helps service businesses get more customers through online ads — and built Sharpify from the ground up.
           </p>
           
           <div className="grid grid-cols-3 gap-6 mb-8 border-y border-zinc-800 py-6">
             <div>
               <div className="text-2xl font-bold text-white">€50M+</div>
               <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Generated for clients</div>
             </div>
             <div>
               <div className="text-2xl font-bold text-white">2,300+</div>
               <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Businesses served</div>
             </div>
             <div>
               <div className="text-2xl font-bold text-white">26</div>
               <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Countries served</div>
             </div>
           </div>

           <button className="bg-[#ccff00] text-zinc-950 font-bold px-6 py-3 rounded-full text-sm">
             Let's connect →
           </button>
         </div>
      </div>
    </section>
  );
}

function OfferFAQ() {
  const faqs = [
    { q: "Do I have to pay before I see it?", a: "No. You pay absolutely nothing until we send you the first version of the website and you approve it." },
    { q: "What if I'm not happy with the design?", a: "We revise it until you are. If you still don't like it, you walk away and pay nothing." },
    { q: "How long does it take to get my website?", a: "Typically 1 to 5 days, depending on the complexity and how fast you provide feedback." },
    { q: "What happens after I pay?", a: "We publish the site to your domain and it goes live to the public." },
    { q: "What if I don't have photos or content?", a: "We can use premium stock imagery and write professional copy for your specific trade." },
    { q: "Why is this so cheap compared to agencies?", a: "We have built a highly optimized system specifically for home service businesses, cutting out the fluff." },
    { q: "Where is the website built and can I edit it later?", a: "It's built on a modern stack and you will have full access to a CMS to make basic edits." },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-zinc-500 font-mono text-xs font-bold tracking-widest mb-4">08 STILL ASKING?</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Questions, <span className="italic font-light text-zinc-400">answered.</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
             <details key={i} className="group border-b border-zinc-800/50 pb-4">
               <summary className="flex items-center justify-between cursor-pointer list-none">
                 <div className="text-lg font-bold text-zinc-300 group-hover:text-white transition-colors">
                   <div className="text-[10px] text-[#ccff00] font-mono tracking-widest uppercase mb-1">You asked...</div>
                   {faq.q}
                 </div>
                 <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-600 group-hover:border-zinc-600 transition-colors shrink-0">
                   <span className="text-xl leading-none group-open:hidden">+</span>
                   <span className="text-xl leading-none hidden group-open:block">-</span>
                 </div>
               </summary>
               <div className="pt-4 text-zinc-400 text-sm leading-relaxed pr-12">
                 {faq.a}
               </div>
             </details>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <button className="text-sm font-bold text-white hover:text-[#ccff00] transition-colors flex items-center gap-2 mx-auto">
             Still unsure? WhatsApp us <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </section>
  );
}

function OfferCTA() {
  return (
    <section className="py-32 bg-[#ccff00] text-zinc-950 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-zinc-700 font-mono text-xs font-bold tracking-widest mb-4">09 BACK COVER</div>
        <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
          You like<br/>what you <span className="italic font-light">see.</span>
        </h2>
        <p className="text-xl font-medium max-w-2xl mx-auto mb-12">
          You scrolled the whole way here — so you've seen exactly what we build. Yours can look just as good, live this week.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-2xl">
            Start for €0 — pay on day 5 →
          </button>
          <span className="text-sm font-bold opacity-60">or message us WhatsApp</span>
        </div>
      </div>
    </section>
  );
}

function OfferFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-white tracking-tighter">
          sharpify<span className="text-[#ccff00]">.</span>
        </div>
        <div className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
          2026 © SHARPIFY - RIGA, LV. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
