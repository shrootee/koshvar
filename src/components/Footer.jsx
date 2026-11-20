import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight, Instagram } from 'lucide-react';
import { BRAND } from '../config/brand';

export const Footer = () => {
  const whatsappUrl = `https://wa.me/${BRAND.contact.whatsappNumber}?text=${encodeURIComponent(
    BRAND.contact.defaultEnquiryMessage
  )}`;

  return (
    <footer className="bg-sand/40 border-t border-sand text-charcoal pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white p-1 border border-sand shadow-soft flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src={BRAND.logo}
                  alt={`${BRAND.name} Logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-forest">
                  {BRAND.name}
                </span>
                <p className="text-[11px] tracking-wide text-charcoal-muted italic">
                  {BRAND.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-charcoal-light leading-relaxed">
              {BRAND.shortIntro}
            </p>

            <div className="pt-2 text-xs text-charcoal-muted space-y-1.5 border-t border-sand/80">
              <p className="flex items-start gap-1.5">
                <MapPin size={14} className="text-henna shrink-0 mt-0.5" />
                <span><strong>Operations:</strong> {BRAND.operations.management}</span>
              </p>
              <p className="flex items-start gap-1.5">
                <MapPin size={14} className="text-forest shrink-0 mt-0.5" />
                <span><strong>Manufacturing & Dispatch:</strong> {BRAND.operations.manufacturing}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Retail Henna Packs */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-forest">
              Henna Cone Packs (20g Cones)
            </h3>
            <ul className="space-y-3 text-sm">
              {BRAND.conePacks.map((pack) => (
                <li key={pack.id} className="border-b border-sand/60 pb-2">
                  <Link
                    to="/products"
                    className="text-charcoal-light hover:text-henna transition-colors block"
                  >
                    <div className="flex justify-between items-baseline font-medium">
                      <span>{pack.name}</span>
                      <span className="text-forest font-semibold">{pack.formattedProductPrice}</span>
                    </div>
                    <div className="flex justify-between text-xs text-charcoal-muted mt-0.5">
                      <span>{pack.totalWeight}</span>
                      <span>
                        Shipping: {pack.hasFixedShipping ? pack.formattedShipping : 'On inquiry'}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Wholesale & Navigation */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-forest">
              Wholesale & Supplies
            </h3>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Bulk supplies for professional artists, bridal studios, academies, and beauty salons across India.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/wholesale"
                  className="text-xs font-semibold uppercase tracking-wider text-henna hover:text-henna-dark flex items-center gap-1"
                >
                  <span>Wholesale Enquiries & Form</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-xs font-semibold uppercase tracking-wider text-forest hover:text-henna flex items-center gap-1"
                >
                  <span>View All Retail Products</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted hover:text-forest flex items-center gap-1"
                >
                  <span>About Sourcing & Craft</span>
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Personal Direct Orders & Social */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-forest">
              Orders & Enquiries
            </h3>
            <p className="text-sm text-charcoal-light leading-relaxed">
              We process retail orders personally through WhatsApp Business to ensure cone freshness and coordinate shipping directly.
            </p>
            <div className="space-y-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest text-ivory text-xs font-semibold uppercase tracking-wider hover:bg-forest/90 transition-all shadow-soft"
              >
                <MessageCircle size={15} />
                <span>WhatsApp: {BRAND.contact.phoneDisplay}</span>
              </a>

              <div className="text-xs text-charcoal-muted space-y-1.5 pt-1">
                <p>Phone: <a href={BRAND.contact.phoneTel} className="hover:underline text-charcoal">{BRAND.contact.phoneDisplay}</a></p>
                <p>Email: <a href={`mailto:${BRAND.contact.email}`} className="hover:underline text-charcoal">{BRAND.contact.email}</a></p>
                <p className="flex items-center gap-1.5 pt-0.5">
                  <Instagram size={14} className="text-henna shrink-0" />
                  <a
                    href={BRAND.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-charcoal font-medium"
                  >
                    {BRAND.contact.instagramHandle}
                  </a>
                </p>
                <p className="text-[11px] text-charcoal-muted pt-1">{BRAND.contact.workingHours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-sand flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. {BRAND.tagline}
          </p>
          <p>
            {BRAND.operations.summary} · Natural Henna & Beauty Supplies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
