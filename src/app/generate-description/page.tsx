'use client';

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { generateDescriptionAction } from './actions';
import { Bot, Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  projectTitle: z.string().min(2, 'Project title must be at least 2 characters.'),
});

type FormValues = z.infer<typeof formSchema>;

const initialState = {
  projectDescription: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" /> Generate Description
        </>
      )}
    </Button>
  );
}


export default function GenerateDescriptionPage() {
  const [state, formAction] = useFormState(generateDescriptionAction, initialState);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectTitle: '',
    },
  });

  return (
    <div className="container py-20">
       <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Bot /> AI Project Description Generator
          </CardTitle>
          <CardDescription>
            Enter your project title, and our AI will craft a compelling description for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-8">
              <FormField
                control={form.control}
                name="projectTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 'Modern E-commerce Platform'" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton />
            </form>
          </Form>
        </CardContent>
        {state?.projectDescription && (
            <CardFooter className="flex-col items-start gap-4 border-t pt-6">
                 <h3 className="font-semibold">Generated Description:</h3>
                <Textarea readOnly value={state.projectDescription} rows={5} className="bg-accent" />
            </CardFooter>
        )}
       </Card>
    </div>
  );
}
