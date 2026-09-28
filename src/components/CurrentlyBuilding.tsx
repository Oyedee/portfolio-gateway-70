import { currentlyBuilding } from '@/data/portfolio';
import { Reveal, SectionHeader } from './Section';

const CurrentlyBuilding = () => (
  <section id="building" aria-labelledby="building-heading" className="border-t border-border bg-secondary/40 py-24 sm:py-28">
    <div className="container-page">
      <SectionHeader
        id="building-heading"
        label="Independent"
        title="Currently building"
        intro="What I'm working on outside my day job."
      />

      <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {currentlyBuilding.map((project, i) => (
          <li key={project.name} className="bg-background">
            <Reveal delay={i * 80} className="flex h-full flex-col gap-3 p-6 sm:p-8">
              <p className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-40 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                {project.status}
              </p>
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CurrentlyBuilding;
