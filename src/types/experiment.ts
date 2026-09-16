import { z } from "zod";
import { MediaSchema, TechnologySchema } from "./project";

export const ExperimentStatusEnum = z.enum([
  "EXPERIMENTAL",
  "PROTOTYPE",
  "CONCEPT",
  "ARCHIVED",
  "IN PROGRESS"
]);

export const ExperimentSchema = z.object({
  id: z.string(),
  slug: z.string(),
  experimentNumber: z.number(),
  title: z.string().min(1),
  status: ExperimentStatusEnum.default("EXPERIMENTAL"),
  description: z.string(),
  technologies: z.array(TechnologySchema),
  previewMedia: MediaSchema.optional(),
  featured: z.boolean().default(false),
  sortOrder: z.number().default(0),
});

export type Experiment = z.infer<typeof ExperimentSchema>;
export type ExperimentStatus = z.infer<typeof ExperimentStatusEnum>;
