// Single source of truth for client-specific business data.
// Swap the values here to re-skin this site for a new builder.

export const siteConfig = {
  companyName: "Saanvi Estates",
  shortName: "Saanvi",
  tagline: "Crafting Iconic Homes in Ahmedabad",
  description:
    "Saanvi Estates is a premium real estate builder in Ahmedabad delivering luxury 2 BHK, 3 BHK & 4 BHK apartments, gated communities and commercial spaces with RERA approvals.",
  url: "https://saanviestates.example.com",
  logoText: "Saanvi",
  phone: "+91 98250 12345",
  whatsappNumber: "919825012345", // international format, no +
  email: "sales@saanviestates.in",
  address: "12th Floor, Iconic Tower, SG Highway, Ahmedabad, Gujarat 380054",
  city: "Ahmedabad",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0!2d72.5!3d23.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAhmedabad!5e0!3m2!1sen!2sin!4v1700000000000",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
  hero: {
    eyebrow: "Premium Real Estate · Ahmedabad",
    title: "Iconic Addresses for Modern Living in Ahmedabad",
    subtitle:
      "Discover RERA-approved luxury 2, 3 & 4 BHK apartments, gated villas and commercial spaces built across Ahmedabad's most sought-after neighbourhoods.",
    primaryCta: "Explore Projects",
    secondaryCta: "Talk to a Sales Expert",
  },
  stats: [
    { label: "Years of Trust", value: "25+" },
    { label: "Projects Delivered", value: "40+" },
    { label: "Happy Families", value: "8,500+" },
    { label: "Sq. Ft. Developed", value: "12M+" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
