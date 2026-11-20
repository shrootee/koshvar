/**
 * KOSHVAR BRAND & PRODUCT CONFIGURATION
 * Central single source of truth for all products, pricing, and company information.
 * 
 * Brand Name: KOSHVAR
 * Tagline: A Better Kind of Beautiful.
 * Email: contact.koshvar@gmail.com
 * Phone / WhatsApp: +91 8087732242
 * Instagram: https://www.instagram.com/koshvar.co/
 * 
 * Brand Operations: Pune, Maharashtra, India
 * Manufacturing & Dispatch: Basmath, Maharashtra, India
 */

export const BRAND = {
  name: "KOSHVAR",
  logo: "/assets/logo.png",
  transparentLogo: "/assets/tranperentlogo.png",
  tagline: "A Better Kind of Beautiful.",
  shortIntro: "Independent brand crafting natural henna and beauty supplies. Henna paste formulated with 7-times-filtered henna powder and zero added chemicals in the cone tip.",
  
  operations: {
    management: "Pune, Maharashtra, India",
    manufacturing: "Basmath, Maharashtra, India",
    dispatch: "Basmath, Maharashtra, India",
    summary: "Operations in Pune · Crafted & Dispatched from Basmath"
  },

  contact: {
    phoneDisplay: "+91 8087732242",
    phoneTel: "tel:+918087732242",
    whatsappNumber: "918087732242", // Country code + 10 digits
    email: "contact.koshvar@gmail.com",
    instagram: "https://www.instagram.com/koshvar.co/",
    instagramHandle: "@koshvar.co",
    workingHours: "Monday to Saturday, 10:00 AM – 7:00 PM IST",
    defaultEnquiryMessage: "Hi KOSHVAR! I'd like to make an enquiry. Could you please share more details?"
  },

  currency: {
    symbol: "₹",
    code: "INR"
  },

  // Genuine Quality Truths
  qualityPillars: [
    {
      title: "7-Times-Filtered Henna Powder",
      description: "Our henna paste is prepared using micro-fine henna powder passed through seven stages of fine filtering to eliminate micro-particles and ensure a smooth, clog-free flow."
    },
    {
      title: "No Added Chemicals in Cone Tip",
      description: "Zero chemical accelerators, zero synthetic preservatives, and zero artificial dyes added to the paste or nozzle tip. Safe for artists and clients."
    },
    {
      title: "Carefully Rolled Cones",
      description: "Hand-rolled in durable cellophane for steady thumb pressure, ergonomic grip, and clean linework."
    },
    {
      title: "Dispatched from Basmath",
      description: "Cones and supplies are packed at our Basmath manufacturing unit and dispatched directly from Basmath to preserve freshness during transit."
    }
  ],

  // All 10 Retail Products with Real Project Photography
  retailProducts: [
    {
      id: "pack-6",
      name: "Mehndi Cones – Pack of 6",
      category: "Mehndi Cones",
      price: 120,
      formattedPrice: "₹120",
      deliveryFee: 80,
      formattedDelivery: "₹80 delivery",
      deliveryNote: "₹80 delivery",
      isCone: true,
      popular: false,
      badge: "Starter Pack",
      image: "/assets/pack-6.png",
      description: "Fresh natural henna cones hand-rolled with fine tips. 7-times-filtered powder for smooth, unbroken flow."
    },
    {
      id: "pack-12",
      name: "Mehndi Cones – Pack of 12",
      category: "Mehndi Cones",
      price: 120,
      formattedPrice: "₹120",
      deliveryFee: 80,
      formattedDelivery: "₹80 delivery",
      deliveryNote: "₹80 delivery",
      isCone: true,
      popular: true,
      badge: "Most Popular",
      image: "/assets/pack-12.png",
      description: "Our most popular pack for working mehndi artists and festive sittings. Reliable fine tips without clogging."
    },
    {
      id: "pack-15",
      name: "Mehndi Cones – Pack of 15",
      category: "Mehndi Cones",
      price: 300,
      formattedPrice: "₹300",
      deliveryFee: 80,
      formattedDelivery: "₹80 delivery",
      deliveryNote: "₹80 delivery",
      isCone: true,
      popular: false,
      badge: "Studio Value",
      image: "/assets/pack-15.png",
      description: "Value pack for bridal bookings and busy marathon sessions. Sealed carefully for maximum freshness."
    },
    {
      id: "combo-kit",
      name: "Mehndi Combo Kit",
      category: "Kits & Supplies",
      price: 500,
      formattedPrice: "₹500",
      deliveryFee: null,
      formattedDelivery: "Delivery charges applicable",
      deliveryNote: "Delivery calculated on location",
      isCone: false,
      popular: true,
      badge: "Complete Set",
      image: "/assets/combo-kit.png",
      description: "Comprehensive artist kit with essential supplies for practicing, mixing, and creating fine mehndi art."
    },
    {
      id: "cone-sheets-1kg",
      name: "Cone Sheets – 1 kg",
      category: "Kits & Supplies",
      price: 600,
      formattedPrice: "₹600",
      deliveryFee: null,
      formattedDelivery: "Delivery charges applicable",
      deliveryNote: "Delivery calculated on location",
      isCone: false,
      popular: false,
      badge: "1 kg Pack",
      image: "/assets/sheets.png",
      description: "Premium moisture-barrier cellophane sheets cut to precision size for rolling custom fine-tip henna cones."
    },
    {
      id: "acrylic-hand",
      name: "Acrylic Hand",
      category: "Tools & Stands",
      price: 220,
      formattedPrice: "₹220",
      deliveryFee: null,
      formattedDelivery: "Delivery charges applicable",
      deliveryNote: "Delivery calculated on location",
      isCone: false,
      popular: false,
      badge: "Reusable",
      image: "/assets/acrylic-hand.png",
      description: "Durable clear acrylic practice hand template for perfecting bridal figures, mandalas, and intricate grids."
    },
    {
      id: "cone-holder-stand",
      name: "Cone Holder Stand",
      category: "Tools & Stands",
      price: 220,
      formattedPrice: "₹220",
      deliveryFee: null,
      formattedDelivery: "Delivery charges applicable",
      deliveryNote: "Delivery calculated on location",
      isCone: false,
      popular: false,
      badge: "Studio Tool",
      image: "/assets/cone-stand.png",
      description: "Convenient cone organizer stand to hold multiple active henna cones upright without tipping or paste mess."
    },
    {
      id: "mehndi-oil",
      name: "Mehndi Oil – 250 ml",
      category: "Oils & Care",
      price: 250,
      formattedPrice: "₹250",
      deliveryFee: null,
      formattedDelivery: "Delivery charges applicable",
      deliveryNote: "Delivery calculated on location",
      isCone: false,
      popular: false,
      badge: "250 ml",
      image: "/assets/mehndi-oil.png",
      description: "Natural herbal oil blend formulated to enrich paste aroma and support rich, long-lasting natural stain darkening."
    },
    {
      id: "spatula",
      name: "Mehndi Spatula",
      category: "Tools & Stands",
      price: 100,
      formattedPrice: "₹100",
      deliveryFee: null,
      formattedDelivery: "Delivery charges applicable",
      deliveryNote: "Delivery calculated on location",
      isCone: false,
      popular: false,
      badge: "Essential",
      image: "/assets/spatula.png",
      description: "Ergonomic mixing and cone filling spatula for smooth paste transfer into piping bags without air pockets."
    },
    {
      id: "stocking",
      name: "Stocking",
      category: "Kits & Supplies",
      price: 40,
      formattedPrice: "₹40",
      deliveryFee: null,
      formattedDelivery: "Delivery charges applicable",
      deliveryNote: "Delivery calculated on location",
      isCone: false,
      popular: false,
      badge: "Filtration",
      image: "/assets/stocking.png",
      description: "Ultra-fine mesh stocking filter for straining henna paste to guarantee lump-free, silky consistency."
    }
  ],

  // Real Project Photography Assets
  images: {
    hero: {
      url: "/assets/hero-mehndi.jpg",
      alt: "KOSHVAR Natural Henna Mehndi Application"
    },
    brideMehndi: {
      url: "/assets/bride-mehndi.jpg",
      alt: "Intricate bridal mehndi design on hands"
    },
    afterColour: {
      url: "/assets/after-colour-stain.jpg",
      alt: "Rich deep natural henna stain result"
    },
    stain: {
      url: "/assets/stain-of-mehndi.jpg",
      alt: "Dark natural henna stain on palms"
    },
    coneReal: {
      url: "/assets/cone-real.png",
      alt: "KOSHVAR natural hand-rolled henna cones"
    },
    coneProcess: {
      url: "/assets/cone-process.png",
      alt: "Henna cone hand-rolling craft process"
    },
    conesReady: {
      url: "/assets/cones-ready.png",
      alt: "Freshly prepared KOSHVAR henna cones ready for dispatch"
    }
  },

  // Wholesale Information
  wholesale: {
    title: "Wholesale & Studio Supply",
    subtitle: "Direct batch allocation for working professionals and beauty retailers",
    description: "KOSHVAR supplies fresh bulk batches to working mehndi artists, bridal academies, beauty salons, and distributors across India. Prepared to order at our Basmath manufacturing unit.",
    products: [
      {
        name: "Fresh Henna Cones",
        detail: "Bulk quantities of fine-tip cones prepared fresh for wedding seasons."
      },
      {
        name: "7-Times-Filtered Henna Powder",
        detail: "Finely sifted natural henna powder for studio and salon mixing."
      },
      {
        name: "Cone Sheets & Cellophane",
        detail: "Bulk 1 kg packs and custom precuts for artist rolling."
      },
      {
        name: "Henna Tools & Supplies",
        detail: "Acrylic practice hands, cone stands, spatulas, and oils."
      }
    ],
    audiences: [
      "Professional Mehndi Artists",
      "Bridal Studios & Academies",
      "Beauty Salons & Spas",
      "Beauty Retailers",
      "Resellers & Distributors"
    ],
    pricingNotice: "We do not publish fixed wholesale price lists or arbitrary discount tiers online. Wholesale pricing, batch scheduling, and order quantities are provided upon direct discussion based on your studio's recurring requirements."
  }
};
