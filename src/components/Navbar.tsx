import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { navItems, profile } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? <Sun size={17} aria-hidden /> : <Moon size={17} aria-hidden />}
    </button>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        isScrolled || isMenuOpen
          ? 'border-border bg-background/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="group flex items-baseline gap-2" onClick={closeMenu}>
          <span className="text-[15px] font-semibold tracking-tight">{profile.name}</span>
          <span className="hidden font-mono text-xs text-muted-foreground sm:inline">/ {profile.role.toLowerCase()}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <span className="mx-2 h-4 w-px bg-border" aria-hidden />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-foreground hover:bg-secondary"
            onClick={() => setIsMenuOpen(open => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!isMenuOpen}
        className="border-t border-border bg-background md:hidden"
      >
        <ul className="container-page py-3">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-border/60 py-4 text-lg last:border-0"
              >
                {item.label}
                <span className="font-mono text-xs text-muted-foreground">#{item.id}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
