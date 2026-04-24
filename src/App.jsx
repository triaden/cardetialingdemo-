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

const GoldButton = ({ children, href, onClick, download, variant = 'fill', className = '' }) => {
  const base =
    'inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95';
  const styles =
    variant === 'fill'
      ? 'bg-gradient-to-r from-gold-600 to-gold-400 text-midnight-950 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]'
      : 'border border-gold-500/40 text-gold-400 hover:bg-gold-500/10 hover:border-gold-400';
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} onClick={onClick} download={download} className={`${base} ${styles} ${className}`}>
      {children}
    </Tag>
  );
};

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
      <div className="relative inline-block mb-8 animate-float">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gold-500 via-electric-400 to-purple-500 blur-lg opacity-60 animate-glow" />
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-gold-500 via-electric-400 to-purple-500">
          <img
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="w-full h-full rounded-full object-cover border-2 border-midnight-950"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-midnight-800 border border-gold-500/30 text-gold-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Verified
        </div>
      </div>

      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
        <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
          {PROFILE.name.split(' ')[0]}
        </span>{' '}
        <span className="text-white">{PROFILE.name.split(' ').slice(1).join(' ')}</span>
      </h1>

      <p className="text-electric-400 text-lg md:text-xl font-medium tracking-wide mb-2 uppercase">
        {PROFILE.headline}
      </p>
      <p className="text-gray-400 text-sm md:text-base tracking-widest uppercase mb-8">
        {PROFILE.role} • {PROFILE.location}
      </p>

      <p className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed mb-10">
        {PROFILE.bio}
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {PROFILE.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-gold-500/20 text-gold-400 bg-gold-500/5 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <GoldButton href="http://rolling-water-detailing.square.site/" target="_blank" rel="noopener noreferrer">
          Book Exclusive Detail
        </GoldButton>
        <GoldButton href="#connect" variant="outline">
          Connect With Me
        </GoldButton>
        <GoldButton href="/guide.pdf" download="Xtra-Exclusive-Guide.pdf" variant="outline">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Exclusive Guide
        </GoldButton>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
      <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      <div className="w-px h-8 bg-gradient-to-b from-gold-500/50 to-transparent" />
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-midnight-950">
    <div className="container mx-auto px-6 text-center">
      <p className="font-display text-2xl text-gold-400 mb-2">XTRA EXCLUSIVE</p>
      <p className="text-gray-600 text-sm mb-6">Rolling Water Detailing • Houston, TX</p>
      <div className="flex justify-center gap-6 text-gray-500 text-sm">
        <a href="tel:+13467647098"                              className="hover:text-gold-400 transition-colors">Call</a>
        <a href="sms:+13467647098"                              className="hover:text-gold-400 transition-colors">Text</a>
        <a href="https://instagram.com/rollingwaterdetailing"   className="hover:text-gold-400 transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
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
      <SocialLinks />
      <BookingForm />
      <Footer />
    </div>
  );
}
