import { galleryTiles } from '../data/gallery';
import { galleryPage } from '../data/content';

export default function Gallery() {
  return (
    <section>
      <div className="masonry">
        <div className="rounded-xl bg-panel h-[110px] flex items-center px-6">
          <h1 className="font-display text-3xl">{galleryPage.title}</h1>
        </div>
      </div>
      <div className="masonry mt-4">
        {galleryTiles.map((g, i) => (
          <div key={i} className="rounded-xl overflow-hidden">
            <img
              src={g.src}
              className="w-full h-auto block"
              alt={g.label}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
