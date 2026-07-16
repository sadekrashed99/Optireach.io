import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, Hammer, Wrench, Bath, Home as HomeIcon, TreePine, PaintRoller, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal font-sans selection:bg-gold/30 selection:text-charcoal overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <CredibilityStrip />
        <OutcomeProof />
        <WhoThisIsFor />
        <WhatWeBuild />
        <HowItWorks />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-warm-white/85 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gold rotate-45 flex items-center justify-center rounded-sm transition-transform group-hover:rotate-90 duration-500">
              <div className="w-3 h-3 bg-charcoal -rotate-45 transition-transform group-hover:-rotate-90 duration-500" />
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-charcoal">
              [Brand Name]
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {['Why Work With Us', 'Features', 'How It Works'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                className="text-[15px] font-medium text-[#4A4A4A] hover:text-charcoal relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Link to="/offer" className="text-[15px] font-medium text-[#4A4A4A] hover:text-charcoal relative group">
              Offer
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:block">
            <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold text-[15px] px-[28px] py-[14px] rounded-[4px] transition-all duration-200 hover:scale-[1.02]">
              Free Audit Call
            </button>
          </div>

          <button
            className="md:hidden text-charcoal z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-warm-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-charcoal flex flex-col items-center justify-center gap-8 px-6"
          >
            {['Why Work With Us', 'Features', 'How It Works'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading font-bold text-warm-white hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
            <Link
              to="/offer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-heading font-bold text-warm-white hover:text-gold transition-colors"
            >
              Offer
            </Link>
            <button className="bg-gold text-charcoal font-bold text-[15px] px-[28px] py-[14px] rounded-[4px] w-full max-w-sm mt-4">
              Free Audit Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen bg-warm-white pt-32 pb-20 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-cream blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-charcoal rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-sm font-bold tracking-wide">
                Built for Australian Builders & Renovators
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-[72px] leading-[1.1] font-heading font-extrabold text-charcoal mb-6"
            >
              More <span className="relative inline-block">
                Premium
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gold -z-10" />
              </span> Jobs.<br />
              Less Chasing Work.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[18px] text-[#4A4A4A] mb-[28px] max-w-[540px] leading-[1.7]"
            >
              We build the website and sales pipeline that puts your building or renovation business
              in front of clients who are ready to spend — and keeps the enquiries coming in year-round.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12"
            >
              <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-[28px] py-[14px] rounded-[4px] transition-all hover:scale-[1.02] w-full sm:w-auto text-[15px]">
                Book My Free Strategy Call
              </button>
              <a href="#how-it-works" className="text-charcoal font-bold border-[1.5px] border-gold rounded-[4px] px-[28px] py-[12.5px] hover:border-[#9E7A28] hover:text-[#2B2B2B] transition-colors flex items-center gap-2 group bg-transparent">
                See How It Works <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-charcoal/80"
            >
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> No lock-in contracts</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Australian-owned & operated</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-gold" /> Results in 30 days or we keep working</span>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[6px] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Premium Residential Renovation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/10" />
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-12 top-20 bg-charcoal text-white px-[18px] py-[12px] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] max-w-[240px]"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-gold mb-1">Result</div>
              <div className="font-bold text-[14px] leading-tight text-white">$340K Extension — 12 Enquiries in 30 Days</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-8 top-1/2 -translate-y-1/2 bg-charcoal text-white px-[18px] py-[12px] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] max-w-[220px]"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-gold mb-1">Result</div>
              <div className="font-bold text-[14px] leading-tight text-white">Bathroom Reno Pipeline: 8 Qualified Leads/Month</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -left-8 bottom-20 bg-charcoal text-white px-[18px] py-[12px] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.2)] max-w-[260px]"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-gold mb-1">Result</div>
              <div className="font-bold text-[14px] leading-tight text-white">Booked Out 3 Months — Mornington Peninsula Builder</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CredibilityStrip() {
  return (
    <section className="bg-charcoal pt-10 pb-20 relative overflow-hidden">
      {/* Logos Strip */}
      <div className="max-w-7xl mx-auto px-6 mb-12 border-b border-white/10 pb-12">
         <div className="text-[12px] font-normal text-white/50 uppercase tracking-[0.08em] text-center mb-5">
           Platforms we build on & integrate with
         </div>
         <div className="overflow-hidden flex relative">
           <div className="flex animate-marquee whitespace-nowrap gap-16 items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
             {[1, 2].map((group) => (
               <div key={group} className="flex gap-16 shrink-0 items-center text-white">
                 <span className="text-xl font-heading font-bold">Google</span>
                 <span className="text-xl font-heading font-bold">Meta</span>
                 <span className="text-xl font-heading font-bold">Houzz</span>
                 <span className="text-xl font-heading font-bold">hipages</span>
                 <span className="text-xl font-heading font-bold">ServiceSeeking</span>
                 <span className="text-xl font-heading font-bold">Canstar Blue</span>
               </div>
             ))}
           </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 divide-y-2 sm:divide-y-0 lg:divide-x-2 divide-gold/30 pt-[48px]">
          <StatItem stat="$18M+" number={18} prefix="$" suffix="M+" label="in client revenue generated" />
          <StatItem stat="140+" number={140} suffix="+" label="Australian trade & reno businesses" />
          <StatItem stat="30 Days" number={30} suffix=" Days" label="average time to first qualified lead" />
          <StatItem stat="4.9 ★" number={4} suffix=".9 ★" label="Average Google rating across all clients" isFloat={true} floatEnd={4.9} />
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, number, prefix = "", suffix = "", label, isFloat, floatEnd }: any) {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    let startTime: number | null = null;
    const endValue = isFloat ? floatEnd : number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      if (isFloat) {
        setCount(Number((easeOutQuart * endValue).toFixed(1)));
      } else {
        setCount(Math.floor(easeOutQuart * endValue));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [number, isFloat, floatEnd, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ duration: 0.6 }}
      className="text-center px-6 py-6 lg:py-0"
    >
      <div className="text-5xl font-heading font-bold text-gold mb-3">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[16px] text-white/85 font-medium leading-tight max-w-[200px] mx-auto">{label}</div>
    </motion.div>
  );
}

function OutcomeProof() {
  const cards = [
    {
      label: "BATHROOM RENOVATION — MELBOURNE, VIC",
      title: "From 2 calls a month to 11 qualified enquiries",
      story: "Darren runs a mid-size reno business in Melbourne's eastern suburbs. Six weeks after launch, he had more leads than he could handle.",
      author: "Thornton Build Co — Brisbane, QLD"
    },
    {
      label: "HOME EXTENSION — BRISBANE, QLD",
      title: "Closed a $280K project from an organic Google lead",
      story: "They were relying entirely on word of mouth. We built a system that captured high-intent searches in their local area.",
      author: "Atlas Reno Group — Melbourne Eastern Suburbs, VIC"
    },
    {
      label: "KITCHEN & LIVING — PERTH, WA",
      title: "Stopped competing on price with 'cheap' quotes",
      story: "Their old site looked like every other tradie. The new site positioned them as premium, allowing them to raise their margins by 15%.",
      author: "Western Edge Renovations — Perth, WA"
    }
  ];

  return (
    <section id="results" className="py-[120px] bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-heading font-bold text-charcoal mb-4"
          >
            Real Results for Real Builders.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[16px] text-[#4A4A4A] max-w-[560px] mx-auto"
          >
            These aren't vanity metrics. These are enquiries, booked jobs, and dollars in the bank.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-[6px] p-[28px] shadow-sm border-t-[3px] border-gold flex flex-col"
            >
              <div className="mb-6"><span className="bg-gold text-charcoal text-[11px] font-bold uppercase rounded-full px-3 py-1 inline-block">{card.label}</span></div>
              <h3 className="text-[28px] font-heading font-bold text-charcoal mb-4 leading-tight">{card.title}</h3>
              <p className="text-[16px] text-[#4A4A4A] mb-8 leading-relaxed flex-grow">{card.story}</p>
              <div className="text-[15px] italic text-[#4A4A4A] border-t border-cream pt-4">{card.author}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-flex items-center gap-2 text-charcoal font-bold hover:text-gold transition-colors relative group">
            See More Results <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold"></span>
          </a>
        </div>
      </div>
    </section>
  );
}

function WhoThisIsFor() {
  const checklist = [
    "You're winning work through word of mouth — but it's getting inconsistent",
    "Your website looks nothing like the quality of your actual work",
    "You're quoting jobs that don't convert because clients aren't pre-sold",
    "You know you're losing better jobs to competitors with a stronger online presence",
    "You don't have time to deal with marketing — you're on the tools",
    "You want to attract clients who don't push back on price",
  ];

  const icons = [
    { name: "Building & Construction", icon: HomeIcon },
    { name: "Home Renovation", icon: Hammer },
    { name: "Bathroom & Kitchen", icon: Bath },
    { name: "Knockdown Rebuild", icon: Wrench },
    { name: "Landscaping & Outdoor", icon: TreePine },
    { name: "Extensions & Additions", icon: PaintRoller },
  ];

  return (
    <section className="py-[120px] bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-gold text-sm font-bold uppercase tracking-widest mb-6">THIS IS BUILT FOR YOU IF...</div>
            <h2 className="text-[36px] font-heading font-bold text-gold mb-10 leading-tight">
              You build world-class homes.<br />
              Your website shouldn't let you down.
            </h2>
            
            <ul className="space-y-2 mb-10">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <span className="text-[15px] font-medium text-white leading-[2.0]">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-[28px] py-[14px] rounded-[4px] transition-all duration-200 hover:scale-[1.02] text-[15px]">
              Yes, That's Me — Let's Talk
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {icons.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-[#3D3D3D] rounded-[6px] p-8 text-center aspect-square flex flex-col items-center justify-center gap-4 transition-transform hover:scale-[1.02]">
                  <Icon className="w-12 h-12 text-gold stroke-1" />
                  <span className="text-[15px] text-white font-normal">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-[120px] bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-heading font-bold text-charcoal mb-4"
          >
            We Don't Just Build Websites.<br />
            We Build Sales Systems.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#4A4A4A] max-w-2xl mx-auto"
          >
            Two things every serious building or renovation business needs — and most agencies only give you one.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border-t-[3px] border-gold p-10 lg:p-14 shadow-lg"
          >
            <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-8">
               <HomeIcon className="w-12 h-12 text-gold stroke-1" />
            </div>
            <h3 className="text-3xl font-heading font-bold text-charcoal mb-6 leading-tight">
              A Site That Sells Your Work Before You Even Pick Up the Phone
            </h3>
            <p className="text-[16px] text-[#4A4A4A] mb-8 leading-relaxed">
              Your new website is designed around one goal: turning visitors into serious enquiries.
              Fast load times, mobile-first design, professional photography layout, and copy written
              specifically for Australian homeowners who are ready to spend.
            </p>
            <ul className="space-y-2">
              {[
                "Conversion-optimised layout",
                "Industry-specific copywriting",
                "Built for Google (local SEO baked in)",
                "You own it outright — no monthly platform fees",
                "Live in under 4 weeks"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-charcoal leading-[1.9]">
                  <div className="text-gold font-bold text-lg leading-[1.3]">·</div>
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-charcoal border-t-[3px] border-gold p-10 lg:p-14 shadow-lg"
          >
            <div className="w-16 h-16 rounded-full bg-[#3D3D3D] flex items-center justify-center mb-8">
               <svg className="w-12 h-12 text-gold stroke-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
               </svg>
            </div>
            <h3 className="text-3xl font-heading font-bold text-white mb-6 leading-tight">
              An Automated Pipeline That Follows Up, Qualifies, and Books Leads — While You're On Site
            </h3>
            <p className="text-[16px] text-white/80 mb-8 leading-relaxed">
              Most builders lose jobs not because they quoted badly — but because they were too busy
              to follow up. We build you an automated pipeline that sends texts, emails, and reminders
              the moment a lead comes in, so no enquiry falls through the cracks.
            </p>
            <ul className="space-y-2">
              {[
                "Instant lead notification & auto-reply",
                "Automated follow-up sequences (SMS + Email)",
                "Lead qualification before it reaches you",
                "Booking system integrated with your calendar",
                "Monthly performance report"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] font-medium text-white leading-[1.9]">
                  <div className="text-gold font-bold text-lg leading-[1.3]">·</div>
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Calendar,
      title: "We Learn Your Business",
      body: "A focused 45-minute strategy call where we learn your best projects, ideal clients, and what sets your work apart from the competition."
    },
    {
      num: "02",
      icon: PaintRoller,
      title: "We Build Your System",
      body: "Our team handles everything — design, copy, setup, and technical build. You review and approve. No DIY, no confusing dashboards, no homework for you."
    },
    {
      num: "03",
      icon: Hammer,
      title: "Leads Start Coming In",
      body: "Your site goes live, your pipeline activates, and within 30 days you'll see qualified enquiries from homeowners who are serious about their project."
    }
  ];

  return (
    <section id="how-it-works" className="py-[120px] bg-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-heading font-bold text-charcoal mb-4"
          >
            Up and Running in Under 4 Weeks.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#4A4A4A] max-w-2xl mx-auto"
          >
            No tech headaches. No back-and-forth emails. Just a straight-forward process that gets results fast.
          </motion.p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12 lg:gap-20 mb-20">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] border-t-2 border-dashed border-gold/60 z-0"></div>

           {steps.map((step, i) => {
             const Icon = step.icon;
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: i * 0.2 }}
                 className="relative z-10 bg-warm-white"
               >
                 <div className="absolute -top-6 -left-4 text-[96px] font-heading font-extrabold text-gold opacity-8 pointer-events-none select-none">
                   {step.num}
                 </div>
                 <div className="w-24 h-24 bg-cream rounded-full flex items-center justify-center mb-8 relative border-4 border-warm-white">
                   <Icon className="w-10 h-10 text-gold stroke-1" />
                 </div>
                 <h3 className="text-[22px] font-heading font-bold text-charcoal mb-4 relative">{step.title}</h3>
                 <p className="text-[16px] text-[#4A4A4A] leading-relaxed relative">{step.body}</p>
               </motion.div>
             );
           })}
        </div>

        <div className="text-center">
          <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-[28px] py-[14px] rounded-[4px] transition-all duration-200 hover:scale-[1.02] text-[15px]">
            Start With a Free Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="bg-charcoal py-[120px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 relative z-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                <img src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team Lead" className="w-full h-full object-cover rounded-[4px] grayscale hover:grayscale-0 transition-all duration-700" />
             </div>
             {/* Gold frame accent */}
             <div className="absolute -bottom-2 -right-2 lg:-bottom-2 lg:-right-2 w-full max-w-md h-full border-[3px] border-gold rounded-[4px] z-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 ml-2" />
          </div>

          <div>
             <div className="text-gold text-sm font-bold uppercase tracking-widest mb-6">WHO BUILDS YOUR SYSTEM</div>
             <h2 className="text-5xl font-heading font-bold text-white mb-8 leading-tight">
               We're Not a Generic Marketing Agency.
             </h2>
             <div className="space-y-6 text-white/90 text-[16px] leading-relaxed mb-10">
               <p>
                 We work exclusively with building and renovation businesses across Australia.
                 That means we understand project timelines, seasonal slowdowns, the difference between
                 a browser and a buyer — and how to write copy that speaks to Australian homeowners
                 making the biggest financial decision of their lives.
               </p>
               <p>
                 Every system we build is done in-house, by people who know this industry.
                 No outsourcing to overseas freelancers. No cookie-cutter templates.
                 Your business is unique — your website should be too.
               </p>
             </div>
             
             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
               <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-[28px] py-[14px] rounded-[4px] transition-all duration-200 hover:scale-[1.02] text-[15px]">
                 Book a Free Strategy Call
               </button>
               <a href="#" className="text-gold font-bold border-[1.5px] border-gold rounded-[4px] px-[28px] py-[12.5px] hover:border-[#9E7A28] hover:text-[#9E7A28] transition-colors flex items-center gap-2 group bg-transparent">
                 View Client Results
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="book-a-call" className="bg-gold py-[120px] text-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-[72px] leading-tight font-heading font-extrabold text-charcoal mb-8"
        >
          Your Pipeline Is Empty Right Now.<br />
          Let's Fix That.
        </motion.h2>
        
        <p className="text-xl text-charcoal max-w-[560px] mx-auto mb-4 font-medium leading-relaxed">
          Book a free 45-minute strategy call. We'll audit your current online presence,
          show you exactly what's costing you jobs, and outline what a proper system would look like.
        </p>
        
        <p className="text-[14px] text-charcoal/70 mb-10 font-medium">
          No obligation. No sales pressure. Just straight talk.
        </p>

        <button className="bg-charcoal hover:bg-[#3D3D3D] text-white font-bold px-[28px] py-[14px] rounded-[4px] text-[15px] transition-all duration-200 hover:scale-[1.02] shadow-xl hover:shadow-2xl">
          Book My Free Audit Call
        </button>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm font-bold text-charcoal">
          <span>No lock-in contracts</span>
          <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30"></span>
          <span>Results in 30 days</span>
          <span className="w-1.5 h-1.5 rounded-full bg-charcoal/30"></span>
          <span>Australian-owned</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1E1E1E] border-t border-gold py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gold rotate-45 flex items-center justify-center rounded-sm">
              <div className="w-2 h-2 bg-[#1E1E1E] -rotate-45" />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-white">
              [Brand Name]
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {['Why Work With Us', 'Features', 'How It Works'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-white/80 hover:text-gold text-[15px] font-medium transition-colors">
                {link}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
             {/* Social placeholders */}
             {[1,2,3].map(i => (
               <a key={i} href="#" className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-white hover:bg-gold hover:text-charcoal transition-colors">
                 <div className="w-4 h-4 bg-current rounded-sm"></div>
               </a>
             ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/60 mb-6 font-medium">
          <div>ABN: [ABN NUMBER]</div>
          <div>Melbourne, VIC, Australia</div>
          <div>© 2026 [Brand Name]. All rights reserved.</div>
        </div>

        {/* Row 3 */}
        <div className="flex justify-center md:justify-start gap-6 text-[13px] text-[#808080]">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
