export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  short: string;
  description: string;
  price: number;
  wasPrice?: number;
  onSale?: boolean;
  featured?: boolean;
  features: string[];
  specs: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    id: "standard-slim",
    name: "Poa Tank — Standard Series Slim",
    category: "Water Storage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Space-saving slim design for narrow spaces, balconies, and tight utility areas.",
    description:
      "The slim Standard Series is engineered for urban homes and apartments where every centimetre counts. Its slim profile slots neatly against walls and balcony corners while still delivering the ruggedness Poa Tank is known for.",
    price: 19500,
    wasPrice: 25800,
    onSale: true,
    featured: true,
    features: ["Slim urban profile", "UV-stabilised polyethylene", "Food-grade interior", "Threaded inlet & outlet"],
    specs: [
      { label: "Capacity", value: "1,000 L" },
      { label: "Material", value: "UV-stabilised HDPE" },
      { label: "Colour", value: "Signature Black" },
      { label: "Warranty", value: "10 years" },
    ],
  },
  {
    id: "outdoor-farm",
    name: "Poa Tank — Standard Series Outdoor",
    category: "Agriculture",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Robust outdoor tank designed for farms, irrigation, and livestock water supply.",
    description:
      "Built for the field. This tank endures African sun, dust and heavy fills with reinforced ribbing and a wide-mouth lid for easy cleaning. A workhorse for irrigation lines and livestock troughs.",
    price: 29800,
    wasPrice: 32000,
    onSale: true,
    featured: true,
    features: ["Reinforced ribbed body", "Wide-mouth lid", "High-flow outlet", "All-weather build"],
    specs: [
      { label: "Capacity", value: "5,000 L" },
      { label: "Material", value: "UV-stabilised HDPE" },
      { label: "Use", value: "Irrigation & livestock" },
      { label: "Warranty", value: "10 years" },
    ],
  },
  {
    id: "rooftop-elevated",
    name: "Poa Tank — Rooftop Elevated Tank",
    category: "Water Storage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Engineered for rooftop gravity-fed systems. Lightweight, UV-resistant, and durable.",
    description:
      "Optimised for gravity-fed plumbing. A lightweight yet rigid shell makes rooftop installs safer and quicker, while UV inhibitors keep the tank looking fresh year after year.",
    price: 24500,
    wasPrice: 34200,
    onSale: true,
    featured: true,
    features: ["Lightweight shell", "Rooftop-optimised base", "UV-resistant", "Quick-install fittings"],
    specs: [
      { label: "Capacity", value: "3,000 L" },
      { label: "Best for", value: "Rooftops" },
      { label: "Fittings", value: "1\" inlet / outlet" },
      { label: "Warranty", value: "10 years" },
    ],
  },
  {
    id: "watchman-black",
    name: "Poa Tank — Watchman Hut, Black",
    category: "Security",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Portable, durable and spacious. Ideal for security posts and temporary shelters.",
    description:
      "A moulded polyethylene shelter that stands up to the elements. Spacious inside for a guard and gear, with ventilation slots and a lockable entry.",
    price: 62000,
    wasPrice: 70000,
    onSale: true,
    features: ["Weather-sealed shell", "Ventilation slots", "Lockable entry", "Portable footprint"],
    specs: [
      { label: "Footprint", value: "1.2m × 1.2m" },
      { label: "Colour", value: "Black" },
      { label: "Use", value: "Security posts" },
      { label: "Warranty", value: "5 years" },
    ],
  },
  {
    id: "watchman-green",
    name: "Poa Tank — Watchman Hut, Green",
    category: "Security",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "For hotels, schools, hospitals, and industry security needs.",
    description:
      "The green edition blends into landscaped grounds and campus environments. Same rugged Poa Tank shell — softer visual footprint.",
    price: 62000,
    wasPrice: 70000,
    onSale: true,
    features: ["Landscape-friendly finish", "Weather-sealed shell", "Ventilation slots", "Lockable entry"],
    specs: [
      { label: "Footprint", value: "1.2m × 1.2m" },
      { label: "Colour", value: "Green" },
      { label: "Use", value: "Campus & hospitality" },
      { label: "Warranty", value: "5 years" },
    ],
  },
  {
    id: "watchman-blue",
    name: "Poa Tank — Watchman Hut, Blue",
    category: "Security",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "High quality, spacious and durable. Perfect for estate and commercial use.",
    description:
      "A signature blue finish for estates and commercial gates. Built to Poa Tank's tough standard with generous internal space.",
    price: 62000,
    wasPrice: 70000,
    onSale: true,
    features: ["Estate-ready finish", "Spacious interior", "Weather-sealed", "Ventilation slots"],
    specs: [
      { label: "Footprint", value: "1.2m × 1.2m" },
      { label: "Colour", value: "Blue" },
      { label: "Use", value: "Estates & commercial" },
      { label: "Warranty", value: "5 years" },
    ],
  },
  {
    id: "septic",
    name: "Poa Tank — Septic Tank",
    category: "Sanitation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "High-density polyethylene septic tank for domestic and commercial waste management.",
    description:
      "A leak-proof, corrosion-resistant septic solution. Faster to install than concrete and engineered for long service life underground.",
    price: 38000,
    wasPrice: 45000,
    onSale: true,
    features: ["Leak-proof seams", "Corrosion resistant", "Fast install", "Under/over ground"],
    specs: [
      { label: "Capacity", value: "3,000 L" },
      { label: "Use", value: "Domestic & commercial" },
      { label: "Install", value: "Below or above ground" },
      { label: "Warranty", value: "10 years" },
    ],
  },
  {
    id: "sprayer",
    name: "Poa Tank — Sprayer Tank",
    category: "Agriculture",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Specialized tank for agricultural sprayers and chemical application in the field.",
    description:
      "Chemical-compatible polyethylene tank sized for agricultural sprayers. Smooth interior for easy rinsing and reliable dosing.",
    price: 12500,
    wasPrice: 13200,
    onSale: true,
    features: ["Chemical compatible", "Smooth interior", "Sprayer-ready fittings", "Impact resistant"],
    specs: [
      { label: "Capacity", value: "200 L" },
      { label: "Use", value: "Field spraying" },
      { label: "Material", value: "HDPE" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    id: "rainwater",
    name: "Poa Tank — Rainwater Harvester",
    category: "Water Storage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Purpose-built for rainwater collection from rooftops with inlet filter and overflow system.",
    description:
      "A complete rainwater kit — filtered inlet, overflow port and tap-ready outlet. Turn every rooftop into a water source.",
    price: 23800,
    wasPrice: 26500,
    onSale: true,
    featured: true,
    features: ["Filtered inlet", "Overflow port", "Tap-ready outlet", "UV-stabilised"],
    specs: [
      { label: "Capacity", value: "2,500 L" },
      { label: "Use", value: "Rainwater harvesting" },
      { label: "Fittings", value: "Inlet filter + overflow" },
      { label: "Warranty", value: "10 years" },
    ],
  },
  {
    id: "standard-home",
    name: "Poa Tank — Standard Series",
    category: "Water Storage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Durable UV-stabilised polyethylene tank for home and office use.",
    description:
      "The everyday Poa Tank. Reliable, UV-stabilised and food-grade — the tank thousands of Kenyan homes trust for daily storage.",
    price: 6500,
    wasPrice: 8500,
    onSale: true,
    features: ["Food-grade interior", "UV-stabilised", "Threaded fittings", "Signature black"],
    specs: [
      { label: "Capacity", value: "1,000 L" },
      { label: "Use", value: "Home & office" },
      { label: "Material", value: "HDPE" },
      { label: "Warranty", value: "10 years" },
    ],
  },
  {
    id: "mobile-toilet",
    name: "Poa Tank — Mobile Toilet",
    category: "Sanitation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Perfect for outdoor events, weddings, and construction sites.",
    description:
      "Portable sanitation done right. Lightweight moulded shell, easy to clean, easy to move — event-ready in minutes.",
    price: 120000,
    wasPrice: 132000,
    onSale: true,
    features: ["Lightweight shell", "Easy-clean interior", "Ventilation", "Event-ready"],
    specs: [
      { label: "Type", value: "Portable" },
      { label: "Use", value: "Events & sites" },
      { label: "Material", value: "HDPE" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    id: "storage-tap",
    name: "Poa Tank — Plastic Storage Tank with Tap",
    category: "Water Storage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "From 20–100 litres. Ideal for handwashing stations at events.",
    description:
      "The go-to handwashing tank — from 20 to 100 litres, tap included, ready to deploy at events, clinics and schools.",
    price: 4000,
    wasPrice: 4200,
    onSale: true,
    features: ["Built-in tap", "20–100 L sizes", "Portable", "Food-grade"],
    specs: [
      { label: "Capacity", value: "20 – 100 L" },
      { label: "Use", value: "Handwashing" },
      { label: "Fittings", value: "Tap included" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    id: "sewer-line",
    name: "Poa Tank — Sewer Line",
    category: "Sanitation",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Sewer line for efficient waste water management.",
    description:
      "High-density polyethylene sewer pipe for reliable waste-water routing. Corrosion-free and easy to join.",
    price: 2500,
    wasPrice: 4200,
    onSale: true,
    features: ["Corrosion-free", "Easy join", "High flow", "Long service life"],
    specs: [
      { label: "Length", value: "Per section" },
      { label: "Use", value: "Waste water" },
      { label: "Material", value: "HDPE" },
      { label: "Warranty", value: "5 years" },
    ],
  },
  {
    id: "poa-bin",
    name: "Poa Tank — Poa Bin",
    category: "Household",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Waste storage bin for household use.",
    description: "A tough household bin built with the same polyethylene toughness as our tanks.",
    price: 630,
    wasPrice: 700,
    onSale: true,
    features: ["Durable HDPE", "Easy-clean", "Lid included", "Stackable"],
    specs: [
      { label: "Type", value: "Household bin" },
      { label: "Material", value: "HDPE" },
      { label: "Lid", value: "Included" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    id: "buckets-pots",
    name: "Poa Tank — Buckets and Pots",
    category: "Household",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Water storage buckets for household use.",
    description: "Everyday buckets and pots — Poa quality at pocket-friendly prices.",
    price: 300,
    wasPrice: 500,
    onSale: true,
    features: ["Multiple sizes", "Sturdy handles", "Food-grade", "Value pricing"],
    specs: [
      { label: "Type", value: "Bucket / pot" },
      { label: "Material", value: "HDPE" },
      { label: "Use", value: "Household" },
      { label: "Warranty", value: "6 months" },
    ],
  },
  {
    id: "double-layer",
    name: "Poa Tank — Double Layer",
    category: "Water Storage",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Premium double-walled household water storage tank.",
    description:
      "Twin-walled construction keeps water cool and inhibits algae. Our premium household solution.",
    price: 4000,
    wasPrice: 5000,
    onSale: true,
    features: ["Twin-walled", "Algae inhibiting", "Insulated", "Premium finish"],
    specs: [
      { label: "Capacity", value: "1,000 L" },
      { label: "Wall", value: "Double layer" },
      { label: "Use", value: "Household" },
      { label: "Warranty", value: "10 years" },
    ],
  },
  {
    id: "compact-bin",
    name: "Poa Tank — Bin",
    category: "Household",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Waste storage bin for household use.",
    description: "Compact, durable and stackable — ideal for kitchens and offices.",
    price: 499,
    wasPrice: 780,
    onSale: true,
    features: ["Compact size", "Stackable", "Easy-clean", "Durable HDPE"],
    specs: [
      { label: "Type", value: "Compact bin" },
      { label: "Material", value: "HDPE" },
      { label: "Use", value: "Kitchen / office" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    id: "outdoor-dustbin",
    name: "Poa Tank — Dustbin",
    category: "Household",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dJzFW3_cVoHxaBYQEmYkCz_RYRT5nTxjLwZ3TEpZgQ&s=10",
    short: "Outdoor waste disposal solution for residential use.",
    description:
      "A heavy-duty outdoor bin engineered to survive sun, rain and rough handling week after week.",
    price: 4500,
    wasPrice: 5000,
    onSale: true,
    features: ["Heavy-duty shell", "Weatherproof", "Lockable lid option", "Large capacity"],
    specs: [
      { label: "Type", value: "Outdoor dustbin" },
      { label: "Material", value: "HDPE" },
      { label: "Use", value: "Residential" },
      { label: "Warranty", value: "2 years" },
    ],
  },
];

export const priceList: { capacity: string; price: string }[] = [
  { capacity: "1,000 L", price: "KSh 6,500" },
  { capacity: "1,500 L", price: "KSh 10,500" },
  { capacity: "2,000 L", price: "KSh 12,300" },
  { capacity: "2,500 L", price: "KSh 15,400" },
  { capacity: "3,000 L", price: "KSh 18,800" },
  { capacity: "4,000 L", price: "KSh 24,000" },
  { capacity: "5,000 L", price: "KSh 29,900" },
  { capacity: "6,000 L", price: "KSh 35,700" },
  { capacity: "7,500 L", price: "KSh 40,100" },
  { capacity: "8,000 L", price: "KSh 42,200" },
  { capacity: "10,000 L", price: "KSh 59,100" },
  { capacity: "12,000 L", price: "KSh 126,600" },
  { capacity: "15,000 L", price: "KSh 148,000" },
  { capacity: "20,000 L", price: "KSh 165,000" },
  { capacity: "24,000 L", price: "KSh 175,300" },
];

export const PHONE = "+254780541184";
export const PHONE_DISPLAY = "+254 780 541 184";
export const WHATSAPP = "254780541184";

export function whatsappLink(product?: Product) {
  const base = `https://wa.me/${WHATSAPP}`;
  if (!product) return `${base}?text=${encodeURIComponent("Hello Poa Tank, I'd like to place an order.")}`;
  const text = `Hello Poa Tank, I'd like to order the ${product.name} at KSh ${product.price.toLocaleString()}. Please share delivery details.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function formatKsh(n: number) {
  return `KSh ${n.toLocaleString()}`;
}
