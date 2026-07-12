import { footer } from '../data/content';

export default function Footer() {
  return (
    <footer className="max-w-[1720px] mx-auto px-6 md:px-10 pb-8">
      <div className="bg-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        <svg viewBox="0 0 100 90" className="w-20 h-16 md:w-24 md:h-20" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" d="M0 5 H62 L30 45 L68 45 L34 85 H0 L34 45 H-4 L28 5 Z" transform="translate(4,0)" />
          <path fill="#fff" opacity="0.85" d="M0 5 H62 L30 45 L68 45 L34 85 H0 L34 45 H-4 L28 5 Z" transform="translate(24,0) scale(0.72) translate(20,12)" />
        </svg>
        <div className="text-center md:text-right">
          <p className="font-display text-2xl md:text-3xl leading-tight">
            {footer.taglineParts.map((part, i) => (
              <span key={i} className={part.className}>{part.text}</span>
            ))}
          </p>
          <p className="text-gray-500 text-xs mt-2">{footer.copyrightPrefix} &copy; {new Date().getFullYear()} Mahanthi</p>
        </div>
      </div>
    </footer>
  );
}
