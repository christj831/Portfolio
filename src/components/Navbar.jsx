import { useCallback } from 'react';

export default function Navbar() {
  const smoothScrollTo = useCallback((toY, duration = 600) => {
    const startY = window.pageYOffset;
    const distance = toY - startY;
    let startTime;

    const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const step = (timestamp) => {
      if (startTime === undefined) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (elapsed < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  const onNavClick = useCallback((e, id) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    
    // Calculate the navbar height dynamically and add exactly 16px gap
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight : 60;
    const gap = 16; // Exactly 16px gap as shown in your reference
    
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const target = elementPosition - navbarHeight - gap;
    smoothScrollTo(target, 600);
  }, [smoothScrollTo]);

  return (
    <nav className="backdrop-blur-sm bg-black/20 border-b border-white/5 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <button
          type="button"
          onClick={() => smoothScrollTo(0, 600)}
          className="text-xl text-white tracking-wide steam-link cursor-pointer"
          aria-label="Scroll to top"
        >
          My Portfolio<span className="steam-accent"></span>
        </button>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a 
              href="#hero" 
              onClick={(e) => onNavClick(e, 'hero')} 
              className="hover:steam-accent transition-colors duration-300 steam-link"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => onNavClick(e, 'about')} 
              className="hover:steam-accent transition-colors duration-300 steam-link"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#tech" 
              onClick={(e) => onNavClick(e, 'tech')} 
              className="hover:steam-accent transition-colors duration-300 steam-link"
            >
              Tech Stack
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              onClick={(e) => onNavClick(e, 'experience')} 
              className="hover:steam-accent transition-colors duration-300 steam-link"
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              onClick={(e) => onNavClick(e, 'projects')} 
              className="hover:steam-accent transition-colors duration-300 steam-link"
            >
              Projects
            </a>
          </li>
        </ul>

        <button className="md:hidden steam-accent bg-white/5 p-2 rounded-lg border border-white/10" aria-label="menu">☰</button>
      </div>
    </nav>
  )
}