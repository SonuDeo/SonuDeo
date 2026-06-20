"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
};

export function TypingEffect({
  words,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1600,
}: Props) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[index % words.length];

    if (!deleting && subIndex === currentWord.length) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className} aria-live="polite">
      {words[index % words.length].substring(0, subIndex)}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse-glow bg-accent align-middle h-[1em]" />
    </span>
  );
}
