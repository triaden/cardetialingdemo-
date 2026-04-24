import React, { useState } from 'react';

const SERVICES = [
  { name: 'Exterior Detail', price: '$120', duration: '2 hrs', desc: 'Hand wash, clay bar, sealant, tire shine' },
  { name: 'Interior Detail', price: '$150', duration: '2.5 hrs', desc: 'Deep vacuum, steam clean, leather treatment' },
  { name: 'Full Showroom',   price: '$250', duration: '4 hrs',   desc: 'Complete interior + exterior perfection' },
  { name: 'Ceramic Coating', price: '$500', duration: '6 hrs',   desc: 'Long-lasting protection with mirror finish' },
];

const TIMES = ['9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM'];

const PHONE_RE = /^\+?[\d\s\-().]{7,15}$/;

function todayISO() {
  return new Date().toISOString().split('T')[0];
}

function FieldError({ msg }) {
  if (!msg) return null;
  return <p className="mt-1 text-red-400 text-xs">{msg}</p>;
}

export default function BookingForm() {
  const [selectedService, setSelectedService] = useState(0);
  const [selectedDate,    setSelectedDate]    = useState('');
  const [selectedTime,    setSelectedTime]    = useState('');
  const [form,            setForm]            = useState({ name: '', phone: '', notes: '' });
  const [errors,          setErrors]          = useState({});
  const [submitted,       setSubmitted]       = useState(false);

  function validate() {
    const e = {};

    if (!selectedDate) {
      e.date = 'Please choose a date.';
    } else if (selectedDate < todayISO()) {
      e.date = 'Date must be today or in the future.';
    }

    if (!selectedTime) {
      e.time = 'Please select a time slot.';
    }

    if (!form.name.trim() || form.name.trim().length < 2) {
      e.name = 'Enter your full name (at least 2 characters).';
    }

    if (!form.phone.trim()) {
      e.phone = 'Phone number is required.';
    } else if (!PHONE_RE.test(form.phone.trim())) {
      e.phone = 'Enter a valid phone number.';
    }

    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      return;
    }
    setErrors({});
    window.open('http://rolling-water-detailing.square.site/', '_blank');
    setSubmitted(true);
  }

  const inputCls =
    'w-full bg-midnight-950 border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all';
  const validCls = 'border-white/10 focus:border-gold-500/50 focus:ring-gold-500/30';
  const errCls   = 'border-red-500/50 focus:border-red-400/70 focus:ring-red-400/30';

  return (
    <section id="booking" className="relative py-24 bg-midnight-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-500/5 rounded-full blur-[150px]" />

      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-electric-400 text-sm font-bold tracking-[0.3em] uppercase mb-3">Reserve Your Spot</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
            Book Exclusive
          </h2>
          <div className="mt-6 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Service Selection */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-display text-2xl mb-6">Select Service</h3>
            {SERVICES.map((svc, i) => (
              <button
                key={svc.name}
                type="button"
                onClick={() => setSelectedService(i)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                  selectedService === i
                    ? 'border-gold-500/50 bg-gold-500/10 shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`font-semibold ${selectedService === i ? 'text-gold-400' : 'text-white'}`}>
                    {svc.name}
                  </span>
                  <span className="text-electric-400 font-bold">{svc.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-1">{svc.desc}</p>
                <p className="text-gray-600 text-xs">{svc.duration}</p>
              </button>
            ))}
          </div>

          {/* Form Panel */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl border border-white/5 bg-midnight-900/50 backdrop-blur-xl">
              <h3 className="text-white font-display text-2xl mb-6">Schedule Detail</h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-white text-xl font-semibold mb-2">Redirecting to Secure Checkout</h4>
                  <p className="text-gray-400">Complete your booking on our premium Square portal.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Date */}
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      min={todayISO()}
                      value={selectedDate}
                      onChange={(e) => { setSelectedDate(e.target.value); setErrors((p) => ({ ...p, date: '' })); }}
                      className={`${inputCls} ${errors.date ? errCls : validCls}`}
                    />
                    <FieldError msg={errors.date} />
                  </div>

                  {/* Time slots */}
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">
                      Time Slot
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {TIMES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => { setSelectedTime(t); setErrors((p) => ({ ...p, time: '' })); }}
                          className={`py-2.5 rounded-lg text-sm font-medium border transition-all ${
                            selectedTime === t
                              ? 'border-gold-500/50 bg-gold-500/10 text-gold-400'
                              : 'border-white/5 text-gray-400 hover:border-white/10 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <FieldError msg={errors.time} />
                  </div>

                  {/* Contact */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors((p) => ({ ...p, name: '' })); }}
                        className={`${inputCls} ${errors.name ? errCls : validCls}`}
                      />
                      <FieldError msg={errors.name} />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="(346) 764-7098"
                        value={form.phone}
                        onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors((p) => ({ ...p, phone: '' })); }}
                        className={`${inputCls} ${errors.phone ? errCls : validCls}`}
                      />
                      <FieldError msg={errors.phone} />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider">
                      Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Vehicle type, specific concerns, etc."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className={`${inputCls} ${validCls} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-lg inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-r from-gold-600 to-gold-400 text-midnight-950 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                  >
                    Confirm Exclusive Booking
                  </button>

                  <p className="text-center text-gray-600 text-xs">
                    Secured by Square • Payments processed safely
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
