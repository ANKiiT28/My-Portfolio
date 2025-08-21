
'use client';

import Link from 'next/link';
import { Youtube, ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const videoIds = ['Uv1uHpNhu7M', 'GM9fWFNl4OI', 'iZ6EItTRzx4'];

export function YoutubeChannel() {
  const [api, setApi] = useState<CarouselApi>();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [prevInteraction, setPrevInteraction] = useState(false);
  const [nextInteraction, setNextInteraction] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    const handleScroll = () => {
      setScrollProgress(api.scrollProgress());
    };

    const handleSelect = () => {
      setScrollProgress(api.scrollProgress());
    };
    
    const handlePointerDown = () => {
      setInteracting(true);
    }
    
    const handlePointerUp = () => {
      setInteracting(false);
    }

    api.on('scroll', handleScroll);
    api.on('select', handleSelect);
    api.on('pointerDown', handlePointerDown);
    api.on('pointerUp', handlePointerUp);


    return () => {
      api.off('scroll', handleScroll);
      api.off('select', handleSelect);
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

    const prevBtn = document.querySelector('.youtube-carousel-prev');
    const nextBtn = document.querySelector('.youtube-carousel-next');
    
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
    <section id="youtube" className="bg-accent">
      <div className="container space-y-12 py-20 sm:py-32">
        <div className="text-center">
          <Link
            href="https://www.youtube.com/@AnkiitMaurya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="flex items-center justify-center gap-2 text-3xl font-bold transition-colors hover:text-primary md:text-4xl text-gradient">
              <Youtube className="h-8 w-8 text-red-600" /> My YouTube Channel
            </h2>
          </Link>
          <p className="mt-4 text-lg text-muted-foreground">
            This channel is my canvas for storytelling, cinematography, and
            video production. Explore my creative work beyond the code.
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {videoIds.map((id) => (
              <CarouselItem
                key={id}
                className="pl-4 sm:basis-1/2"
              >
                <div className="p-1">
                   <div className="transform overflow-hidden transition-all duration-300">
                    <Card>
                      <div className="aspect-video">
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${id}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
            <div className="mt-8 flex items-center justify-center gap-4">
                <CarouselPrevious className={cn("youtube-carousel-prev static -translate-y-0 animate-pulse-arrows", prevInteraction && "animate-glow-left-arrow")} />
                <span className="text-sm font-semibold tracking-widest text-muted-foreground">SWIPE</span>
                <CarouselNext className={cn("youtube-carousel-next static -translate-y-0 animate-pulse-arrows", nextInteraction && "animate-glow-right-arrow")} />
            </div>
        </Carousel>
      </div>
    </section>
  );
}
