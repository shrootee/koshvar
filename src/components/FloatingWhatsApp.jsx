import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND } from '../config/brand';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMsg = encodeURIComponent(
    `Hi KOSHVAR! I'd like to make an enquiry. Could you please share more details?`
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Small informative prompt tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-charcoal border border-sand shadow-card px-4 py-2.5 rounded-full text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat with us on WhatsApp for orders & quotes</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-charcoal-muted hover:text-charcoal ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${BRAND.contact.whatsappNumber}?text=${defaultMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-card hover:shadow-elevated flex items-center justify-center transition-all hover:scale-105 group focus:outline-none focus:ring-4 focus:ring-emerald-200"
        aria-label="Chat directly on WhatsApp"
      >
        <MessageCircle size={28} strokeWidth={2} className="group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
