import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile, socials, stats } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const Hero = () => (
  <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden pt-28 sm:pt-36">
    <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
    <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />

    <div className="container-page relative">
      <div className="max-w-4xl animate-fade-in">
        <p className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-brand" aria-hidden />
          {profile.role}
        </p>

        <h1
          id="hero-heading"
          className="mt-6 text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          I build mobile products people actually use.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I'm {profile.name} — a senior mobile engineer focused on Flutter and Dart, with experience
          across Kotlin, Swift, Java and Spring Boot. I build production systems across fintech,
          payments, commerce, social and utility products.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#work" className="btn-primary">
            Explore my work
            <ArrowDown size={16} aria-hidden />
          </a>
          <a href="#contact" className="btn-ghost">
            Let's talk
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Social links">
          {socials.map(social => {
            const external = !social.href.startsWith('mailto:');
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {social.label}
                  <ArrowUpRight
                    size={13}
                    aria-hidden
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                  {external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <dl className="mt-16 grid grid-cols-2 border-y border-border sm:mt-20 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              'flex flex-col-reverse gap-1 py-6 pr-4',
              i % 2 === 1 && 'border-l border-border pl-5 sm:pl-8',
              i >= 2 && 'border-t border-border lg:border-t-0',
              i === 2 && 'lg:border-l lg:pl-8'
            )}
          >
            <dt className="font-mono text-xs text-muted-foreground">{stat.label}</dt>
            <dd className="text-xl font-semibold tracking-tight sm:text-2xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
