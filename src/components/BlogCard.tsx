import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="flex h-full transform flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
        <CardHeader className="p-0">
          <div className="relative h-52 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-t-lg object-cover"
              data-ai-hint={post.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <CardTitle className="mb-2 text-xl">{post.title}</CardTitle>
          <p className="text-muted-foreground">{post.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between p-6 pt-0">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <Button variant="ghost" size="sm">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
