import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Facebook, Zap, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const explore = [
  { label: 'Performance Training', href: '/programs' },
  { label: 'Recovery Labs', href: '/programs' },
  { label: 'Nutritional Coaching', href: '/programs' },
  { label: 'Corporate Elite', href: '/membership' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/about' },
  { label: 'Press Info', href: '/about' },
  { label: 'Privacy Policy', href: '/contact' },
];

const locations = [
  { label: 'New York Flagship', href: '/contact' },
  { label: 'London Oasis', href: '/contact' },
  { label: 'Dubai Performance Center', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      {/* Top CTA Strip */}
      <div className="orange-gradient py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-2xl lg:text-3xl text-white tracking-wider">READY TO TRANSFORM?</p>
            <p className="text-white/80 text-sm mt-1">Applications for new members open now.</p>
          </div>
          <Link to="/membership" className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold uppercase tracking-widest text-sm px-8 py-3 hover:bg-orange-50 transition-colors">
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 orange-gradient flex items-center justify-center"
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                <Zap size={16} className="text-white fill-white" />
              </div>
              <span className="font-display text-2xl text-white tracking-wider">TITAN</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              The apex environment for those who refuse to be average. High-performance engineering meets elite luxury.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-orange-500 hover:border-orange-500/40 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5">Explore</h4>
            <ul className="space-y-3">
              {explore.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-white/45 text-sm hover:text-orange-500 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-white/45 text-sm hover:text-orange-500 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5">Locations</h4>
            <ul className="space-y-3 mb-6">
              {locations.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-white/45 text-sm hover:text-orange-500 transition-colors flex items-center gap-1.5">
                    <MapPin size={10} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2 text-white/45 text-sm">
              <a href="tel:+15555550100" className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
                <Phone size={10} /> +1 555 555 0100
              </a>
              <a href="mailto:info@titanfitness.com" className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
                <Mail size={10} /> info@titanfitness.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; 2024 TITAN FITNESS STUDIO. THE APEX OF PERFORMANCE.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility', 'Contact Us'].map((item) => (
              <Link key={item} to="/contact" className="text-white/25 text-xs hover:text-white/50 transition-colors">
                {item}
              </Link>
            ))}
          </div>
          <p className="text-orange-600/60 text-xs font-semibold uppercase tracking-widest">STRENGTH IS LUXURY</p>
        </div>
      </div>
    </footer>
  );
}
