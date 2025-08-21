
'use client';

import { ProjectCard } from '@/components/ProjectCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Land Price Prediction System',
    description:
      'Engineered a machine learning model to accurately predict land prices. Developed a modular pipeline for data preprocessing, model training, and prediction, strengthening skills in Python, DSA, and end-to-end ML workflows.',
    imageUrl: '/Screenshot 2025-08-21 162809.png',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Jupyter'],
    sourceUrl: 'https://github.com/ANKiiT28/land-price-prediction',
    imageHint: 'data analysis chart',
  },
  {
    title: 'Food Waste Management System',
    description:
      'Designed an intuitive UI/UX in Figma for a mobile application aimed at reducing food waste. The platform connects NGOs, donors, and farmers to streamline food distribution to those in need.',
    imageUrl: '/Screenshot 2024-07-11 193236.png',
    tags: ['UI/UX Design', 'Figma', 'Mobile App', 'Social Impact'],
    liveUrl:
      'https://www.figma.com/design/tqOHWqMNbG7ZCiPbuQoK2r/FWMS?node-id=0-1&t=V5CdXh3heSraNz0W-1',
    imageHint: 'mobile application interface',
  },
  {
    title: 'Farmer Sales Platform',
    description:
      'Created a user-centric UI design in Figma for a mobile app empowering farmers to sell their products directly to consumers, cutting out intermediaries and increasing their profitability.',
    imageUrl: '/Gemini_Generated_Image_kl1w5kkl1w5kkl1w.png',
    tags: ['UI/UX Design', 'Figma', 'E-commerce', 'Mobile App'],
    liveUrl:
      'https://www.figma.com/design/L693ux1dYVEaY0f1b7JFPH/%E2%80%A2Farmer-Sales-Platform?t=V5CdXh3heSraNz0W-1',
    imageHint: 'farm produce market',
  },
];

export function Projects() {
  const [api, setApi] = useState<CarouselApi>();
  const [interacting, setInteracting] = useState(false);
  const [prevInteraction, setPrevInteraction] = useState(false);
  const [nextInteraction, setNextInteraction] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    const handlePointerDown = () => setInteracting(true);
    const handlePointerUp = () => setInteracting(false);

    api.on('pointerDown', handlePointerDown);
    api.on('pointerUp', handlePointerUp);

    return () => {
      api.off('pointerDown', handlePointerDown);
      api.off('pointerUp', handlePointerUp);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const handleInteraction = (direction: 'prev' | 'next') => {
      if (direction === 'prev') {
        setPrevInteraction(true);
        setTimeout(() => setPrevInteraction(false), 500);
      } else {
        setNextInteraction(true);
        setTimeout(() => setNextInteraction(false), 500);
      }
    };

    const prevBtn = document.querySelector('.projects-carousel-prev');
    const nextBtn = document.querySelector('.projects-carousel-next');
    
    const prevClickHandler = () => handleInteraction('prev');
    const nextClickHandler = () => handleInteraction('next');

    prevBtn?.addEventListener('click', prevClickHandler);
    nextBtn?.addEventListener('click', nextClickHandler);

    let lastProgress = api.scrollProgress();
    const scrollHandler = () => {
      if (interacting) {
        const currentProgress = api.scrollProgress();
        if (currentProgress > lastProgress) {
          handleInteraction('next');
        } else if (currentProgress < lastProgress) {
          handleInteraction('prev');
        }
        lastProgress = currentProgress;
      }
    };

    api.on('scroll', scrollHandler);

    return () => {
      prevBtn?.removeEventListener('click', prevClickHandler);
      nextBtn?.removeEventListener('click', nextClickHandler);
      api.off('scroll', scrollHandler);
    };
  }, [api, interacting]);


  return (
    <section id="projects" className="container space-y-12 py-20 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl text-gradient">
          Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A selection of my technical and design work.
        </p>
      </div>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent className="-ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                 <div className="h-full transform overflow-hidden rounded-lg transition-all duration-300">
                  <ProjectCard {...project} />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex items-center justify-center gap-4">
            <CarouselPrevious className={cn("projects-carousel-prev static -translate-y-0 animate-pulse-arrows", prevInteraction && "animate-glow-left-arrow")} />
            <span className="text-sm font-semibold tracking-widest text-muted-foreground">SWIPE</span>
            <CarouselNext className={cn("projects-carousel-next static -translate-y-0 animate-pulse-arrows", nextInteraction && "animate-glow-right-arrow")} />
        </div>
      </Carousel>
    </section>
  );
}
