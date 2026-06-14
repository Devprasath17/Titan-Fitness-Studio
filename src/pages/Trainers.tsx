import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, X, Instagram, Twitter, Award, Clock } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatCounter from '../components/StatCounter';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';

interface Trainer {
  id: number;
  name: string;
  role: string;
  years: number;
  certifications: string[];
  specialty: string;
  image: string;
  bio: string;
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'Head Strength Coach',
    years: 12,
    certifications: ['CSCS', 'NSCA', 'USA Weightlifting'],
    specialty: 'Powerlifting & Athletic Performance',
    image:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Marcus brings 12 years of elite coaching experience, specializing in powerlifting programming and athletic performance optimization.',
  },
  {
    id: 2,
    name: 'Jordan Knox',
    role: 'Sports Nutritionist',
    years: 8,
    certifications: ['Precision Nutrition L2', 'ISSN'],
    specialty: 'Body Recomposition',
    image:
      'https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Jordan crafts personalized nutrition strategies to maximize body recomposition results for every athlete.',
  },
  {
    id: 3,
    name: 'Elena Reyes',
    role: "Women's Head Coach",
    years: 10,
    certifications: ['ACE', 'NASM', 'Pre/Post Natal'],
    specialty: 'Functional Fitness & Wellness',
    image:
      'https://images.pexels.com/photos/18060165/pexels-photo-18060165.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Elena empowers women through functional fitness and specialized pre/postnatal training programs.',
  },
  {
    id: 4,
    name: 'Darius Cole',
    role: 'CrossFit & Conditioning',
    years: 9,
    certifications: ['CrossFit L3', 'USAW'],
    specialty: 'High Intensity & Metabolic Conditioning',
    image:
      'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Darius designs high-intensity protocols that deliver transformative metabolic conditioning results.',
  },
  {
    id: 5,
    name: 'Nina Schwartz',
    role: 'Yoga & Recovery',
    years: 7,
    certifications: ['RYT 500', 'FMS'],
    specialty: 'Mobility & Recovery Protocols',
    image:
      'https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Nina integrates mobility work and recovery protocols to keep athletes performing at peak levels.',
  },
  {
    id: 6,
    name: 'Tyson Grant',
    role: 'Boxing & Conditioning',
    years: 11,
    certifications: ['USA Boxing Coach', 'S&C'],
    specialty: 'Combat Sports & Conditioning',
    image:
      'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Tyson brings combat sports expertise combined with elite conditioning training methodologies.',
  },
];

interface TrainerDetailModalProps {
  trainer: Trainer | null;
  onClose: () => void;
}

function TrainerDetailModal({ trainer, onClose }: TrainerDetailModalProps) {
  if (!trainer) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(4,4,4,0.92)', backdropFilter: 'blur(20px)' }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
          className="relative overflow-hidden max-w-2xl w-full"
          style={{
            background: 'rgba(12,12,12,0.95)',
            border: '1px solid rgba(249,115,22,0.15)',
            boxShadow: '0 40px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(249,115,22,0.08)',
          }}
        >
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center border border-white/10 hover:border-orange-500/40 text-white/50 hover:text-white transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={16} />
          </motion.button>

          <div className="relative overflow-hidden aspect-[4/5] md:aspect-video">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a1a]" />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-2">
                  {trainer.name}
                </h2>
                <p className="text-orange-500 font-semibold text-lg">
                  {trainer.role}
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-red-600 px-4 py-2 rounded-full">
                <p className="text-white font-bold flex items-center gap-2">
                  <Clock size={18} />
                  {trainer.years} yrs
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {trainer.bio}
            </p>

            <div className="mb-8">
              <h3 className="section-label mb-4">Specialization</h3>
              <p className="text-xl text-orange-400 font-semibold">
                {trainer.specialty}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="section-label mb-4">Certifications</h3>
              <div className="flex flex-wrap gap-3">
                {trainer.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="glass-card px-4 py-2 flex items-center gap-2"
                  >
                    <Award size={16} className="text-orange-400" />
                    <span className="text-white">{cert}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="titan-btn-primary flex items-center gap-2 flex-1 justify-center"
              >
                Book a Session
                <ArrowRight size={18} />
              </Link>
              <button className="titan-btn-outline p-3">
                <Instagram size={20} />
              </button>
              <button className="titan-btn-outline p-3">
                <Twitter size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function TrainerCard({
  trainer,
  onSelect,
}: {
  trainer: Trainer;
  onSelect: (trainer: Trainer) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: '-60px' }}
      className="group cursor-pointer"
      onClick={() => onSelect(trainer)}
    >
      <TiltCard maxTilt={6} scale={1.02} className="relative overflow-hidden aspect-[3/4]">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />

        {/* Spotlight glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'radial-gradient(circle at 50% 60%, rgba(249,115,22,0.1) 0%, transparent 65%)' }} />

        {/* Border glow */}
        <div className="absolute inset-0 border border-white/0 group-hover:border-orange-500/25 transition-all duration-500" />

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 p-6"
        >
          <h3 className="font-display text-3xl text-white tracking-wider mb-1">{trainer.name}</h3>
          <p className="text-orange-500 font-semibold text-sm mb-3">{trainer.role}</p>
          <p className="text-white/50 text-xs mb-4">{trainer.specialty}</p>
          <div className="flex gap-2 mb-5 flex-wrap">
            {trainer.certifications.slice(0, 2).map((cert, idx) => (
              <span key={idx} className="text-[10px] border border-orange-500/30 px-2 py-0.5 text-orange-400/80 uppercase tracking-wider">
                {cert}
              </span>
            ))}
          </div>
          <div className="titan-btn-primary text-xs py-2.5 w-full flex items-center justify-center gap-2">
            View Profile <ArrowRight size={13} />
          </div>
        </motion.div>
      </TiltCard>

      <div className="mt-4 px-1">
        <h3 className="font-display text-2xl text-white tracking-wider">{trainer.name}</h3>
        <p className="text-orange-500/70 text-xs font-semibold uppercase tracking-widest mt-0.5">
          {trainer.years} Years Experience
        </p>
      </div>
    </motion.div>
  );
}

function StatsRow() {
  return (
    <AnimatedSection direction="up" delay={0.2}>
      <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-xl p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl orange-text-gradient mb-2">
              6
            </div>
            <p className="text-gray-300 font-semibold">Expert Coaches</p>
          </div>
          <div className="text-center">
            <StatCounter
              end={50}
              suffix="+"
              label="Combined Years"
              prefix=""
            />
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl orange-text-gradient mb-2">
              12+
            </div>
            <p className="text-gray-300 font-semibold">Certifications</p>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl md:text-5xl orange-text-gradient mb-2">
              98%
            </div>
            <p className="text-gray-300 font-semibold">Client Retention</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function CTASection() {
  return (
    <AnimatedSection direction="up">
      <div className="relative rounded-xl overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 orange-gradient opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">
            Ready to Transform?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Our expert coaches are ready to design your personalized training
            program. Start your journey to elite fitness today.
          </p>

          <MagneticButton>
            <Link to="/contact" className="titan-btn-primary inline-flex items-center gap-3">
              Schedule a Consultation
              <ArrowRight size={18} />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-[#080808] min-h-screen">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-b from-orange-500/0 via-transparent to-[#080808]/80"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="section-label mb-4">Our Team</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6">
              MEET OUR EXPERT
              <span className="block orange-text-gradient">COACHES</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              World-class trainers dedicated to your transformation
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 -mt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Stats Row */}
          <StatsRow />

          {/* Trainers Grid */}
          <section className="mt-24">
            <AnimatedSection direction="up" delay={0}>
              <p className="section-label text-center mb-16">Elite Coaching Staff</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {trainers.map((trainer) => (
                <TrainerCard
                  key={trainer.id}
                  trainer={trainer}
                  onSelect={setSelectedTrainer}
                />
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-32">
            <CTASection />
          </section>
        </div>
      </div>

      {/* Trainer Detail Modal */}
      <TrainerDetailModal
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
      />
    </div>
  );
}
