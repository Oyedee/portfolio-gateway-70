
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/95 shadow-sm backdrop-blur-sm' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white font-bold text-xl">H</div>
          <span className="font-display font-bold text-xl">Hamid</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('about')} className="text-gray-800 hover:text-purple-600 transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('services')} className="text-gray-800 hover:text-purple-600 transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-800 hover:text-purple-600 transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('experience')} className="text-gray-800 hover:text-purple-600 transition-colors">
            Experience
          </button>
          <button onClick={() => scrollToSection('contact')} className="button-primary">
            Hire Me
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 transform origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-800 hover:text-purple-600 transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('services')} className="text-left py-2 text-gray-800 hover:text-purple-600 transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-left py-2 text-gray-800 hover:text-purple-600 transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection('experience')} className="text-left py-2 text-gray-800 hover:text-purple-600 transition-colors">
            Experience
          </button>
          <button onClick={() => scrollToSection('contact')} className="button-primary self-start">
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
