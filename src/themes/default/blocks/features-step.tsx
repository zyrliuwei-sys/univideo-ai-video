'use client';

import { ArrowBigRight } from 'lucide-react';

import { SmartIcon } from '@/shared/blocks/common';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

export function FeaturesStep({
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
      <div className="m-4 rounded-[2rem]">
        <div className="@container relative container">
          <ScrollAnimation>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {section.label || 'Process'}
              </span>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-white">
                {section.title}
              </h2>
              <p className="mt-4 text-lg text-balance text-slate-600 dark:text-slate-300">
                {section.description}
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="mt-16 grid gap-6 @3xl:grid-cols-4">
              {section.items?.map((item, idx) => (
                <div
                  className="relative flex h-full flex-col justify-between rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
                  key={idx}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                        Step {idx + 1}
                      </span>
                      {item.icon && (
                        <span className="flex size-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900">
                          <SmartIcon name={item.icon as string} size={18} />
                        </span>
                      )}
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                  {idx < (section.items?.length ?? 0) - 1 && (
                    <ArrowBigRight className="absolute -right-4 bottom-6 hidden h-10 w-10 text-slate-300 @3xl:block dark:text-slate-700" />
                  )}
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
