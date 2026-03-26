import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Preloader } from '@/components/preloader';
import { CustomCursor } from '@/components/custom-cursor';
import { SmoothScroll } from '@/components/smooth-scroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'HiTrace Solutions | Optimizing All Business Processes',
  description: 'Advanced fleet management, telematics, IoT, and smart home solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}>
      <body className="bg-slate-950 text-slate-50 font-sans antialiased selection:bg-amber-500/30 md:cursor-none">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
