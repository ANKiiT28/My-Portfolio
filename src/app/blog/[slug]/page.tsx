import { getBlogPost, getBlogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug:string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container max-w-4xl py-20 sm:py-32">
        <article>
          <div className="mb-12 text-center">
            <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/5 blur-xl animate-pulse-slow"></div>
                <h1 className="relative mb-4 text-4xl font-bold md:text-5xl text-gradient">{post.title}</h1>
            </div>
            <div className="mt-6 flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/Ankit image.jpg" alt="Ankit Kumar" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
                <span>Ankit Kumar</span>
              </div>
              <span className="text-sm">|</span>
              <div className="flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
              </div>
            </div>
          </div>

          <div className="relative mb-12 h-64 w-full overflow-hidden rounded-lg shadow-lg md:h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              data-ai-hint={post.imageHint}
              priority
            />
          </div>
          
          <div className="prose prose-lg dark:prose-invert mx-auto max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground">
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
          
          <div className="mt-12 text-center">
             <Link href="/blog">
                <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                </Button>
            </Link>
          </div>

        </article>
    </div>
  );
}
