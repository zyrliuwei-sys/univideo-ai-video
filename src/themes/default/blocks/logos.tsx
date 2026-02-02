'use client';

import { LazyImage } from '@/shared/blocks/common';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

export function Logos({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  return (
    <section
      id={section.id}
      className={cn('py-16 md:py-24', section.className, className)}
    >
      <div className="mx-auto max-w-6xl px-6">
        <ScrollAnimation>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
            {section.title}
          </p>
        </ScrollAnimation>
        <ScrollAnimation delay={0.2}>
          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
            {section.items?.map((item, idx) => (
              <LazyImage
                key={idx}
                className="h-8 w-fit opacity-70 grayscale transition hover:opacity-100 dark:invert"
                src={item.image?.src ?? ''}
                alt={item.image?.alt ?? ''}
              />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
