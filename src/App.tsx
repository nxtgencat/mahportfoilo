import { useState } from 'react';
import type { Page } from './types';
import { projects } from './data/projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleNavigate = (page: Page, projectId?: string) => {
    if (page === 'project-detail' && projectId) {
      setSelectedProject(projectId);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const project = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : undefined;

  return (
    <div className="text-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="max-w-[1720px] mx-auto px-6 md:px-10 pb-6 space-y-6">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'projects' && <Projects onNavigate={handleNavigate} />}
        {currentPage === 'project-detail' && project && (
          <ProjectDetail project={project} onBack={() => handleNavigate('projects')} />
        )}
        {currentPage === 'gallery' && <Gallery />}
        {currentPage === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}
