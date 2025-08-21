'use server';

import { generateProjectDescription } from '@/ai/flows/generate-project-description';

export async function generateDescriptionAction(
  prevState: any,
  formData: FormData,
) {
  const projectTitle = formData.get('projectTitle') as string;

  if (!projectTitle || projectTitle.trim().length < 2) {
    return {
      projectDescription: '',
      error: 'Project title is too short.'
    };
  }

  try {
    const { projectDescription } = await generateProjectDescription({ projectTitle });
    return { projectDescription };
  } catch (error) {
    console.error(error);
    return {
      projectDescription: '',
      error: 'Failed to generate description. Please try again.'
    }
  }
}
