import { useEffect, useRef, useState } from 'react';

export default function useInfiniteList(page: number, cb: () => void) {
  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([target]) => {
        if (target.isIntersecting) cb();
      },
      {
        rootMargin: '100px',
      }
    );
    const bottom = bottomOfList.current;
    if (bottom) observer.observe(bottom);
    return () => {
      if (bottom) observer.unobserve(bottom);
    };
  }, [bottomOfList.current]);

  return [bottomOfList];
}
