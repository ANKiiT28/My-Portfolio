import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="container space-y-12 py-20 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Get In Touch</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of an innovative team.
        </p>
      </div>
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle>Contact Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-primary" />
            <a href="mailto:akm135212@gmail.com" className="text-lg hover:underline">
              akm135212@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-primary" />
            <a href="tel:7667578848" className="text-lg hover:underline">
              +91 7667578848
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="h-6 w-6 text-primary" />
            <p className="text-lg">Dehradun, Uttarakhand</p>
          </div>
           <div className="flex items-center gap-4">
            <Linkedin className="h-6 w-6 text-primary" />
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
              LinkedIn
            </a>
          </div>
           <div className="flex items-center gap-4">
            <Github className="h-6 w-6 text-primary" />
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
              GitHub
            </a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
