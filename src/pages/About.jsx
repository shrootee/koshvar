import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  ShieldCheck,
  Check,
  Compass,
  ArrowRight,
  MessageCircle,
  Truck
} from 'lucide-react';
import { BRAND } from '../config/brand';
import { HennaImage } from '../components/HennaImage';

export const About = () => {
  return (
    <div className="min-h-screen py-12 lg:py-16 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-henna font-bold">
            About {BRAND.name}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest">
            {BRAND.tagline}
          </h1>
          <p className="text-base text-charcoal-light leading-relaxed">
            {BRAND.name} is an independent brand dedicated to providing genuine natural henna cones and beauty supplies. We focus on consistent quality, clean formulation, and reliable service for retail clients and working artists.
          </p>
        </div>

        {/* Operational Architecture & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-charcoal-light leading-relaxed">
            <h2 className="font-serif text-3xl font-bold text-forest">
              Operations in Pune · Crafted & Dispatched from Basmath
            </h2>
            <p>
              Our business is managed and operated from <strong>Pune, Maharashtra</strong>, while manufacturing, batch preparation, and dispatch happen directly from <strong>Basmath, Maharashtra</strong>.
            </p>
            <p>
              Many commercial cones rely on synthetic dye boosters and chemical additives to produce fast artificial stains. At {BRAND.name}, we formulate our paste using <strong>7-times-filtered natural henna powder</strong> with <strong>no added chemicals in the cone tip</strong>. This ensures that artists experience a smooth, clog-free flow without irritation to sensitive skin.
            </p>
            <p>
              Each cone is hand-rolled with exactly <strong>20 grams of paste</strong>, sealed carefully, and dispatched from Basmath to arrive in fresh condition.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-card border-4 border-white">
              <HennaImage
                src={BRAND.images?.hero?.url || "/assets/hero-mehndi.jpg"}
                alt={BRAND.images?.hero?.alt || "KOSHVAR Henna Studio"}
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>

        {/* Genuine Pillars of Quality (No invented certifications) */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand shadow-soft space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="font-serif text-3xl font-bold text-forest">
              Our Product Characteristics
            </h3>
            <p className="text-sm text-charcoal-muted">
              Honest specifications of how our henna cones are prepared.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-ivory/60 border border-sand space-y-2">
              <span className="text-xs font-bold text-henna uppercase">01. Sifting</span>
              <h4 className="font-serif text-lg font-bold text-forest">7-Times-Filtered</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Henna powder passed through seven filtration stages to eliminate leaf debris that causes tip clogs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory/60 border border-sand space-y-2">
              <span className="text-xs font-bold text-henna uppercase">02. Safety</span>
              <h4 className="font-serif text-lg font-bold text-forest">Zero Added Chemicals</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                No added chemical dyes, PPD, or synthetic boosters in the cone tip or paste.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory/60 border border-sand space-y-2">
              <span className="text-xs font-bold text-henna uppercase">03. Measurement</span>
              <h4 className="font-serif text-lg font-bold text-forest">20 Grams Per Cone</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Hand-rolled with 20 grams of paste per cone for consistent weight and comfortable grip.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-ivory/60 border border-sand space-y-2">
              <span className="text-xs font-bold text-henna uppercase">04. Fresh Transit</span>
              <h4 className="font-serif text-lg font-bold text-forest">Direct from Basmath</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Shipped directly from our Basmath manufacturing unit to ensure maximum freshness on delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Wholesale Mention with Link */}
        <div className="p-8 sm:p-10 rounded-3xl bg-sage-50 border border-sage-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-forest font-bold">
              B2B & Studio Orders
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
              Wholesale Enquiries Welcome
            </h3>
            <p className="text-sm text-charcoal-light max-w-xl">
              We work with professional artists, bridal academies, and salons across India. Wholesale availability and direct quotations can be accessed on our dedicated Wholesale page.
            </p>
          </div>

          <Link
            to="/wholesale"
            className="px-7 py-3.5 rounded-full bg-forest hover:bg-forest/90 text-ivory text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 shadow-soft"
          >
            <span>Wholesale Page</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Direct WhatsApp Call to Action */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest text-ivory flex flex-col md:flex-row items-center justify-between gap-8 shadow-elevated">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-3xl font-bold">
              Connect with {BRAND.name}
            </h3>
            <p className="text-sm text-sage-200/90 max-w-lg">
              Have questions about our products or want to place an order? Speak with our team directly on WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/products"
              className="px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              View Products
            </Link>

            <a
              href={`https://wa.me/${BRAND.contact.whatsappNumber}?text=${encodeURIComponent(BRAND.contact.defaultEnquiryMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
