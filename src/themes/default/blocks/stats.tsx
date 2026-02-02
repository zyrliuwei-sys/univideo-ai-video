'use client';

import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { Section } from '@/shared/types/blocks/landing';

export function Stats({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  return (
    <section
      id={section.id}
      className={`py-16 md:py-24 ${section.className} ${className}`}
    >
      <div className={`container space-y-8 md:space-y-16`}>
        <ScrollAnimation>
          <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {section.label || 'Statistics'}
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              {section.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {section.description}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="grid gap-6 md:grid-cols-3">
            {section.items?.map((item, idx) => (
              <div
                className="space-y-4 rounded-[2rem] border border-black/10 bg-white/80 p-8 text-center shadow-[0_25px_60px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                key={idx}
              >
                <h3 className="sr-only">
                  {item.title} {item.description}
                </h3>
                <div className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                  {item.title}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
