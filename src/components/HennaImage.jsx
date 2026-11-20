import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

/**
 * HennaImage Component:
 * Clean, modern image container with smooth loading transition
 * and graceful natural fallback if the image fails to load.
 */
export const HennaImage = ({
  src,
  alt = 'Natural Henna Cones & Mehndi Art',
  className = '',
  imgClassName = '',
  aspectRatio = 'aspect-[4/3]',
  priority = false
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-ivory-dark ${aspectRatio} ${className}`}>
      {!hasError ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-sage-50 animate-pulse flex items-center justify-center text-sage-600">
              <span className="text-xs font-medium text-sage-700">Loading image...</span>
            </div>
          )}
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              } ${imgClassName}`}
          />
        </>
      ) : (
        /* Graceful natural fallback */
        <div className="w-full h-full p-8 bg-sage-50 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-henna mb-3">
            <Sparkles size={22} strokeWidth={1.5} />
          </div>
          <p className="font-serif text-lg font-medium text-forest">
            Koshvar Studio
          </p>
          <p className="text-xs text-charcoal-muted mt-1">
            Fresh Natural Henna Cones
          </p>
        </div>
      )}
    </div>
  );
};

export default HennaImage;
