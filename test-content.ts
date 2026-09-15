import { getProjects, getFeaturedProjects, getProjectBySlug, getProjectById } from "./src/lib/project-api";

try {
  console.log("All projects:", getProjects().map(p => p.slug));
  console.log("Featured projects:", getFeaturedProjects().map(p => p.slug));
  console.log("Get by slug (quest-arena):", !!getProjectBySlug("quest-arena"));
  console.log("Get by ID (proj-002):", !!getProjectById("proj-002"));
  console.log("VALIDATION PASSED!");
} catch (e) {
  console.error("VALIDATION FAILED:", e);
  process.exit(1);
}
