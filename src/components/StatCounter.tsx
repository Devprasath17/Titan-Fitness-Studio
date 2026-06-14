import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export default function StatCounter({ end, suffix = '', prefix = '', label, duration = 2 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl lg:text-6xl text-white tracking-wider">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-white/50 text-xs uppercase tracking-[0.2em] mt-2 font-semibold">{label}</p>
    </div>
  );
}
