import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, X, ChevronDown, Zap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';

interface FAQItem {
  question: string;
  answer: string;
}

const membershipTiers = [
  {
    name: 'BASIC',
    price: 49,
    description: 'Perfect for getting started',
    popular: false,
    features: [
      { name: 'Gym Access (6am-10pm)', included: true },
      { name: 'Locker Access', included: true },
      { name: 'Basic Equipment', included: true },
      { name: 'App Progress Tracking', included: true },
      { name: 'Cardio Zone & Pools', included: false },
      { name: 'Unlimited Group Classes', included: false },
      { name: 'Personal Trainer Sessions', included: false },
      { name: 'Custom Diet Plan', included: false },
      { name: 'Recovery Lounge', included: false },
      { name: 'Spa & Recovery Access', included: false },
    ],
  },
  {
    name: 'STANDARD',
    price: 89,
    description: 'Our most popular choice',
    popular: true,
    features: [
      { name: 'Gym Access (6am-10pm)', included: true },
      { name: 'Locker Access', included: true },
      { name: 'Basic Equipment', included: true },
      { name: 'App Progress Tracking', included: true },
      { name: 'Cardio Zone & Pools', included: true },
      { name: 'Unlimited Group Classes', included: true },
      { name: 'Nutrition Guide', included: true },
      { name: 'Recovery Lounge Access', included: true },
      { name: 'Guest Pass (1x/mo)', included: true },
      { name: 'Personal Trainer Sessions', included: false },
      { name: 'Custom Diet Plan', included: false },
      { name: 'Spa & Recovery Access', included: false },
    ],
  },
  {
    name: 'PREMIUM',
    price: 149,
    description: 'The ultimate elite experience',
    popular: false,
    features: [
      { name: 'Gym Access (6am-10pm)', included: true },
      { name: 'Locker Access', included: true },
      { name: 'Basic Equipment', included: true },
      { name: 'App Progress Tracking', included: true },
      { name: 'Cardio Zone & Pools', included: true },
      { name: 'Unlimited Group Classes', included: true },
      { name: 'Nutrition Guide', included: true },
      { name: 'Recovery Lounge Access', included: true },
      { name: 'Guest Pass (1x/mo)', included: true },
      { name: 'Personal Trainer (8 sessions/mo)', included: true },
      { name: 'Custom Diet Plan', included: true },
      { name: 'Monthly Fitness Assessment', included: true },
      { name: 'Priority Class Booking', included: true },
      { name: '2 Guest Passes/mo', included: true },
      { name: 'Spa & Recovery Access', included: true },
    ],
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'What is your cancellation policy?',
    answer: 'Monthly memberships can be cancelled anytime with 30 days notice. Annual memberships can be cancelled with 60 days notice and will receive a prorated refund of unused time.',
  },
  {
    question: 'Is there a joining fee?',
    answer: 'No! We believe fitness should be accessible. Standard membership includes a complimentary fitness assessment and orientation session valued at $299.',
  },
  {
    question: 'Do you offer a trial period?',
    answer: 'Absolutely. New members get a free 7-day trial pass to experience our facilities and classes before committing to a membership.',
  },
  {
    question: 'Can I freeze my membership?',
    answer: 'Yes. You can freeze your membership for up to 3 months per year at no additional cost. Perfect for travel or temporary circumstances.',
  },
  {
    question: 'What is your guest policy?',
    answer: 'Basic members can bring guests with day passes. Standard members get 1 guest pass/month included. Premium members get 2 guest passes/month.',
  },
  {
    question: 'How do I book a personal trainer?',
    answer: 'Premium members can book personal training sessions through our app or by contacting our coaching staff. Sessions are available 6am-8pm daily.',
  },
];

interface TierContentProps {
  tier: { name: string; price: number; description: string; popular: boolean; features: { name: string; included: boolean }[] };
  getPrice: (p: number) => number;
  isAnnual: boolean;
}

function MembershipTierContent({ tier, getPrice, isAnnual }: TierContentProps) {
  return (
    <>
      <div className="mb-6 mt-2">
        <p className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.35em] mb-2">{tier.name}</p>
        <p className="text-white/40 text-xs mb-4">{tier.description}</p>
        <div className="flex items-baseline gap-1">
          <span className="font-display text-5xl text-white tracking-wider">${getPrice(tier.price)}</span>
          <span className="text-white/35 text-sm">/{isAnnual ? 'mo*' : 'mo'}</span>
        </div>
        {isAnnual && <p className="text-orange-500/70 text-[10px] mt-1">*billed annually — 20% off</p>}
      </div>
      <div className="space-y-3 flex-1 mb-8">
        {tier.features.slice(0, 8).map((feature, fidx) => (
          <div key={fidx} className="flex items-center gap-3">
            {feature.included ? (
              <Check className="w-[14px] h-[14px] text-orange-500 shrink-0" />
            ) : (
              <X className="w-[14px] h-[14px] text-white/20 shrink-0" />
            )}
            <span className={`text-sm ${feature.included ? 'text-white/65' : 'text-white/20'}`}>
              {feature.name}
            </span>
          </div>
        ))}
      </div>
      <MagneticButton className="w-full">
        <Link to="/contact" className={`block text-center text-xs w-full ${tier.popular ? 'titan-btn-primary' : 'titan-btn-outline'}`}>
          Get Started
        </Link>
      </MagneticButton>
    </>
  );
}

export default function Membership() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const getPrice = (basePrice: number) => {
    if (isAnnual) {
      return Math.floor(basePrice * 12 * 0.8 / 12);
    }
    return basePrice;
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1956658/pexels-photo-1956658.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808]/60 to-[#080808]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-tight">
            CHOOSE YOUR
            <br />
            <span className="orange-text-gradient">FITNESS JOURNEY</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Three elite membership tiers designed for every level of commitment. Find your fit and
            transform your life.
          </p>
        </motion.div>
      </section>

      {/* Billing Toggle */}
      <AnimatedSection className="py-16 px-6" delay={0} direction="up">
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-4 glass-card p-2 rounded-full">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  !isAnnual
                    ? 'orange-gradient text-white shadow-lg shadow-orange-500/50'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  isAnnual
                    ? 'orange-gradient text-white shadow-lg shadow-orange-500/50'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Annual
              </button>
            </div>
            {isAnnual && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-lg"
              >
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="text-orange-400 font-semibold">Save 20% with annual billing</span>
              </motion.div>
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* Membership Tiers */}
      <AnimatedSection className="py-16 md:py-24 px-6" delay={0.1} direction="up">
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
            {membershipTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className={tier.popular ? 'md:-mt-4' : ''}
              >
                <TiltCard maxTilt={4} scale={1.02} className="h-full">
                  {tier.popular ? (
                    <div className="gradient-border-card p-[1px] h-full" style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                      <div className="p-8 h-full flex flex-col relative" style={{ background: 'rgba(12,12,12,0.98)', clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                          <span className="orange-gradient text-white text-[9px] font-bold uppercase tracking-[0.25em] px-5 py-1.5">
                            Most Popular
                          </span>
                        </div>
                        <MembershipTierContent tier={tier} getPrice={getPrice} isAnnual={isAnnual} />
                      </div>
                    </div>
                  ) : (
                    <div className="glass-card-hover p-8 h-full flex flex-col">
                      <MembershipTierContent tier={tier} getPrice={getPrice} isAnnual={isAnnual} />
                    </div>
                  )}
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Comparison Table */}
      <AnimatedSection className="py-16 md:py-24 px-6 bg-gradient-to-b from-[#080808] to-[#0a0a0a]" delay={0.2} direction="up">
        <section className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-6">FEATURE COMPARISON</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Find Your Perfect Fit
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-[#080808] z-10">
                <tr>
                  <th className="text-left p-4 border-b border-orange-500/20 font-display text-lg font-bold">
                    Features
                  </th>
                  <th className="text-center p-4 border-b border-orange-500/20 font-display text-lg font-bold">
                    BASIC
                  </th>
                  <th className="text-center p-4 border-b border-orange-500/20 font-display text-lg font-bold text-orange-500">
                    STANDARD
                  </th>
                  <th className="text-center p-4 border-b border-orange-500/20 font-display text-lg font-bold">
                    PREMIUM
                  </th>
                </tr>
              </thead>
              <tbody>
                {membershipTiers[0].features.map((_, fidx) => (
                  <tr key={fidx} className="border-b border-orange-500/10 hover:bg-orange-500/5 transition-colors">
                    <td className="p-4 text-gray-300">
                      {membershipTiers[0].features[fidx].name}
                    </td>
                    <td className="p-4 text-center">
                      {membershipTiers[0].features[fidx].included ? (
                        <Check className="w-5 h-5 text-orange-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {membershipTiers[1].features[fidx].included ? (
                        <Check className="w-5 h-5 text-orange-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {membershipTiers[2].features[fidx].included ? (
                        <Check className="w-5 h-5 text-orange-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 md:py-24 px-6" delay={0.3} direction="up">
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-6">COMMONLY ASKED QUESTIONS</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              We're Here to Help
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 hover:bg-orange-500/5 transition-colors"
                >
                  <h3 className="text-lg font-display font-bold text-left">{item.question}</h3>
                  <motion.div
                    animate={{ rotate: openFAQ === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown className="w-6 h-6 text-orange-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-orange-500/20"
                    >
                      <p className="p-6 text-gray-300 leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-16 md:py-24 px-6 bg-gradient-to-b from-[#080808] to-[#0a0a0a]" delay={0.4} direction="up">
        <section className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Active Members', value: 5400 },
              { label: 'Transformation Success', value: 98, suffix: '%' },
              { label: 'Years of Excellence', value: 10, suffix: '+' },
              { label: 'Elite Coaches', value: 12 },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold orange-text-gradient mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 md:py-32 px-6" delay={0.5} direction="up">
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            TRANSFORM YOUR BODY,
            <br />
            <span className="orange-text-gradient">ELEVATE YOUR LIFE</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join thousands of members already experiencing the Titan difference. Your transformation
            starts today.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="titan-btn-primary px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:shadow-lg hover:shadow-orange-500/50">
              Start Your 7-Day Trial
            </button>
            <Link
              to="/contact"
              className="titan-btn-outline px-8 py-4 rounded-lg font-semibold text-lg border border-orange-500/50 hover:border-orange-500 transition-all"
            >
              Schedule a Tour
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            No credit card required. Free consultation with our coaches included.
          </p>
        </section>
      </AnimatedSection>
    </div>
  );
}
