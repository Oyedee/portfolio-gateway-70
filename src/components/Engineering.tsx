import { engineeringAreas, profile } from '@/data/portfolio';
import { Reveal, SectionHeader } from './Section';

const Engineering = () => (
  <section id="engineering" aria-labelledby="engineering-heading" className="border-t border-border py-24 sm:py-32">
    <div className="container-page">
      <SectionHeader
        id="engineering-heading"
        label="Engineering"
        title="How I build"
        intro="I care about what happens beyond the UI — architecture, reliability, integrations, deployment and the systems that keep a product working in production."
      />

      <ol className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
        {engineeringAreas.map((area, i) => (
          <li key={area.title} className="border-t border-border">
            <Reveal delay={(i % 3) * 80} className="py-8">
              <p className="font-mono text-xs text-brand">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-3 text-lg font-semibold">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-16 border-t border-border pt-12 sm:mt-20">
        <p className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl lg:text-4xl">
          {profile.philosophy.map((line, i) => (
            <span key={line} className={i === profile.philosophy.length - 1 ? 'text-foreground' : 'text-muted-foreground'}>
              {line}{' '}
            </span>
          ))}
        </p>
      </Reveal>
    </div>
  </section>
);

export default Engineering;
