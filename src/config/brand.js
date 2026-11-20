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
 * (No detailed street address displayed as per brand policy)
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
    workingHours: "Monday to Saturday, 10:00 AM – 7:00 PM IST"
  },

  currency: {
    symbol: "₹",
    code: "INR"
  },

  // Genuine Quality Truths (No invented claims, awards, or lab certificates)
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
      title: "Hand-Rolled 20g Cones",
      description: "Each fresh cone contains exactly 20 grams of paste, hand-rolled in durable cellophane for steady thumb pressure and clean linework."
    },
    {
      title: "Dispatched from Basmath",
      description: "Cones are rolled at our Basmath manufacturing unit and dispatched directly from Basmath to preserve freshness during transit."
    }
  ],

  // Retail Henna Cone Packs (Each cone weighs 20g; Product price and shipping displayed separately)
  conePacks: [
    {
      id: "pack-6",
      name: "Pack of 6 Henna Cones",
      coneCount: 6,
      coneWeight: "20g per cone",
      totalWeight: "120g total",
      productPrice: 120, // 6 × ₹20
      formattedProductPrice: "₹120",
      pricePerCone: "₹20 / cone",
      shippingFee: 80,
      formattedShipping: "₹80",
      hasFixedShipping: true,
      idealFor: "Practice, personal testing, and small occasions",
      description: "Set of 6 fresh henna cones (20g each). Made with 7-times-filtered henna powder and hand-rolled cellophane tips.",
      image: "https://images.unsplash.com/photo-1708963738411-74ab1cd5eafb?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pack-12",
      name: "Pack of 12 Henna Cones",
      coneCount: 12,
      coneWeight: "20g per cone",
      totalWeight: "240g total",
      productPrice: 240, // 12 × ₹20
      formattedProductPrice: "₹240",
      pricePerCone: "₹20 / cone",
      shippingFee: 80,
      formattedShipping: "₹80",
      hasFixedShipping: true,
      popular: true,
      idealFor: "Working mehndi artists, intimate bridal sittings, and festive bookings",
      description: "Our most requested pack. 12 fresh henna cones (20g each) formulated for consistent, non-stop linework and intricate detailing.",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "pack-15",
      name: "Pack of 15 Henna Cones",
      coneCount: 15,
      coneWeight: "20g per cone",
      totalWeight: "300g total",
      productPrice: 300, // 15 × ₹20
      formattedProductPrice: "₹300",
      pricePerCone: "₹20 / cone",
      shippingFee: null, // User to confirm shipping fee
      formattedShipping: "To be confirmed on inquiry",
      hasFixedShipping: false,
      badge: "Studio Value",
      idealFor: "Bridal studios, high-volume wedding marathon appointments, and group sessions",
      description: "15 fresh henna cones (20g each). Packed with thermal insulation to retain moisture and freshness.",
      image: "https://images.unsplash.com/photo-1732118400647-a81e3b37be87?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Other Retail Products & Supplies (Awaiting user's reference screenshots & exact prices)
  otherProducts: [
    {
      id: "henna-powder",
      category: "Henna Powder",
      name: "7-Times-Filtered Natural Henna Powder",
      description: "Triple-sifted and 7-times filtered botanical henna leaf powder for artists mixing their own fresh paste.",
      priceStatus: "Price on WhatsApp Enquiry",
      price: null,
      unit: "Pack size on inquiry",
      image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "practice-sheets",
      category: "Henna Practice Sheets",
      name: "Reusable Acrylic Mehndi Practice Sheets",
      description: "Durable clear acrylic practice boards with hand outlines for practicing linework, grid netting, and mandalas.",
      priceStatus: "Price on WhatsApp Enquiry",
      price: null,
      unit: "Per sheet / set",
      image: "https://images.unsplash.com/photo-1732118400647-a81e3b37be87?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cellophane-rolls",
      category: "Empty Cones & Cellophane",
      name: "Pre-Cut Cellophane Sheets & Pre-Rolled Cones",
      description: "Premium moisture-barrier cellophane precuts and empty cones for artists rolling their own custom tip widths.",
      priceStatus: "Price on WhatsApp Enquiry",
      price: null,
      unit: "Bundle on inquiry",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "henna-aftercare",
      category: "Beauty Supplies",
      name: "Natural Henna Aftercare Balm & Sealant",
      description: "Natural herbal balm formulated to nourish the skin, protect the drying crust, and encourage natural stain darkening.",
      priceStatus: "Price on WhatsApp Enquiry",
      price: null,
      unit: "Per bottle / tin",
      image: "https://images.unsplash.com/photo-1683912832326-fdc7912cf195?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Wholesale Information
  wholesale: {
    title: "Wholesale & Studio Supply",
    subtitle: "Direct batch allocation for working professionals and beauty retailers",
    description: "KOSHVAR supplies fresh bulk batches to working mehndi artists, bridal academies, beauty salons, and distributors across India. Prepared to order at our Basmath manufacturing unit.",
    products: [
      {
        name: "Fresh Henna Cones",
        detail: "Bulk quantities of 20g fine-tip cones prepared fresh for wedding seasons."
      },
      {
        name: "7-Times-Filtered Henna Powder",
        detail: "Finely sifted natural henna powder for studio and salon mixing."
      },
      {
        name: "Henna Practice Sheets",
        detail: "Reusable acrylic templates and sheets for academy students and trainees."
      },
      {
        name: "Henna Supplies & Accessories",
        detail: "Pre-cut cellophane, empty cones, and artist supplies."
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
  },

  // Imagery
  images: {
    hero: {
      url: "https://images.unsplash.com/photo-1708963738411-74ab1cd5eafb?auto=format&fit=crop&w=1200&q=80",
      alt: "Professional mehndi artist applying fine-tip henna to bride's hand"
    },
    bridalHands: {
      url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
      alt: "Intricate bridal mehndi artwork on hands"
    },
    finePattern: {
      url: "https://images.unsplash.com/photo-1732118400647-a81e3b37be87?auto=format&fit=crop&w=1000&q=80",
      alt: "Detailed natural henna design on palm"
    },
    weddingMehndi: {
      url: "https://images.unsplash.com/photo-1683912832326-fdc7912cf195?auto=format&fit=crop&w=1000&q=80",
      alt: "Traditional Indian bride hands decorated with henna and bangles"
    }
  }
};
