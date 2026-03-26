import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Stats } from '@/components/stats';
import { Services } from '@/components/services';
import { Highlights } from '@/components/highlights';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 selection:bg-emerald-500/30 overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Highlights />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
