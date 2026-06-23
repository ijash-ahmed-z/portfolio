import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const textField = z.string().optional().default('');
const imageField = z.string().optional().default('');
const urlField = z.union([z.string().url(), z.literal('')]).optional().default('');
const emailField = z.union([z.string().email(), z.literal('')]).optional().default('');
const orderField = z.coerce.number().optional().default(999);
const publishedField = z.boolean().optional().default(true);

const linkField = z.object({
  label: z.string(),
  url: z.string()
});

const profile = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    status: textField,
    headline: z.string(),
    tagline: textField,
    summary: z.string(),
    avatar: imageField,
    heroImage: imageField,
    resume: imageField,
    email: emailField,
    phone: textField,
    location: textField,
    stats: z.array(z.object({ value: z.string(), label: z.string() })).optional().default([]),
    socials: z.array(linkField).optional().default([]),
    seoTitle: textField,
    seoDescription: textField
  })
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: textField,
    points: z.array(z.string()).optional().default([]),
    icon: imageField,
    published: publishedField,
    order: orderField
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: textField,
    excerpt: z.string(),
    cover: imageField,
    coverAlt: textField,
    gallery: z.array(z.object({
      image: z.string(),
      caption: textField,
      alt: textField
    })).optional().default([]),
    tools: z.array(z.string()).optional().default([]),
    dataset: textField,
    techniques: z.array(z.string()).optional().default([]),
    problem: textField,
    approach: z.array(z.string()).optional().default([]),
    insights: z.array(z.string()).optional().default([]),
    growthNote: textField,
    github: urlField,
    liveDemo: urlField,
    tags: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
    published: publishedField,
    order: orderField,
    seoTitle: textField,
    seoDescription: textField
  })
});

const skills = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/skills' }),
  schema: z.object({
    title: z.string(),
    category: textField,
    icon: imageField,
    level: textField,
    tags: z.array(z.string()).optional().default([]),
    published: publishedField,
    order: orderField
  })
});

const certificates = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/certificates' }),
  schema: z.object({
    title: z.string(),
    issuer: textField,
    image: imageField,
    file: imageField,
    issuedDate: textField,
    url: urlField,
    skills: z.array(z.string()).optional().default([]),
    published: publishedField,
    order: orderField
  })
});

const documents = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/documents' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['Resume', 'Case Study', 'Report', 'Certificate', 'Other']).optional().default('Other'),
    description: textField,
    file: imageField,
    externalUrl: urlField,
    tags: z.array(z.string()).optional().default([]),
    published: publishedField,
    order: orderField
  })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    cover: imageField,
    tags: z.array(z.string()).optional().default([]),
    published: publishedField,
    order: orderField,
    seoTitle: textField,
    seoDescription: textField
  })
});

export const collections = { profile, services, projects, skills, certificates, documents, posts };
