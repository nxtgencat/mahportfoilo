import { IconArrowRight, IconSend } from '@tabler/icons-react';
import type { NavigateFn } from '../types';
import { projects } from '../data/projects';
import { hero, homeAbout, recentProjects, getInTouch, socialIcons } from '../data/content';
import ProjectCard from '../components/ProjectCard';

interface HomeProps {
  onNavigate: NavigateFn;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <section className="space-y-6">
      {/* HERO */}
      <div className="relative overflow-hidden py-16 md:py-24 flex flex-col items-center text-center">
        <div className="absolute inset-0 flex flex-col justify-center gap-4 z-0">
          <div className="ghost-text text-[10vw] text-center">{hero.ghostLine1}</div>
          <div className="ghost-text text-[10vw] text-center">{hero.ghostLine2}</div>
        </div>
        <div className="relative z-10">
          <p className="text-lg md:text-xl mb-1">{hero.greeting}</p>
          <h1 className="font-display text-lime text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none">{hero.name}</h1>
          <p className="text-gray-300 mt-4 text-sm md:text-base">
            {hero.subtitleLine1}<br className="hidden md:block" /> {hero.subtitleLine2}
          </p>
          <div className="flex items-center justify-center gap-4 mt-5">
            {hero.heroSocials.map(({ icon: Icon, url }, i) => (
              <a key={i} href={url} className="w-9 h-9 rounded bg-lime text-black flex items-center justify-center text-lg">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="bg-lime text-black rounded-3xl p-8 md:p-12">
        <h2 className="font-display text-3xl md:text-4xl mb-4">{homeAbout.title}</h2>
        <p className="max-w-4xl leading-relaxed text-[15px] md:text-base">{homeAbout.text}</p>
        <div className="flex justify-end mt-6">
          <button
            onClick={() => onNavigate('about')}
            className="bg-panel text-white px-6 py-2.5 rounded-lg text-sm font-medium"
          >
            {homeAbout.buttonLabel}
          </button>
        </div>
      </div>

      {/* RECENT PROJECTS */}
      <div className="bg-panel rounded-3xl p-8 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-2xl md:text-3xl">{recentProjects.title}</h2>
          <a
            onClick={() => onNavigate('projects')}
            className="text-gray-300 text-sm md:text-base flex items-center gap-2 hover:text-lime"
          >
            {recentProjects.seeAllLabel} <IconArrowRight size={16} />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              onClick={() => onNavigate('project-detail', p.id)}
            />
          ))}
        </div>
      </div>

      {/* GET IN TOUCH */}
      <div className="bg-lime text-black rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <h2 className="font-display text-3xl md:text-4xl mb-3">{getInTouch.title}</h2>
          <p className="max-w-md text-sm md:text-base leading-relaxed">{getInTouch.text}</p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-3">
          <div className="text-sm">
            <span className="font-medium mr-2">{getInTouch.followMeLabel}</span>
            <span className="inline-flex gap-3 align-middle text-base">
              {socialIcons.map((Icon, i) => <Icon key={i} size={20} />)}
            </span>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-panel text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2"
          >
            {getInTouch.buttonLabel} <IconSend size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
