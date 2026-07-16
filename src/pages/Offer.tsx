import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, Calendar, PenTool, Smartphone, Key, ChevronDown, ShieldCheck, MapPin, Monitor, Phone, GitMerge, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Offer() {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal font-sans selection:bg-gold/30 selection:text-charcoal overflow-x-hidden">
      <OfferNavigation />
      <main>
        <OfferHero />
        <OfferPortfolio />
        <OfferProblems />
        <OfferSteps />
        <OfferFeatures />
        <OfferComparison />
        <OfferPricing />
        <OfferGuarantee />
        <OfferFAQ />
        <OfferFinalCTA />
      </main>
      <OfferFooter />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-[#2B2B2B] h-[64px] z-[999] px-4 flex items-center justify-between shadow-[0_-4px_16px_rgba(0,0,0,0.2)]">
        <span className="text-white text-[14px] font-medium">Ready to get more jobs?</span>
        <button className="bg-gold text-charcoal font-bold px-[20px] h-[36px] flex items-center justify-center rounded-[4px] text-[14px]">
          Book My Call
        </button>
      </div>
    </div>
  );
}

function OfferNavigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-warm-white/85 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gold rotate-45 flex items-center justify-center rounded-[4px] transition-transform group-hover:rotate-90 duration-500">
            <div className="w-3 h-3 bg-charcoal -rotate-45 transition-transform group-hover:-rotate-90 duration-500" />
          </div>
          <span className="font-heading font-bold text-[22px] tracking-tight text-charcoal">
            [Brand Name]
          </span>
        </div>

        <div>
          <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold text-[15px] px-[28px] py-[14px] rounded-[4px] transition-all duration-200 hover:scale-[1.02]">
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
}

function OfferHero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headlineWords = "Get a Website That Actually ".split(" ");

  return (
    <section className="relative min-h-screen bg-warm-white pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background shape */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <div className="absolute top-0 right-[-10%] w-1/2 h-full bg-charcoal opacity-20" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-charcoal rounded-[4px] px-[16px] py-[8px] mb-8"
            >
              <span className="text-gold text-[13px] font-bold tracking-wide">
                Exclusively for Australian Builders & Renovators
              </span>
            </motion.div>

            <h1 className="text-[56px] sm:text-[68px] lg:text-[76px] leading-[1.05] font-heading font-extrabold text-charcoal mb-6">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:block" />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + headlineWords.length * 0.08, duration: 0.5 }}
                className="relative inline-block mr-3"
              >
                Wins You Jobs
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.0, duration: 1.2, ease: "easeOut" }}
                  className="absolute bottom-3 left-0 h-3 bg-gold/50 -z-10"
                />
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (headlineWords.length + 1) * 0.08, duration: 0.5 }}
                className="text-[48px] sm:text-[60px] text-gold block mt-2"
              >
                — Or You Don't Pay.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-[18px] text-[#4A4A4A] mb-10 max-w-[560px] leading-[1.75]"
            >
              No monthly subscriptions. No lock-in contracts. A fully owned website and automated lead pipeline — built specifically for the Australian building and renovation market. Live in under 4 weeks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-8"
            >
              <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-[28px] py-[14px] rounded-[4px] text-[15px] transition-all duration-200 hover:scale-[1.02] w-full sm:w-auto flex items-center justify-center">
                Claim My Free Site Audit
              </button>
              <div className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-[#4A4A4A] mt-4">
                <span>No obligation</span>
                <span className="text-gold font-bold">·</span>
                <span>Free audit included</span>
                <span className="text-gold font-bold">·</span>
                <span>Australian-owned</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="relative rounded-[6px] overflow-hidden aspect-[3/4] shadow-2xl bg-charcoal"
            >
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Premium Residential Bathroom Renovation"
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 1.2, duration: 0.5 }}
              className="absolute bottom-4 left-4 sm:bottom-10 sm:-left-8 bg-charcoal text-white px-[18px] py-[12px] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              <div className="font-bold text-[14px] leading-tight">
                <span className="text-gold mr-2">140+</span>
                Aussie Trade & Reno Businesses
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferPortfolio() {
  const projects = [
    { type: "Bathroom Renovation", loc: "Brisbane, QLD", res: "9 qualified enquiries in first 30 days", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { type: "Custom Home Builder", loc: "Mornington, VIC", res: "Booked out for 6 months", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { type: "Outdoor Extensions", loc: "Sydney, NSW", res: "12 high-end leads in week 2", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { type: "Kitchen Makeovers", loc: "Perth, WA", res: "Increased average job value by 20%", img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { type: "Home Extensions", loc: "Adelaide, SA", res: "Stopped competing on price", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { type: "Luxury Renovations", loc: "Gold Coast, QLD", res: "Closed a $280K project from organic lead", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section className="py-[120px] bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[48px] font-heading font-bold text-white mb-4"
          >
            Websites We've Built for Australian Trade Businesses.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-gold font-medium"
          >
            Click any project to see the full case study.
          </motion.p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-[16px] mb-16 pb-4 md:pb-0 hide-scrollbar">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group cursor-pointer shrink-0 w-[85%] md:w-auto snap-center relative overflow-hidden rounded-[6px] aspect-[4/3] md:aspect-[3/4]"
            >
              <div className="absolute inset-0 bg-[#333333] border border-[#444] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                {/* Browser Chrome Detail */}
                <div className="h-8 bg-[#2B2B2B] border-b border-[#444] flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#555]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#555]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#555]" />
                  <div className="mx-auto w-1/2 h-4 bg-[#111] rounded-[2px] flex items-center justify-center">
                     <div className="w-full h-[3px] bg-gold rounded-full max-w-[80%]"></div>
                  </div>
                </div>
                
                {/* Image Placeholder */}
                <div className="relative h-[calc(100%-2rem)] overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.type}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-charcoal p-[20px] translate-y-full md:group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-gold text-[12px] font-bold uppercase tracking-wide mb-1">{proj.type} — {proj.loc}</div>
                    <div className="text-white text-[14px] font-medium">{proj.res}</div>
                  </div>
                  {/* Mobile always visible */}
                  <div className="md:hidden absolute inset-x-0 bottom-0 bg-charcoal p-[20px]">
                    <div className="text-gold text-[12px] font-bold uppercase tracking-wide mb-1">{proj.type} — {proj.loc}</div>
                    <div className="text-white text-[14px] font-medium">{proj.res}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-block bg-transparent border-[1.5px] border-white text-white font-bold text-[14px] px-[24px] py-[12px] rounded-[4px] hover:border-gold hover:text-gold transition-colors">
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}

function OfferProblems() {
  const checklist = [
    "Your website was built years ago and looks it",
    "You're getting enquiries from tyre-kickers who want the cheapest quote",
    "You're too busy on site to chase up leads or reply to messages",
    "You've tried Facebook ads or SEO and seen zero return",
    "You know you're losing better jobs to competitors with a slicker online presence",
    "You want to attract clients who value quality and aren't scared of a proper budget",
    "You're ready to grow but don't know how to get there without burning time and money",
  ];

  return (
    <section className="py-[120px] bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-gold text-sm font-bold uppercase tracking-widest mb-6">THIS IS FOR YOU IF YOU HAVE THESE PROBLEMS</div>
            <h2 className="text-[42px] font-heading font-bold text-gold mb-10 leading-tight">
              Sound familiar?
            </h2>
            
            <ul className="space-y-0">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-4 mb-2">
                  <Check className="w-6 h-6 text-gold shrink-0 mt-1" strokeWidth={3} />
                  <span className="text-[17px] text-charcoal leading-[2.0] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal border-t-[3px] border-gold rounded-[6px] p-10 shadow-xl"
            >
              <h3 className="text-[26px] font-heading font-bold text-white mb-6 leading-tight">
                The average homeowner visits 4–6 websites before calling anyone.
              </h3>
              <p className="text-[15px] text-white/90 leading-relaxed mb-8">
                If your site doesn't immediately look the part, they're calling your competitor — not because your work is worse, but because their website made a better first impression.
              </p>
              <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-[28px] py-[14px] rounded-[4px] transition-all duration-200 hover:scale-[1.02] text-[15px]">
                Yes, That's Me — Book a Call
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferSteps() {
  const steps = [
    {
      num: "01",
      icon: Calendar,
      title: "Strategy Call (45 Mins)",
      body: "We get to know your business, your best clients, your most profitable jobs. We map out exactly what your website needs to convert visitors into serious enquiries."
    },
    {
      num: "02",
      icon: Monitor,
      title: "We Build. You Approve.",
      body: "Our team writes the copy, designs the layout, builds the pipeline automation, and handles everything technical. You get shown the work before anything goes live."
    },
    {
      num: "03",
      icon: Phone,
      title: "Go Live. Get Leads.",
      body: "Your site launches. Your pipeline activates. Leads start coming in. And you get a monthly performance report so you always know what's working."
    }
  ];

  return (
    <section className="py-[120px] bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[52px] font-heading font-bold text-white mb-4 leading-tight"
          >
            Your New Website & Pipeline in 3 Easy Steps.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-gold font-medium"
          >
            We handle everything. You just approve.
          </motion.p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12 mb-16 pt-12">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-[80px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-gold/50 z-0"></div>

           {steps.map((step, i) => {
             const Icon = step.icon;
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: i * 0.2 }}
                 className="relative z-10 bg-white rounded-[6px] p-8 shadow-xl overflow-hidden"
               >
                 <div className="absolute -top-5 -left-4 text-[96px] font-heading font-extrabold text-gold opacity-8 pointer-events-none select-none leading-none z-0">
                   {step.num}
                 </div>
                 <div className="mb-6 relative z-10">
                   <Icon className="w-10 h-10 text-gold stroke-[1.5]" />
                 </div>
                 <h3 className="text-[22px] font-heading font-bold text-charcoal mb-4 leading-tight relative z-10">{step.title}</h3>
                 <p className="text-[15px] text-[#4A4A4A] leading-relaxed relative z-10">{step.body}</p>
               </motion.div>
             );
           })}
        </div>

        <div className="text-center">
          <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-[28px] py-[14px] rounded-[4px] text-[15px] transition-all duration-200 hover:scale-[1.02] shadow-lg mb-4">
            Book My Free Strategy Call
          </button>
          <p className="text-white/60 text-[14px]">
            Average time from call to live site: 18–28 days.
          </p>
        </div>
      </div>
    </section>
  );
}

function OfferFeatures() {
  const features = [
    {
      icon: Layout,
      title: "Conversion-Optimised Website",
      body: "Designed for one goal — turning visitors into real enquiries. Not just pretty. Purposeful."
    },
    {
      icon: PenTool,
      title: "Copywriting Included",
      body: "Industry-specific copy written for Australian homeowners who are serious about their project. Not generic. Not templated."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      body: "Over 70% of your leads will find you on their phone. Your site will look flawless on every screen size."
    },
    {
      icon: GitMerge,
      title: "Automated Lead Pipeline",
      body: "Instant lead alerts, automated follow-up SMS and email sequences, and a booking system — all set up and ready to go."
    },
    {
      icon: MapPin,
      title: "Local SEO Built In",
      body: "We structure your site so Google knows exactly who you are, where you work, and what jobs to send you."
    },
    {
      icon: Key,
      title: "You Own It. Full Stop.",
      body: "No subscriptions to us. No platform lock-in. Your site, your domain, your data. We hand over the keys."
    }
  ];

  return (
    <section className="py-[120px] bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[52px] font-heading font-bold text-charcoal mb-4 leading-tight"
          >
            Here's Exactly What You Get.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[20px] text-[#4A4A4A] max-w-2xl mx-auto"
          >
            No guesswork. No DIY. A complete done-for-you system, built for your building or renovation business.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            // First row then second row stagger logic
            const delay = (Math.floor(i / 3) * 0.3) + ((i % 3) * 0.15);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className="bg-white border-t-[3px] border-gold rounded-[6px] p-[28px] shadow-[0_4px_20px_rgba(240,235,224,0.6)]"
              >
                <Icon className="w-[44px] h-[44px] text-gold stroke-[1.5] mb-6" />
                <h3 className="text-[20px] font-heading font-bold text-charcoal mb-3 leading-snug">{feat.title}</h3>
                <p className="text-[15px] text-[#4A4A4A] leading-[1.65]">{feat.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OfferComparison() {
  const rows = [
    { feat: "Designed for Australian trade businesses", diy: false, agency: false, us: true },
    { feat: "Industry-specific copywriting", diy: false, agency: false, us: true },
    { feat: "Automated lead pipeline included", diy: false, agency: 'partial', us: true },
    { feat: "Local SEO built in", diy: false, agency: 'partial', us: true },
    { feat: "You own the site outright", diy: false, agency: true, us: true },
    { feat: "No monthly platform fees", diy: false, agency: true, us: true },
    { feat: "Live in under 4 weeks", diy: 'partial', agency: false, us: true },
    { feat: "Ongoing support & reporting", diy: false, agency: false, us: true },
  ];

  const renderIcon = (val: boolean | string) => {
    if (val === true) return <Check className="w-5 h-5 text-gold mx-auto" strokeWidth={3} />;
    if (val === false) return <X className="w-5 h-5 text-[#E05252] mx-auto" strokeWidth={3} />;
    return <span className="text-[#888] font-bold text-lg mx-auto leading-none">~</span>;
  };

  return (
    <section className="py-[120px] bg-charcoal text-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[48px] font-heading font-bold mb-4"
          >
            See How This Compares.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-gold font-medium"
          >
            The real options in front of you right now.
          </motion.p>
        </div>

        <div className="overflow-x-auto rounded-[6px] shadow-2xl mb-16 border border-[#444]">
          <table className="w-full text-left text-[15px] whitespace-nowrap lg:whitespace-normal min-w-[700px]">
            <thead>
              <tr className="bg-[#333333] text-white">
                <th className="py-5 px-6 font-bold w-[40%] text-[15px]">Feature</th>
                <th className="py-5 px-6 font-bold text-center w-[20%] text-[15px]">DIY (Wix / Squarespace)</th>
                <th className="py-5 px-6 font-bold text-center w-[20%] text-[15px]">Cheap Offshore Agency</th>
                <th className="py-5 px-6 font-bold text-center w-[20%] bg-gold text-charcoal text-[15px]">Our System</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#444]">
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-[#2B2B2B]' : 'bg-[#333333]'} style={{ minHeight: '48px' }}>
                  <td className="py-[14px] px-6 font-medium text-white/90 leading-[1.65]">{row.feat}</td>
                  <td className="py-[14px] px-6 text-center align-middle">{renderIcon(row.diy)}</td>
                  <td className="py-[14px] px-6 text-center align-middle">{renderIcon(row.agency)}</td>
                  <td className="py-[14px] px-6 text-center align-middle bg-[rgba(200,169,81,0.08)]">{renderIcon(row.us)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <p className="text-[18px] text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed italic">
            "The question isn't whether you can afford a proper system.<br className="hidden sm:block" />
            It's whether you can afford to keep losing jobs without one."
          </p>
          <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-[28px] py-[14px] rounded-[4px] text-[15px] transition-all duration-200 hover:scale-[1.02]">
            Get My Free Audit →
          </button>
        </div>
      </div>
    </section>
  );
}

function OfferPricing() {
  return (
    <section className="py-[120px] bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[52px] font-heading font-bold text-charcoal mb-4 leading-tight"
          >
            Straight-Up Pricing. No Surprises.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-[#4A4A4A] font-medium"
          >
            Two ways to get started. Both include your full system, built and handed over.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          {/* Card 1 - Website Only (Light) */}
          <div className="bg-white text-charcoal border border-gold/40 rounded-[6px] p-[32px] shadow-sm flex flex-col">
            <h3 className="text-2xl font-heading font-bold mb-2">Website Only</h3>
            <div className="text-gold text-[52px] font-heading font-bold leading-none mb-2">
              <span className="text-2xl mr-1">AUD $</span>3,990
            </div>
            <p className="text-sm text-[#4A4A4A] font-medium mb-8">One-time. Yours forever.</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Custom designed website",
                "Industry copywriting",
                "Mobile optimised",
                "Local SEO setup",
                "Google Business integration",
                "30-day post-launch support"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-[15px] font-medium">{feat}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-transparent border-[1.5px] border-gold text-charcoal hover:bg-gold font-bold py-[14px] rounded-[4px] transition-colors mt-auto text-[15px]">
              Get Started
            </button>
          </div>

          {/* Card 2 - Website + Pipeline (Dark, Recommended) */}
          <div className="bg-[#2B2B2B] text-white rounded-[6px] p-[36px] shadow-2xl relative flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-4 bg-gold text-charcoal text-[11px] font-bold px-[12px] py-[6px] rounded-full uppercase tracking-wider shadow-md">
              MOST POPULAR
            </div>
            
            <h3 className="text-2xl font-heading font-bold mb-2">Website + Pipeline System</h3>
            <div className="text-gold text-[52px] font-heading font-bold leading-none mb-1">
              <span className="text-2xl mr-1">AUD $</span>4,490
            </div>
            <p className="text-[13px] text-white/70 italic mb-3">Equivalent to 1–2 weeks of a junior marketing hire — with guaranteed output.</p>
            <p className="text-[14px] text-white/80 font-medium mb-8 pb-4 border-b border-white/10">One-time build. Low monthly pipeline fee.</p>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {[
                "Custom designed website",
                "Industry copywriting",
                "Mobile optimised",
                "Local SEO setup",
                "Google Business integration",
                "30-day post-launch support",
                "Automated SMS + Email lead follow-up",
                "Lead qualification system",
                "Calendar booking integration",
                "Monthly performance report",
                "Dedicated account manager"
              ].map((feat, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-[15px] font-medium">{feat}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-gold hover:bg-[#9E7A28] text-charcoal font-bold py-[14px] rounded-[4px] transition-all duration-200 hover:scale-[1.02] mt-auto text-[15px]">
              Get the Full System
            </button>
          </div>
        </div>

        <div className="text-center max-w-[600px] mx-auto mb-12">
          <p className="text-[12px] text-[#4A4A4A]">
            *All prices in AUD. GST may apply. Pipeline system requires a low monthly service fee (cancel anytime, 30 days notice).
          </p>
        </div>

        <p className="text-center text-[15px] text-[#4A4A4A] max-w-2xl mx-auto">
          Not sure which is right for you? Book a free call and we'll tell you exactly what your business needs.
        </p>
      </div>
    </section>
  );
}

function OfferGuarantee() {
  return (
    <section className="py-[100px] bg-[#2B2B2B]">
      <div className="max-w-[720px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex justify-center mb-6"
        >
          <ShieldCheck className="w-[80px] h-[80px] text-gold" strokeWidth={1.5} />
        </motion.div>
        
        <h2 className="text-[48px] font-heading font-bold text-white mb-8 leading-tight">
          You Get Results — Or We Keep Working Until You Do.
        </h2>
        
        <div className="text-[17px] text-white/85 leading-[1.8] max-w-[620px] mx-auto mb-10 space-y-4">
          <p>
            If you don't receive your first qualified lead within 30 days of your site going live, we don't charge you another cent until you do. We keep working, optimising, and improving — at no extra cost to you.
          </p>
          <p>
            We've built systems for 140+ Australian building and renovation businesses. Not one has walked away without results. We don't plan to start now.
          </p>
        </div>
        
        <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-[28px] py-[14px] rounded-[4px] text-[15px] transition-all duration-200 hover:scale-[1.02] mb-3">
          I'm Ready — Book My Call
        </button>
        <p className="text-white/60 text-[13px] italic">
          Free strategy call. No obligation. No hard sell.
        </p>
      </div>
    </section>
  );
}

function OfferFAQ() {
  const faqs = [
    { q: "How long does it take to build my website?", a: "From strategy call to go-live, most sites are completed within 18–28 days. We work fast without cutting corners." },
    { q: "Do I need to write my own content?", a: "No. We handle all copywriting as part of the package. We'll ask you some questions about your business, then our writers handle the rest." },
    { q: "Will I actually own my website?", a: "Yes, 100%. Your site, your domain, your hosting. We transfer full ownership to you on completion. No strings attached." },
    { q: "What if I already have a website?", a: "We'll audit it for free on your strategy call. If it's salvageable, we'll tell you. If it's holding you back, we'll show you exactly why." },
    { q: "Do you work with builders outside Victoria?", a: "Yes — we work with building and renovation businesses all across Australia. Most of our process is remote-friendly." },
    { q: "What's included in the pipeline system?", a: "Automated SMS and email follow-up when a lead comes in, lead qualification before it reaches you, a booking system linked to your calendar, and a monthly report so you always know what's performing." },
    { q: "Is there a lock-in contract?", a: "No lock-in on the website. The pipeline system has a low monthly fee (cancel anytime, 30 days notice). We'd rather earn your business every month than lock you in." },
  ];

  return (
    <section className="py-[120px] bg-warm-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-[40px] md:text-[48px] font-heading font-bold text-charcoal text-center mb-16">
          Questions, Answered.
        </h2>

        <div className="border-t border-[#E0D8CD] pt-4">
          {faqs.map((faq, i) => (
             <details key={i} className="group mb-[24px] last:mb-0 border-b border-[#E0D8CD] pb-[24px]">
               <summary className="flex items-center justify-between cursor-pointer list-none outline-none">
                 <span className="text-[18px] font-heading font-semibold text-charcoal pr-8">{faq.q}</span>
                 <ChevronDown className="w-6 h-6 text-gold transition-transform duration-300 group-open:rotate-180 shrink-0" />
               </summary>
               <div className="pt-[16px] text-[#4A4A4A] text-[16px] leading-[1.75] pr-12 overflow-hidden">
                 {faq.a}
               </div>
             </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferFinalCTA() {
  return (
    <section className="py-[140px] bg-gold text-charcoal text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[64px] md:text-[80px] font-heading font-extrabold leading-[1.05] mb-8"
        >
          You've Seen Enough.<br />
          Let's Build Your System.
        </motion.h2>
        
        <p className="text-[20px] text-charcoal/80 font-medium max-w-[560px] mx-auto mb-12 leading-relaxed">
          Book a free 45-minute strategy call. We'll audit your online presence,
          map out exactly what you need, and give you a clear picture — no fluff, no pressure.
        </p>
        
        <button className="bg-charcoal hover:bg-[#3D3D3D] text-white font-bold px-[28px] py-[14px] rounded-[4px] text-[15px] transition-all duration-200 hover:scale-[1.02] shadow-xl hover:shadow-2xl mb-6">
          Book My Free Strategy Call
        </button>

        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[13px] text-charcoal/65">
          <span>Free call. No obligation.</span>
          <span className="w-1 h-1 rounded-full bg-gold brightness-90"></span>
          <span>Results guaranteed.</span>
          <span className="w-1 h-1 rounded-full bg-gold brightness-90"></span>
          <span>Australian-owned.</span>
        </div>
      </div>
    </section>
  );
}

function OfferFooter() {
  return (
    <footer className="bg-[#1E1E1E] border-t border-gold py-10 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-[12px] text-white/50 font-medium text-center">
          <div>ABN: [NUMBER]</div>
          <div className="hidden md:block text-gold font-bold">|</div>
          <div>[Brand Name] © 2026</div>
          <div className="hidden md:block text-gold font-bold">|</div>
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <div className="hidden md:block text-gold font-bold">|</div>
          <div>All prices in AUD</div>
        </div>
      </div>
    </footer>
  );
}
