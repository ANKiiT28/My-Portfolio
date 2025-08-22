"use client";

import { Github, Linkedin, Mail, Phone, Youtube } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {year || ''} Ankit Kumar. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
           <a href="mailto:akm135212@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </a>
          <a href="tel:7667578848" target="_blank" rel="noopener noreferrer">
            <Phone className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </a>
          <Link href="https://github.com/ANKiiT28" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://www.linkedin.com/in/ankit-kumar-maurya28" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://www.hackerrank.com/profile/akm135212" target="_blank" rel="noopener noreferrer">
            <HackerRankIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://leetcode.com/u/akm135212/" target="_blank" rel="noopener noreferrer">
            <LeetCodeIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://www.youtube.com/@AnkiitMaurya" target="_blank" rel="noopener noreferrer">
            <Youtube className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
