import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-card rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform"
    >
      <img
        src={project.thumb}
        className="w-full h-[190px] object-cover"
        alt={`${project.title} thumbnail`}
      />
      <div className="p-5">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="text-lime text-sm mb-2">{project.category}</p>
        <p className="text-gray-400 text-sm leading-relaxed">{project.cardDesc}</p>
      </div>
    </div>
  );
}
