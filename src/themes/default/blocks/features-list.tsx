'use client';

import { Link } from '@/core/i18n/navigation';
import { LazyImage, SmartIcon } from '@/shared/blocks/common';
import { Button } from '@/shared/components/ui/button';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

export function FeaturesList({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  return (
    // Prevent horizontal scrolling
    <section
      className={cn(
        'overflow-x-hidden py-16 md:py-24',
        section.className,
        className
      )}
    >
      <div className="container overflow-x-hidden">
        <div className="flex flex-wrap items-center gap-10 pb-14 md:gap-24">
          {section.image?.src ? (
            <ScrollAnimation direction="left">
              <div className="mx-auto w-full max-w-[520px] flex-shrink-0 md:mx-0">
                <div className="rounded-[2rem] border border-black/10 bg-white/70 p-3 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                  <LazyImage
                    src={section.image?.src ?? ''}
                    alt={section.image?.alt ?? ''}
                    className="h-auto w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>
          ) : null}
          <div className="w-full min-w-0 flex-1">
            <ScrollAnimation delay={0.1}>
              <div
                className={cn(
                  'text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400',
                  section.text_align === 'center' ? 'text-center' : ''
                )}
              >
                {section.label || 'Overview'}
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <h2
                className={cn(
                  'mt-4 text-4xl font-semibold tracking-tight text-balance text-slate-900 md:text-5xl dark:text-white',
                  section.text_align === 'center' ? 'text-center' : ''
                )}
              >
                {section.title}
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.3}>
              <p
                className={cn(
                  'mt-6 text-lg text-balance text-slate-600 dark:text-slate-300',
                  section.text_align === 'center' ? 'text-center' : ''
                )}
              >
                {section.description}
              </p>
            </ScrollAnimation>

            {section.buttons && section.buttons.length > 0 && (
              <ScrollAnimation delay={0.4}>
                <div className="mt-8 flex flex-wrap items-center justify-start gap-3">
                  {section.buttons?.map((button, idx) => (
                    <Button
                      asChild
                      key={idx}
                      variant={button.variant || 'default'}
                      size={button.size || 'default'}
                    >
                      <Link
                        href={button.url ?? ''}
                        target={button.target ?? '_self'}
                        className={cn(
                          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:ring-1 focus-visible:outline-none',
                          'h-10 px-6',
                          'border border-black/10 bg-white/80 text-slate-700 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.45)] backdrop-blur hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white'
                        )}
                      >
                        {button.icon && (
                          <SmartIcon name={button.icon as string} size={24} />
                        )}
                        {button.title}
                      </Link>
                    </Button>
                  ))}
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>

        <ScrollAnimation delay={0.15}>
          <div className="relative grid min-w-0 grid-cols-1 gap-4 pt-6 break-words sm:grid-cols-2 lg:grid-cols-4">
            {section.items?.map((item, idx) => (
              <div
                className="min-w-0 space-y-3 rounded-2xl border border-black/5 bg-white/70 p-5 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.4)] backdrop-blur dark:border-white/10 dark:bg-white/5"
                key={idx}
              >
                <div className="flex min-w-0 items-center gap-3 text-slate-800 dark:text-slate-100">
                  {item.icon && (
                    <span className="flex size-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900">
                      <SmartIcon name={item.icon as string} size={16} />
                    </span>
                  )}
                  <h3 className="min-w-0 text-sm font-semibold break-words">
                    {item.title}
                  </h3>
                </div>
                <p className="min-w-0 text-sm text-slate-600 dark:text-slate-300">
                  {item.description ?? ''}
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
