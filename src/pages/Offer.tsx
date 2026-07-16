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
      <div className="md:hidden fixed bottom-0 inset-x-0 bg-charcoal p-4 z-50 flex items-center justify-between shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <span className="text-white text-sm font-bold">Ready to get more jobs?</span>
        <button className="bg-gold text-charcoal font-bold px-4 py-2 rounded-[4px] text-sm">
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
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gold rotate-45 flex items-center justify-center rounded-sm transition-transform group-hover:rotate-90 duration-500">
            <div className="w-3 h-3 bg-charcoal -rotate-45 transition-transform group-hover:-rotate-90 duration-500" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-charcoal">
            [Brand Name]
          </span>
        </Link>

        <div>
          <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold text-[14px] px-6 py-3 rounded-[4px] transition-all duration-300 hover:scale-[1.03]">
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
              className="inline-flex items-center gap-2 bg-charcoal rounded-full px-4 py-1.5 mb-8"
            >
              <span className="text-gold text-sm font-bold tracking-wide">
                Exclusively for Australian Building & Renovation Businesses
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
              className="text-[20px] text-[#4A4A4A] mb-10 max-w-[580px] leading-relaxed"
            >
              No monthly subscriptions. No lock-in contracts. No tech headaches.
              Just a fully owned website and automated lead pipeline, designed for the
              Australian building and renovation market — ready in under 4 weeks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-8"
            >
              <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-10 py-5 rounded-[4px] text-lg transition-all hover:scale-[1.03] w-full sm:w-auto h-[56px] flex items-center justify-center">
                Claim Your Free Site Audit
              </button>
              <p className="text-[13px] text-[#4A4A4A] italic mt-3 text-center sm:text-left">
                Free. No obligation. Takes 45 minutes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] font-medium text-[#4A4A4A]"
            >
              <span>★★★★★ 4.9 Rating</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>140+ Builders & Renovators</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
              <span>$18M+ Revenue Generated</span>
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
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Premium Residential Build"
                className="w-full h-full object-cover opacity-90"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 1.2, duration: 0.5 }}
              className="absolute -bottom-6 sm:bottom-10 -left-4 sm:-left-12 bg-charcoal text-gold px-6 py-4 rounded-full shadow-xl max-w-[300px]"
            >
              <div className="font-bold text-[14px] leading-snug">
                "Booked out 3 months ahead"
                <span className="block text-white text-xs font-normal mt-1 opacity-80">— Eastern Suburbs Builder, Melbourne</span>
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
    { type: "Bathroom Renovation", loc: "Brisbane, QLD", res: "9 enquiries in first 30 days" },
    { type: "Custom Home Builder", loc: "Mornington, VIC", res: "Booked out for 6 months" },
    { type: "Outdoor Extensions", loc: "Sydney, NSW", res: "12 high-end leads in week 2" },
    { type: "Kitchen Makeovers", loc: "Perth, WA", res: "Increased average job value by 20%" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="rounded-[6px] bg-[#333333] border border-[#444] overflow-hidden relative shadow-lg aspect-[3/4]">
                {/* Browser Chrome Detail */}
                <div className="h-8 bg-[#222] border-b border-[#444] flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#555]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#555]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#555]" />
                  <div className="mx-auto w-1/2 h-4 bg-[#111] rounded-[2px] flex items-center justify-center">
                     <div className="w-1/2 h-1 bg-gold/30 rounded-full"></div>
                  </div>
                </div>
                
                {/* Image Placeholder */}
                <div className="relative h-[calc(100%-2rem)]">
                  <img
                    src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&sig=${i}`}
                    alt={proj.type}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-charcoal/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
                    <div className="text-gold text-xs font-bold uppercase tracking-widest mb-1">{proj.type}</div>
                    <div className="text-white text-[15px] font-medium mb-3">{proj.loc}</div>
                    <div className="text-sm text-white/90 border-t border-white/20 pt-3">
                      Result: <span className="font-bold">{proj.res}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#" className="inline-block text-white font-bold text-lg hover:text-gold transition-colors">
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
            <h2 className="text-[44px] font-heading font-bold text-charcoal mb-10 leading-tight">
              Sound familiar?
            </h2>
            
            <ul className="space-y-5">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Check className="w-6 h-6 text-gold shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-[17px] text-charcoal leading-[1.6] font-medium">{item}</span>
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
                The average Australian homeowner visits 4–6 websites before making a call.
              </h3>
              <p className="text-[15px] text-white/90 leading-relaxed mb-8">
                If your site doesn't immediately signal quality, credibility, and professionalism
                — they're calling your competitor. Not because your work is worse.
                Because their website made a better first impression.
              </p>
              <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-8 py-4 rounded-[4px] transition-all hover:scale-[1.03]">
                Let's Fix That →
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
        <div className="text-center mb-20">
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

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gold/40 z-0 transform -translate-y-1/2"></div>

           {steps.map((step, i) => {
             const Icon = step.icon;
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: i * 0.2 }}
                 className="relative z-10 bg-white rounded-[6px] p-8 shadow-xl"
               >
                 <div className="text-[64px] font-heading font-extrabold text-gold leading-none mb-6">
                   {step.num}
                 </div>
                 <div className="mb-6">
                   <Icon className="w-10 h-10 text-gold stroke-[1.5]" />
                 </div>
                 <h3 className="text-[22px] font-heading font-bold text-charcoal mb-4 leading-tight">{step.title}</h3>
                 <p className="text-[15px] text-[#4A4A4A] leading-relaxed">{step.body}</p>
               </motion.div>
             );
           })}
        </div>

        <div className="text-center">
          <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-10 py-5 rounded-[4px] text-lg transition-all hover:scale-[1.03] shadow-lg mb-4">
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
            Not a template. Not a DIY tool. A complete done-for-you system, built for your business.
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
                className="bg-white border-t-[3px] border-gold rounded-[6px] p-8 shadow-[0_4px_20px_rgba(240,235,224,0.6)]"
              >
                <Icon className="w-10 h-10 text-gold stroke-[1.5] mb-6" />
                <h3 className="text-[20px] font-heading font-bold text-charcoal mb-3 leading-snug">{feat.title}</h3>
                <p className="text-[15px] text-[#4A4A4A] leading-relaxed">{feat.body}</p>
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
    { feat: "Designed for Australian trade businesses", us: true, diy: false, agency: false },
    { feat: "Industry-specific copywriting", us: true, diy: false, agency: false },
    { feat: "Automated lead pipeline included", us: true, diy: false, agency: 'partial' },
    { feat: "Local SEO built in", us: true, diy: false, agency: 'partial' },
    { feat: "You own the site outright", us: true, diy: false, agency: true },
    { feat: "No monthly platform fees", us: true, diy: false, agency: true },
    { feat: "Live in under 4 weeks", us: true, diy: 'partial', agency: false },
    { feat: "Ongoing support & reporting", us: true, diy: false, agency: false },
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
          <table className="w-full text-left text-[15px] whitespace-nowrap lg:whitespace-normal">
            <thead>
              <tr className="bg-gold text-charcoal">
                <th className="py-5 px-6 font-bold w-2/5">Feature</th>
                <th className="py-5 px-6 font-bold text-center w-1/5">Our System</th>
                <th className="py-5 px-6 font-bold text-center w-1/5">DIY (Wix/Squarespace)</th>
                <th className="py-5 px-6 font-bold text-center w-1/5">Cheap Offshore Agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#444]">
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-[#2B2B2B]' : 'bg-[#333333]'}>
                  <td className="py-4 px-6 font-medium text-white/90">{row.feat}</td>
                  <td className="py-4 px-6 text-center">{renderIcon(row.us)}</td>
                  <td className="py-4 px-6 text-center">{renderIcon(row.diy)}</td>
                  <td className="py-4 px-6 text-center">{renderIcon(row.agency)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <p className="text-[18px] text-white/90 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            "The question isn't whether you can afford a proper system.<br className="hidden sm:block" />
            It's whether you can afford to keep losing jobs without one."
          </p>
          <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-10 py-5 rounded-[4px] text-lg transition-all hover:scale-[1.03]">
            Get My Free Audit
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Card 1 */}
          <div className="bg-charcoal text-white rounded-[6px] p-8 lg:p-10 shadow-xl flex flex-col">
            <h3 className="text-2xl font-heading font-bold mb-2">Website Only</h3>
            <div className="text-gold text-[52px] font-heading font-bold leading-none mb-2">
              <span className="text-2xl mr-1">AUD $</span>3,990
            </div>
            <p className="text-sm text-white/70 font-medium mb-8">One-time. Yours forever.</p>
            
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
                  <span className="text-[15px]">{feat}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-gold hover:bg-[#9E7A28] text-charcoal font-bold py-4 rounded-[4px] transition-colors mb-4">
              Get Started
            </button>
            <p className="text-center text-xs text-white/40">*Prices in AUD. GST may apply.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-2 border-gold rounded-[6px] p-8 lg:p-10 shadow-xl relative flex flex-col transform md:-translate-y-4">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-4 bg-gold text-charcoal text-[13px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">Website + Pipeline System</h3>
            <div className="text-gold text-[52px] font-heading font-bold leading-none mb-2">
              <span className="text-2xl mr-1">AUD $</span>4,490
            </div>
            <p className="text-sm text-[#4A4A4A] font-medium mb-8">One-time build. Low monthly pipeline fee.</p>
            
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
                  <span className="text-[15px] text-charcoal font-medium">{feat}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-charcoal hover:bg-[#1a1a1a] text-white hover:text-gold border border-charcoal hover:border-gold font-bold py-4 rounded-[4px] transition-colors mb-4">
              Get the Full System
            </button>
            <p className="text-center text-xs text-[#888]">*Monthly pipeline fee from AUD $99/mo. Cancel anytime.</p>
          </div>
        </div>

        <p className="text-center text-[14px] text-[#4A4A4A]">
          Not sure which is right for you? Book a free call and we'll tell you exactly what your business needs.
        </p>
      </div>
    </section>
  );
}

function OfferGuarantee() {
  return (
    <section className="py-[120px] bg-charcoal">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8"
        >
          <ShieldCheck className="w-20 h-20 text-gold" strokeWidth={1.5} />
        </motion.div>
        
        <h2 className="text-[40px] md:text-[52px] font-heading font-bold text-white mb-8 leading-tight">
          You Either Get Results — Or We Keep Working.
        </h2>
        
        <p className="text-[17px] text-white/90 leading-[1.8] mb-12">
          If you don't receive your first qualified lead within 30 days of your site going live,
          we don't stop until you do — at no extra charge. We back our work because we know it works.
          We've never had a client who didn't see results. We don't plan to start now.
        </p>
        
        <button className="bg-gold hover:bg-[#9E7A28] text-charcoal font-bold px-10 py-5 rounded-[4px] text-lg transition-all hover:scale-[1.03] mb-4">
          I'm Ready. Book My Call.
        </button>
        <p className="text-white/50 text-[14px]">
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

        <div className="space-y-2 border-y border-[#E0D8CD] py-4">
          {faqs.map((faq, i) => (
             <details key={i} className="group border-b border-[#E0D8CD] last:border-0">
               <summary className="flex items-center justify-between cursor-pointer list-none py-6 outline-none">
                 <span className="text-[18px] font-bold text-charcoal pr-8">{faq.q}</span>
                 <ChevronDown className="w-6 h-6 text-gold transition-transform group-open:rotate-180 shrink-0" />
               </summary>
               <div className="pb-6 text-[#4A4A4A] text-[16px] leading-relaxed pr-12 overflow-hidden transition-all">
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
          className="text-[56px] md:text-[80px] font-heading font-extrabold leading-[1.05] mb-8"
        >
          You've Seen Enough.<br />
          Let's Build Your System.
        </motion.h2>
        
        <p className="text-[20px] text-charcoal/80 font-medium max-w-[560px] mx-auto mb-12 leading-relaxed">
          Book a free 45-minute strategy call. We'll audit your online presence,
          map out exactly what you need, and give you a clear picture — no fluff, no pressure.
        </p>
        
        <button className="bg-charcoal text-white hover:text-gold border-2 border-transparent hover:border-gold font-bold px-10 py-5 rounded-[4px] text-xl transition-all shadow-xl hover:shadow-2xl mb-10">
          Book My Free Strategy Call
        </button>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[15px] font-bold text-charcoal">
          <span>No cost. No obligation.</span>
          <span className="w-1.5 h-1.5 rounded-full bg-charcoal"></span>
          <span>Results guaranteed.</span>
          <span className="w-1.5 h-1.5 rounded-full bg-charcoal"></span>
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-[13px] text-white/50 font-medium text-center">
          <div>ABN: [NUMBER]</div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-white/20"></div>
          <div>[Brand Name] © 2026</div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-white/20"></div>
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <div className="hidden md:block w-1 h-1 rounded-full bg-white/20"></div>
          <div>All prices in AUD</div>
        </div>
      </div>
    </footer>
  );
}
