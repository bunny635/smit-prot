import { experimentsData } from "@/content/experiments";
import { Experiment, ExperimentSchema } from "@/types/experiment";

const getValidatedExperiments = (): Experiment[] => {
  return experimentsData
    .map((e) => ExperimentSchema.parse(e))
    .sort((a, b) => a.sortOrder - b.sortOrder);
};

export const getExperiments = (): Experiment[] => {
  return getValidatedExperiments();
};

export const getExperimentBySlug = (slug: string): Experiment | undefined => {
  return getValidatedExperiments().find((e) => e.slug === slug);
};
