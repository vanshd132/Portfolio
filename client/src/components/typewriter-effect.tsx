import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export default function TypewriterEffect({
  words,
  speed = 100,
  deleteSpeed = 50,
  delay = 2000,
  className = ''
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    } else {
      if (currentText.length < word.length) {
        timeout = setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length + 1));
        }, speed);
      } else {
        setIsPaused(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, speed, deleteSpeed, delay]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

