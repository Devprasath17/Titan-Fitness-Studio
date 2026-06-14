import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Zap, Shield, Target, Clock, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatCounter from '../components/StatCounter';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';
import TestimonialSlider from '../components/TestimonialSlider';
import GlowDivider from '../components/GlowDivider';
import ParticleBackground from '../components/ParticleBackground';

const HeroCanvas = lazy(() => import('../components/HeroCanvas'));

const programs = [
  { title: 'Strength Training', desc: 'Build raw power with periodized programming and elite coaching.', img: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'POWER', color: '#f97316' },
  { title: 'Weight Loss', desc: 'Science-backed fat loss protocols for a complete body transformation.', img: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'SHRED', color: '#dc2626' },
  { title: 'CrossFit', desc: 'High-intensity functional movements for peak athletic performance.', img: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'ELITE', color: '#f59e0b' },
  { title: 'Personal Training', desc: 'One-on-one elite coaching tailored exclusively to your goals.', img: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'VIP', color: '#f97316' },
];

const trainers = [
  { name: 'Marcus Vance', role: 'Head Strength Coach', exp: '12 years', img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600', spec: 'Powerlifting & Athletic Performance' },
  { name: 'Jordan Knox', role: 'Nutrition Specialist', exp: '8 years', img: 'https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=600', spec: 'Sports Nutrition & Body Recomposition' },
  { name: 'Elena Reyes', role: "Women's Head Coach", exp: '10 years', img: 'https://images.pexels.com/photos/18060165/pexels-photo-18060165.jpeg?auto=compress&cs=tinysrgb&w=600', spec: 'Functional Fitness & Wellness' },
];

const testimonials = [
  { name: 'Ryan T.', result: '+42 lbs muscle gained', role: 'Member since 2021', quote: 'Titan completely changed my relationship with training. The methodology here is unlike anything I\'ve experienced — every session is a masterclass in elite performance.', stars: 5, img: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Sofia M.', result: '-68 lbs in 7 months', role: 'Member since 2022', quote: 'I never thought I\'d feel this confident in my own skin. The women\'s program is more than fitness — it\'s a complete lifestyle transformation supported by world-class coaches.', stars: 5, img: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Derek W.', result: "PR'd every major lift", role: 'Member since 2020', quote: 'The equipment, the programming, the culture — Titan operates on a different frequency. In three years I\'ve seen what I thought was impossible become my normal.', stars: 5, img: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=200' },
  { name: 'Priya K.', result: 'Competed at nationals', role: 'Member since 2023', quote: 'Joining Titan was the single best investment I\'ve made in myself. The coaches don\'t just train your body — they rewire your mindset for elite performance.', stars: 5, img: 'https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg?auto=compress&cs=tinysrgb&w=200' },
];

const plans = [
  { name: 'BASIC', price: '49', period: '/mo', features: ['Gym Access', 'Locker Access', 'Basic Equipment', 'App Tracking'], popular: false },
  { name: 'STANDARD', price: '89', period: '/mo', features: ['Everything in Basic', 'Cardio Zone', 'Group Classes', 'Nutrition Guide', 'Recovery Lounge'], popular: true },
  { name: 'PREMIUM', price: '149', period: '/mo', features: ['Everything in Standard', 'Personal Trainer (4x/mo)', 'Custom Diet Plan', 'Fitness Assessment', 'Priority Booking', 'Guest Passes'], popular: false },
];

const whyUs = [
  { icon: Shield, title: 'Elite Equipment', desc: 'Commercial-grade machines sourced from the world\'s best manufacturers.', stat: '200+', statLabel: 'Equipment Pieces' },
  { icon: Target, title: 'Expert Coaches', desc: 'Every trainer holds multiple certifications and competitive experience.', stat: '12', statLabel: 'Expert Coaches' },
  { icon: Zap, title: 'Proven Systems', desc: 'Periodized programs built on sports science — not guesswork or trends.', stat: '98%', statLabel: 'Success Rate' },
  { icon: Clock, title: 'Open 24/7', desc: 'Your schedule is your schedule. We\'re here whenever performance calls.', stat: '24/7', statLabel: 'Availability' },
];

const marqueePhrases = ['STRENGTH IS LUXURY', 'PEAK PERFORMANCE', 'ELITE TRAINING', 'TRANSFORM YOUR BODY', 'UNLEASH YOUR POTENTIAL', 'FORGE YOUR LEGACY', 'TITAN FITNESS STUDIO'];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <div className="bg-[#080808]">

      {/* ============== HERO ============== */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        {/* Background image with parallax */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY, scale: heroScale }}
        >
          <img
            src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Titan Fitness"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 to-[#080808]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/20" />
        </motion.div>

        {/* 3D Canvas layer */}
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>

        {/* Ambient glow orbs */}
        <motion.div
          className="absolute top-1/3 right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.04) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        <motion.div
          className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-28 md:pt-32 lg:pt-36"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-2xl">
            <motion.div
              className="section-label mb-8"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Forging Champions Since 2012
            </motion.div>

            {/* Main headline — word by word reveal */}
            <div className="font-display text-[clamp(3.5rem,8.5vw,7.5rem)] text-white leading-[0.88] tracking-wider mb-8 overflow-hidden">
              {['UNLEASH', 'YOUR STRONGEST', 'VERSION'].map((line, li) => (
                <div key={li} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + li * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {li === 1
                      ? <span className="orange-text-gradient glow-orange-text">{line}</span>
                      : line
                    }
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.p
              className="text-white/55 text-lg leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
            >
              Transform your body with expert coaching, premium equipment, and personalized training built for those who demand results.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <MagneticButton>
                <Link to="/membership" className="titan-btn-primary">
                  Join Now <ArrowRight size={15} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/contact" className="titan-btn-outline">
                  Book Free Trial
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Floating stat badges */}
            <motion.div
              className="flex flex-wrap items-center gap-8 mt-16 pt-10 border-t border-white/8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[
                { n: '5K+', label: 'Members' },
                { n: '24/7', label: 'Access' },
                { n: '12', label: 'Elite Coaches' },
                { n: '98%', label: 'Success Rate' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                >
                  <div className="font-display text-[2.5rem] text-white tracking-wider leading-none">{s.n}</div>
                  <div className="text-white/40 text-[10px] uppercase tracking-[0.25em] mt-1">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent" />
          <p className="text-white/25 text-[9px] uppercase tracking-[0.4em]">Scroll</p>
        </motion.div>
      </section>

      {/* ============== MARQUEE ============== */}
      <div className="relative py-5 bg-[#0d0d0d] border-y border-white/5 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-track">
            {[...marqueePhrases, ...marqueePhrases].map((phrase, i) => (
              <span key={i} className="inline-flex items-center gap-6 mx-6">
                <span className={`font-display text-sm tracking-[0.3em] ${i % 2 === 0 ? 'text-white/20' : 'text-orange-500/40'}`}>
                  {phrase}
                </span>
                <span className="text-orange-500/30 text-xs">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ============== WHY CHOOSE US ============== */}
      <section className="py-28 bg-mesh-animated relative overflow-hidden">
        <div className="noise-overlay" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="section-label">Why Titan</div>
              <h2 className="font-display text-[clamp(3rem,5vw,4.5rem)] text-white tracking-wider leading-[0.9] mb-6">
                BUILT FOR<br /><span className="orange-text-gradient">ELITE</span><br />PERFORMANCE
              </h2>
              <p className="text-white/50 leading-relaxed mb-10 max-w-md text-[15px]">
                We don't build a gym — we build an ecosystem for those who demand more. Every piece of equipment, every coach, every session is calibrated for elite output.
              </p>
              <MagneticButton>
                <Link to="/about" className="titan-btn-outline inline-flex">
                  Our Story <ArrowRight size={15} />
                </Link>
              </MagneticButton>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <AnimatedSection key={item.title} delay={i * 0.1}>
                  <TiltCard className="h-full" maxTilt={6} scale={1.02}>
                    <div className="glass-card-hover spotlight-card h-full p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 orange-gradient flex items-center justify-center shrink-0"
                          style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                          <item.icon size={17} className="text-white" />
                        </div>
                        <div className="text-right">
                          <div className="font-display text-2xl orange-text-gradient">{item.stat}</div>
                          <div className="text-white/30 text-[10px] uppercase tracking-wider">{item.statLabel}</div>
                        </div>
                      </div>
                      <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </TiltCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GlowDivider />

      {/* ============== PROGRAMS ============== */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <div className="section-label justify-center">Programs</div>
            <h2 className="font-display text-[clamp(3rem,5vw,4.5rem)] text-white tracking-wider">
              FORGE YOUR <span className="orange-text-gradient">LEGACY</span>
            </h2>
            <p className="text-white/40 mt-4 max-w-md mx-auto text-[14px]">
              Eight elite disciplines engineered for transformation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((prog, i) => (
              <AnimatedSection key={prog.title} delay={i * 0.1}>
                <motion.div
                  className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="absolute inset-0 image-reveal">
                    <img src={prog.img} alt={prog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated border on hover */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-orange-500/30 transition-all duration-500" />

                  <div className="absolute top-4 left-4">
                    <motion.span
                      className="text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1"
                      style={{ background: prog.color }}
                    >
                      {prog.tag}
                    </motion.span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                    <h3 className="font-display text-[1.6rem] text-white tracking-wider mb-1">{prog.title}</h3>
                    <p className="text-white/55 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {prog.desc}
                    </p>
                    <Link to="/programs" className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                      Explore Program <ArrowRight size={11} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <MagneticButton>
              <Link to="/programs" className="titan-btn-outline">
                View All Programs <ArrowRight size={15} />
              </Link>
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      {/* ============== STATS COUNTER ============== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <ParticleBackground count={30} />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { end: 5400, suffix: '+', label: 'Total Members' },
              { end: 1200, suffix: '+', label: 'Lbs Lost Per Month' },
              { end: 98, suffix: '%', label: 'Success Rate' },
              { end: 310, suffix: '+', label: 'Elite Titans' },
            ].map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 0.1}>
                <div className="text-center relative group">
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)' }} />
                  <StatCounter end={s.end} suffix={s.suffix} label={s.label} />

                  {/* Progress indicator */}
                  <div className="mt-4 progress-bar-track max-w-[80px] mx-auto">
                    <motion.div
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(s.end / (s.label.includes('%') ? 100 : s.end)) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <GlowDivider variant="red" />

      {/* ============== TRAINERS ============== */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <AnimatedSection>
              <div className="section-label">Our Team</div>
              <h2 className="font-display text-[clamp(3rem,5vw,4.5rem)] text-white tracking-wider leading-[0.9]">
                ELITE <span className="orange-text-gradient">COACHES</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <MagneticButton>
                <Link to="/trainers" className="titan-btn-outline text-xs">
                  Meet All Coaches <ArrowRight size={13} />
                </Link>
              </MagneticButton>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainers.map((trainer, i) => (
              <AnimatedSection key={trainer.name} delay={i * 0.15}>
                <TiltCard maxTilt={5} scale={1.02} className="group relative overflow-hidden h-full">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={trainer.img}
                      alt={trainer.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/10 to-transparent" />

                  {/* Spotlight hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'radial-gradient(circle at 50% 70%, rgba(249,115,22,0.08) 0%, transparent 60%)' }} />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-display text-2xl text-white tracking-wider">{trainer.name}</h3>
                        <p className="text-orange-500 text-sm font-semibold mt-0.5">{trainer.role}</p>
                        <p className="text-white/40 text-xs mt-1">{trainer.spec}</p>
                      </div>
                      <div className="glass-card px-2 py-1.5 text-white/50 text-xs font-medium">
                        {trainer.exp}
                      </div>
                    </div>
                  </div>

                  {/* Bottom border glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/0 to-transparent group-hover:via-orange-500/40 transition-all duration-500" />
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============== TESTIMONIALS SLIDER ============== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <AnimatedSection className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <div className="section-label">Client Stories</div>
                <h2 className="font-display text-[clamp(3rem,5vw,4.5rem)] text-white tracking-wider leading-[0.9]">
                  REAL <span className="orange-text-gradient">RESULTS</span>
                </h2>
              </div>
              <MagneticButton>
                <Link to="/transformations" className="titan-btn-outline text-xs">
                  All Transformations <ArrowRight size={13} />
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <TestimonialSlider testimonials={testimonials} autoPlayInterval={5500} />
          </AnimatedSection>
        </div>
      </section>

      <GlowDivider />

      {/* ============== MEMBERSHIP PLANS ============== */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <AnimatedSection className="text-center mb-16">
            <div className="section-label justify-center">Membership</div>
            <h2 className="font-display text-[clamp(3rem,5vw,4.5rem)] text-white tracking-wider">
              CHOOSE YOUR <span className="orange-text-gradient">PATH</span>
            </h2>
            <p className="text-white/40 mt-4 max-w-sm mx-auto text-sm">
              Every tier is engineered for a different level of commitment.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 0.1}>
                <TiltCard maxTilt={4} scale={1.02} className="h-full">
                  {plan.popular ? (
                    <div className="gradient-border-card p-[1px] h-full" style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                      <div className="relative p-7 h-full flex flex-col bg-[#0e0e0e]" style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
                        <PlanContent plan={plan} popular />
                      </div>
                    </div>
                  ) : (
                    <div className="glass-card-hover p-7 h-full flex flex-col">
                      <PlanContent plan={plan} popular={false} />
                    </div>
                  )}
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CINEMATIC QUOTE ============== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Titan"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#080808]/90" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(249,115,22,0.04) 0%, transparent 70%)'
          }} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="font-display text-[200px] leading-none text-orange-500/10 select-none pointer-events-none absolute -top-8 -left-4">"</div>
              <div className="relative">
                <blockquote className="font-display text-[clamp(2rem,3.5vw,3rem)] text-white tracking-wide leading-tight mb-8">
                  We don't build bodies; we build legacies. TITAN is where potential{' '}
                  <span className="orange-text-gradient">becomes performance.</span>
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="divider-orange" />
                  <div>
                    <p className="text-white font-bold">Marcus Vance</p>
                    <p className="text-white/40 text-xs uppercase tracking-widest">Founder & Head Performance Architect</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" className="relative">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src="https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Training"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#080808]/40 flex items-center justify-center">
                  <MagneticButton>
                    <motion.button
                      className="w-18 h-18 rounded-full flex items-center justify-center relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ width: 72, height: 72 }}
                    >
                      <div className="absolute inset-0 rounded-full orange-gradient" />
                      <motion.div
                        className="absolute inset-0 rounded-full orange-gradient opacity-50"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                      />
                      <Play size={22} className="text-white fill-white ml-1.5 relative z-10" />
                    </motion.button>
                  </MagneticButton>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/60 text-xs uppercase tracking-widest text-center">Watch The Titan Story</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(249,115,22,0.04) 0%, transparent 60%)'
        }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center relative z-10">
          <AnimatedSection>
            <div className="section-label justify-center">Get Started</div>
            <h2 className="font-display text-[clamp(3rem,7vw,7rem)] text-white tracking-wider leading-[0.88] mb-6 text-shadow-orange">
              START YOUR<br /><span className="orange-text-gradient">TRANSFORMATION</span><br />TODAY
            </h2>
            <p className="text-white/45 max-w-lg mx-auto mb-12 leading-relaxed">
              Applications for new members are currently open. Join the brotherhood today and begin your elite fitness journey.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <MagneticButton>
                <Link to="/membership" className="titan-btn-primary">
                  Apply For Membership <ArrowRight size={15} />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/contact" className="titan-btn-outline">
                  Book a Studio Tour
                </Link>
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

function PlanContent({ plan, popular }: { plan: typeof plans[0]; popular: boolean }) {
  return (
    <>
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="orange-gradient text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1">
            Most Popular
          </span>
        </div>
      )}
      <div className="mb-6">
        <p className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.35em] mb-2">{plan.name}</p>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-5xl text-white tracking-wider">${plan.price}</span>
          <span className="text-white/35 text-sm">{plan.period}</span>
        </div>
      </div>
      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm text-white/60">
            <Check size={13} className="text-orange-500 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <MagneticButton className="w-full">
        <Link
          to="/membership"
          className={`block text-center text-xs ${popular ? 'titan-btn-primary' : 'titan-btn-outline'}`}
          style={{ width: '100%' }}
        >
          Get Started
        </Link>
      </MagneticButton>
    </>
  );
}
