import { motion } from 'framer-motion';

interface Props {
  variant?: 'orange' | 'red' | 'mixed';
  className?: string;
}

export default function GlowDivider({ variant = 'mixed', className = '' }: Props) {
  const colors = {
    orange: 'from-transparent via-orange-500 to-transparent',
    red: 'from-transparent via-red-600 to-transparent',
    mixed: 'from-transparent via-orange-500/60 to-transparent',
  };

  return (
    <div className={`relative h-px w-full overflow-hidden ${className}`}>
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${colors[variant]}`}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute inset-0 h-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.4), transparent)',
          filter: 'blur(2px)',
        }}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
      />
    </div>
  );
}
