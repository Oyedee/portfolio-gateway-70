import { ArrowUpRight } from 'lucide-react';
import { featuredProjects, otherProducts, type FeaturedProject } from '@/data/portfolio';
import { Reveal, SectionHeader } from './Section';

// The first few projects get the full case-study treatment; the rest are compact cards.
const LEAD_COUNT = 3;

const Story = ({ steps }: { steps: string[] }) => (
  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-muted-foreground">
    {steps.map((step, i) => (
      <span key={step} className="inline-flex items-center gap-2">
        {i > 0 && (
          <span className="text-brand" aria-hidden>
            →
          </span>
        )}
        <span className={i === 0 ? 'text-foreground' : undefined}>{step}</span>
      </span>
    ))}
  </p>
);

const Stack = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
    {items.map(item => (
      <li key={item} className="chip">
        {item}
      </li>
    ))}
  </ul>
);

const ProjectLink = ({ project }: { project: FeaturedProject }) =>
  project.url ? (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      Visit {project.name}
      <ArrowUpRight size={14} aria-hidden />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : null;

const LeadProject = ({ project, index }: { project: FeaturedProject; index: number }) => (
  <Reveal>
    <article className="group grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-8 md:py-14">
      <div className="md:col-span-5">
        <p className="font-mono text-xs text-muted-foreground">
          {String(index + 1).padStart(2, '0')} <span className="mx-1 text-border">/</span> {project.category}
        </p>
        <h3 className="mt-3 text-3xl font-semibold transition-colors group-hover:text-brand sm:text-4xl">
          {project.name}
        </h3>
        <div className="mt-4 hidden md:block">
          <ProjectLink project={project} />
        </div>
      </div>
      <div className="space-y-5 md:col-span-7">
        <p className="text-base leading-relaxed sm:text-lg">{project.description}</p>
        <Story steps={project.story} />
        <Stack items={project.stack} />
        <div className="md:hidden">
          <ProjectLink project={project} />
        </div>
      </div>
    </article>
  </Reveal>
);

const CompactProject = ({ project, delay }: { project: FeaturedProject; delay: number }) => (
  <Reveal delay={delay} className="h-full">
    <article className="flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/25">
      <div>
        <p className="font-mono text-xs text-muted-foreground">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <div className="mt-auto space-y-4 pt-2">
        <Story steps={project.story} />
        <Stack items={project.stack} />
        <ProjectLink project={project} />
      </div>
    </article>
  </Reveal>
);

const Work = () => {
  const lead = featuredProjects.slice(0, LEAD_COUNT);
  const rest = featuredProjects.slice(LEAD_COUNT);

  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeader
          id="work-heading"
          label="Work"
          title="Selected Work"
          intro="A few products I've helped build, ship, and evolve."
        />

        <div className="border-b border-border">
          {lead.map((project, i) => (
            <LeadProject key={project.name} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <CompactProject key={project.name} project={project} delay={i * 80} />
          ))}
        </div>

        <Reveal className="mt-20 grid gap-6 md:grid-cols-12 md:gap-8">
          <h3 className="eyebrow md:col-span-3 md:pt-1">Other products I've worked on</h3>
          <ul className="flex flex-wrap gap-x-2 gap-y-3 md:col-span-9">
            {otherProducts.map(product => (
              <li
                key={product.name}
                className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm"
              >
                {product.name}
                {product.status && (
                  <span className="font-mono text-[11px] text-muted-foreground">· {product.status}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default Work;
