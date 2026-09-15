import { projectsData } from "@/content/projects";
import { Project, ProjectSchema } from "@/types/project";

const getValidatedProjects = (): Project[] => {
  return projectsData
    .map((p) => ProjectSchema.parse(p))
    .sort((a, b) => a.sortOrder - b.sortOrder);
};

export const getProjects = (): Project[] => {
  return getValidatedProjects();
};

export const getFeaturedProjects = (): Project[] => {
  return getValidatedProjects().filter((p) => p.featured);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return getValidatedProjects().find((p) => p.slug === slug);
};

export const getProjectById = (id: string): Project | undefined => {
  return getValidatedProjects().find((p) => p.id === id);
};
