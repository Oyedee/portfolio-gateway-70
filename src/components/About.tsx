import { aboutParagraphs, profile } from '@/data/portfolio';
import { Reveal } from './Section';

const About = () => (
  <section id="about" aria-labelledby="about-heading" className="border-t border-border py-24 sm:py-32">
    <div className="container-page grid gap-10 md:grid-cols-12 md:gap-8">
      <Reveal className="md:col-span-5">
        <p className="eyebrow">About</p>
        <h2 id="about-heading" className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
          {profile.positioning}
        </h2>
      </Reveal>

      <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg md:col-span-6 md:col-start-7 md:pt-9">
        {aboutParagraphs.map((paragraph, i) => (
          <p key={i} className={i === aboutParagraphs.length - 1 ? 'text-foreground' : undefined}>
            {paragraph}
          </p>
        ))}
      </Reveal>
    </div>
  </section>
);

export default About;
