import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Programs from './pages/Programs';
import WomensGym from './pages/WomensGym';
import About from './pages/About';
import Membership from './pages/Membership';
import Trainers from './pages/Trainers';
import Transformations from './pages/Transformations';
import Contact from './pages/Contact';

// ─── Premium page-transition overlay ──────────────────────────────────────────
function PageTransitionOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] pointer-events-none origin-left"
      style={{ background: 'linear-gradient(135deg, #080808 0%, #1a0800 50%, #080808 100%)' }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 0 }}
      exit={{ scaleX: 1 }}
      transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Orange sweep bar */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1"
        style={{ background: 'linear-gradient(180deg, #f97316, #dc2626)' }}
        initial={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.div>
  );
}

// ─── Animated route wrapper ────────────────────────────────────────────────────
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        {/* Slide-in overlay on exit */}
        <PageTransitionOverlay key={`overlay-${location.pathname}`} />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.05 }}
        >
          <Routes location={location}>
            <Route path="/"               element={<Home />} />
            <Route path="/programs"       element={<Programs />} />
            <Route path="/womens-gym"     element={<WomensGym />} />
            <Route path="/about"          element={<About />} />
            <Route path="/membership"     element={<Membership />} />
            <Route path="/trainers"       element={<Trainers />} />
            <Route path="/transformations" element={<Transformations />} />
            <Route path="/contact"        element={<Contact />} />
            <Route path="*"              element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

// ─── Root ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <div className="min-h-screen bg-[#080808] flex flex-col">
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </BrowserRouter>
  );
}
