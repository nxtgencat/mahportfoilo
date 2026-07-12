import type { Page } from '../types';
import { navLinks, socialIcons } from '../data/content';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="max-w-[1720px] mx-auto px-6 md:px-10 py-6 flex items-center justify-center relative">
      <div className="flex items-center gap-6 md:gap-10 text-sm md:text-base font-medium">
        {navLinks.map(({ label, page }) => (
          <a
            key={page}
            className={`nav-link ${currentPage === page ? 'text-lime' : 'text-white'}`}
            onClick={() => onNavigate(page)}
          >
            {label}
          </a>
        ))}
      </div>
      {currentPage === 'home' && (
        <div className="hidden sm:flex items-center gap-4 absolute right-6 md:right-10 text-white/20 text-lg">
          {socialIcons.map((Icon, i) => <Icon key={i} size={20} />)}
        </div>
      )}
    </nav>
  );
}
