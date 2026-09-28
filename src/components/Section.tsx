import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Reveal = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  const { domRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export const SectionHeader = ({
  label,
  title,
  intro,
  id,
}: {
  label: string;
  title: string;
  intro?: ReactNode;
  id: string;
}) => (
  <Reveal className="mb-12 grid gap-4 md:mb-16 md:grid-cols-12 md:gap-8">
    <p className="eyebrow md:col-span-3 md:pt-2">{label}</p>
    <div className="md:col-span-9">
      <h2 id={id} className="text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>}
    </div>
  </Reveal>
);
