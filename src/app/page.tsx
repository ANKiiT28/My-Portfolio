import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Skills } from '@/components/sections/Skills';
import { ArtisticPortfolio } from '@/components/sections/ArtisticPortfolio';
import { YoutubeChannel } from '@/components/sections/YoutubeChannel';
import { Suspense } from 'react';
import { Certificates } from '@/components/sections/Certificates';
import { Badges } from '@/components/sections/Badges';
import { CurrentlyLearning } from '@/components/sections/CurrentlyLearning';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Suspense fallback={null}>
        <AnimatedSection>
          <Skills />
        </AnimatedSection>
        <AnimatedSection>
          <CurrentlyLearning />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        <AnimatedSection>
          <Certificates />
        </AnimatedSection>
        <AnimatedSection>
          <Badges />
        </AnimatedSection>
        <AnimatedSection>
          <ArtisticPortfolio />
        </AnimatedSection>
        <AnimatedSection>
          <YoutubeChannel />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </Suspense>
    </div>
  );
}
