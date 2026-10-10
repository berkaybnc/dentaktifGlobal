'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { cn } from '@/lib/utils';

export interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords = ({
  words,
  duration = 2800,
  className,
}: FlipWordsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextWord = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setIsAnimating(false);
    }, 300);
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextWord();
    }, duration);

    return () => clearInterval(timer);
  }, [duration, nextWord]);

  const currentWord = words[currentIndex] || words[0] || '';

  return (
    <span
      className={cn(
        'inline-block pb-1 transition-all duration-300 ease-out whitespace-nowrap',
        isAnimating
          ? 'opacity-0 -translate-y-2.5 scale-95 blur-xs'
          : 'opacity-100 translate-y-0 scale-100 blur-0',
        className
      )}
    >
      {currentWord}
    </span>
  );
};

export default FlipWords;
