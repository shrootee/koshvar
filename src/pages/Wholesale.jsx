import React, { useState } from 'react';
import {
  MessageCircle,
  Phone,
  Send,
  CheckCircle,
  Building2,
  Users,
  Store,
  Sparkles,
  ArrowRight,
  PackageCheck
} from 'lucide-react';
import { BRAND } from '../config/brand';
import { HennaImage } from '../components/HennaImage';

export const Wholesale = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    location: '',
    productInterested: 'Fresh Henna Cones',
    quantity: '',
    phone: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const directWhatsAppUrl = `https://wa.me/${BRAND.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${BRAND.name}, I am contacting you regarding wholesale bulk supply for my business/studio. Please share availability, ordering details, and pricing.`
  )}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.location || !formData.quantity) {
      alert('Please fill in your name, contact number, city/location, and required quantity.');
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem('koshvar_wholesale_leads') || '[]');
      existing.unshift({
        id: `WS-${Date.now()}`,
        submittedAt: new Date().toISOString(),
        ...formData
      });
      localStorage.setItem('koshvar_wholesale_leads', JSON.stringify(existing));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  const getForwardWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*${BRAND.name} WHOLESALE TRADE ENQUIRY*\n` +
      `Name: ${formData.name}\n` +
      `Business/Studio: ${formData.businessName || 'N/A'}\n` +
      `Location: ${formData.location}\n` +
      `Product Interested In: ${formData.productInterested}\n` +
      `Required Quantity: ${formData.quantity}\n` +
      `Contact Number: ${formData.phone}\n` +
      (formData.notes ? `Notes: ${formData.notes}\n` : '') +
      `\nPlease provide wholesale quotation and batch availability.`
    );
    return `https://wa.me/${BRAND.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="min-h-screen py-12 lg:py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-henna font-bold">
            B2B Studio & Trade Desk
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
            {BRAND.name} Wholesale & Bulk Supply
          </h1>
          <p className="text-base text-charcoal-light leading-relaxed">
            We partner with professional mehndi artists, bridal academies, beauty salons, and distributors across India. Fresh batches prepared at our Basmath manufacturing unit and dispatched promptly.
          </p>

          {/* Quick Direct Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-soft"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Wholesale Enquiry</span>
            </a>

            <a
              href={BRAND.contact.phoneTel}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-ivory border border-sand text-forest text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Phone size={15} className="text-henna" />
              <span>Call: {BRAND.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Wholesale Products & Supply Range */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-3xl font-bold text-forest">
              Available Wholesale Products
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Batch supply available for salons, studios, and distributors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND.wholesale.products.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-sand shadow-soft space-y-2">
                <div className="w-10 h-10 rounded-full bg-sage-50 text-forest flex items-center justify-center font-serif font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-forest">
                  {item.name}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We Work With */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-sand shadow-soft space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-widest text-henna font-bold">
              Partnership & Clients
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Who We Work With
            </h3>
            <p className="text-sm text-charcoal-muted">
              We support creative businesses and beauty enterprises across India with consistent batch supply.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {BRAND.wholesale.audiences.map((aud, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-ivory text-center text-xs font-semibold text-forest border border-sand flex items-center justify-center min-h-[56px]"
              >
                {aud}
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-sage-50 text-xs text-charcoal-light border border-sage-200">
            <strong>Wholesale Pricing Policy:</strong> {BRAND.wholesale.pricingNotice}
          </div>
        </div>

        {/* WHOLESALE ENQUIRY FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-sand shadow-soft">
            {submitted ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle size={32} />
                </div>
                <h3 className="font-serif text-3xl font-bold text-forest">
                  Enquiry Received, {formData.name}
                </h3>
                <p className="text-sm text-charcoal-light max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in {BRAND.name} products. You can also forward these filled details directly to our WhatsApp coordinator for immediate assistance and trade pricing.
                </p>

                <div className="pt-2">
                  <a
                    href={getForwardWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider shadow-soft transition-all"
                  >
                    <MessageCircle size={16} />
                    <span>Forward Details to WhatsApp</span>
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-charcoal-muted hover:underline"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1 mb-2">
                  <h3 className="font-serif text-2xl font-bold text-forest">
                    Wholesale Enquiry Form
                  </h3>
                  <p className="text-xs text-charcoal-muted">
                    Fill in your details below and our team will get in touch directly.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-charcoal">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-sand text-sm focus:border-forest"
                  />
                </div>

                {/* Business Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-charcoal">
                    Business / Studio / Salon Name
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Royal Bridal Studio"
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-sand text-sm focus:border-forest"
                  />
                </div>

                {/* City / Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-charcoal">
                      City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Pune, Mumbai, Nagpur"
                      className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-sand text-sm focus:border-forest"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-charcoal">
                      Contact Number (Mobile / WhatsApp) *
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
                </div>

                {/* Product Interested In */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-charcoal">
                    Product Interested In *
                  </label>
                  <select
                    value={formData.productInterested}
                    onChange={(e) => setFormData({ ...formData, productInterested: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-sand text-sm text-charcoal focus:border-forest"
                  >
                    <option value="Fresh Henna Cones">Fresh Henna Cones (20g)</option>
                    <option value="7-Times-Filtered Henna Powder">7-Times-Filtered Henna Powder</option>
                    <option value="Henna Practice Sheets">Henna Practice Sheets</option>
                    <option value="Pre-Cut Cellophane / Empty Cones">Pre-Cut Cellophane / Empty Cones</option>
                    <option value="Full Studio Package">Full Studio Package / Mixed Supplies</option>
                  </select>
                </div>

                {/* Required Quantity */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-charcoal">
                    Required Quantity *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 50 cones, 5 kg powder, or recurring monthly requirement"
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-sand text-sm focus:border-forest"
                  />
                </div>

                {/* Additional Notes */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-charcoal">
                    Additional Notes or Upcoming Wedding Dates (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any specific delivery dates or requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-ivory border border-sand text-sm focus:border-forest"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-forest hover:bg-forest/90 text-ivory text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-soft"
                >
                  <Send size={15} />
                  <span>Submit Wholesale Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Visual & Dispatch Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
              <HennaImage
                src={BRAND.images.bridalHands.url}
                alt={BRAND.images.bridalHands.alt}
                aspectRatio="aspect-[4/3]"
              />
            </div>

            <div className="bg-white p-6 rounded-3xl border border-sand space-y-3">
              <h4 className="font-serif text-xl font-bold text-forest">
                Basmath Manufacturing & Direct Dispatch
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                All bulk orders are mixed fresh and dispatched directly from our Basmath manufacturing unit under protective cold packaging. Contact our Pune operations desk on WhatsApp for delivery estimates and batch scheduling.
              </p>
              <div className="pt-2 text-xs text-charcoal-muted space-y-1">
                <p>• Brand Operations: Pune, Maharashtra</p>
                <p>• Manufacturing & Dispatch: Basmath, Maharashtra</p>
                <p>• Pan-India express delivery with tracking</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;
