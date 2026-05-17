import skyline from "@/assets/project-skyline.jpg";
import greens from "@/assets/project-greens.jpg";
import business from "@/assets/project-business.jpg";
import living from "@/assets/interior-living.jpg";
import kitchen from "@/assets/interior-kitchen.jpg";
import pool from "@/assets/amenity-pool.jpg";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  locationSlug: string;
  status: "Ready Possession" | "Under Construction" | "New Launch";
  configurations: string[];
  priceFrom: string;
  carpetArea: string;
  builtUpArea: string;
  possession: string;
  rera: string;
  cover: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  floorPlans: { name: string; area: string; image: string }[];
  category: "Residential" | "Commercial" | "Villa";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "saanvi-skyline",
    name: "Saanvi Skyline",
    tagline: "Sky-high luxury 3 & 4 BHK residences on SG Highway",
    location: "SG Highway, Ahmedabad",
    locationSlug: "sg-highway",
    status: "Under Construction",
    configurations: ["3 BHK", "4 BHK", "Penthouse"],
    priceFrom: "₹ 1.85 Cr",
    carpetArea: "1,420 - 2,650 sq.ft.",
    builtUpArea: "1,820 - 3,200 sq.ft.",
    possession: "Dec 2026",
    rera: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA12345/EX1/2024",
    cover: skyline,
    gallery: [skyline, living, kitchen, pool],
    description:
      "An iconic 32-storey landmark on SG Highway offering panoramic city views, double-height lobbies, smart-home enabled apartments and resort-style amenities. Designed for families who appreciate uncompromising quality and a prestigious Ahmedabad address.",
    highlights: [
      "32-storey landmark tower",
      "Double-height grand lobby",
      "Smart home automation",
      "Vastu-compliant layouts",
      "Premium Italian marble flooring",
    ],
    amenities: [
      "Infinity Pool",
      "Sky Lounge",
      "Clubhouse",
      "Gym",
      "Kids' Play Area",
      "Yoga Deck",
      "Concierge",
      "EV Charging",
    ],
    floorPlans: [
      { name: "3 BHK Premium", area: "1,820 sq.ft.", image: kitchen },
      { name: "4 BHK Signature", area: "2,450 sq.ft.", image: living },
      { name: "Penthouse", area: "3,200 sq.ft.", image: skyline },
    ],
    category: "Residential",
    featured: true,
  },
  {
    slug: "saanvi-greens",
    name: "Saanvi Greens",
    tagline: "Gated villa community amidst landscaped gardens",
    location: "Shilaj, Ahmedabad",
    locationSlug: "shilaj",
    status: "New Launch",
    configurations: ["3 BHK Villa", "4 BHK Villa"],
    priceFrom: "₹ 3.20 Cr",
    carpetArea: "2,200 - 3,400 sq.ft.",
    builtUpArea: "2,800 - 4,200 sq.ft.",
    possession: "Mar 2027",
    rera: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA67890/EX1/2024",
    cover: greens,
    gallery: [greens, living, pool, kitchen],
    description:
      "A boutique enclave of 64 designer villas wrapped in 5 acres of landscaped greens, reflexology paths and twin clubhouses. Walk-to-school, walk-to-park lifestyle in the heart of Shilaj.",
    highlights: [
      "Only 64 exclusive villas",
      "5 acres of landscaped greens",
      "Twin clubhouses",
      "Private terrace gardens",
      "Triple-height entrance foyers",
    ],
    amenities: [
      "Clubhouse",
      "Swimming Pool",
      "Tennis Court",
      "Jogging Track",
      "Banquet Hall",
      "Pet Park",
      "24x7 Security",
      "Solar Power",
    ],
    floorPlans: [
      { name: "3 BHK Villa", area: "2,800 sq.ft.", image: greens },
      { name: "4 BHK Villa", area: "4,200 sq.ft.", image: living },
    ],
    category: "Villa",
    featured: true,
  },
  {
    slug: "saanvi-business-hub",
    name: "Saanvi Business Hub",
    tagline: "Grade-A commercial spaces in Prahlad Nagar",
    location: "Prahlad Nagar, Ahmedabad",
    locationSlug: "prahlad-nagar",
    status: "Ready Possession",
    configurations: ["Office Spaces", "Retail Showrooms"],
    priceFrom: "₹ 75 Lakh",
    carpetArea: "550 - 4,500 sq.ft.",
    builtUpArea: "750 - 6,000 sq.ft.",
    possession: "Ready to Move",
    rera: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA22345/EX1/2023",
    cover: business,
    gallery: [business, living, kitchen],
    description:
      "Future-ready commercial address in Prahlad Nagar offering Grade-A office floors, signature retail showrooms and a high-street facade. Designed by international architects for businesses that mean serious growth.",
    highlights: [
      "Grade-A office spaces",
      "High-street retail facade",
      "5-tier security",
      "VRV air conditioning",
      "100% power backup",
    ],
    amenities: [
      "Triple-height Lobby",
      "Cafeteria",
      "Conference Centre",
      "Valet Parking",
      "EV Charging",
      "ATM Lounge",
    ],
    floorPlans: [
      { name: "Boutique Office", area: "750 sq.ft.", image: business },
      { name: "Corporate Floor", area: "6,000 sq.ft.", image: business },
    ],
    category: "Commercial",
    featured: true,
  },
  {
    slug: "saanvi-serene",
    name: "Saanvi Serene",
    tagline: "Affordable luxury 2 & 3 BHK in Bopal",
    location: "Bopal, Ahmedabad",
    locationSlug: "bopal",
    status: "Ready Possession",
    configurations: ["2 BHK", "3 BHK"],
    priceFrom: "₹ 68 Lakh",
    carpetArea: "780 - 1,250 sq.ft.",
    builtUpArea: "1,050 - 1,580 sq.ft.",
    possession: "Ready to Move",
    rera: "PR/GJ/AHMEDABAD/AHMEDABAD CITY/AUDA/RAA98765/EX1/2022",
    cover: living,
    gallery: [living, kitchen, pool],
    description:
      "A thoughtfully designed residential community in Bopal with airy 2 & 3 BHK apartments, a 25,000 sq.ft. clubhouse and seamless connectivity to schools, hospitals and SG Highway.",
    highlights: [
      "Ready to move-in",
      "25,000 sq.ft. clubhouse",
      "Cross-ventilated layouts",
      "Designer modular kitchen",
      "Close to top schools",
    ],
    amenities: [
      "Clubhouse",
      "Pool",
      "Gym",
      "Indoor Games",
      "Senior Citizen Park",
      "Amphitheatre",
    ],
    floorPlans: [
      { name: "2 BHK Comfort", area: "1,050 sq.ft.", image: kitchen },
      { name: "3 BHK Premier", area: "1,580 sq.ft.", image: living },
    ],
    category: "Residential",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const locations = [
  {
    slug: "sg-highway",
    name: "SG Highway",
    description:
      "Ahmedabad's premium business and lifestyle corridor home to top hotels, malls and corporate offices.",
  },
  {
    slug: "prahlad-nagar",
    name: "Prahlad Nagar",
    description:
      "Vibrant commercial hub with seamless connectivity, top schools and a thriving food scene.",
  },
  {
    slug: "shilaj",
    name: "Shilaj",
    description:
      "Tranquil emerging neighbourhood ideal for villa living, surrounded by greens and quick access to SP Ring Road.",
  },
  {
    slug: "bopal",
    name: "Bopal",
    description:
      "Family-friendly suburb with reputed schools, hospitals and a balance of affordability and lifestyle.",
  },
];
