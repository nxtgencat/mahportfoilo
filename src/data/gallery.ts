import type { GalleryTile } from '../types';

const img = (n: number) => `https://placehold.net/${n}.png`;

export const galleryTiles: GalleryTile[] = [
  { label: 'Illustration', src: img(1) },
  { label: 'Kit Design', src: img(2) },
  { label: 'Studio Render', src: img(3) },
  { label: 'Statue Art', src: img(4) },
  { label: 'Character', src: img(5) },
  { label: 'Kit Design', src: img(6) },
  { label: 'Anime Art', src: img(7) },
  { label: 'Sports Edit', src: img(8) },
  { label: 'Photo Edit', src: img(9) },
  { label: 'Formula Car', src: img(10) },
  { label: 'Room Render', src: img(1) },
  { label: 'Setup Shot', src: img(2) },
  { label: 'Room Render', src: img(3) },
  { label: 'Kit Design', src: img(4) },
  { label: 'Hero Art', src: img(5) },
  { label: 'Player Edit', src: img(6) },
  { label: 'Kit Design', src: img(7) },
  { label: 'Portrait', src: img(8) },
  { label: 'Marvel Art', src: img(9) },
  { label: 'Player Edit', src: img(10) },
  { label: 'Kit Design', src: img(1) },
  { label: 'Avatar', src: img(2) }
];
