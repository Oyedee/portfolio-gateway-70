import { ArrowUp } from 'lucide-react';
import { profile } from '@/data/portfolio';

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container-page flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {profile.name} · {profile.role}
      </p>
      <a href="#home" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
        Back to top
        <ArrowUp size={14} aria-hidden />
      </a>
    </div>
  </footer>
);

export default Footer;
