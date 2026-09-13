export type PortfolioProject = {
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  tone: string;
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    name: "JetCarsBelize",
    category: "Tourism · Booking · 3D",
    description:
      "A photography-led rental experience with live availability, guided booking, and an interactive jet car.",
    url: "https://www.jetcarsbelize.com/",
    image: "/projects/reels/jetcars.png",
    imageAlt: "JetCarsBelize homepage showing a green jet car on turquoise water",
    tone: "lagoon",
  },
  {
    name: "esigna",
    category: "AI product · SaaS",
    description:
      "An AI email-signature product that turns a portrait into a characterful bobblehead and ready-to-use signature.",
    url: "https://esigna.app/",
    image: "/projects/reels/esigna.png",
    imageAlt: "esigna product homepage showing an AI-generated email signature",
    tone: "ember",
  },
  {
    name: "JD Architecture",
    category: "Architecture · Lead generation",
    description:
      "A composed architecture portfolio with service discovery, project galleries, and consultation booking.",
    url: "https://www.jdarchitectdesign.com/",
    image: "/projects/reels/jd-architecture.png",
    imageAlt: "JD Architecture homepage showing a modern residential design",
    tone: "stone",
  },
  {
    name: "Cool & Sweet Ideals",
    category: "Local commerce · Ordering",
    description:
      "A warm Caribbean storefront that moves customers from flavor discovery to ordering without friction.",
    url: "https://www.coolnsweetideals.com/",
    image: "/projects/reels/cool-sweet.png",
    imageAlt: "Cool and Sweet Ideals homepage featuring homemade Belizean frozen treats",
    tone: "gold",
  },
  {
    name: "Florida Jet Cars",
    category: "Marine sales · Showroom",
    description:
      "A bold international showroom built around full-bleed product photography and direct quote requests.",
    url: "https://floridajetcarsinternational.com/",
    image: "/projects/reels/florida-jet-cars.png",
    imageAlt: "Florida Jet Cars homepage showing a sports-car-styled watercraft",
    tone: "ocean",
  },
  {
    name: "Midtown Belize",
    category: "Hospitality · Restaurant",
    description:
      "A visual restaurant site that puts the menu, reservations, and the food itself at the center.",
    url: "https://midtownbelize.com/",
    image: "/projects/reels/midtown.png",
    imageAlt: "Midtown Restaurant and Bar homepage featuring a lobster dish",
    tone: "ruby",
  },
];

export const SERVICES = [
  { name: "Focused launch", price: "from $500", description: "A sharp landing page for one clear offer." },
  { name: "Business website", price: "$1,200–$2,000", description: "A complete site built to turn visits into inquiries." },
  { name: "Web app or MVP", price: "$2,000–$3,000", description: "A working product with the core flow ready to use." },
] as const;
