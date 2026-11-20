import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Truck,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Snowflake,
  Filter
} from 'lucide-react';
import { BRAND } from '../config/brand';
import { HennaImage } from '../components/HennaImage';

export const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Mehndi Cones',
    'Tools & Stands',
    'Kits & Supplies',
    'Oils & Care'
  ];

  const filteredProducts = activeCategory === 'All'
    ? BRAND.retailProducts
    : BRAND.retailProducts.filter((p) => p.category === activeCategory);

  const getProductWhatsAppUrl = (product) => {
    const deliveryText = product.isCone
      ? `Delivery: ₹${product.deliveryFee}`
      : `Delivery: location-based`;
    const text = encodeURIComponent(
      `Hi KOSHVAR! I'd like to make an enquiry about ${product.name} (${product.formattedPrice}, ${deliveryText}). Could you please share more details?`
    );
    return `https://wa.me/${BRAND.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="min-h-screen py-10 lg:py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-henna font-bold">
            Retail Collection
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
            KOSHVAR Retail Products & Supplies
          </h1>
          <p className="text-base text-charcoal-light leading-relaxed">
            Authentic natural henna cones, tools, practice boards, and artist supplies. Freshly formulated with 7-times-filtered powder and dispatched directly from Basmath.
          </p>

          <div className="inline-flex items-center gap-2 p-2 px-4 rounded-full bg-sage-50 text-forest text-xs font-medium border border-sage-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Delivery: ₹80 on all mehndi cones · Delivery charges applicable on other supplies</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-forest text-ivory shadow-soft'
                  : 'bg-white hover:bg-ivory border border-sand text-charcoal-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 10 Retail Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between border ${
                product.popular ? 'border-henna/40 ring-2 ring-henna/15' : 'border-sand'
              }`}
            >
              <div>
                {/* Product Image */}
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

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-charcoal-muted block">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-forest leading-snug">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price & Delivery Information Block */}
                  <div className="p-3 rounded-2xl bg-sage-50/70 border border-sage-100 space-y-1.5 text-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="text-charcoal-muted">Product Price:</span>
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

              {/* Card WhatsApp Action Button */}
              <div className="p-5 sm:p-6 pt-0 space-y-1.5">
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
                  Direct chat with KOSHVAR
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Showcase: Tasteful Mehndi Design & Application Photographs */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-henna font-bold">
              Artisan Gallery
            </span>
            <h2 className="font-serif text-3xl font-bold text-forest">
              Craft & Stain Results
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Real bridal applications, cone craft process, and natural dark stain outcomes achieved with KOSHVAR henna.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-soft border border-sand">
              <HennaImage
                src="/assets/bride-mehndi.jpg"
                alt="Bridal mehndi art"
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-3 bg-ivory text-center">
                <p className="text-xs font-medium text-forest">Bridal Mehndi Application</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-soft border border-sand">
              <HennaImage
                src="/assets/after-colour-stain.jpg"
                alt="After colour stain result"
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-3 bg-ivory text-center">
                <p className="text-xs font-medium text-forest">Natural Dark Stain Peak</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-soft border border-sand">
              <HennaImage
                src="/assets/cone-process.png"
                alt="Cone making process"
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-3 bg-ivory text-center">
                <p className="text-xs font-medium text-forest">Hand-Rolled Precision Cone</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-soft border border-sand">
              <HennaImage
                src="/assets/cones-ready.png"
                alt="Fresh cones ready for dispatch"
                aspectRatio="aspect-[4/3]"
              />
              <div className="p-3 bg-ivory text-center">
                <p className="text-xs font-medium text-forest">Fresh Dispatch from Basmath</p>
              </div>
            </div>
          </div>
        </div>

        {/* Wholesale Intermission */}
        <div className="p-8 sm:p-10 rounded-3xl bg-sage-50 border border-sage-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-forest font-bold">
              Wholesale & Bulk Orders
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Studio Batch Allocation for Artists & Salons
            </h3>
            <p className="text-sm text-charcoal-light max-w-xl">
              Are you an active bridal mehndi artist, academy, or salon? We provide scheduled fresh batch preparation and bulk supply.
            </p>
          </div>

          <Link
            to="/wholesale"
            className="px-7 py-3.5 rounded-full bg-forest hover:bg-forest/90 text-ivory text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-soft"
          >
            <span>Visit Wholesale Page</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Storage & Care Instructions */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand space-y-6">
          <div className="flex items-center gap-3 border-b border-sand pb-4">
            <div className="w-10 h-10 rounded-full bg-sage-50 text-forest flex items-center justify-center">
              <Snowflake size={20} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-forest">
                Storage & Handling Instructions
              </h3>
              <p className="text-xs text-charcoal-muted">
                How to preserve the staining power of your fresh cones
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-charcoal-light">
            <div className="space-y-2 p-5 rounded-2xl bg-ivory/60 border border-sand">
              <h4 className="font-semibold text-forest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-henna" />
                <span>1. Deep Freeze on Arrival</span>
              </h4>
              <p className="text-xs leading-relaxed text-charcoal-muted">
                Transfer cones into your freezer immediately upon delivery. Freezing pauses natural botanical degradation without affecting paste texture.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-ivory/60 border border-sand">
              <h4 className="font-semibold text-forest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-henna" />
                <span>2. Natural Thawing</span>
              </h4>
              <p className="text-xs leading-relaxed text-charcoal-muted">
                Take out required cones 25–30 minutes before your appointment and allow them to reach room temperature naturally. Never microwave or expose to hot water.
              </p>
            </div>

            <div className="space-y-2 p-5 rounded-2xl bg-ivory/60 border border-sand">
              <h4 className="font-semibold text-forest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-henna" />
                <span>3. Aftercare Advice</span>
              </h4>
              <p className="text-xs leading-relaxed text-charcoal-muted">
                Keep paste on skin for 4–8 hours. Gently scrape off the dried crust without water for the initial 12 hours for deep, long-lasting natural color.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
