import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

function MaterialIcon({ name, className = '' }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>;
}

const womensPrograms = [
  {
    title: 'TITAN SCULPT',
    subtitle: 'High-Intensity Fat Loss',
    image: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'ELITE STRENGTH',
    subtitle: 'Strength & Conditioning',
    image: 'https://images.pexels.com/photos/18060165/pexels-photo-18060165.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'ZENITH FLOW',
    subtitle: 'Yoga & Mental Recovery',
    image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const coaches = [
  {
    name: 'SARAH VANCE',
    role: 'Lead Biomechanics',
    cert: 'NASM, ISSA Certified',
    spec: 'Functional hypertrophy and metabolic health',
    image: 'https://images.pexels.com/photos/18060165/pexels-photo-18060165.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'MAYA ELSON',
    role: 'Strength Master',
    cert: 'CSCS Certified',
    spec: 'Olympic weightlifting and nervous system regulation',
    image: 'https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'ELENA ROSSI',
    role: 'Hormonal Health',
    cert: 'PhD Sports Nutrition',
    spec: 'Cycle-syncing performance and precision programming',
    image: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'JADE CHEN',
    role: 'Mobility Specialist',
    cert: 'E-RYT 500',
    spec: 'Recovery, mobility and peak tissue health',
    image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const testimonials = [
  {
    quote: "The women-only zone gave me the confidence to push my limits without distractions. I've never felt stronger or more empowered.",
    name: 'Amanda R.',
    role: 'Elite Member · 18 Months',
    initial: 'A',
  },
  {
    quote: "TITAN isn't just a gym; it's a high-performance laboratory. The level of personalization for my specific biology is unmatched.",
    name: 'Sophia K.',
    role: 'Pro Athlete · 2 Years',
    initial: 'S',
  },
];

export default function WomensGym() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative h-screen flex items-center pt-20 overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            alt="Elite Female Fitness"
            className="w-full h-full object-cover object-center womens-hero-img"
            src="https://images.pexels.com/photos/18060165/pexels-photo-18060165.jpeg?auto=compress&cs=tinysrgb&w=1920"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent" />
        </motion.div>

        <div className="relative z-10 px-6 lg:px-10 max-w-[1400px] mx-auto w-full">
          <div className="max-w-3xl space-y-8">
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary uppercase tracking-[0.3em]">Elite Performance Only</span>
            </motion.div>

            <div className="font-display text-[clamp(3.5rem,8vw,7rem)] text-white leading-[0.9] uppercase tracking-tighter overflow-hidden">
              {['FITNESS', 'DESIGNED', 'FOR WOMEN'].map((line, li) => (
                <div key={li} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + li * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {li === 2 ? (
                      <span className="text-gradient-new">{line}</span>
                    ) : (
                      line
                    )}
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.p
              className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
            >
              Experience precision training in a sanctuary of luxury. Your peak performance, redefined through science and exclusivity.
            </motion.p>

            <motion.div
              className="flex gap-4 md:gap-6 pt-4 md:pt-6 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <Link to="/membership" className="primary-gradient-new px-8 md:px-10 py-4 md:py-5 rounded-lg font-display font-bold uppercase tracking-widest text-sm text-black shadow-2xl shadow-primary/20 hover:translate-y-[-2px] transition-all inline-flex items-center gap-2">
                Start Your Evolution <ArrowRight size={15} />
              </Link>
              <Link to="/programs" className="glass-card-new px-8 md:px-10 py-4 md:py-5 rounded-lg font-display font-bold uppercase tracking-widest text-sm text-on-surface border border-white/10 hover:bg-white/10 transition-all inline-flex items-center">
                Explore Programs
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-primary/60 to-transparent" />
          <p className="text-white/25 text-[9px] uppercase tracking-[0.4em]">Scroll</p>
        </motion.div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-surface-container-lowest border-y border-white/5">
        <div className="px-6 lg:px-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { icon: 'lock_person', title: 'Total Privacy', desc: 'Exclusive sanctuary zone dedicated 100% to female members, designed for comfort and focus.' },
              { icon: 'female', title: 'Female Experts', desc: 'Coaches who specialize in female biomechanics, hormonal cycles, and pre/post-natal fitness.' },
              { icon: 'monitoring', title: 'Bio-Metric Precision', desc: 'Advanced tracking of internal health metrics alongside physical progress for holistic results.' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <MaterialIcon name={item.icon} className="text-primary text-4xl" />
                  <div>
                    <h4 className="font-display font-bold uppercase text-lg tracking-widest mb-3">{item.title}</h4>
                    <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ELITE PROGRAMS ─── */}
      <section className="py-24 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <div className="section-label">Programs</div>
            <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4">
              ELITE <span className="text-gradient-new">PROGRAMS</span>
            </h3>
            <p className="text-on-surface-variant text-lg">Curated protocols for specific biological outcomes.</p>
          </div>
          <Link to="/programs" className="group flex items-center gap-2 font-display font-bold uppercase tracking-widest text-sm text-primary shrink-0">
            View All Programs <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {womensPrograms.map((prog, i) => (
            <AnimatedSection key={prog.title} delay={i * 0.15}>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden glass-card-new group cursor-pointer">
                <img
                  alt={prog.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.4]"
                  src={prog.image}
                />
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end bg-gradient-to-t from-background via-transparent to-transparent">
                  <h4 className="font-display font-black text-2xl md:text-3xl uppercase italic leading-none text-white">{prog.title}</h4>
                  <p className="text-on-surface-variant text-sm mt-3 uppercase tracking-[0.2em]">{prog.subtitle}</p>
                  <div className="mt-8 flex items-center text-primary gap-3 font-mono text-xs uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore Protocol</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── TRANSFORMATION STORIES ─── */}
      <section className="py-24 bg-surface-container">
        <div className="px-6 lg:px-10 max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/3 space-y-6">
              <div className="section-label">Results</div>
              <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter leading-none text-white">
                TRANSFORMATION<br /><span className="text-gradient-new italic text-3xl">RESULTS</span>
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Our methods are proven. We don't just change appearances; we optimize internal biology for sustainable, elite performance.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <p className="text-4xl font-display font-black text-primary">500+</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-2 font-mono">Success Stories</p>
                </div>
                <div>
                  <p className="text-4xl font-display font-black text-primary">15%</p>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-2 font-mono">Avg Body Fat Loss</p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 w-full">
              <div className="glass-card-new rounded-2xl overflow-hidden shadow-2xl">
                <div className="grid grid-cols-2 aspect-[16/9] gap-px">
                  <div className="relative">
                    <img alt="Before" className="w-full h-full object-cover grayscale brightness-50" src="https://images.pexels.com/photos/18060165/pexels-photo-18060165.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <span className="absolute top-4 md:top-6 left-4 md:left-6 font-mono text-[10px] bg-black/80 backdrop-blur px-3 py-1.5 rounded uppercase tracking-[0.2em]">Week 01</span>
                  </div>
                  <div className="relative">
                    <img alt="After" className="w-full h-full object-cover" src="https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <span className="absolute top-4 md:top-6 right-4 md:right-6 font-mono text-[10px] bg-primary px-3 py-1.5 rounded text-black font-bold uppercase tracking-[0.2em]">Week 12</span>
                  </div>
                </div>
                <div className="p-6 md:p-10 grid grid-cols-2 gap-6 md:gap-10">
                  <div className="text-center border-r border-white/5">
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-2 font-mono">Body Fat Protocol</p>
                    <p className="text-4xl md:text-5xl font-display font-black text-primary">-12.4%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-2 font-mono">LBM Optimization</p>
                    <p className="text-4xl md:text-5xl font-display font-black text-primary">+2.8kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ELITE COACHES ─── */}
      <section className="py-24 px-6 lg:px-10 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="section-label justify-center">Our Team</div>
          <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter text-white">ELITE <span className="text-gradient-new">COACHES</span></h3>
          <p className="text-on-surface-variant text-lg mt-4 max-w-xl mx-auto">Masters of female physiology dedicated to your evolution.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {coaches.map((coach, i) => (
            <AnimatedSection key={coach.name} delay={i * 0.1}>
              <div className="glass-card-new rounded-2xl overflow-hidden p-5 md:p-6 group hover:bg-white/5 transition-colors">
                <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6">
                  <img alt={coach.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={coach.image} />
                </div>
                <p className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">{coach.role}</p>
                <h5 className="font-display font-bold text-lg md:text-xl uppercase mt-2 text-white">{coach.name}</h5>
                <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">{coach.cert}. {coach.spec}.</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="px-6 lg:px-10 max-w-[1400px] mx-auto overflow-hidden">
          <div className="section-label mb-6">Client Stories</div>
          <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter mb-12 text-white">WHAT <span className="text-gradient-new">THEY SAY</span></h3>
          <div className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar pb-4">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[350px] md:min-w-[500px] glass-card-new p-8 md:p-12 rounded-3xl border-white/5 relative shrink-0">
                <MaterialIcon name="format_quote" className="text-primary text-4xl md:text-6xl absolute top-8 md:top-10 right-8 md:right-10 opacity-20" />
                <p className="text-lg md:text-2xl italic font-light leading-relaxed mb-8 md:mb-10 text-white/90">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/20 flex items-center justify-center font-display font-black text-lg md:text-xl text-primary">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-display font-bold text-base md:text-lg uppercase tracking-widest text-white">{t.name}</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest font-mono">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-24 md:py-32 px-6 text-center relative overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none select-none">
          <h2 className="titan-outline-text font-display font-black text-[15rem] md:text-[30rem] absolute -bottom-40 left-1/2 -translate-x-1/2 leading-none">TITAN</h2>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h3
            className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-none text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            READY FOR THE <br /><span className="text-gradient-new italic">ELITE?</span>
          </motion.h3>
          <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-xl mx-auto">
            Limited memberships available to maintain exclusivity and coaching quality. Start your premium evolution today.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/membership" className="primary-gradient-new px-12 md:px-16 py-5 md:py-6 rounded-lg font-display font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-base md:text-lg text-black shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3">
              Claim Your Access <ArrowRight size={18} />
            </Link>
          </motion.div>
          <p className="mt-8 font-mono text-[10px] text-primary uppercase tracking-[0.4em]">Apply for waitlist if slots are full</p>
        </div>
      </section>
    </div>
  );
}
