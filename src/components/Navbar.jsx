import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { BRAND } from '../config/brand';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Retail Products', path: '/products' },
    { label: 'Wholesale', path: '/wholesale' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const defaultWhatsAppUrl = `https://wa.me/${BRAND.contact.whatsappNumber}?text=${encodeURIComponent(
    BRAND.contact.defaultEnquiryMessage
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur-md border-b border-sand/70">
      {/* Top Notification / Origin Bar */}
      <div className="bg-sage-50 text-forest text-xs py-2 px-4 border-b border-sage-100">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <p className="font-medium">
            {BRAND.operations.summary} · <span className="italic">{BRAND.tagline}</span>
          </p>
          <div className="hidden sm:flex items-center gap-4 text-charcoal-muted">
            <a
              href={BRAND.contact.phoneTel}
              className="hover:text-forest transition-colors flex items-center gap-1.5"
            >
              <Phone size={13} strokeWidth={1.5} />
              <span>{BRAND.contact.phoneDisplay}</span>
            </a>
            <span>·</span>
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-henna hover:text-henna-dark font-medium transition-colors flex items-center gap-1"
            >
              <span>WhatsApp Enquiry</span>
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3.5 group"
          >
            {/* Real Logo with Preserved Proportions */}
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white p-1 border border-sand shadow-soft flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src={BRAND.logo}
                alt={`${BRAND.name} Brand Logo`}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-forest group-hover:text-henna transition-colors">
                {BRAND.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans tracking-wider text-charcoal-muted -mt-0.5 italic">
                {BRAND.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive(link.path)
                    ? 'text-henna font-semibold'
                    : 'text-charcoal hover:text-forest'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-henna rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Action Button: WhatsApp Order */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest hover:bg-forest/90 text-ivory text-xs font-semibold tracking-wide uppercase shadow-soft hover:shadow-card transition-all"
            >
              <MessageCircle size={16} strokeWidth={2} className="text-sage-200" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-700 hover:bg-sage-50 rounded-full"
              aria-label="Order on WhatsApp"
            >
              <MessageCircle size={22} strokeWidth={1.5} />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:bg-sage-50 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-sand px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive(link.path)
                    ? 'bg-sage-100 text-forest font-semibold'
                    : 'text-charcoal hover:bg-sage-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-sand space-y-2">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-forest text-ivory text-xs font-semibold uppercase tracking-wider shadow-soft"
            >
              <MessageCircle size={16} strokeWidth={2} />
              <span>Enquire on WhatsApp</span>
            </a>
            <p className="text-center text-[11px] text-charcoal-muted pt-1">
              Operations: Pune · Dispatch: Basmath
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
