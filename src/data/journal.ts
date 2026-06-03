import aboutDetail from "@/assets/about-detail.jpg";
import philosophyVilla from "@/assets/philosophy-villa.webp";
import propertyVilla from "@/assets/property-villa.jpg";

export interface JournalEntry {
  slug: string;
  cat: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  deck: string;
  pdfUrl?: string;
  sections: {
    eyebrow?: string;
    heading: string;
    body: string[];
  }[];
}

export const journalEntries: JournalEntry[] = [
  {
    slug: "sable-and-stone-profile",
    cat: "Profile",
    title: "Sable & Stone Profile",
    excerpt: "The Sable & Stone luxury development house profile.",
    date: "June 2026",
    readTime: "PDF profile",
    heroImage: aboutDetail,
    heroAlt: "Travertine and bronze architectural material detail",
    pdfUrl: "/documents/sable-and-stone-profile.pdf",
    deck:
      "A boutique luxury developer delivering architecturally significant residences for a globally discerning clientele.",
    sections: [
      {
        eyebrow: "Profile",
        heading: "Luxury Development House",
        body: [
          "Sable & Stone is a real estate development firm creating distinctive residential, hospitality, and lifestyle destinations.",
          "As a full turnkey developer, Sable & Stone conceives, designs, develops, and delivers its own branded projects, bringing together architecture, design, construction, and operational planning into a single, cohesive development vision.",
          "Sable & Stone specializes in premium villas, private residences, and curated residential communities defined by architectural excellence, meticulous attention to detail, and thoughtful lifestyle design.",
          "Built on integrity, aesthetic innovation, and superior craftsmanship, each Sable & Stone development is carefully crafted to deliver refined living environments with enduring quality andmodernamenities.",
          "Beyond residential development, Sable & Stone is building a portfolio of lifestyle-driven destinations, expanding the brand into hospitality and experiential real estate.",
          "Guided by a commitment to design excellence, innovation, and long-term value creation, Sable & Stone focuses on creating distinctive environments that bring together thoughtful architecture, curated experiences, and enduring quality.",
        ],
      },
      {
        eyebrow: "Direction",
        heading: "Vision and Mission",
        body: [
          "Vision",
          "To craft inspiring experiences through thoughtful development.",
          "Mission",
          "To develop thoughtfully designed residential and lifestyle destinations defined by architectural excellence, exceptional experiences, uncompromising quality, and long-term value.",
        ],
      },
      {
        eyebrow: "Values",
        heading: "Values",
        body: [
          "Design Vision",
          "We believe exceptional destinations begin with thoughtful architecture, design innovation, and a commitment to aesthetic excellence",
          "Quality with Compromise",
          "We are committed to delivering developments defined by superior craftsmanship, enduring materials, and meticulous attention to detail.",
          "Thoughtful Development",
          "We approach every project with careful planning and a long-term perspective, ensuring each development enhances its surroundings and community.",
          "Experience Driven Living",
          "We design environments that enrich how people live, stay, and connect with their surroundings.",
          "Long-Term Value",
          "We focus on creating developments that deliver enduring value for residents, investors, and the communities we serve.",
        ],
      },
      {
        eyebrow: "Commitment",
        heading: "Health, Safety, and Quality Commitment",
        body: [
          "Sable & Stone is committed to maintaining the highest standards of safety and quality throughout the development process:",
          "Safety",
          "Providing a safe workplace for all staff and contractors through stringent QHSE practices.",
          "Sustainability",
          "Reducing the environmental impact of operations and promoting sustainable lifestyle design.",
          "Craftsmanship",
          "Ensuring superior craftsmanship and meticulous attention to detail in every finished space.",
        ],
      },
      {
        eyebrow: "Future",
        heading: "Focus Areas & Future",
        body: [
          "Beyond residential development, Sable & Stone is actively building a portfolio of lifestyle-driven destinations.",
          "Guided by a commitment to design excellence and innovation, the firm focuses on creating distinctive environments that bring together thoughtful architecture, experiences, and enduring quality.",
        ],
      },
      {
        eyebrow: "Contact",
        heading: "Sable & Stone Ltd",
        body: [
          "1HNO. 22, Airport Residential Area, Adomi Street, Accra, Ghana",
          "info@sableandstonegh.com",
          "www.sableandstonegh.com",
        ],
      },
    ],
  },
  {
    slug: "our-philosophy",
    cat: "Philosophy",
    title: "Our Philosophy",
    excerpt: "The discipline behind residences built for permanence, value and consequence.",
    date: "May 2026",
    readTime: "4 min read",
    heroImage: philosophyVilla,
    heroAlt: "Modern illuminated Sable and Stone villa at dusk",
    deck:
      "Sable & Stone does not build volume. We build consequence: homes that hold their architectural intent, their material integrity and their long-term value.",
    sections: [
      {
        eyebrow: "Position",
        heading: "Architecture first, value always",
        body: [
          "Every development begins as an architectural statement before it becomes a financial instrument. At the level we operate, those two responsibilities cannot be separated. A residence must be beautiful enough to carry a name, precise enough to age well and disciplined enough to protect the capital behind it.",
          "Our work is deliberately selective. We would rather decline a site than force a project into a location, rhythm or specification that cannot support permanence.",
        ],
      },
      {
        eyebrow: "Method",
        heading: "A small number of decisions, made with care",
        body: [
          "The Sable & Stone standard is built through repeated decisions: proportion before decoration, material honesty before novelty, privacy before display and execution before announcement.",
          "This is why our process stays close from first study to handover. Design, procurement, construction delivery and buyer personalisation are treated as one continuous act, not a chain of disconnected services.",
        ],
      },
      {
        eyebrow: "Client",
        heading: "Private commissions within a controlled framework",
        body: [
          "Each buyer enters a considered framework rather than an open-ended catalogue. Layouts, finishes and sequencing can be tuned to the household, but the underlying architecture remains protected.",
          "That balance matters. It gives the owner a home that feels personal without weakening the clarity, restraint and long-horizon value of the residence.",
        ],
      },
      {
        eyebrow: "Standard",
        heading: "Built to outlast the market cycle",
        body: [
          "Trends move quickly. Buildings should not. We choose materials for how they weather, details for how they can be maintained and sites for the life they can support beyond a sales season.",
          "A Sable & Stone residence should feel inevitable in its place: quiet, exacting and substantial enough to carry our name without qualification.",
        ],
      },
    ],
  },
  {
    slug: "building-with-travertine-west-africa",
    cat: "Notebook",
    title: "On building with travertine in West Africa",
    excerpt: "Why we returned to a Roman material and what it does in Accra light.",
    date: "May 2026",
    readTime: "3 min read",
    heroImage: aboutDetail,
    heroAlt: "Travertine and bronze architectural material detail",
    deck:
      "A material note on weight, tone and weathering across tropical residential architecture.",
    sections: [
      {
        heading: "Material with memory",
        body: [
          "Travertine gives a residence immediate gravity without making it heavy. In Accra light, its surface catches warmth during the day and settles into shadow by evening.",
          "We use it where touch, threshold and permanence matter most: arrival halls, shaded terraces and rooms that carry the daily rituals of the house.",
        ],
      },
    ],
  },
  {
    slug: "casa-labadi-nine-months-on-the-coast",
    cat: "Project Diary",
    title: "Casa Labadi: nine months on the coast",
    excerpt: "Field notes from a beachfront villa shaped by salt, wind and palm.",
    date: "March 2026",
    readTime: "5 min read",
    heroImage: propertyVilla,
    heroAlt: "Completed Sable and Stone villa at dusk",
    deck:
      "Notes from a coastal residence where structure, landscape and weather had to negotiate daily.",
    sections: [
      {
        heading: "Building with the coast",
        body: [
          "The coast changes the pace of a build. Salt, wind and humidity test every exposed surface, every fixing and every decision that looks simple on paper.",
          "Casa Labadi became a study in controlled openness: shaded rooms, protected thresholds and landscape that filters the house before it reaches the beach.",
        ],
      },
    ],
  },
  {
    slug: "company-visit-principal-architect",
    cat: "Conversation",
    title: "A company visit with our principal architect",
    excerpt: "On restraint, repetition, and houses that age with grace.",
    date: "January 2026",
    readTime: "6 min read",
    heroImage: aboutDetail,
    heroAlt: "Architectural material samples in a design company",
    deck:
      "A conversation on the quiet choices that separate a fashionable house from a lasting one.",
    sections: [
      {
        heading: "Restraint as a working method",
        body: [
          "Restraint is not absence. It is the discipline of knowing which decisions should be visible and which should disappear into the confidence of the plan.",
          "The company returns to proportion, repetition and light because those are the qualities that keep working after novelty has faded.",
        ],
      },
    ],
  },
];

export const getJournalEntryBySlug = (slug?: string) =>
  journalEntries.find((entry) => entry.slug === slug);
