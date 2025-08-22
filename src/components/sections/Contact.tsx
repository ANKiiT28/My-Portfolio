'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, Youtube } from 'lucide-react';
import Link from 'next/link';

const HackerRankIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      {...props}
    >
      <path fill="currentColor" d="M128 32C75 32 32 75 32 128s43 96 96 96 96-43 96-96-43-96-96-96m-31.1 63.9h18.3v39.1h25.7v-39.1h18.3v80.3h-18.3v-28h-25.7v28h-18.3zM37.1 0h181.8v256H37.1z" transform="scale(.9) translate(14)" />
    </svg>
  );
  
const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
>
    <path fill="currentColor" d="M13.48 4.49l-2.02 5.52-5.99.3-4.48 4.48 4.48 4.48 5.99.3 2.02 5.52 8.52-8.52zM15.44 18l-1.52-4.14 4.5-.23-3.38-3.38 3.38-3.38-4.5-.23L15.44 6l-6.44 6.44z" />
</svg>
);


export function Contact() {
  return (
    <section id="contact" className="container space-y-12 py-20 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl text-gradient">Get In Touch</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a question or want to work together? I&apos;d love to hear from you.
        </p>
      </div>
      <div className="mx-auto max-w-lg space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="mailto:akm135212@gmail.com" className="flex-1">
            <Button size="lg" className="w-full">
              <Mail className="mr-2" /> Email Me
            </Button>
          </a>
          <a href="tel:7667578848" className="flex-1">
            <Button size="lg" variant="outline" className="w-full">
              <Phone className="mr-2" /> Call Me
            </Button>
          </a>
        </div>
        <div className="flex items-center justify-center space-x-6 pt-4">
           <a href="mailto:akm135212@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
          </a>
          <a href="tel:7667578848" target="_blank" rel="noopener noreferrer">
            <Phone className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
          </a>
          <Link href="https://github.com/ANKiiT28" target="_blank" rel="noopener noreferrer">
            <Github className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://www.linkedin.com/in/ankit-kumar-maurya28" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://www.hackerrank.com/profile/akm135212" target="_blank" rel="noopener noreferrer">
            <HackerRankIcon className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://leetcode.com/u/akm135212/" target="_blank" rel="noopener noreferrer">
            <LeetCodeIcon className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://www.youtube.com/@AnkiitMaurya" target="_blank" rel="noopener noreferrer">
            <Youtube className="h-8 w-8 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </section>
  );
}
