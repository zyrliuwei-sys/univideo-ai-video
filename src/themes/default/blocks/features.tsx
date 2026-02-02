'use client';

import { SmartIcon } from '@/shared/blocks/common/smart-icon';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

export function Features({
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
      <div className={`container space-y-8 md:space-y-16`}>
        <ScrollAnimation>
          <div className="mx-auto max-w-4xl text-center text-balance">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {section.label || 'Features'}
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              {section.title}
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              {section.description}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="relative mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {section.items?.map((item, idx) => (
              <div
                className="group h-full rounded-[2rem] border border-black/10 bg-white/80 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                key={idx}
              >
                <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                  <span className="flex size-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm transition group-hover:scale-105 dark:bg-white dark:text-slate-900">
                    <SmartIcon name={item.icon as string} size={18} />
                  </span>
                  <h3 className="text-sm font-semibold tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
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
