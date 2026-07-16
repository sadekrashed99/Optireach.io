import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { System } from '../components/System';
import { Partners } from '../components/Partners';
import { Stats } from '../components/Stats';
import { Services } from '../components/Services';
import { Resources } from '../components/Resources';
import { FeaturedIn } from '../components/FeaturedIn';
import { AboutUs } from '../components/AboutUs';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-brand/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <System />
        <Partners />
        <Stats />
        <Services />
        <Resources />
        <FeaturedIn />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
