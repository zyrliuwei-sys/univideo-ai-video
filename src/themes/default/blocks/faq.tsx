'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { Section } from '@/shared/types/blocks/landing';

export function Faq({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  return (
    <section id={section.id} className={`py-16 md:py-24 ${className}`}>
      <div className={`mx-auto max-w-full px-4 md:max-w-3xl md:px-8`}>
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center text-balance">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {section.label || 'FAQ'}
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
          <div className="mx-auto mt-12 max-w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
            >
              {section.items?.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={item.question || item.title || ''}
                  className="rounded-[1.75rem] border border-black/10 bg-white/80 px-6 py-1 shadow-[0_20px_55px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl transition dark:border-white/10 dark:bg-white/5"
                >
                  <AccordionTrigger className="cursor-pointer text-base text-slate-900 hover:no-underline dark:text-white">
                    {item.question || item.title || ''}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300">
                    <p className="text-base">
                      {item.answer || item.description || ''}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <p
              className="mt-6 px-2 text-sm text-slate-500 dark:text-slate-400"
              dangerouslySetInnerHTML={{ __html: section.tip || '' }}
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
