import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play, X, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatCounter from '../components/StatCounter';

interface TransformationStory {
  id: number;
  name: string;
  category: 'weight-loss' | 'muscle-gain' | 'featured';
  image: string;
  title: string;
  description: string;
  results: string;
  quote?: string;
  timeframe?: string;
}

const transformationStories: TransformationStory[] = [
  {
    id: 1,
    name: "Julian's 12-Month Odyssey",
    category: 'featured',
    image:
      'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: "Julian's 12-Month Odyssey",
    description:
      'From couch to confidence: A complete life transformation through dedicated training and nutrition.',
    results: 'Complete physique transformation',
    timeframe: '12 months',
  },
  {
    id: 2,
    name: 'Sarah: The Peak',
    category: 'featured',
    image:
      'https://images.pexels.com/photos/18060165/pexels-photo-18060165.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Sarah: The Peak',
    description: 'Achieving personal strength records and body confidence.',
    results: 'Elite fitness level',
  },
  {
    id: 3,
    name: 'Marcus: Speed',
    category: 'featured',
    image:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Marcus: Speed',
    description: 'Athletic performance breakthrough through conditioning.',
    results: 'Peak performance',
  },
  {
    id: 4,
    name: 'Claire: Strength',
    category: 'featured',
    image:
      'https://images.pexels.com/photos/3822356/pexels-photo-3822356.jpeg?auto=compress&cs=tinysrgb&w=400',
    title: 'Claire: Strength',
    description: 'Building functional strength and resilience.',
    results: 'Unmatched strength',
  },
  {
    id: 5,
    name: 'Eric V.',
    category: 'weight-loss',
    image:
      'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Eric V.',
    description: 'Titan Core Program',
    results: '-45 lbs in 6 Months',
    timeframe: '6 months',
  },
  {
    id: 6,
    name: 'Sophia L.',
    category: 'weight-loss',
    image:
      'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Sophia L.',
    description: 'Elite Sculpt',
    results: '-32 lbs in 4 Months',
    timeframe: '4 months',
  },
  {
    id: 7,
    name: 'David K.',
    category: 'muscle-gain',
    image:
      'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'David K.',
    description: 'Hypertrophy Mastery',
    results: '+45 lbs lean mass',
    quote:
      'The hypertrophy protocols at Titan transformed not just my body, but my entire approach to discipline.',
  },
  {
    id: 8,
    name: 'Megan R.',
    category: 'muscle-gain',
    image:
      'https://images.pexels.com/photos/18060165/pexels-photo-18060165.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Megan R.',
    description: 'Women Elite Strength',
    results: '+36 lbs lean mass',
    quote:
      'I never knew I could achieve this level of strength. The coaches here push you to a different dimension.',
  },
  {
    id: 9,
    name: 'Tyson G.',
    category: 'muscle-gain',
    image:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Tyson G.',
    description: 'Transformation Elite',
    results: '+52 lbs lean mass',
    quote:
      'From scrawny to powerhouse, TITAN provided the roadmap I just had to drive.',
  },
];

interface LightboxProps {
  image: string | null;
  onClose: () => void;
}

function ImageLightbox({ image, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
          >
            <X size={24} className="text-white" />
          </button>

          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            src={image}
            alt="Transformation"
            className="max-w-4xl max-h-[90vh] object-contain rounded-lg"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StatsRow() {
  return (
    <AnimatedSection direction="up" delay={0.2}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        <div className="glass-card p-6 text-center">
          <StatCounter
            end={5400}
            suffix="+"
            label="Total Lost"
            prefix=""
          />
          <p className="text-gray-400 text-sm">lbs</p>
        </div>
        <div className="glass-card p-6 text-center">
          <StatCounter
            end={1200}
            suffix="+"
            label="Muscle Gained"
            prefix=""
          />
          <p className="text-gray-400 text-sm">lbs</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="font-display text-4xl md:text-5xl orange-text-gradient mb-2">
            98%
          </div>
          <p className="text-gray-300 font-semibold">Success Rate</p>
        </div>
        <div className="glass-card p-6 text-center">
          <div className="font-display text-4xl md:text-5xl orange-text-gradient mb-2">
            310+
          </div>
          <p className="text-gray-300 font-semibold">Elite Titans</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

function FeaturedTestimonial() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const featured = transformationStories.filter((s) => s.category === 'featured');

  return (
    <section className="py-20 md:py-32">
      <AnimatedSection direction="up" delay={0}>
        <p className="section-label text-center mb-16">Client Stories</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Main Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-2 md:row-span-2 group cursor-pointer relative overflow-hidden rounded-xl aspect-[4/5]"
          onClick={() => setSelectedImage(featured[0]?.image || null)}
        >
          <img
            src={featured[0]?.image}
            alt={featured[0]?.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 group-hover:to-black/90 transition-colors" />

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Play
                size={64}
                className="text-orange-500 fill-orange-500"
                strokeWidth={1}
              />
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <p className="section-label mb-2">Featured Story</p>
            <h3 className="font-display text-2xl md:text-4xl text-white mb-2">
              {featured[0]?.name}
            </h3>
            <p className="text-gray-200">{featured[0]?.results}</p>
            {featured[0]?.timeframe && (
              <p className="text-orange-400 text-sm mt-2">
                {featured[0].timeframe}
              </p>
            )}
          </div>
        </motion.div>

        {/* Side Stories */}
        {featured.slice(1, 4).map((story, idx) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer relative overflow-hidden rounded-xl aspect-[3/4]"
            onClick={() => setSelectedImage(story.image)}
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 group-hover:to-black/90 transition-colors" />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="font-display text-xl md:text-2xl text-white mb-1">
                {story.name}
              </h3>
              <p className="text-gray-300 text-sm">{story.results}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <ImageLightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-semibold transition-all ${
        active
          ? 'orange-gradient text-white'
          : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
}

function TransformationGallery() {
  const [filter, setFilter] = useState<'all' | 'weight-loss' | 'muscle-gain'>(
    'all'
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered =
    filter === 'all'
      ? transformationStories.filter((s) => s.category !== 'featured')
      : transformationStories.filter(
          (s) => s.category === filter
        );

  return (
    <section className="py-20 md:py-32">
      <AnimatedSection direction="up" delay={0}>
        <div className="text-center mb-16">
          <p className="section-label mb-4">Transformation Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-10">
            WEIGHT SHED & MUSCLE ELITE
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <FilterButton
              label="All"
              active={filter === 'all'}
              onClick={() => setFilter('all')}
            />
            <FilterButton
              label="Weight Loss"
              active={filter === 'weight-loss'}
              onClick={() => setFilter('weight-loss')}
            />
            <FilterButton
              label="Muscle Gain"
              active={filter === 'muscle-gain'}
              onClick={() => setFilter('muscle-gain')}
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {filtered.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(story.image)}
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[16/9]">
                <motion.img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-orange-500 hover:bg-orange-600 rounded-full p-4 transition-colors">
                    <X size={24} className="text-white" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2">
                  {story.name}
                </h3>
                <p className="text-orange-400 font-semibold mb-4">
                  {story.results}
                </p>
                <p className="text-gray-400 text-sm md:text-base mb-4">
                  {story.description}
                </p>

                {story.quote && (
                  <p className="text-gray-300 italic border-l-2 border-orange-500 pl-4 py-3">
                    "{story.quote}"
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <ImageLightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}

function CTASection() {
  return (
    <AnimatedSection direction="up">
      <div className="relative rounded-xl overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 orange-gradient opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-600/5" />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            WRITE YOUR
            <span className="block orange-text-gradient">OWN STORY</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Your transformation starts now. Join 310+ elite Titan members who've
            achieved extraordinary results. Our data-driven approach, expert
            coaching, and supportive community are ready for you.
          </p>

          <Link to="/membership" className="titan-btn-primary inline-flex items-center gap-3 text-lg">
            Apply for Membership
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Transformations() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div className="bg-[#080808] min-h-screen">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-b from-orange-500/0 via-transparent to-[#080808]/90"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6">
              REAL RESULTS.
              <span className="block orange-text-gradient">REAL PEOPLE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              The transformation of a lifetime begins with a single decision.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 -mt-20 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Stats Row */}
          <StatsRow />

          {/* Featured Testimonials */}
          <section className="mt-32">
            <FeaturedTestimonial />
          </section>

          {/* Gallery with Filters */}
          <section className="mt-32">
            <TransformationGallery />
          </section>

          {/* CTA Section */}
          <section className="mt-32">
            <CTASection />
          </section>
        </div>
      </div>
    </div>
  );
}
