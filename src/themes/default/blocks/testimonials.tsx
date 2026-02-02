'use client';

import { LazyImage } from '@/shared/blocks/common';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { Section, SectionItem } from '@/shared/types/blocks/landing';

export function Testimonials({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  const TestimonialCard = ({ item }: { item: SectionItem }) => {
    return (
      <div className="flex h-full flex-col justify-between gap-6 rounded-[2rem] border border-black/10 bg-white/80 p-8 shadow-[0_25px_60px_-45px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <p className='text-balance text-slate-700 before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"] dark:text-slate-200'>
          {item.quote || item.description}
        </p>
        <div className="flex items-center gap-3">
          <div className="aspect-square size-10 overflow-hidden rounded-xl border border-black/10 shadow-sm dark:border-white/10">
            <LazyImage
              src={item.image?.src || item.avatar?.src || ''}
              alt={item.image?.alt || item.avatar?.alt || item.name || ''}
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="sr-only">
            {item.name}, {item.role || item.title}
          </h3>
          <div className="space-y-px">
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              {item.name}{' '}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {item.role || item.title}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id={section.id}
      className={`py-16 md:py-24 ${section.className} ${className}`}
    >
      <div className="container">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center text-balance">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {section.label || 'Testimonials'}
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
          <div className="relative">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {section.items?.map((item, index) => (
                <TestimonialCard key={index} item={item} />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
