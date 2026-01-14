import ProjectCard from "@/app/components/project";
import { projects } from "@/app/data/project";

export default function ProjectsPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
