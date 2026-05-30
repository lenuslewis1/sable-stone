import propertyPenthouse from "@/assets/property-penthouse.jpg";
import propertyVilla from "@/assets/property-villa.jpg";
import propertyTower from "@/assets/property-tower.jpg";
import heroVilla from "@/assets/hero-villa.jpg";
import aboutDetail from "@/assets/about-detail.jpg";

export type Category = "Villa" | "Penthouse" | "Tower" | "Estate";
export type Status = "Available" | "Reserved" | "Launching" | "Development";

export interface Property {
  slug: string;
  name: string;
  location: string;
  category: Category;
  status: Status;
  bedrooms: number | string;
  bathrooms: number | string;
  interior_sqm: number;
  plot_sqm: number;
  year: number;
  architect: string;
  price: string;
  tagline: string;
  description: string[];
  features: string[];
  gallery: string[];
}

export const properties: Property[] = [
  {
    slug: "maison-cantonments",
    name: "Maison Cantonments",
    location: "Cantonments, Accra",
    category: "Penthouse",
    status: "Available",
    bedrooms: 5,
    bathrooms: 6,
    interior_sqm: 620,
    plot_sqm: 0,
    year: 2025,
    architect: "Atelier Kobi Nartey",
    price: "On enquiry",
    tagline: "A travertine penthouse set above the diplomatic quarter.",
    description: [
      "Maison Cantonments occupies the top two floors of a quiet six-storey building in Accra's diplomatic enclave. The plan opens around a double-height travertine atrium and a single, uninterrupted sightline from the entry sequence to the city skyline.",
      "Every surface — travertine, smoked oak, hand-finished bronze — was specified in the studio and installed by a single mason team over fourteen months.",
    ],
    features: [
      "Double-height travertine atrium",
      "Private rooftop with plunge pool",
      "Bronze-clad kitchen, Gaggenau appliances",
      "Smart lighting and climate by Lutron",
      "Two dedicated parking bays and storage",
      "24-hour concierge and security",
    ],
    gallery: [propertyPenthouse, aboutDetail, heroVilla, propertyVilla],
  },
  {
    slug: "casa-labadi",
    name: "Casa Labadi",
    location: "Labadi Beach, Accra",
    category: "Villa",
    status: "Reserved",
    bedrooms: 6,
    bathrooms: 7,
    interior_sqm: 840,
    plot_sqm: 2200,
    year: 2024,
    architect: "Studio Adjei",
    price: "On enquiry",
    tagline: "A beachfront residence shaped by salt, wind and palm.",
    description: [
      "Casa Labadi sits behind a planted dune on a 2,200 sqm beachfront plot. The house is organised as three pavilions linked by shaded courtyards, drawing the trade winds through the plan year-round.",
      "Limestone, ironwood and lime plaster are the only materials used externally. The interior is kept deliberately spare.",
    ],
    features: [
      "Direct beach access through private dune garden",
      "60m infinity pool aligned to the horizon",
      "Outdoor kitchen and shaded dining loggia",
      "Staff quarters and separate guest pavilion",
      "Borehole, solar array and full backup power",
    ],
    gallery: [propertyVilla, heroVilla, aboutDetail, propertyPenthouse],
  },
  {
    slug: "the-ridge-tower",
    name: "The Ridge Tower",
    location: "Ridge, Accra",
    category: "Tower",
    status: "Launching",
    bedrooms: "2 – 4",
    bathrooms: "2 – 5",
    interior_sqm: 280,
    plot_sqm: 0,
    year: 2026,
    architect: "Heatherwick-inspired collaboration",
    price: "From US$ 1.2M",
    tagline: "Twenty-six sculptural residences above Ridge.",
    description: [
      "The Ridge Tower is a sculptural residential building of bronze-clad concrete, comprising twenty-six homes across fourteen floors. Every residence is corner-positioned with floor-to-ceiling glazing on two elevations.",
      "Sales open in spring 2026; an early-release allocation of six residences is currently held for private enquiries.",
    ],
    features: [
      "26 residences, 2 – 4 bedrooms",
      "Sky lounge and rooftop pool on level 14",
      "Wellness floor: spa, gym, treatment rooms",
      "Private resident's lobby and concierge",
      "Secure parking with EV charging",
    ],
    gallery: [propertyTower, propertyPenthouse, aboutDetail, heroVilla],
  },
  {
    slug: "villa-aburi",
    name: "Villa Aburi",
    location: "Aburi Hills",
    category: "Estate",
    status: "Development",
    bedrooms: 7,
    bathrooms: 8,
    interior_sqm: 1100,
    plot_sqm: 11000,
    year: 2027,
    architect: "Atelier Kobi Nartey",
    price: "On enquiry",
    tagline: "An eleven-hectare hillside estate above Accra.",
    description: [
      "Villa Aburi is a 1,100 sqm primary residence on an eleven-hectare hillside plot, oriented to the southern view over Accra. The estate includes a separate guest house, agricultural terraces and a working vineyard.",
      "Currently in early site works; completion is anticipated late 2027.",
    ],
    features: [
      "1,100 sqm primary residence plus guest pavilion",
      "Working vineyard and orchard terraces",
      "Private cinema, library and cellar",
      "Helipad and three-bay garage",
      "Off-grid solar with battery backup",
    ],
    gallery: [heroVilla, propertyVilla, aboutDetail, propertyTower],
  },
  {
    slug: "osu-sky-residences",
    name: "Osu Sky Residences",
    location: "Osu, Accra",
    category: "Tower",
    status: "Available",
    bedrooms: 3,
    bathrooms: 3,
    interior_sqm: 220,
    plot_sqm: 0,
    year: 2025,
    architect: "Studio Adjei",
    price: "From US$ 780K",
    tagline: "Compact three-bedroom residences in the heart of Osu.",
    description: [
      "A small building of eighteen residences, three per floor, designed for urban primary living. Each residence opens onto a private loggia with views over Osu's low rooftops to the coast.",
    ],
    features: [
      "Three-bedroom layouts, 220 sqm interior",
      "Private loggia with planted screen",
      "Shared rooftop garden and lap pool",
      "Walkable to Oxford Street and the coast",
    ],
    gallery: [propertyTower, propertyPenthouse, heroVilla, aboutDetail],
  },
  {
    slug: "maison-airport",
    name: "Maison Airport",
    location: "Airport Residential",
    category: "Villa",
    status: "Available",
    bedrooms: 5,
    bathrooms: 6,
    interior_sqm: 720,
    plot_sqm: 1400,
    year: 2024,
    architect: "Atelier Kobi Nartey",
    price: "On enquiry",
    tagline: "A walled courtyard villa in Airport Residential.",
    description: [
      "A five-bedroom courtyard residence laid out around a central reflecting pool, walled on all four sides for absolute privacy in one of Accra's most established neighbourhoods.",
    ],
    features: [
      "Central reflecting pool and shaded courtyard",
      "Five en-suite bedrooms across two wings",
      "Detached staff quarters and double garage",
      "Backup power, borehole and water treatment",
    ],
    gallery: [propertyVilla, aboutDetail, heroVilla, propertyPenthouse],
  },
  {
    slug: "penthouse-cantonments-no-7",
    name: "Penthouse Cantonments No. 7",
    location: "Cantonments, Accra",
    category: "Penthouse",
    status: "Reserved",
    bedrooms: 4,
    bathrooms: 5,
    interior_sqm: 480,
    plot_sqm: 0,
    year: 2025,
    architect: "Studio Adjei",
    price: "On enquiry",
    tagline: "A four-bedroom penthouse with a private rooftop garden.",
    description: [
      "Penthouse No. 7 occupies the full upper floor of a boutique building of seven residences. A private elevator opens directly into a gallery hall lined in smoked oak.",
    ],
    features: [
      "Private elevator, gallery entry",
      "260 sqm rooftop garden with plunge pool",
      "Four en-suite bedrooms",
      "Two dedicated parking bays",
    ],
    gallery: [propertyPenthouse, aboutDetail, propertyTower, heroVilla],
  },
  {
    slug: "coastal-estate-prampram",
    name: "Coastal Estate Prampram",
    location: "Prampram Coast",
    category: "Estate",
    status: "Development",
    bedrooms: 8,
    bathrooms: 9,
    interior_sqm: 1400,
    plot_sqm: 18000,
    year: 2027,
    architect: "Atelier Kobi Nartey",
    price: "On enquiry",
    tagline: "A coastal compound east of Accra.",
    description: [
      "A 1.8-hectare coastal compound with 200m of direct beach frontage. The brief calls for a main residence, two guest pavilions and a beach club, all set within a planted dune ecosystem.",
    ],
    features: [
      "200m of private beach frontage",
      "Main residence plus two guest pavilions",
      "Beach club with bar and treatment rooms",
      "Helipad and arrival court",
    ],
    gallery: [heroVilla, propertyVilla, propertyPenthouse, aboutDetail],
  },
];

export const getPropertyBySlug = (slug?: string) =>
  properties.find((p) => p.slug === slug);
