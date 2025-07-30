"use client";

import { useEffect, useState } from "react";

const words = [
  "an interview",
  "a remote job",
  "paid more",
  "promoted",
  "hired faster",
];

export default function AnimatedText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];

    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.slice(0, letterIndex - 1)
        : currentWord.slice(0, letterIndex + 1);

      setDisplayText(updatedText);
      setLetterIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      }

      if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [letterIndex, isDeleting, wordIndex]);

  return (
    <span className="text-primary font-semibold transition-all duration-300 inline-block">
    {displayText}
    <span className="inline-block w-[1px] h-[1em] bg-primary animate-blink align-bottom ml-1" />
  </span>
  );
}
