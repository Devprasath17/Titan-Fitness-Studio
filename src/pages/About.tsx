import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, FlaskConical, ChevronDown } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatCounter from '../components/StatCounter';

export default function About() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/50 to-[#080808]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-5xl mx-auto px-6"
        >
          <h1 className="font-display text-7xl md:text-8xl font-bold mb-6 leading-tight">
            MORE THAN A GYM.
            <br />
            <span className="orange-text-gradient">A FITNESS COMMUNITY.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Where elite athletes and dedicated individuals transform their bodies and minds through
            uncompromising coaching and scientific methodology.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 mx-auto text-orange-500" />
          </motion.div>
        </motion.div>
      </section>

      {/* The Titan Legacy */}
      <AnimatedSection className="py-20 md:py-32 px-6" delay={0} direction="up">
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image with overlay badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Legacy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 glass-card p-6 rounded-lg"
              >
                <div className="text-orange-500 font-display text-2xl font-bold">10+</div>
                <div className="text-sm text-gray-300">Years of Excellence</div>
              </motion.div>
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="section-label mb-6">OUR STORY</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The Titan<br />Legacy
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Founded in 2012 by a collective of elite performance athletes and coaching visionaries,
                Titan Fitness Studio emerged from a singular mission: to create an uncompromising space
                where transformation is the only acceptable outcome.
              </p>
              <p className="text-gray-400 text-base mb-8">
                What began in a modest 2,000 sqft warehouse has evolved into a global fitness movement,
                powered by athletes who refuse mediocrity and coaches who demand excellence at every rep,
                every set, every session.
              </p>

              {/* Inline Stats */}
              <div className="grid grid-cols-3 gap-4 p-6 glass-card rounded-lg">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold orange-text-gradient">5K+</div>
                  <div className="text-xs text-gray-400">Active Members</div>
                </div>
                <div className="text-center border-l border-r border-orange-500/20">
                  <div className="font-display text-3xl font-bold orange-text-gradient">24/7</div>
                  <div className="text-xs text-gray-400">Access</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold orange-text-gradient">12</div>
                  <div className="text-xs text-gray-400">Elite Coaches</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#080808] to-[#0a0a0a]" delay={0.1} direction="up">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-6">CORE PHILOSOPHY</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card-hover glass-card p-10 rounded-lg border border-orange-500/10 hover:border-orange-500/30 transition-all"
            >
              <h3 className="font-display text-2xl font-bold mb-4 orange-text-gradient">MISSION</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To empower individuals through scientific methodology and elite-level coaching,
                fostering a lifestyle of perpetual growth and physical dominance.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card-hover glass-card p-10 rounded-lg border border-orange-500/10 hover:border-orange-500/30 transition-all"
            >
              <h3 className="font-display text-2xl font-bold mb-4 orange-text-gradient">VISION</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To define the future of high-performance living, becoming the global benchmark
                for the intersection of fitness, community, and luxury.
              </p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Core DNA - 4 Values Grid */}
      <AnimatedSection className="py-20 md:py-32 px-6" delay={0.2} direction="up">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-6">WHAT WE STAND FOR</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Our Core DNA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target, title: 'Uncompromising Precision', desc: 'Every movement measured, every result tracked, every detail matters.' },
              { icon: Users, title: 'Iron Brotherhood', desc: 'A community bound by shared values, mutual respect, and collective ambition.' },
              { icon: Award, title: 'Elite Standards', desc: 'We refuse mediocrity. Excellence is the only acceptable baseline.' },
              { icon: FlaskConical, title: 'Science Based', desc: 'Evidence-driven methods rooted in biomechanics and performance physiology.' },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-lg text-center group hover:border-orange-500/50 transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full orange-gradient mb-6 group-hover:shadow-lg group-hover:shadow-orange-500/50 transition-all"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </AnimatedSection>

      {/* The Titan Journey - Timeline */}
      <AnimatedSection className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#080808] to-[#0a0a0a]" delay={0.3} direction="up">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-6">OUR EVOLUTION</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              The Titan Journey
            </h2>
          </div>

          <div className="space-y-8">
            {[
              { year: '2012', title: 'The Spark', desc: 'Founded in a humble 2,000 sqft warehouse with a vision to revolutionize fitness.' },
              { year: '2015', title: 'Expansion', desc: 'Moved to our flagship downtown location, expanding to 8,000 sqft of elite training space.' },
              { year: '2018', title: 'Digital Elite', desc: 'Launched TITAN ONLINE, bringing elite coaching to athletes across the globe.' },
              { year: '2023', title: 'Global Dominance', desc: 'Opened 3 international locations and established TITAN ACADEMY for coach certification.' },
            ].map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-lg border-l-4 border-orange-500 hover:bg-orange-500/5 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="font-display text-4xl font-bold orange-text-gradient min-w-20">{milestone.year}</div>
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Founder Quote Section */}
      <AnimatedSection className="py-20 md:py-32 px-6" delay={0.4} direction="up">
        <section className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 md:h-[450px] rounded-lg overflow-hidden group"
            >
              <img
                src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Marcus Vance"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#080808] to-transparent p-6">
                <h3 className="font-display text-2xl font-bold">Marcus Vance</h3>
                <p className="text-orange-500 text-sm font-semibold">Founder & Elite Coach</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <blockquote className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
                <span className="orange-text-gradient">
                  "We don't build bodies; we build legacies."
                </span>
                <br />
                <span className="text-white">
                  TITAN is where potential becomes performance.
                </span>
              </blockquote>
              <p className="text-gray-400 text-lg leading-relaxed">
                Since 2012, we've committed to an uncompromising standard of excellence. Every coach,
                every program, every session is designed to push beyond limits and create lasting transformation.
              </p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Meet The Trainers */}
      <AnimatedSection className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#080808] to-[#0a0a0a]" delay={0.5} direction="up">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-6">ELITE COACHING STAFF</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Meet The Trainers
            </h2>
            <p className="text-gray-400 text-lg">World-class coaches dedicated to your transformation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: 'Marcus Vance', title: 'Founder & Elite Coach', img: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { name: 'Jordan Knox', title: 'Performance Director', img: 'https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=600' },
              { name: 'Elena Reyes', title: 'Recovery & Nutrition Specialist', img: 'https://images.pexels.com/photos/18060165/pexels-photo-18060165.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ].map((trainer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group glass-card-hover rounded-lg overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2">{trainer.name}</h3>
                  <p className="text-orange-500 text-sm font-semibold mb-4">{trainer.title}</p>
                  <Link
                    to="/trainers"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-orange-500 transition-colors"
                  >
                    View Profile <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/trainers"
              className="inline-flex items-center gap-2 titan-btn-primary px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-orange-500/50"
            >
              View All Trainers <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </section>
      </AnimatedSection>

      {/* Animated Stats Row */}
      <AnimatedSection className="py-16 md:py-24 px-6" delay={0.6} direction="up">
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold orange-text-gradient mb-2">
                <StatCounter end={5400} suffix="+" label="" />
              </div>
              <p className="text-gray-400 text-sm">Active Members</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold orange-text-gradient mb-2">
                <StatCounter end={1200} suffix="+" label="" />
              </div>
              <p className="text-gray-400 text-sm">Lbs Transformed/Mo</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold orange-text-gradient mb-2">
                <StatCounter end={98} suffix="%" label="" />
              </div>
              <p className="text-gray-400 text-sm">Success Rate</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="font-display text-3xl md:text-4xl font-bold orange-text-gradient mb-2">
                <StatCounter end={310} suffix="+" label="" />
              </div>
              <p className="text-gray-400 text-sm">Elite Titans</p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#080808] to-[#0a0a0a]" delay={0.7} direction="up">
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            READY TO JOIN<br />
            <span className="orange-text-gradient">THE ELITE?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Transform your body, elevate your mindset, and become part of a global fitness revolution.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              to="/membership"
              className="titan-btn-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-orange-500/50"
            >
              Apply For Membership
            </Link>
            <Link
              to="/contact"
              className="titan-btn-outline px-8 py-4 rounded-lg font-semibold text-lg border border-orange-500/50 hover:border-orange-500 transition-all"
            >
              Take a Studio Tour
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
