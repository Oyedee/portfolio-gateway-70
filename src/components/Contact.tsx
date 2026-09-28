import { ArrowUpRight, Mail } from 'lucide-react';
import { profile, socials } from '@/data/portfolio';
import { Reveal } from './Section';

const Contact = () => (
  <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden border-t border-border py-24 sm:py-32">
    <div className="hero-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden />
    <div className="container-page relative">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h2 id="contact-heading" className="mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
          Have a product to build?
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I'm always interested in working on challenging mobile products, especially where
          engineering decisions have a real impact on the product.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail size={16} aria-hidden />
            Get in touch
          </a>
          <a href={`mailto:${profile.email}`} className="link-underline font-mono text-sm text-muted-foreground">
            {profile.email}
          </a>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <ul className="mt-16 grid border-t border-border sm:grid-cols-3" aria-label="Elsewhere">
          {socials
            .filter(social => social.label !== 'Email')
            .map(social => (
              <li key={social.label} className="border-b border-border sm:border-b-0">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 pr-4 transition-colors hover:text-brand"
                >
                  <span>
                    <span className="block text-sm font-medium">{social.label}</span>
                    <span className="block font-mono text-xs text-muted-foreground">{social.display}</span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

export default Contact;
