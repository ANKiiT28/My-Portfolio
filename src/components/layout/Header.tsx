"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';

const navLinks = [
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#art', label: 'Art' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm transition-all">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
           <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Ankit Kumar</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <a href="mailto:akm135212@gmail.com">
            <Button>Contact Me</Button>
          </a>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <Code className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-lg">Ankit Kumar</span>
              </Link>
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
