'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'motion/react';
import { useState, useEffect, useRef, Children, useMemo } from 'react';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 25,
  speedOnHover,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);
  const innerRef = useRef<HTMLDivElement>(null);
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  // Repeat children enough times to guarantee no gaps
  const items = useMemo(() => Children.toArray(children), [children]);
  const repeatCount = 5;

  useEffect(() => {
    if (!innerRef.current) return;
    // Measure the width of just one set of items
    const allItems = innerRef.current.children;
    const itemCount = items.length;
    if (allItems.length === 0 || itemCount === 0) return;
    let w = 0;
    for (let i = 0; i < itemCount; i++) {
      w += (allItems[i] as HTMLElement).offsetWidth + gap;
    }
    setSingleSetWidth(w);
  }, [items.length, gap]);

  useEffect(() => {
    if (singleSetWidth === 0) return;

    const from = reverse ? -singleSetWidth : 0;
    const to = reverse ? 0 : -singleSetWidth;
    const duration = singleSetWidth / currentSpeed;

    let controls;
    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration: duration * Math.abs((translation.get() - to) / singleSetWidth),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prev) => prev + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [key, translation, currentSpeed, singleSetWidth, isTransitioning, reverse, speed]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max items-center"
        style={{ x: translation, gap: `${gap}px` }}
        ref={innerRef}
        {...hoverProps}
      >
        {Array.from({ length: repeatCount }, (_, i) =>
          items.map((child, j) => (
            <div key={`${i}-${j}`} className="shrink-0">
              {child}
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
}
