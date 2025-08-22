'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, Mail } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      animationFrameId.current = requestAnimationFrame(() => {
        if (heroRef.current) {
          const xPercent = (e.clientX / window.innerWidth) * 100;
          const yPercent = (e.clientY / window.innerHeight) * 100;
          heroRef.current.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, hsl(var(--primary) / 0.1), transparent 40%)`;
        }
        
        if (imageRef.current) {
          const { left, top, width, height } = imageRef.current.getBoundingClientRect();
          const x = e.clientX - left - width / 2;
          const y = e.clientY - top - height / 2;
          
          const rotateY = (x / (width / 2)) * 15; // Max rotation 15 degrees
          const rotateX = (-y / (height / 2)) * 15; // Max rotation 15 degrees

          imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        }
      });
    };
    
    const handleMouseLeave = () => {
        if (animationFrameId.current) {
            cancelAnimationFrame(animationFrameId.current);
        }
        if (imageRef.current) {
            imageRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        }
        if (heroRef.current) {
            heroRef.current.style.background = `transparent`;
        }
    }

    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      imageContainer.addEventListener('mousemove', handleMouseMove);
      imageContainer.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        imageContainer.removeEventListener('mousemove', handleMouseMove);
        imageContainer.removeEventListener('mouseleave', handleMouseLeave);
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current);
        }
      };
    }
  }, []);

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="w-full bg-background pt-32 pb-20 relative overflow-hidden transition-all duration-300">
      <div className="container grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div 
          ref={imageContainerRef}
          className="relative flex justify-center animate-fade-in-up lg:col-span-2"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <div 
            ref={imageRef}
            className="relative h-64 w-64 rounded-full shadow-lg md:h-80 md:w-80 transition-transform duration-300 ease-out"
          >
            <div className="absolute -inset-2 rounded-full bg-primary/30 blur-xl transition-all duration-300 animate-pulse-slow"></div>
            <Image
              src="/Ankit image.jpg"
              alt="Ankit Kumar"
              width={320}
              height={320}
              priority
              className="relative h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-6 text-center md:text-left lg:col-span-3">
          <div className="space-y-2">
             <h1
              className="animate-fade-in-up text-4xl font-bold text-foreground md:text-5xl"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
            >
              <span className="text-gradient">Creative Technologist</span> & AI Enthusiast
            </h1>
            <h2 
              className="animate-fade-in-up text-2xl font-semibold text-primary"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
                ANKIT KUMAR
            </h2>
            <p
              className="animate-fade-in-up text-muted-foreground md:text-lg"
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
            >
              Creative and motivated Computer Science student (B.Tech, 2022-26) with a strong foundation in C++, DSA, and Python, and growing expertise in AI/ML. Skilled in UI/UX design, video editing, and creative direction, with hands-on experience leading teams, managing projects, and delivering a real-world impact. I am passionate about applying AI and design thinking to build innovative solutions.
            </p>
          </div>
          <div
            className="animate-fade-in-up flex flex-wrap justify-center gap-4 md:justify-start"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <Button size="lg" onClick={handleScrollToContact}>
              <Mail className="mr-2" /> Get in Touch
            </Button>
            <Link href="https://drive.google.com/file/d/1pEo2WFMvwHLqy41srvO7D0nCcn2VX04O/view?usp=sharing" passHref target="_blank">
              <Button variant="outline" size="lg">
                 <Download className="mr-2" /> Download CV
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
