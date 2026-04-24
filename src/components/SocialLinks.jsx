import React from 'react';

const SOCIALS = [
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@rollingwaterdetailing',
    url: 'https://instagram.com/rollingwaterdetailing',
    color: 'hover:text-pink-400 hover:border-pink-400/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: 'booking',
    label: 'Book Now',
    handle: 'Square Appointments',
    url: 'http://rolling-water-detailing.square.site/',
    color: 'hover:text-yellow-400 hover:border-yellow-400/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: 'google',
    label: 'Google',
    handle: 'Rolling Water Detailing',
    url: 'https://www.google.com/search?q=Rolling+Water+Detailing',
    color: 'hover:text-blue-400 hover:border-blue-400/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: 'reviews',
    label: 'Reviews',
    handle: 'Google Reviews',
    url: 'https://www.google.com/search?q=rolling+water+detailing+reviews',
    color: 'hover:text-yellow-400 hover:border-yellow-400/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 'cashapp',
    label: 'Cash App',
    handle: '$Rollingwaterdetails',
    url: 'https://cash.app/$Rollingwaterdetails',
    color: 'hover:text-green-400 hover:border-green-400/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="6" width="20" height="12" rx="4" />
        <path d="M12 10v4" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    id: 'zelle',
    label: 'Zelle',
    handle: 'Duane Dembski',
    url: '#booking',
    color: 'hover:text-purple-400 hover:border-purple-400/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    id: 'phone',
    label: 'Call',
    handle: '(346) 764-7098',
    url: 'tel:+13467647098',
    color: 'hover:text-cyan-300 hover:border-cyan-300/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    id: 'sms',
    label: 'Text',
    handle: '(346) 764-7098',
    url: 'sms:+13467647098',
    color: 'hover:text-blue-400 hover:border-blue-400/50',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <section id="connect" className="relative py-24 bg-midnight-950">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-950 via-midnight-900 to-midnight-950" />
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-electric-400 text-sm font-bold tracking-[0.3em] uppercase mb-3">The Network</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
            Connect
          </h2>
          <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {SOCIALS.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target={s.url.startsWith('#') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`group relative flex flex-col items-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] ${s.color}`}
            >
              <div className="mb-4 text-gray-400 transition-colors duration-300 group-hover:text-current">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{s.label}</h3>
              <p className="text-gray-500 text-sm">{s.handle}</p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-current/10 to-transparent" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
