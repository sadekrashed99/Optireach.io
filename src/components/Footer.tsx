import { Instagram, Facebook, Youtube, Linkedin, MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & Socials */}
          <div className="col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="font-heading font-bold text-3xl tracking-tighter text-white">
                sharpify
                <span className="text-brand">.</span>
              </span>
            </a>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand hover:border-brand transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Results (Client Wins)</a></li>
              <li><a href="#" className="text-sm text-brand hover:text-brand-light flex items-center gap-2 transition-colors"><span className="text-yellow-500">★</span> Rate us & leave feedback</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Paid Media</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">CRM Systems</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Ad Creative</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Sales Funnels</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Podcast</a></li>
              <li><a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-zinc-500 shrink-0" />
                <span className="text-sm text-zinc-400">Vilandas iela 8, Riga, Latvia</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-zinc-500 shrink-0" />
                <a href="mailto:info@sharpify.io" className="text-sm text-zinc-400 hover:text-white transition-colors">info@sharpify.io</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-zinc-500 shrink-0" />
                <span className="text-sm text-zinc-400">+371 29 427 717</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900">
          <p className="text-xs text-zinc-600 mb-4 md:mb-0">
            2026 © Sharpify. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating Apply Now Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="#apply" className="flex items-center gap-2 bg-brand hover:bg-brand-hover text-zinc-950 text-sm font-bold px-6 py-3 rounded-full shadow-lg shadow-brand/20 transition-all transform hover:scale-105">
           <span className="w-2 h-2 bg-zinc-950 rounded-full animate-pulse" />
           APPLY NOW
        </a>
      </div>
    </footer>
  );
}
