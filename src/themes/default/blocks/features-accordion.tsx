'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { LazyImage, SmartIcon } from '@/shared/blocks/common';
import { BorderBeam } from '@/shared/components/magicui/border-beam';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

export function FeaturesAccordion({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  const [activeItem, setActiveItem] = useState<string>('item-1');

  const images: any = {};
  section.items?.forEach((item, idx) => {
    images[`item-${idx + 1}`] = {
      image: item.image?.src ?? '',
      alt: item.image?.alt || item.title || '',
    };
  });

  return (
    // overflow-x-hidden to prevent horizontal scroll
    <section
      className={cn(
        'overflow-x-hidden py-16 md:py-24',
        section.className,
        className
      )}
    >
      {/* add overflow-x-hidden to container */}
      <div className="container space-y-8 overflow-x-hidden px-2 sm:px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <ScrollAnimation>
          <div className="mx-auto max-w-4xl text-center text-balance">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {section.label || 'Benefits'}
            </div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              {section.title}
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              {section.description}
            </p>
          </div>
        </ScrollAnimation>

        {/* grid: clamp min-w-0 and fix px padding/breakpoints */}
        <div className="grid min-w-0 gap-12 sm:px-6 md:grid-cols-2 lg:gap-20 lg:px-0">
          <ScrollAnimation delay={0.1} direction="left">
            <Accordion
              type="single"
              value={activeItem}
              onValueChange={(value) => setActiveItem(value as string)}
              className="w-full space-y-4"
            >
              {section.items?.map((item, idx) => (
                <AccordionItem
                  value={`item-${idx + 1}`}
                  key={idx}
                  className="rounded-2xl border border-black/10 bg-white/80 px-6 py-1 shadow-[0_18px_45px_-35px_rgba(15,23,42,0.4)] backdrop-blur transition dark:border-white/10 dark:bg-white/5"
                >
                  <AccordionTrigger className="cursor-pointer text-base text-slate-900 hover:no-underline dark:text-white">
                    <div className="flex items-center gap-3">
                      {item.icon && (
                        <span className="flex size-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900">
                          <SmartIcon name={item.icon as string} size={18} />
                        </span>
                      )}
                      <span className="font-semibold">{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 dark:text-slate-300">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2} direction="right">
            {/* min-w-0/flex-shrink to prevent overflow */}
            <div className="relative flex min-w-0 flex-shrink overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/70 p-3 shadow-[0_35px_70px_-50px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="absolute inset-0 right-0 ml-auto w-20 border-l border-white/40 bg-[repeating-linear-gradient(-45deg,rgba(15,23,42,0.1),rgba(15,23,42,0.1)_1px,transparent_1px,transparent_8px)] dark:border-white/10 dark:bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_1px,transparent_1px,transparent_8px)]"></div>
              <div className="relative aspect-76/59 w-full min-w-0 rounded-[2rem] sm:w-[calc(3/4*100%+3rem)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeItem}-id`}
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="size-full overflow-hidden rounded-[1.8rem] border border-black/10 shadow-md dark:border-white/10"
                  >
                    <LazyImage
                      src={images[activeItem].image}
                      className="size-full object-cover object-left-top"
                      alt={images[activeItem].alt}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <BorderBeam
                duration={6}
                size={200}
                className="from-transparent via-slate-400/50 to-transparent dark:via-white/30"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
