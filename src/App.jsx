import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Pages
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Wholesale } from './pages/Wholesale';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

// Clean 404 Fallback
const NotFound = () => (
  <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 bg-ivory">
    <div className="max-w-md w-full bg-white border border-sand p-8 rounded-3xl text-center space-y-4 shadow-soft">
      <span className="text-xs text-henna uppercase tracking-widest font-bold">
        Page Not Found
      </span>
      <h1 className="font-serif text-3xl font-bold text-forest">
        Page Not Found
      </h1>
      <p className="text-sm text-charcoal-muted">
        The page you are looking for does not exist. Browse our fresh henna cone packs or contact us directly.
      </p>
      <a
        href="/"
        className="inline-block px-7 py-3 rounded-full bg-forest text-ivory text-xs font-semibold uppercase tracking-wider transition-all"
      >
        Return to Home
      </a>
    </div>
  </div>
);

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory text-charcoal selection:bg-sage-100 selection:text-forest">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Shop />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/wholesale" element={<Wholesale />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
