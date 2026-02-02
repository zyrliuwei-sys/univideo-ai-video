'use client';

import { Link } from '@/core/i18n/navigation';
import { SmartIcon } from '@/shared/blocks/common/smart-icon';
import { Button } from '@/shared/components/ui/button';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

export function Cta({
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
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-black/10 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.3),rgba(255,255,255,0.95))] px-6 py-16 text-center shadow-[0_35px_80px_-55px_rgba(15,23,42,0.6)] backdrop-blur-xl dark:border-white/10 dark:bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.12),rgba(2,6,23,0.95))] md:px-12">
          <div className="pointer-events-none absolute -left-20 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.22),transparent_70%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(148,163,184,0.16),transparent_70%)]" />
          <div className="pointer-events-none absolute -right-20 bottom-10 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(226,232,240,0.45),transparent_70%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(30,41,59,0.2),transparent_70%)]" />
          <ScrollAnimation>
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-slate-900 lg:text-5xl dark:text-white">
              {section.title}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.15}>
            <p
              className="mt-4 text-lg text-slate-600 dark:text-slate-300"
              dangerouslySetInnerHTML={{ __html: section.description ?? '' }}
            />
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {section.buttons?.map((button, idx) => (
                <Button
                  asChild
                  size={button.size || 'default'}
                  variant={button.variant || 'default'}
                  className={cn(
                    'rounded-full px-7 py-5 text-base font-medium shadow-[0_25px_60px_-40px_rgba(15,23,42,0.6)] transition hover:-translate-y-0.5',
                    button.variant === 'outline'
                      ? 'border border-black/10 bg-white/70 text-slate-700 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white'
                      : 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200'
                  )}
                  key={idx}
                >
                  <Link
                    href={button.url || ''}
                    target={button.target || '_self'}
                  >
                    {button.icon && <SmartIcon name={button.icon as string} />}
                    <span>{button.title}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
