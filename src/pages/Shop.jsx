import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Snowflake,
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  Info,
  PackageCheck
} from 'lucide-react';
import { BRAND } from '../config/brand';
import { HennaImage } from '../components/HennaImage';

export const Shop = () => {
  const getWhatsAppOrderUrl = (pack) => {
    const shippingText = pack.hasFixedShipping
      ? `+ ₹${pack.shippingFee} shipping`
      : `shipping to be confirmed`;
    const text = encodeURIComponent(
      `Hello ${BRAND.name}, I would like to order the ${pack.name} (${pack.formattedProductPrice}, ${shippingText}). Please confirm availability and dispatch details.`
    );
    return `https://wa.me/${BRAND.contact.whatsappNumber}?text=${text}`;
  };

  const getOtherProductWhatsAppUrl = (product) => {
    const text = encodeURIComponent(
      `Hello ${BRAND.name}, I would like to enquire about the price and availability of "${product.name}" (${product.category}).`
    );
    return `https://wa.me/${BRAND.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="min-h-screen py-12 lg:py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-henna font-bold">
            Retail Catalogue
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
            {BRAND.name} Retail Products & Supplies
          </h1>
          <p className="text-base text-charcoal-light leading-relaxed">
            Fresh henna cones made with <strong>7-times-filtered henna powder</strong> and <strong>no added chemicals in the cone tip</strong>. Product price and courier shipping are listed separately for complete transparency.
          </p>

          <div className="inline-flex items-center gap-2 p-2 px-4 rounded-full bg-sage-50 text-forest text-xs font-medium border border-sage-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Tap "Enquire / Order on WhatsApp" on any product to chat directly</span>
          </div>
        </div>

        {/* SECTION 1: FRESH HENNA CONE PACKS */}
        <div className="space-y-6">
          <div className="border-b border-sand pb-4">
            <h2 className="font-serif text-3xl font-bold text-forest">
              Fresh 20g Henna Cones
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Hand-rolled with 20 grams of paste per cone. Shipping is calculated separately based on pack weight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {BRAND.conePacks.map((pack) => (
              <div
                key={pack.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all flex flex-col justify-between border ${
                  pack.popular ? 'border-henna/40 ring-2 ring-henna/15' : 'border-sand'
                }`}
              >
                <div>
                  <div className="relative">
                    <HennaImage
                      src={pack.image}
                      alt={pack.name}
                      aspectRatio="aspect-[4/3]"
                    />
                    {pack.popular && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-henna text-white text-xs font-semibold shadow-soft">
                        Most Popular
                      </span>
                    )}
                    {pack.badge && !pack.popular && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-forest text-white text-xs font-semibold shadow-soft">
                        {pack.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-forest">
                        {pack.name}
                      </h3>
                      <p className="text-xs text-charcoal-muted mt-0.5 font-medium">
                        {pack.totalWeight} ({pack.coneCount} cones × 20g)
                      </p>
                    </div>

                    {/* Separate Product Price and Shipping Breakdown */}
                    <div className="p-4 rounded-2xl bg-sage-50/70 border border-sage-100 space-y-2 text-sm">
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
                      <div className="text-[11px] text-charcoal-muted italic pt-0.5">
                        {pack.pricePerCone} · Shipping is additional
                      </div>
                    </div>

                    <p className="text-sm text-charcoal-light leading-relaxed">
                      {pack.description}
                    </p>

                    <div className="text-xs text-charcoal-muted pt-1 border-t border-sand/60">
                      <strong>Best suited for:</strong> {pack.idealFor}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 space-y-2">
                  <a
                    href={getWhatsAppOrderUrl(pack)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full bg-forest hover:bg-forest/90 text-ivory text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-soft"
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
        </div>

        {/* SECTION 2: OTHER RETAIL PRODUCTS & BEAUTY SUPPLIES */}
        <div className="space-y-6 pt-6">
          <div className="border-b border-sand pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-henna font-bold">
                Complete Studio Range
              </span>
              <h2 className="font-serif text-3xl font-bold text-forest mt-0.5">
                Henna Supplies & Accessories
              </h2>
            </div>
            <p className="text-xs text-charcoal-muted">
              Prices & specifications available upon WhatsApp inquiry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND.otherProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all border border-sand flex flex-col justify-between"
              >
                <div>
                  <HennaImage
                    src={prod.image}
                    alt={prod.name}
                    aspectRatio="aspect-[4/3]"
                  />
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-henna block">
                      {prod.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-forest leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {prod.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-2">
                  <div className="p-2.5 rounded-xl bg-ivory text-center text-xs font-medium text-forest border border-sand/80">
                    {prod.priceStatus}
                  </div>
                  <a
                    href={getOtherProductWhatsAppUrl(prod)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-full bg-forest hover:bg-forest/90 text-ivory text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-soft"
                  >
                    <MessageCircle size={14} className="text-emerald-400" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHOLESALE CALLOUT */}
        <div className="p-8 sm:p-10 rounded-3xl bg-sage-50 border border-sage-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-forest font-bold">
              Bulk Orders & Studio Supply
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Wholesale Supply for Artists & Salons
            </h3>
            <p className="text-sm text-charcoal-light max-w-xl">
              We supply working bridal artists, mehndi academies, and beauty salons with fresh batch allocations. Connect directly with us to discuss quantities and schedules.
            </p>
          </div>

          <Link
            to="/wholesale"
            className="px-7 py-3.5 rounded-full bg-forest hover:bg-forest/90 text-ivory text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-soft"
          >
            <span>Wholesale Desk & Form</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* STORAGE & HANDLING */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand space-y-6">
          <div className="flex items-center gap-3 border-b border-sand pb-4">
            <div className="w-10 h-10 rounded-full bg-sage-50 text-forest flex items-center justify-center">
              <Snowflake size={20} />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-forest">
                Storage & Care Guide
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
