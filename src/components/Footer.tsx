
import { Github, Linkedin, Mail, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-12 bg-gray-50 dark:bg-slate-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white font-bold text-xl">
              H
            </div>
            <span className="font-display font-bold text-xl">Hamid</span>
          </div>
          
          <div className="flex gap-4 mb-6 md:mb-0">
            <a 
              href="mailto:oyempemia@gmail.com" 
              className="animated-icon flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="animated-icon flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="animated-icon flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="animated-icon flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="animated-icon flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hamid Oyempemi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
