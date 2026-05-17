export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh & Meera Patel",
    role: "Homeowners",
    project: "Saanvi Skyline",
    quote:
      "From the first site visit to handover, the Saanvi team was transparent and professional. The build quality at Skyline genuinely exceeded our expectations.",
  },
  {
    name: "Aakash Mehta",
    role: "Investor",
    project: "Saanvi Business Hub",
    quote:
      "I have invested in three Saanvi projects so far. Timely possession, clean documentation and consistent appreciation, exactly what an investor needs in Ahmedabad.",
  },
  {
    name: "Dr. Priya Shah",
    role: "Resident",
    project: "Saanvi Greens",
    quote:
      "Saanvi Greens has given my family the lifestyle we always dreamed of. The villa, the gardens, the community, every detail feels considered.",
  },
];
