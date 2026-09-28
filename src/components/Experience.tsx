import { experience } from '@/data/portfolio';
import { Reveal, SectionHeader } from './Section';

const Experience = () => (
  <section id="experience" aria-labelledby="experience-heading" className="border-t border-border py-24 sm:py-32">
    <div className="container-page">
      <SectionHeader id="experience-heading" label="Career" title="Experience" />

      <ol className="border-b border-border">
        {experience.map(role => (
          <li key={role.company} className="border-t border-border">
            <Reveal className="grid gap-4 py-10 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-muted-foreground">{role.period}</p>
              </div>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-semibold">{role.company}</h3>
                <p className="mt-1 text-muted-foreground">{role.title}</p>
              </div>
              <ul className="space-y-2 md:col-span-5">
                {role.highlights.map(item => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 h-px w-3 shrink-0 bg-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
