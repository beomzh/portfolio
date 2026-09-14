import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    domain: z.string(),
    period: z.string(),
    company: z.string(),
    stack: z.array(z.string()),
    summary: z.string(),
    highlights: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
