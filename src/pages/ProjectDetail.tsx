import { IconArrowLeft, IconBrowser, IconBrandGithub } from '@tabler/icons-react';
import type { Project } from '../types';
import { projectDetail } from '../data/content';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <section className="space-y-6">
      <button
        onClick={onBack}
        className="bg-panel px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 w-fit"
      >
        <IconArrowLeft size={16} /> {projectDetail.backLabel}
      </button>

      <div className="flex flex-col lg:flex-row gap-10">
        <div
          className="lg:w-[46%] rounded-2xl p-1.5"
          style={{ background: 'linear-gradient(135deg,#3a4a12,#2a3410 60%,#000 100%)' }}
        >
          <img
            src={project.thumb}
            className="rounded-xl w-full h-[320px] object-cover"
            alt="project preview"
          />
        </div>
        <div className="flex-1">
          <h1 className="font-display text-4xl md:text-5xl mb-2">{project.title}</h1>
          <p className="text-lime font-medium mb-4">{project.category}</p>
          <p className="text-gray-300 leading-relaxed text-[15px] md:text-base mb-6">{project.desc}</p>
          <div className="flex gap-4">
            <a href="#" className="bg-lime text-black px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2">
              <IconBrowser size={16} /> {projectDetail.demoLabel}
            </a>
            <a href="#" className="bg-lime text-black px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2">
              <IconBrandGithub size={16} /> {projectDetail.gitHubLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-panel rounded-3xl p-8 md:p-10">
        <h2 className="text-lime font-display text-2xl md:text-3xl mb-5">{projectDetail.featuresTitle}</h2>
        <ul className="space-y-4 list-disc list-inside marker:text-white">
          {project.features.map((f, i) => (
            <li key={i}>
              <span className="font-semibold">{f.t}</span>
              <span className="text-gray-400">{f.d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
