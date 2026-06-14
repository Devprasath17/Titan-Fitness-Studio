import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const dotX = useSpring(cursorX, { damping: 20, stiffness: 300, mass: 0.5 });
  const dotY = useSpring(cursorY, { damping: 20, stiffness: 300, mass: 0.5 });
  const trailX = useSpring(cursorX, { damping: 35, stiffness: 150, mass: 0.8 });
  const trailY = useSpring(cursorY, { damping: 35, stiffness: 150, mass: 0.8 });

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);

      const target = e.target as HTMLElement;
      const hovering =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer');
      setIsHovering(hovering);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  const ringSize = isHovering ? 52 : isClicking ? 18 : 38;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'rgba(249,115,22,0.8)' : 'rgba(255,255,255,0.45)'}`,
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{ width: ringSize, height: ringSize }}
        transition={{ duration: 0.15 }}
      />

      {/* Dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovering ? 8 : 5,
          height: isHovering ? 8 : 5,
          borderRadius: '50%',
          background: isHovering ? '#f97316' : '#ffffff',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          boxShadow: isHovering
            ? '0 0 14px rgba(249,115,22,0.9), 0 0 28px rgba(249,115,22,0.4)'
            : '0 0 6px rgba(255,255,255,0.5)',
        }}
        animate={{ scale: isClicking ? 0.5 : 1 }}
        transition={{ duration: 0.1 }}
      />

      {/* Glow halo on hover */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              x: trailX,
              y: trailY,
              translateX: '-50%',
              translateY: '-50%',
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 9998,
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
