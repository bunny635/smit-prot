import { z } from "zod";

export const MediaSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  type: z.enum(["image", "video"]).default("image"),
  caption: z.string().optional(),
});

export const TechnologySchema = z.object({
  name: z.string(),
  slug: z.string().optional(),
});

export const ProjectSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string().min(1, "Title is required"),
  artifactNumber: z.number(),
  year: z.number().min(1990).max(2100),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
  thumbnail: MediaSchema,
  heroImage: MediaSchema,
  technologies: z.array(TechnologySchema),
  problem: z.string(),
  approach: z.string(),
  challenges: z.array(z.string()),
  solutions: z.array(z.string()),
  results: z.string(),
  gallery: z.array(MediaSchema),
  liveUrl: z.string().url("Invalid Live URL").refine(val => val.startsWith("http://") || val.startsWith("https://"), { message: "Must use http or https protocol" }).optional().or(z.literal("")),
  sourceUrl: z.string().url("Invalid Source URL").refine(val => val.startsWith("http://") || val.startsWith("https://"), { message: "Must use http or https protocol" }).optional().or(z.literal("")),
  featured: z.boolean().default(false),
  sortOrder: z.number().default(0),
});

export type Media = z.infer<typeof MediaSchema>;
export type Technology = z.infer<typeof TechnologySchema>;
export type Project = z.infer<typeof ProjectSchema>;

