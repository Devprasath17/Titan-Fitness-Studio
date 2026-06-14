import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Check,
  ArrowRight,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Zap,
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  fitnessGoal: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  fitnessGoal?: string;
  message?: string;
}

export default function Contact() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    fitnessGoal: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.fitnessGoal) {
      newErrors.fitnessGoal = 'Please select a fitness goal';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        fitnessGoal: '',
        message: '',
      });

      // Reset success state after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white overflow-hidden">
      {/* Hero Section with Parallax */}
      <div className="relative h-[500px] overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gym background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#080808]" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="font-display text-6xl md:text-7xl font-bold mb-4">
              START YOUR
              <br />
              <span className="orange-text-gradient">TRANSFORMATION</span>
              <br />
              TODAY
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Join Titan Fitness Studio and become the strongest version of yourself
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-8">
                {/* Contact Info Cards */}
                <div className="glass-card p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full orange-gradient flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold">Address</h3>
                      <p className="text-white/60 text-sm">
                        340 Elite Performance Ave
                        <br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="glass-card p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full orange-gradient flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold">Phone</h3>
                      <p className="text-white/60 text-sm">+1 555 555 0100</p>
                    </div>
                  </div>
                  <a
                    href="tel:+15555550100"
                    className="titan-btn-primary inline-flex items-center gap-2 w-full justify-center"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                </div>

                {/* Email Card */}
                <div className="glass-card p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full orange-gradient flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold">Email</h3>
                      <a
                        href="mailto:info@titanfitness.com"
                        className="text-white/60 hover:text-orange-500 transition-colors text-sm"
                      >
                        info@titanfitness.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/15555550100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover glass-card p-6 rounded-lg border border-white/10 flex items-center gap-4 hover:border-green-500/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold">WhatsApp</h3>
                    <p className="text-white/60 text-sm">Chat with us anytime</p>
                  </div>
                  <ArrowRight className="ml-auto text-green-500" size={20} />
                </a>

                {/* Opening Hours */}
                <div className="glass-card p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full orange-gradient flex items-center justify-center">
                      <Clock size={20} />
                    </div>
                    <h3 className="font-display text-lg font-bold">Opening Hours</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-white/70">
                      <span>Monday - Friday:</span>
                      <span className="text-orange-500">5:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Saturday:</span>
                      <span className="text-orange-500">6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Sunday:</span>
                      <span className="text-orange-500">7:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Map Mockup */}
                <div className="relative h-64 rounded-lg overflow-hidden border-2 border-transparent bg-gradient-to-r from-orange-600 to-red-600 p-0.5">
                  <div className="w-full h-full bg-[#0a0a0a] rounded-[6px] flex flex-col items-center justify-center relative">
                    {/* Grid pattern */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'linear-gradient(rgba(255,140,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,140,0,0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                      }}
                    />
                    {/* Pin Icon */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="relative z-10"
                    >
                      <MapPin className="text-orange-500" size={48} />
                    </motion.div>
                    <p className="text-sm text-orange-500 mt-4 font-semibold text-center relative z-10">
                      Interactive Map
                      <br />
                      New York Flagship
                    </p>
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card p-4 rounded-lg border border-white/10 text-center"
                  >
                    <Zap size={24} className="mx-auto mb-2 text-orange-500" />
                    <p className="text-xs font-semibold">Response Time</p>
                    <p className="text-xs text-orange-500 font-bold mt-1">&lt; 2 Hours</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card p-4 rounded-lg border border-white/10 text-center"
                  >
                    <Check size={24} className="mx-auto mb-2 text-orange-500" />
                    <p className="text-xs font-semibold">Free Trial</p>
                    <p className="text-xs text-orange-500 font-bold mt-1">Available</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card p-4 rounded-lg border border-white/10 text-center"
                  >
                    <MapPin size={24} className="mx-auto mb-2 text-orange-500" />
                    <p className="text-xs font-semibold">Parking</p>
                    <p className="text-xs text-orange-500 font-bold mt-1">Free</p>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column - Contact Form */}
            <AnimatedSection direction="right" delay={0.4}>
              <div className="glass-card p-8 rounded-lg border border-white/10">
                <h2 className="font-display text-3xl font-bold mb-6">Get In Touch</h2>

                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 rounded-full orange-gradient flex items-center justify-center mb-4"
                    >
                      <Check size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-white/60 text-center">
                      We'll contact you within 2 hours!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-all"
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-all"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 555-0100"
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-all"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Fitness Goal */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Fitness Goal
                      </label>
                      <select
                        name="fitnessGoal"
                        value={formData.fitnessGoal}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#080808]">
                          Select your fitness goal
                        </option>
                        <option value="Weight Loss" className="bg-[#080808]">
                          Weight Loss
                        </option>
                        <option value="Muscle Building" className="bg-[#080808]">
                          Muscle Building
                        </option>
                        <option value="Strength Training" className="bg-[#080808]">
                          Strength Training
                        </option>
                        <option value="General Fitness" className="bg-[#080808]">
                          General Fitness
                        </option>
                        <option value="Athletic Performance" className="bg-[#080808]">
                          Athletic Performance
                        </option>
                        <option value="Other" className="bg-[#080808]">
                          Other
                        </option>
                      </select>
                      {errors.fitnessGoal && (
                        <p className="text-red-400 text-xs mt-1">{errors.fitnessGoal}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your fitness journey..."
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/30 transition-all resize-none"
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="titan-btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          >
                            <Send size={18} />
                          </motion.div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-white/40 text-xs text-center">
                      We respect your privacy. Your data is secure with us.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Social Strip */}
      <section className="border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-6">
            <p className="text-white/60 font-semibold">Follow Us:</p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-white/10 hover:border-orange-500/50 transition-colors"
              >
                <Instagram size={20} className="text-orange-500" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-white/10 hover:border-orange-500/50 transition-colors"
              >
                <Twitter size={20} className="text-orange-500" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-white/10 hover:border-orange-500/50 transition-colors"
              >
                <Youtube size={20} className="text-orange-500" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-white/10 hover:border-orange-500/50 transition-colors"
              >
                <Facebook size={20} className="text-orange-500" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
