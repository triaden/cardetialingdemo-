import React, { useEffect } from 'react';
import SocialLinks from './components/SocialLinks.jsx';
import BookingForm from './components/BookingForm.jsx';

const PROFILE = {
  name:     'Duane Dembski',
  headline: 'Rolling Water Detailing',
  role:     'Owner & Specialist',
  location: 'Houston, TX',
  bio:      'Premium mobile detailing with an exclusive touch. Bringing showroom shine to your doorstep. Influencer, entrepreneur, and relentless hustler building a brand that stands out.',
  avatar:
    'https://firebasestorage.googleapis.com/v0/b/dot-routed-user-data/o/mawcxS57sDVIfKzqA8cks2ccFy12%2FProfileImages%2Fthumb%40512_5587328d-2e54-4bb1-95b3-bd68c55abfa5.jpeg?alt=media&token=ccTUuYMaDgTDHwUW7WuUp',
  tags: ['Influencer', 'Business', 'Social', 'Entrepreneur', 'Hustler'],
};

const GoldButton = ({ children, href, onClick, variant = 'fill', className = '' }) => {
  const base =
    'inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95';
  const styles =
    variant === 'fill'
      ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-midnight-950 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]'
      : 'border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 hover:border-gold-400';
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </Tag>
  );
};

/* ─── Brand Hero ─── */
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-midnight-950">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold-500/10 blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-electric-500/10 blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
    </div>

    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }}
    />

    <div className="relative z-10 container mx-auto px-6 text-center">
      <p className="text-electric-400 text-sm font-bold tracking-[0.35em] uppercase mb-6">Houston, TX</p>

      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-5 leading-tight">
        <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
          Rolling Water
        </span>
        <br />
        <span className="text-white">Detailing</span>
      </h1>

      <p className="text-gray-400 text-base md:text-lg tracking-widest uppercase mb-10">
        Premium Mobile Detailing • Showroom Results
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <GoldButton href="http://rolling-water-detailing.square.site/" target="_blank" rel="noopener noreferrer">
          Book Exclusive Detail
        </GoldButton>
        <GoldButton href="#connect" variant="outline">
          Connect With Me
        </GoldButton>
      </div>

      {/* Stat bar */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
        {[
          { value: '500+', label: 'Details Done' },
          { value: '5★',   label: 'Google Rating' },
          { value: '4',    label: 'Service Tiers' },
        ].map(({ value, label }) => (
          <div key={label}>
            <p className="font-display text-3xl md:text-4xl font-bold text-gold-400">{value}</p>
            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
      <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      <div className="w-px h-8 bg-gradient-to-b from-gold-500/50 to-transparent" />
    </div>
  </section>
);

/* ─── About / Profile ─── */
const AboutSection = () => (
  <section className="relative py-20 bg-midnight-950">
    <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-midnight-900/60 to-midnight-950" />
    <div className="relative container mx-auto px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

        {/* Avatar */}
        <div className="relative flex-shrink-0 animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-500 via-electric-400 to-purple-500 blur-lg opacity-50 animate-glow" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-tr from-gold-500 via-electric-400 to-purple-500">
            <img
              src={PROFILE.avatar}
              alt={PROFILE.name}
              className="w-full h-full rounded-full object-cover border-2 border-midnight-950"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-midnight-800 border border-gold-500/30 text-gold-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            Verified
          </div>
        </div>

        {/* Bio */}
        <div className="text-center md:text-left">
          <p className="text-electric-400 text-xs font-bold tracking-[0.3em] uppercase mb-2">The Specialist</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-1">{PROFILE.name}</h2>
          <p className="text-gold-400 text-sm font-medium uppercase tracking-wider mb-4">
            {PROFILE.role} • {PROFILE.location}
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
            {PROFILE.bio}
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {PROFILE.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-gold-500/20 text-gold-400 bg-gold-500/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-midnight-950">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-2xl text-gold-400 mb-2">XTRA EXCLUSIVE</p>
      <p className="text-gray-600 text-sm mb-6">Rolling Water Detailing • Houston, TX</p>
      <div className="flex justify-center gap-6 text-gray-500 text-sm">
        <a href="tel:+13467647098" className="hover:text-gold-400 transition-colors">Call</a>
        <a href="sms:+13467647098" className="hover:text-gold-400 transition-colors">Text</a>
        <a href="https://instagram.com/rollingwaterdetailing" className="hover:text-gold-400 transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <p className="text-gray-700 text-xs mt-8">
        © {new Date().getFullYear()} Duane Dembski. All rights reserved.
      </p>
    </div>
  </footer>
);

export default function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-midnight-950 text-white font-sans selection:bg-gold-500/30 selection:text-gold-300">
      <HeroSection />
      <AboutSection />
      <SocialLinks />
      <BookingForm />
      <Footer />
    </div>
  );
}
