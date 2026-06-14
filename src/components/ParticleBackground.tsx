import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

const COLORS = ['#f97316', '#dc2626', '#f59e0b', '#ffffff'];

export default function ParticleBackground({ count = 18 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    const particles: Particle[] = [];

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const spawn = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.2 + 0.4,
      opacity: Math.random() * 0.45 + 0.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.015 + 0.003,
    });

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < count; i++) particles.push(spawn());
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.pulse += p.pulseSpeed;
        const opacity = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    init();
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.4 }}
      aria-hidden
    />
  );
}
