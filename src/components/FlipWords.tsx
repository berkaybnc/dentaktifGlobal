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
  duration = 3000,
  className,
}: FlipWordsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextWord = useCallback(() => {
    setIsAnimating(true);
    // After exit animation completes (400ms), switch word and enter
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setIsAnimating(false);
    }, 450);
  }, [words.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextWord();
    }, duration);

    return () => clearInterval(timer);
  }, [duration, nextWord]);

  const currentWord = words[currentIndex] || '';

  return (
    <span
      className={cn(
        'relative inline-block text-left whitespace-nowrap transition-all duration-300',
        className
      )}
    >
      <span
        key={currentWord}
        className={cn(
          'inline-block transition-all duration-400 ease-out',
          isAnimating
            ? 'opacity-0 -translate-y-6 scale-125 blur-md'
            : 'opacity-100 translate-y-0 scale-100 blur-0'
        )}
      >
        {currentWord.split(' ').map((word, wordIndex) => (
          <span
            key={`${word}-${wordIndex}`}
            className="inline-block whitespace-nowrap"
          >
            {word.split('').map((letter, letterIndex) => {
              const delay = isAnimating
                ? 0
                : wordIndex * 0.15 + letterIndex * 0.035;
              return (
                <span
                  key={`${letter}-${letterIndex}`}
                  style={{
                    animationDelay: `${delay}s`,
                    transitionDelay: `${delay}s`,
                  }}
                  className={cn(
                    'inline-block transition-all duration-300',
                    isAnimating
                      ? 'opacity-0 -translate-y-4 blur-xs'
                      : 'opacity-100 translate-y-0 blur-0 animate-[flipWordIn_0.4s_cubic-bezier(0.34,1.56,0.64,1)_both]'
                  )}
                >
                  {letter}
                </span>
              );
            })}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </span>
    </span>
  );
};

export default FlipWords;
