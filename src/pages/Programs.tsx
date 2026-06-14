import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatCounter from '../components/StatCounter';

const programs = [
  {
    id: 1,
    title: 'Strength Training',
    tag: 'POWER',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Build maximum strength with progressive overload techniques',
    benefits: ['Increased muscle mass', 'Enhanced bone density', 'Functional power'],
    category: 'Strength',
  },
  {
    id: 2,
    title: 'Weight Loss',
    tag: 'SHRED',
    image: 'https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-intensity programs designed to maximize fat loss',
    benefits: ['Rapid fat reduction', 'Metabolic boost', 'Sustainable results'],
    category: 'Cardio',
  },
  {
    id: 3,
    title: 'Muscle Building',
    tag: 'HYPERTROPHY',
    image: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Specialized hypertrophy training for serious muscle gains',
    benefits: ['Muscle growth', 'Improved aesthetics', 'Strength gains'],
    category: 'Strength',
  },
  {
    id: 4,
    title: 'CrossFit',
    tag: 'ELITE',
    image: 'https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-intensity functional training for all fitness levels',
    benefits: ['Full-body conditioning', 'Community-driven', 'Constant variation'],
    category: 'Specialty',
  },
  {
    id: 5,
    title: 'Cardio Training',
    tag: 'CARDIO',
    image: 'https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Elevate your cardiovascular fitness with expert-led sessions',
    benefits: ['Heart health', 'Endurance building', 'Weight management'],
    category: 'Cardio',
  },
  {
    id: 6,
    title: 'Functional Training',
    tag: 'FUNCTION',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Movement-based training that improves daily life performance',
    benefits: ['Better mobility', 'Injury prevention', 'Real-world strength'],
    category: 'Specialty',
  },
  {
    id: 7,
    title: 'Personal Training',
    tag: 'VIP',
    image: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'One-on-one coaching tailored to your specific goals',
    benefits: ['Personalized plans', 'Expert guidance', 'Accountability'],
    category: 'Specialty',
  },
  {
    id: 8,
    title: 'Nutrition Coaching',
    tag: 'FUEL',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Comprehensive nutrition guidance to support your fitness goals',
    benefits: ['Meal planning', 'Macro optimization', 'Sustainable habits'],
    category: 'Specialty',
  },
];

const filters = ['All', 'Strength', 'Cardio', 'Specialty'];

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredPrograms =
    activeFilter === 'All'
      ? programs
      : programs.filter((program) => program.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img
            src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Programs hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#080808]"></div>
        </motion.div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="font-display text-6xl md:text-7xl font-bold mb-6 orange-text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            PROGRAMS DESIGNED FOR EVERY GOAL
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you're a beginner or elite athlete, we have the perfect program to help you
            achieve your fitness goals
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-10 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowRight className="w-8 h-8 orange-text-gradient rotate-90" />
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 md:px-8 sticky top-20 bg-[#080808]/95 backdrop-blur z-40 border-b border-orange-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeFilter === filter
                    ? 'titan-btn-primary text-white'
                    : 'titan-btn-outline'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  className="glass-card group cursor-pointer overflow-hidden rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                    {/* Tag Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                        {program.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 orange-text-gradient">
                      {program.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{program.description}</p>

                    {/* Benefits List */}
                    <ul className="space-y-2 mb-6">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                          <Check className="w-4 h-4 text-orange-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 titan-btn-primary text-white px-4 py-2 rounded-lg text-sm font-semibold w-full justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-orange-900/20 to-red-900/20 border-y border-orange-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="text-center">
                <StatCounter end={50} suffix="+" label="Programs Available" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.1}>
              <div className="text-center">
                <StatCounter end={10000} suffix="+" label="Happy Members" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <div className="text-center">
                <StatCounter end={98} suffix="%" label="Success Rate" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <AnimatedSection direction="up" delay={0}>
          <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-lg">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 orange-text-gradient">
              Ready to Transform?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join Titan Fitness Studio today and start your journey to becoming your best self.
              Our expert trainers and premium programs are waiting for you.
            </p>
            <Link
              to="/membership"
              className="inline-block titan-btn-primary text-white px-8 py-3 rounded-lg font-bold text-lg"
            >
              Choose Your Membership
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
