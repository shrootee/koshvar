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
  PackageCheck
} from 'lucide-react';
import { BRAND } from '../config/brand';
import { HennaImage } from '../components/HennaImage';

export const Home = () => {
  const getProductWhatsAppUrl = (product) => {
    const deliveryText = product.isCone
      ? `Delivery: ₹${product.deliveryFee}`
      : `Delivery: location-based`;
    const text = encodeURIComponent(
      `Hi KOSHVAR! I'd like to make an enquiry about ${product.name} (${product.formattedPrice}, ${deliveryText}). Could you please share more details?`
    );
    return `https://wa.me/${BRAND.contact.whatsappNumber}?text=${text}`;
  };

  const defaultWhatsAppUrl = `https://wa.me/${BRAND.contact.whatsappNumber}?text=${encodeURIComponent(
    BRAND.contact.defaultEnquiryMessage
  )}`;

  const wholesaleWhatsAppUrl = `https://wa.me/${BRAND.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi KOSHVAR! I'd like to make a wholesale enquiry for my studio/business. Could you please share more details?`
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
                  href="#retail-section"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-forest hover:bg-forest/90 text-ivory text-sm font-semibold tracking-wide uppercase shadow-card hover:shadow-elevated transition-all flex items-center justify-center gap-2"
                >
                  <span>Shop Retail Products</span>
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

              {/* Operations Note */}
              <div className="pt-2 text-xs text-charcoal-muted flex items-center justify-center lg:justify-start gap-2">
                <Compass size={14} className="text-henna shrink-0" />
                <span>Brand Operations: Pune · Manufacturing & Dispatch: Basmath, Maharashtra</span>
              </div>
            </div>

            {/* Right Column: Hero Visual with Real User Mehndi Photograph */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white bg-ivory-dark">
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

      {/* 3. RETAIL PRODUCTS & PRICING SECTION */}
      <section id="retail-section" className="py-18 bg-ivory scroll-mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-henna font-bold">
              Retail Products & Supplies
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
              Natural Cones & Artist Supplies
            </h2>
            <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
              Every cone is rolled with 7-times-filtered powder and zero added chemicals in the tip. Delivery is ₹80 for mehndi cones; delivery charges apply to other supplies.
            </p>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {BRAND.retailProducts.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between border ${
                  product.popular ? 'border-henna/40 ring-2 ring-henna/15' : 'border-sand'
                }`}
              >
                <div>
                  <div className="relative bg-ivory-dark/40 overflow-hidden">
                    <HennaImage
                      src={product.image}
                      alt={product.name}
                      aspectRatio="aspect-[4/3]"
                      imgClassName="p-3 object-contain hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span
                        className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase shadow-soft ${
                          product.popular
                            ? 'bg-henna text-white'
                            : 'bg-forest text-ivory'
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-muted block">
                        {product.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-forest leading-snug">
                        {product.name}
                      </h3>
                    </div>

                    {/* Price & Delivery Information */}
                    <div className="p-3 rounded-2xl bg-sage-50/70 border border-sage-100 space-y-1.5 text-xs">
                      <div className="flex justify-between items-baseline">
                        <span className="text-charcoal-muted">Price:</span>
                        <span className="font-serif text-2xl font-bold text-forest">
                          {product.formattedPrice}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-[11px] pt-1 border-t border-sage-200/60">
                        <span className="flex items-center gap-1 text-charcoal-muted">
                          <Truck size={12} className="text-henna" />
                          <span>Delivery:</span>
                        </span>
                        <span
                          className={`font-semibold ${
                            product.isCone ? 'text-forest' : 'text-charcoal'
                          }`}
                        >
                          {product.formattedDelivery}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-charcoal-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-1.5">
                  <a
                    href={getProductWhatsAppUrl(product)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-forest hover:bg-forest/90 text-ivory text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-soft"
                  >
                    <MessageCircle size={15} className="text-emerald-400" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                  <p className="text-center text-[10px] text-charcoal-muted">
                    Direct chat with {BRAND.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View Complete Range Button */}
          <div className="text-center pt-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-ivory border border-sand text-forest text-xs font-semibold uppercase tracking-wider shadow-soft transition-all"
            >
              <span>View All 10 Retail Products & Supplies</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TASTEFUL REAL MEHNDI DESIGN PHOTOGRAPHS STRIP */}
      <section className="py-14 bg-white border-y border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-henna font-bold">
              Pure Natural Henna
            </span>
            <h2 className="font-serif text-3xl font-bold text-forest">
              Artisan Craft & Natural Stain Results
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Photographs of actual bridal mehndi work, freshly rolled cones, and natural dark stain peak.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-3xl overflow-hidden shadow-soft border border-sand">
              <HennaImage
                src="/assets/bride-mehndi.jpg"
                alt="Bridal mehndi application"
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-3.5 bg-ivory text-center">
                <p className="text-xs font-semibold text-forest">Bridal Mehndi Application</p>
                <p className="text-[11px] text-charcoal-muted">Intricate fine linework</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft border border-sand">
              <HennaImage
                src="/assets/after-colour-stain.jpg"
                alt="Natural dark stain peak"
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-3.5 bg-ivory text-center">
                <p className="text-xs font-semibold text-forest">Natural Stain Oxidation</p>
                <p className="text-[11px] text-charcoal-muted">Deep rich color without chemicals</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft border border-sand">
              <HennaImage
                src="/assets/cone-process.png"
                alt="Cone making process"
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-3.5 bg-ivory text-center">
                <p className="text-xs font-semibold text-forest">Hand-Rolled Cellophane</p>
                <p className="text-[11px] text-charcoal-muted">Sharp, calibrated pin-tips</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft border border-sand">
              <HennaImage
                src="/assets/cones-ready.png"
                alt="Fresh cones ready for dispatch"
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-3.5 bg-ivory text-center">
                <p className="text-xs font-semibold text-forest">Fresh Basmath Dispatch</p>
                <p className="text-[11px] text-charcoal-muted">Prepared to order</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHOLESALE INTRODUCTION */}
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

      {/* 6. CRAFT & ORIGIN INTRO */}
      <section className="py-18 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
                <HennaImage
                  src={BRAND.images.stain.url}
                  alt={BRAND.images.stain.alt}
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

      {/* 7. DIRECT WHATSAPP ACTION BANNER */}
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
              href={defaultWhatsAppUrl}
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
