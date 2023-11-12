import { IProject } from "@/interfaces";
import { useState, useEffect } from "react";

export function useCarousel(data: IProject[]) {
  const list = data.slice(0, 5);
  const [counter, setCounter] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const getFirstSentence = (text: string): string => {
    const sentences: string[] = text.split(".");
    const firstTwoSentences: string[] = sentences.slice(0, 1);

    const result: string = firstTwoSentences.join(".") + ".";
    return result.trim();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === list.length - 1) return setCounter(0);
      setCounter(counter + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, [list.length, counter]);

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const value = parseInt(e.currentTarget.id);
    if (value !== counter) setCounter(value);
  };

  return {
    onClick,
    counter,
    setCounter,
    list,
    getFirstSentence,
    isExpanded,
    setIsExpanded,
  };
}
