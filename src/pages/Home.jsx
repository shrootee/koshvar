import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Phone,
  Compass,
  Truck,
  Package
} from 'lucide-react';
import { BRAND } from '../config/brand';
import { HennaImage } from '../components/HennaImage';

export const Home = () => {
  const getWhatsAppOrderUrl = (pack) => {
    const shippingText = pack.hasFixedShipping
      ? `+ ₹${pack.shippingFee} shipping`
      : `shipping to be confirmed`;
    const text = encodeURIComponent(
      `Hello ${BRAND.name}, I would like to order the ${pack.name} (${pack.formattedProductPrice}, ${shippingText}). Please confirm availability and dispatch details.`
    );
    return `https://wa.me/${BRAND.contact.whatsappNumber}?text=${text}`;
  };

  const wholesaleWhatsAppUrl = `https://wa.me/${BRAND.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${BRAND.name}, I am a professional artist/studio interested in wholesale and bulk supply. Please share your product range and trade details.`
  )}`;

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ivory to-sage-50/50 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Brand Tagline Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sage-100 text-forest text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>{BRAND.tagline}</span>
              </div>

              {/* Memorable Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1.12]">
                Pure Natural Henna & Beauty Supplies.
              </h1>

              {/* Brand Introduction */}
              <p className="text-base sm:text-lg text-charcoal-light font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Freshly prepared henna cones made with <strong>7-times-filtered henna powder</strong> and <strong>no added chemicals in the cone tip</strong>. Formulated for smooth, consistent flow and rich natural color.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#products"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-forest hover:bg-forest/90 text-ivory text-sm font-semibold tracking-wide uppercase shadow-card hover:shadow-elevated transition-all flex items-center justify-center gap-2"
                >
                  <span>Shop Products</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  to="/wholesale"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-ivory border border-sand hover:border-sage-200 text-forest text-sm font-semibold tracking-wide transition-all flex items-center justify-center gap-2 shadow-soft"
                >
                  <span>Wholesale Enquiry</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Operations Note (No detailed residential address) */}
              <div className="pt-2 text-xs text-charcoal-muted flex items-center justify-center lg:justify-start gap-2">
                <Compass size={14} className="text-henna shrink-0" />
                <span>Brand Operations: Pune · Manufacturing & Dispatch: Basmath, Maharashtra</span>
              </div>
            </div>

            {/* Right Column: Hero Visual with Real Logo Overlay */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
                  <HennaImage
                    src={BRAND.images.hero.url}
                    alt={BRAND.images.hero.alt}
                    aspectRatio="aspect-[4/5]"
                    priority={true}
                  />
                </div>

                {/* Floating Brand Trust Badge */}
                <div className="absolute -bottom-6 -left-4 sm:left-4 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-card border border-sand/80 max-w-[280px] flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-ivory p-1 border border-sand shrink-0 overflow-hidden flex items-center justify-center">
                    <img
                      src={BRAND.logo}
                      alt={BRAND.name}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-forest">
                      {BRAND.name}
                    </p>
                    <p className="text-[11px] text-charcoal-muted leading-tight italic">
                      {BRAND.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT QUALITY PILLARS */}
      <section className="py-14 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest text-henna font-bold">
              Our Product Standard
            </span>
            <h2 className="font-serif text-3xl font-bold text-forest">
              What Sets {BRAND.name} Apart
            </h2>
            <p className="text-sm text-charcoal-muted">
              Honest, verified product characteristics without unverified lab claims or certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRAND.qualityPillars.map((pillar, idx) => (
              <div key={idx} className="space-y-2 p-5 rounded-2xl bg-ivory/60 border border-sand">
                <div className="w-10 h-10 rounded-full bg-sage-50 text-forest flex items-center justify-center">
                  <Sparkles size={18} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RETAIL PRODUCTS & PRICING (Separate Product Price & Shipping) */}
      <section id="products" className="py-18 bg-ivory scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-henna font-bold">
              Retail Henna Cones
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
              Fresh 20g Henna Cone Packs
            </h2>
            <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
              Each cone contains exactly 20 grams of fresh paste. Product price and courier shipping are clearly displayed separately — no hidden charges.
            </p>
          </div>

          {/* 3 Cone Pack Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {BRAND.conePacks.map((pack) => (
              <div
                key={pack.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between border ${
                  pack.popular ? 'border-henna/40 ring-2 ring-henna/15' : 'border-sand'
                }`}
              >
                <div>
                  {/* Photo */}
                  <div className="relative">
                    <HennaImage
                      src={pack.image}
                      alt={pack.name}
                      aspectRatio="aspect-[4/3]"
                    />
                    {pack.popular && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-henna text-white text-[11px] font-semibold tracking-wide shadow-soft">
                        Most Popular
                      </span>
                    )}
                    {pack.badge && !pack.popular && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-forest text-white text-[11px] font-semibold tracking-wide shadow-soft">
                        {pack.badge}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-forest">
                        {pack.name}
                      </h3>
                      <p className="text-xs text-charcoal-muted mt-0.5 font-medium">
                        {pack.totalWeight} ({pack.coneCount} cones × 20g)
                      </p>
                    </div>

                    {/* Separate Price and Shipping Display */}
                    <div className="p-4 rounded-2xl bg-sage-50/60 border border-sage-100 space-y-2 text-sm">
                      <div className="flex justify-between items-baseline">
                        <span className="text-charcoal font-medium">Product Price:</span>
                        <span className="font-serif text-2xl font-bold text-forest">
                          {pack.formattedProductPrice}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs text-charcoal-muted pt-1 border-t border-sage-200/60">
                        <span>Courier Shipping:</span>
                        <span className="font-semibold text-charcoal">
                          {pack.hasFixedShipping ? pack.formattedShipping : 'To be confirmed on inquiry'}
                        </span>
                      </div>
                      <p className="text-[11px] text-charcoal-muted italic pt-0.5">
                        {pack.pricePerCone} · Shipping is additional
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed">
                      {pack.description}
                    </p>

                    <div className="text-xs text-charcoal-muted pt-1 border-t border-sand/60">
                      <strong>Best suited for:</strong> {pack.idealFor}
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Action Button */}
                <div className="p-6 sm:p-7 pt-0 space-y-2">
                  <a
                    href={getWhatsAppOrderUrl(pack)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-full bg-forest hover:bg-forest/90 text-ivory text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-soft"
                  >
                    <MessageCircle size={16} className="text-emerald-400" />
                    <span>Enquire / Order on WhatsApp</span>
                  </a>
                  <p className="text-center text-[11px] text-charcoal-muted">
                    Direct chat with brand coordinator
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Complete Range Link */}
          <div className="text-center pt-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-ivory border border-sand text-forest text-xs font-semibold uppercase tracking-wider shadow-soft transition-all"
            >
              <span>View All Retail Products & Supplies</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHOLESALE INTRODUCTION */}
      <section className="py-16 bg-forest text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-sage-200 font-bold">
                B2B Studio Orders
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Wholesale Henna Cones & Supplies for Studios & Salons
              </h2>
              <p className="text-sm sm:text-base text-sage-100/90 leading-relaxed max-w-2xl">
                We supply working artists, bridal studios, academies, salons, and distributors across India. Fresh batch allocation, dedicated cold packaging, and direct WhatsApp support.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {BRAND.wholesale.audiences.map((aud, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/10 text-xs text-sage-100"
                  >
                    {aud}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/wholesale"
                className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider text-center transition-all shadow-soft flex items-center justify-center gap-2"
              >
                <span>Visit Wholesale Desk</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href={wholesaleWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-white/10 hover:bg-white/20 text-ivory text-xs font-semibold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Wholesale Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CRAFT & ORIGIN INTRO */}
      <section className="py-18 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
                <HennaImage
                  src={BRAND.images.finePattern.url}
                  alt={BRAND.images.finePattern.alt}
                  aspectRatio="aspect-square"
                />
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <span className="text-xs uppercase tracking-widest text-henna font-bold">
                Authentic Craft
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
                Crafted in Basmath · Managed in Pune
              </h2>
              <div className="space-y-4 text-sm text-charcoal-light leading-relaxed">
                <p>
                  <strong>{BRAND.name}</strong> was founded to offer dependable henna cones and beauty supplies without hidden chemical boosters or inconsistent paste flow.
                </p>
                <p>
                  Our henna paste is blended using <strong>7-times-filtered henna powder</strong> to guarantee that fine 0.38mm nozzles never clog. Cones are rolled at our Basmath manufacturing unit and dispatched promptly to preserve fresh dye properties.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-henna hover:text-henna-dark transition-colors"
                >
                  <span>Learn more about our sourcing & storage instructions</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DIRECT WHATSAPP ACTION BANNER */}
      <section className="py-16 bg-sage-50 border-t border-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-white shadow-soft text-emerald-600 flex items-center justify-center mx-auto">
            <MessageCircle size={24} />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest">
            Ready to Order or Have Questions?
          </h2>
          <p className="text-sm sm:text-base text-charcoal-light max-w-xl mx-auto">
            Contact us directly on WhatsApp or phone. We will confirm batch availability, calculate exact shipping to your PIN code, and answer any questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${BRAND.contact.whatsappNumber}?text=${encodeURIComponent(`Hello ${BRAND.name}, I would like to enquire about your henna cone packs.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-soft"
            >
              <MessageCircle size={16} />
              <span>WhatsApp: {BRAND.contact.phoneDisplay}</span>
            </a>

            <a
              href={BRAND.contact.phoneTel}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-ivory border border-sand text-forest text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Phone size={15} className="text-henna" />
              <span>Call Us: {BRAND.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
