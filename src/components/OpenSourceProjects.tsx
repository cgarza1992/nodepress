import { ProjectCard } from './ProjectCard';
import { SectionHeader } from './SectionHeader';

interface Project {
  name: string;
  url: string;
  description: string;
}

interface OpenSourceProjectsProps {
  projects: Project[];
}

export function OpenSourceProjects({ projects }: OpenSourceProjectsProps) {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeader label="Open Source" title="GitHub Projects" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            name={project.name}
            url={project.url}
            description={project.description}
            gradient="from-orange-500 to-red-500"
            emoji="🚀"
          />
        ))}
      </div>
    </section>
  );
}
