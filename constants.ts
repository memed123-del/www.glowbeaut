
import { Product } from './types';

// Product images removed — users will add their own images later.
// Keep `image` fields empty so assets are not bundled or requested.

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Advanced Snail Mucin Essence",
    brand: "COSRX",
    price: 215000,
    originalPrice: 280000,
    rating: 4.9,
    reviews: 1240,
    image: "",
    description: "A lightweight essence which absorbs into skin fast to give skin a natural glow from the inside. This essence is created from nutritious, low-stimulation filtered snail mucin to keep your skin moisturized and illuminated all day.",
    category: "Skincare",
    isSale: true
  },
  {
    id: 2,
    name: "Low pH Good Morning Cleanser",
    brand: "COSRX",
    price: 55000,
    rating: 4.7,
    reviews: 850,
    image: "",
    description: "Cleanse daily with this gentle and effective gel type cleanser. Formulated with tea tree oil and natural BHA to refine skin texture, the Low pH Good Morning Gel Cleanser's pH level is the closest to your skin's natural pH level.",
    category: "Cleanser",
    isNew: true
  },
  {
    id: 3,
    name: "Matte Lipstick - Dusty Rose",
    brand: "MAC",
    price: 350000,
    rating: 4.8,
    reviews: 320,
    image: "",
    description: "The iconic product that made M·A·C famous. This creamy rich formula features high colour payoff in a no-shine matte finish.",
    category: "Makeup"
  },
  {
    id: 4,
    name: "Hydrating Water Gel",
    brand: "Neutrogena",
    price: 180000,
    originalPrice: 200000,
    rating: 4.5,
    reviews: 2100,
    image: "",
    description: "Neutrogena Hydro Boost Water Gel instantly quenches dry skin and keeps it looking smooth, supple and hydrated day after day.",
    category: "Moisturizer",
    isSale: true
  },
  {
    id: 5,
    name: "UV Protection Sunscreen SPF 50",
    brand: "Biore",
    price: 120000,
    rating: 4.6,
    reviews: 500,
    image: "",
    description: "Micro Defense formula provides even coverage for fine lines and uneven surfaces at a micro level. Powerful UV protection in a light, watery texture.",
    category: "Sunscreen"
  },
  {
    id: 6,
    name: "Niacinamide 10% + Zinc 1%",
    brand: "The Ordinary",
    price: 110000,
    rating: 4.8,
    reviews: 5600,
    image: "",
    description: "A high-strength vitamin and mineral blemish formula. Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin blemishes and congestion.",
    category: "Serum"
  },
  {
    id: 7,
    name: "Clay Mask Pore Cleansing",
    brand: "Innisfree",
    price: 190000,
    originalPrice: 220000,
    rating: 4.7,
    reviews: 900,
    image: "",
    description: "10-in-1 clay mask that is formulated with Jeju Volcanic Clusters & Spheres to provide intensive pore care.",
    category: "Mask",
    isSale: true
  },
  {
    id: 8,
    name: "Setting Spray Matte Finish",
    brand: "NYX",
    price: 145000,
    rating: 4.4,
    reviews: 120,
    image: "",
    description: "Demand perfection! For that fresh makeup look that lasts, the NYX Professional Makeup Matte Setting Spray - Matte is a gorgeous shine-free finish.",
    category: "Makeup"
  }
];

export const CATEGORIES = [
  "Skincare",
  "Makeup",
  "Hair Care",
  "Body",
  "Fragrance",
  "Tools",
  "Natural",
  "New Arrivals"
];
