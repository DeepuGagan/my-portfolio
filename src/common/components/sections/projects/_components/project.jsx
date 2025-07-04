'use client';

import { useRef } from 'react';
import { projectsData } from '@/common/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  
  // Use reduced animations for better performance and accessibility
  const scaleProgess = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [1, 1] : [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  
  // Conditionally use animations for better performance
  const motionStyles = prefersReducedMotion 
    ? { opacity: opacityProgess } 
    : { scale: scaleProgess, opacity: opacityProgess };

  return (
    <motion.div
      ref={ref}
      style={motionStyles}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <Link href={link} target="_blank">
        <section
          className={
            'relative max-w-[55rem] overflow-hidden rounded-lg border transition hover:bg-gray-200 dark:hover:bg-primary-foreground sm:h-[20rem]'
          }
        >
          <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[45%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[25rem]"> {/* // -[28rem] - change this to make changes on text section */}
            <h3 className="text-2xl font-semibold uppercase"> {title}</h3>
            <p className="mt-4 leading-relaxed">{description}</p>
            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={85}
            width={1024}
            height={768}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
            className="absolute -right-8 top-8 hidden w-[28.25rem] rounded-t-lg transition group-even:-left-12 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"  /* -right-8 - change this to make changes on image section....-left-12 also for even */
          />
        </section>
      </Link>
    </motion.div>
  );
}
