import type { NavigateFn } from '../types';
import { projects } from '../data/projects';
import { projectsPage } from '../data/content';
import ProjectCard from '../components/ProjectCard';

interface ProjectsProps {
  onNavigate: NavigateFn;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  return (
    <section className="space-y-6">
      <div className="bg-panel rounded-3xl py-10 text-center">
        <h1 className="font-display text-5xl md:text-6xl">{projectsPage.title}</h1>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onClick={() => onNavigate('project-detail', p.id)}
          />
        ))}
      </div>
    </section>
  );
}
