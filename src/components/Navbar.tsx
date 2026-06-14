import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Programs', href: '/programs' },
  { label: 'Women', href: '/womens-gym' },
  { label: 'About', href: '/about' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Membership', href: '/membership' },
  { label: 'Results', href: '/transformations' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #f97316, #dc2626)',
        }}
      />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.4)' : 'none',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <motion.div
                  className="w-9 h-9 orange-gradient flex items-center justify-center relative overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 7px 100%, 0 calc(100% - 7px))' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap size={16} className="text-white fill-white relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[22px] text-white tracking-wider group-hover:text-orange-50 transition-colors">TITAN</span>
                <span className="text-[8px] font-bold tracking-[0.28em] text-orange-500/80 uppercase">FITNESS STUDIO</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 group ${
                    location.pathname === link.href ? 'text-orange-500' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Hover underline */}
                  <motion.span
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-orange-500 origin-center"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: '60%', opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  {location.pathname === link.href && (
                    <motion.span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500"
                      layoutId="navDot"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="text-[11px] font-semibold uppercase tracking-widest text-white/50 hover:text-white transition-colors px-3 py-2"
              >
                Free Trial
              </Link>
              <Link
                to="/membership"
                className="titan-btn-primary text-[11px] px-5 py-3"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-[#080808]/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-45 w-full max-w-sm bg-[#0a0a0a] border-l border-white/5 flex flex-col pt-[72px]"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ zIndex: 45 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

              <nav className="flex flex-col px-8 pt-8 gap-1 overflow-y-auto flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between py-4 text-2xl font-display tracking-widest transition-colors border-b border-white/5 group ${
                        location.pathname === link.href ? 'text-orange-500' : 'text-white/70 hover:text-orange-500'
                      }`}
                    >
                      {link.label}
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 text-orange-500 transition-opacity"
                        animate={location.pathname === link.href ? { opacity: 1 } : {}}
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link to="/membership" className="titan-btn-primary w-full text-center block">
                  Join Now — Free Trial
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
