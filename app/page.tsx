import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Clients } from '@/components/clients';
import { Stats } from '@/components/stats';
import { Services } from '@/components/services';
import { VideoSection } from '@/components/video-section';
import { Highlights } from '@/components/highlights';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Footer } from '@/components/footer';
import { AnimatedBackground } from '@/components/animated-background';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden relative">
      <AnimatedBackground color="blue" />
      <Navbar />
      <Hero />
      <Clients />
      <Stats />
      <Services />
      <VideoSection />
      <Highlights />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}