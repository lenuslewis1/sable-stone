import villaMia1 from "@/assets/residences/villa-mia-1.webp";
import villaMia2 from "@/assets/residences/villa-mia-2.webp";
import villaMia3 from "@/assets/residences/villa-mia-3.webp";
import villaMia4 from "@/assets/residences/villa-mia-4.webp";
import villaMia5 from "@/assets/residences/villa-mia-5.webp";
import villaMia6 from "@/assets/residences/villa-mia-6.webp";
import villaMae1 from "@/assets/residences/villa-mae/villa-mae-01.webp";
import villaMae2 from "@/assets/residences/villa-mae/villa-mae-02.webp";
import villaMae3 from "@/assets/residences/villa-mae/villa-mae-03.webp";
import villaMae4 from "@/assets/residences/villa-mae/villa-mae-04.webp";
import villaMae5 from "@/assets/residences/villa-mae/villa-mae-05.webp";
import villaMae6 from "@/assets/residences/villa-mae/villa-mae-06.webp";
import villaMae7 from "@/assets/residences/villa-mae/villa-mae-07.webp";
import villaMae8 from "@/assets/residences/villa-mae/villa-mae-08.webp";
import villaMae9 from "@/assets/residences/villa-mae/villa-mae-09.webp";
import villaMae10 from "@/assets/residences/villa-mae/villa-mae-10.webp";
import villaMae11 from "@/assets/residences/villa-mae/villa-mae-11.webp";
import villaMae12 from "@/assets/residences/villa-mae/villa-mae-12.webp";
import villaMae13 from "@/assets/residences/villa-mae/villa-mae-13.webp";
import villaMae14 from "@/assets/residences/villa-mae/villa-mae-14.webp";
import villaMae15 from "@/assets/residences/villa-mae/villa-mae-15.webp";
import villaMae16 from "@/assets/residences/villa-mae/villa-mae-16.webp";
import villaMae17 from "@/assets/residences/villa-mae/villa-mae-17.webp";

export type Category = "Villa" | "Penthouse" | "Tower" | "Estate";
export type Status = "Available" | "Reserved" | "Launching" | "Development";
export type CollectionName = "Villa MIA" | "Villa Mae";

export interface ResidenceCard {
  name: CollectionName;
  location: string;
  img: string;
  statusLabel: string;
  statusValue: string;
  phaseLabel: string;
  phaseValue: string;
  slug: string;
}

export interface ResidentialCollection {
  name: CollectionName;
  label: string;
  headingAccent: string;
  eyebrow: string;
  body: string;
  residences: ResidenceCard[];
}

export interface Property {
  slug: string;
  collection: CollectionName;
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

const locations = [
  "Labone",
  "Cantonments",
  "Airport Hills",
  "Dzowulu",
  "East Airport",
  "Tse Addo",
] as const;

const villaMiaImages = [villaMia6, villaMia2, villaMia3, villaMia4, villaMia5, villaMia1];

const villaMaeGalleries = [
  [villaMae1, villaMae2, villaMae4, villaMae7, villaMae10],
  [villaMae3, villaMae5, villaMae6, villaMae11, villaMae17],
  [villaMae2, villaMae1, villaMae3, villaMae4, villaMae5, villaMae6],
  [villaMae7, villaMae8, villaMae9, villaMae10, villaMae11],
  [villaMae12, villaMae13, villaMae14, villaMae15],
  [villaMae16, villaMae17, villaMae10, villaMae11, villaMae12],
];

const locationMeta = {
  Labone: {
    status: "Reserved" as Status,
    statusLabel: "Design phase",
    statusValue: "Pending sale",
    phaseLabel: "Building now",
    phaseValue: "Active work",
    plot: 1400,
  },
  Cantonments: {
    status: "Available" as Status,
    statusLabel: "Inspections",
    statusValue: "Accepted",
    phaseLabel: "Prep work",
    phaseValue: "Opened",
    plot: 1550,
  },
  "Airport Hills": {
    status: "Available" as Status,
    statusLabel: "Early plan",
    statusValue: "Awaiting OK",
    phaseLabel: "Work begun",
    phaseValue: "Ongoing now",
    plot: 1800,
  },
  Dzowulu: {
    status: "Development" as Status,
    statusLabel: "Concept stage",
    statusValue: "In company",
    phaseLabel: "Site works",
    phaseValue: "Mobilising",
    plot: 1320,
  },
  "East Airport": {
    status: "Launching" as Status,
    statusLabel: "Permits",
    statusValue: "Submitted",
    phaseLabel: "Groundworks",
    phaseValue: "Scheduled",
    plot: 1650,
  },
  "Tse Addo": {
    status: "Development" as Status,
    statusLabel: "Reservations",
    statusValue: "By invitation",
    phaseLabel: "Structure",
    phaseValue: "Underway",
    plot: 1500,
  },
};

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const makeVilla = (
  collection: CollectionName,
  location: (typeof locations)[number],
  gallery: string[],
  index: number,
): Property => {
  const meta = locationMeta[location];
  const name = `${collection} ${location}`;
  const isMae = collection === "Villa Mae";
  return {
    slug: `${slugify(collection)}-${slugify(location)}`,
    collection,
    name,
    location: `${location}, Accra`,
    category: "Villa",
    status: meta.status,
    bedrooms: isMae ? 6 : 5,
    bathrooms: isMae ? 7 : 6,
    interior_sqm: isMae ? 780 + index * 18 : 640 + index * 16,
    plot_sqm: meta.plot,
    year: isMae ? 2026 : 2025,
    architect: "Sable & Stone Design Company",
    price: "On enquiry",
    tagline: isMae
      ? `A courtyard-led Villa Mae residence shaped for privacy, shade and outdoor living in ${location}.`
      : `A refined Villa MIA residence planned for private family living in ${location}.`,
    description: [
      isMae
        ? `Villa Mae ${location} extends the collection with a low, resort-like plan, layered gardens, shaded terraces and a pool court at the centre of daily life.`
        : `Villa MIA ${location} is part of a six-residence collection across Accra, developed around privacy, permanence and disciplined material choices.`,
      "Each residence is handled as a complete Sable & Stone development: site planning, architecture, interior direction, construction delivery and long-term owner support move as one process.",
    ],
    features: [
      "Private villa compound",
      "Pool court and landscaped outdoor rooms",
      "Open-plan living and dining pavilion",
      "Principal suite with private terrace",
      "Secure parking and service access",
      "Backup power, water storage and smart-home readiness",
    ],
    gallery,
  };
};

const villaMiaProperties = locations.map((location, index) =>
  makeVilla("Villa MIA", location, [
    villaMiaImages[index],
    villaMiaImages[(index + 1) % villaMiaImages.length],
    villaMiaImages[(index + 2) % villaMiaImages.length],
    villaMiaImages[(index + 3) % villaMiaImages.length],
  ], index),
);

const villaMaeProperties = locations.map((location, index) =>
  makeVilla("Villa Mae", location, villaMaeGalleries[index], index),
);

export const properties: Property[] = [...villaMiaProperties, ...villaMaeProperties];

export const residentialCollections: ResidentialCollection[] = [
  {
    name: "Villa MIA",
    label: "01 — Current residences",
    headingAccent: "MIA",
    eyebrow: "Villa MIA - private residences",
    body: "Six flagship residences in development across Accra. Scroll to move through the portfolio.",
    residences: villaMiaProperties.map((property, index) => ({
      name: "Villa MIA",
      location: locations[index],
      img: property.gallery[0],
      statusLabel: locationMeta[locations[index]].statusLabel,
      statusValue: locationMeta[locations[index]].statusValue,
      phaseLabel: locationMeta[locations[index]].phaseLabel,
      phaseValue: locationMeta[locations[index]].phaseValue,
      slug: `/properties/${property.slug}`,
    })),
  },
  {
    name: "Villa Mae",
    label: "02 — New residential collection",
    headingAccent: "Mae",
    eyebrow: "Villa Mae - courtyard residences",
    body: "A second six-residence collection for the same Accra locations, anchored by garden courts, water and deep shaded outdoor rooms.",
    residences: villaMaeProperties.map((property, index) => ({
      name: "Villa Mae",
      location: locations[index],
      img: property.gallery[0],
      statusLabel: locationMeta[locations[index]].statusLabel,
      statusValue: locationMeta[locations[index]].statusValue,
      phaseLabel: locationMeta[locations[index]].phaseLabel,
      phaseValue: locationMeta[locations[index]].phaseValue,
      slug: `/properties/${property.slug}`,
    })),
  },
];

export const getPropertyBySlug = (slug?: string) =>
  properties.find((p) => p.slug === slug);
