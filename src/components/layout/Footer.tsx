"use client";

import { Github, Linkedin, Mail, Phone, Youtube } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="https://www.youtube.com/@AnkiitMaurya" target="_blank" rel="noopener noreferrer">
            <Youtube className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
