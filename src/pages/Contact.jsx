import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  Instagram
} from 'lucide-react';
import { BRAND } from '../config/brand';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const getForwardWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*${BRAND.name} CONTACT MESSAGE*\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      (formData.email ? `Email: ${formData.email}\n` : '') +
      `Message: ${formData.message}`
    );
    return `https://wa.me/${BRAND.contact.whatsappNumber}?text=${text}`;
  };

  const faqs = [
    {
      q: "How do I place a retail order?",
      a: "Orders are placed directly through WhatsApp. Select your pack on the Products page and tap 'Enquire / Order on WhatsApp'. Our team will confirm current batch availability, calculate exact shipping to your PIN code, and share direct payment instructions."
    },
    {
      q: "How are product prices and shipping calculated?",
      a: "Each cone weighs 20 grams and is priced at ₹20 per cone (Pack of 6: ₹120, Pack of 12: ₹240, Pack of 15: ₹300). Shipping for the Pack of 6 and Pack of 12 is ₹80. For the Pack of 15 and custom orders, shipping is confirmed on WhatsApp inquiry."
    },
    {
      q: "Where do you manufacture and dispatch from?",
      a: "Brand operations and customer support are based in Pune, Maharashtra. All product manufacturing, batch rolling, packaging, and courier dispatch take place from Basmath, Maharashtra."
    },
    {
      q: "How should I store the cones once delivered?",
      a: "Keep the cones in your home freezer until the day of use. Thaw at room temperature for 25–30 minutes before application. Never microwave or expose to hot water."
    }
  ];

  return (
    <div className="min-h-screen py-12 lg:py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-henna font-bold">
            Get in Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
            Contact {BRAND.name}
          </h1>
          <p className="text-base text-charcoal-light leading-relaxed">
            Have questions about our fresh henna cones, beauty supplies, or wholesale studio orders? Reach out directly via WhatsApp, phone call, email, or Instagram.
          </p>
        </div>

        {/* 4 Contact Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${BRAND.contact.whatsappNumber}?text=${encodeURIComponent(BRAND.contact.defaultEnquiryMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-7 rounded-3xl border border-sand shadow-soft hover:shadow-card transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <MessageCircle size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest">
                WhatsApp Chat
              </h3>
              <p className="text-xs text-charcoal-light">
                Fastest channel for orders, batch queries, and artist support.
              </p>
            </div>
            <div className="pt-5 font-semibold text-xs uppercase tracking-wider text-emerald-700 flex items-center gap-1">
              <span>{BRAND.contact.phoneDisplay}</span>
              <ArrowRight size={13} />
            </div>
          </a>

          {/* Direct Call */}
          <a
            href={BRAND.contact.phoneTel}
            className="bg-white p-7 rounded-3xl border border-sand shadow-soft hover:shadow-card transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-sage-50 text-forest flex items-center justify-center group-hover:scale-105 transition-transform">
                <Phone size={22} />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest">
                Direct Call
              </h3>
              <p className="text-xs text-charcoal-light">
                Speak directly with our team during business hours.
              </p>
            </div>
            <div className="pt-5 font-semibold text-xs uppercase tracking-wider text-forest flex items-center gap-1">
              <span>{BRAND.contact.phoneDisplay}</span>
              <ArrowRight size={13} />
            </div>
          </a>

          {/* Email */}
          <a
            href={`mailto:${BRAND.contact.email}`}
            className="bg-white p-7 rounded-3xl border border-sand shadow-soft hover:shadow-card transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-ivory text-henna flex items-center justify-center group-hover:scale-105 transition-transform border border-sand">
                <Mail size={22} />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest">
                Email Us
              </h3>
              <p className="text-xs text-charcoal-light break-all">
                {BRAND.contact.email}
              </p>
            </div>
            <div className="pt-5 font-semibold text-xs uppercase tracking-wider text-henna flex items-center gap-1">
              <span>Send Email</span>
              <ArrowRight size={13} />
            </div>
          </a>

          {/* Instagram */}
          <a
            href={BRAND.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-7 rounded-3xl border border-sand shadow-soft hover:shadow-card transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Instagram size={22} />
              </div>
              <h3 className="font-serif text-xl font-bold text-forest">
                Instagram
              </h3>
              <p className="text-xs text-charcoal-light">
                Follow our latest cones, design updates, and artist swatches.
              </p>
            </div>
            <div className="pt-5 font-semibold text-xs uppercase tracking-wider text-rose-700 flex items-center gap-1">
              <span>{BRAND.contact.instagramHandle}</span>
              <ArrowRight size={13} />
            </div>
          </a>
        </div>

        {/* Message Form & Locations Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-sand shadow-soft">
            <div className="space-y-2 mb-6">
              <h3 className="font-serif text-2xl font-bold text-forest">
                Send a Direct Message
              </h3>
              <p className="text-xs text-charcoal-muted">
                Leave your details below and we will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle size={28} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-forest">
                  Message Sent
                </h4>
                <p className="text-sm text-charcoal-light max-w-sm mx-auto">
                  Thank you! You can also forward your message directly to our WhatsApp coordinator for an instant response.
                </p>

                <div className="pt-2">
                  <a
                    href={getForwardWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider shadow-soft transition-all"
                  >
                    <MessageCircle size={15} />
                    <span>Send on WhatsApp</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-charcoal-muted hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-charcoal">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-sand text-sm focus:border-forest"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-charcoal">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-sand text-sm focus:border-forest"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-charcoal">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-sand text-sm focus:border-forest"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-charcoal">
                    Your Message / Query *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you're looking for or ask about products..."
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-sand text-sm focus:border-forest"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-forest hover:bg-forest/90 text-ivory text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-soft"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Brand Operations & FAQs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-sand space-y-3">
              <h4 className="font-serif text-xl font-bold text-forest flex items-center gap-2">
                <MapPin size={18} className="text-henna" />
                <span>Brand Operations & Logistics</span>
              </h4>
              <div className="text-sm text-charcoal-light space-y-2">
                <p>
                  <strong>Brand Management & Customer Support:</strong> {BRAND.operations.management}
                </p>
                <p>
                  <strong>Manufacturing Unit & Shipping Origin:</strong> {BRAND.operations.manufacturing}
                </p>
                <p className="text-xs text-charcoal-muted pt-1 border-t border-sand">
                  * All product batches are freshly prepared and dispatched directly from Basmath to preserve lawsone dye freshness.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-sand space-y-2">
                  <h4 className="font-serif text-lg font-bold text-forest">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
