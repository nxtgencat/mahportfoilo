import { IconFileDownload } from '@tabler/icons-react';
import { aboutPage, socialIcons } from '../data/content';

export default function About() {
  return (
    <section className="space-y-6">
      <div className="bg-panel rounded-3xl py-10 text-center">
        <h1 className="font-display text-5xl md:text-6xl">{aboutPage.title}</h1>
      </div>

      <div className="bg-panel rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8">
        <img
          src={aboutPage.portrait.src}
          className="rounded-2xl w-full md:w-[360px] h-[340px] md:h-[420px] object-cover flex-shrink-0"
          alt={aboutPage.portrait.alt}
        />
        <div>
          <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">
            {aboutPage.bio.map((seg, i) =>
              seg.highlight
                ? <span key={i} className="text-lime">{seg.text}</span>
                : <span key={i}>{seg.text}</span>
            )}
          </p>
          <button className="mt-6 border border-lime text-lime px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2">
            <IconFileDownload size={16} /> {aboutPage.resumeButton}
          </button>
        </div>
      </div>

      <div className="bg-panel rounded-3xl p-8 flex items-center justify-center gap-6 text-2xl">
        {socialIcons.map((Icon, i) => <Icon key={i} size={24} />)}
      </div>
    </section>
  );
}
