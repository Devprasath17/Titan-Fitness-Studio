import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  result: string;
  quote: string;
  stars: number;
  role: string;
  img: string;
}

interface Props {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export default function TestimonialSlider({ testimonials, autoPlayInterval = 5000 }: Props) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, autoPlayInterval);
    return () => clearInterval(id);
  }, [next, autoPlayInterval, paused]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main slide */}
      <div className="overflow-hidden relative min-h-[320px]">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full"
          >
            <div className="relative p-8 lg:p-12" style={{
              background: 'rgba(22,22,22,0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(249,115,22,0.15)',
              boxShadow: '0 20px 80px rgba(249,115,22,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
            }}>
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-15">
                <Quote size={64} className="text-orange-500" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(t.stars).fill(0).map((_, i) => (
                  <Star key={i} size={14} className="text-orange-500 fill-orange-500" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/80 text-xl lg:text-2xl leading-relaxed font-light mb-8 max-w-3xl">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 overflow-hidden shrink-0"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                >
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold">{t.name}</p>
                  <p className="text-white/50 text-sm">{t.role}</p>
                  <p className="text-orange-500 text-sm font-bold mt-0.5">{t.result}</p>
                </div>
              </div>

              {/* Animated bottom line */}
              <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-orange-500/60 via-red-500/40 to-transparent"
                style={{ width: '100%' }} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Dot indicators */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? 24 : 8,
                height: 8,
                background: i === current ? '#f97316' : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex gap-2">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1, borderColor: 'rgba(249,115,22,0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </motion.button>
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1, borderColor: 'rgba(249,115,22,0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
