export type Property = {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  priceLabel: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // sq ft
  type: "Estate" | "Penthouse" | "Villa" | "Residence";
  status: "For Sale" | "For Lease";
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  highlights: { label: string; value: string }[];
};

export const properties: Property[] = [
  {
    id: "the-ridgemont-estate",
    title: "The Ridgemont Estate",
    location: "Bel Air, Los Angeles",
    city: "Los Angeles",
    price: 18500000,
    priceLabel: "$18,500,000",
    bedrooms: 7,
    bathrooms: 9,
    area: 12400,
    type: "Estate",
    status: "For Sale",
    image:
      "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    gallery: [
      "https://images.pexels.com/photos/7031407/pexels-photo-7031407.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/7166637/pexels-photo-7166637.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/7722164/pexels-photo-7722164.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/8143671/pexels-photo-8143671.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    ],
    description:
      "Set behind private gates on more than two acres, The Ridgemont Estate is an architectural statement of restraint and grandeur. Designed in collaboration with a Pritzker-nominated studio, every line of the residence frames the canyon views beyond. Limestone, oak, and bronze form the material palette throughout.",
    features: [
      "Private gated motor court",
      "Cantilevered infinity pool",
      "Subterranean wellness wing",
      "Wine cellar for 2,400 bottles",
      "Home theater & screening lounge",
      "Smart-home automation (Crestron)",
      "Detached two-bedroom guest house",
      "Olive grove and reflecting garden",
    ],
    highlights: [
      { label: "Lot Size", value: "2.1 Acres" },
      { label: "Year Built", value: "2022" },
      { label: "Garage", value: "5 Vehicles" },
      { label: "Architect", value: "Studio M+K" },
    ],
  },
  {
    id: "the-meridian-penthouse",
    title: "The Meridian Penthouse",
    location: "Tribeca, New York",
    city: "New York",
    price: 12750000,
    priceLabel: "$12,750,000",
    bedrooms: 4,
    bathrooms: 5,
    area: 5800,
    type: "Penthouse",
    status: "For Sale",
    image:
      "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    gallery: [
      "https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/8146150/pexels-photo-8146150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/6436748/pexels-photo-6436748.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    ],
    description:
      "Crowning a landmark prewar conversion, the Meridian Penthouse offers a full-floor residence wrapped by a 1,600 sq ft terrace. Eleven-foot ceilings, original cast-iron columns, and bespoke millwork meet a chef's kitchen by Boffi. A private elevator opens directly into the gallery foyer.",
    features: [
      "Private keyed elevator entry",
      "1,600 sq ft wraparound terrace",
      "Boffi chef's kitchen, Gaggenau appliances",
      "Primary suite with dual dressing rooms",
      "Radiant-heated white oak floors",
      "Filtered air & water throughout",
      "24-hour doorman & concierge",
      "Building fitness center & spa",
    ],
    highlights: [
      { label: "Floor", value: "PH-32" },
      { label: "Exposure", value: "N / S / W" },
      { label: "Storage", value: "Included" },
      { label: "Built", value: "1908 / 2021" },
    ],
  },
  {
    id: "villa-soliera",
    title: "Villa Soliera",
    location: "Pacific Coast, Malibu",
    city: "Malibu",
    price: 24900000,
    priceLabel: "$24,900,000",
    bedrooms: 6,
    bathrooms: 7,
    area: 9200,
    type: "Villa",
    status: "For Sale",
    image:
      "https://images.pexels.com/photos/12715491/pexels-photo-12715491.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    gallery: [
      "https://images.pexels.com/photos/12715491/pexels-photo-12715491.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/31817160/pexels-photo-31817160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/8089172/pexels-photo-8089172.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/8134808/pexels-photo-8134808.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    ],
    description:
      "A rare oceanfront commission perched above 110 feet of private beach. Villa Soliera unfolds across a single horizontal plane, dissolving the threshold between interior and Pacific. Floor-to-ceiling glass retracts entirely along the western elevation.",
    features: [
      "110 ft of private beach frontage",
      "65 ft glass-tile infinity pool",
      "Outdoor kitchen and dining pavilion",
      "Primary suite with ocean-facing soaking tub",
      "Beach-level cabana with full bath",
      "Solar array with whole-home battery",
      "Tesla-equipped four-car garage",
      "Direct beach access via private stair",
    ],
    highlights: [
      { label: "Frontage", value: "110 ft" },
      { label: "Year Built", value: "2020" },
      { label: "Lot", value: "0.9 Acres" },
      { label: "Architect", value: "Halcyon Studio" },
    ],
  },
  {
    id: "the-aspen-haus",
    title: "The Aspen Haus",
    location: "Red Mountain, Aspen",
    city: "Aspen",
    price: 9450000,
    priceLabel: "$9,450,000",
    bedrooms: 5,
    bathrooms: 6,
    area: 7100,
    type: "Residence",
    status: "For Sale",
    image:
      "https://images.pexels.com/photos/7174115/pexels-photo-7174115.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    gallery: [
      "https://images.pexels.com/photos/7174115/pexels-photo-7174115.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/7746937/pexels-photo-7746937.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/7166641/pexels-photo-7166641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    ],
    description:
      "A modern alpine retreat set among aspens with uninterrupted views of the Maroon Bells. Reclaimed barnwood, blackened steel, and a four-sided central hearth anchor the great room. Ski-in access from a private trail easement.",
    features: [
      "Ski-in access via private easement",
      "Four-sided indoor/outdoor fireplace",
      "Steam shower & cedar sauna",
      "Heated driveway and walkways",
      "Mudroom with ski tuning bench",
      "Bunk room sleeping eight",
      "Snowmelt roof system",
      "Two-car heated garage",
    ],
    highlights: [
      { label: "Elevation", value: "8,100 ft" },
      { label: "Year Built", value: "2019" },
      { label: "Lot", value: "1.4 Acres" },
      { label: "Heating", value: "Geothermal" },
    ],
  },
  {
    id: "the-monarch-residence",
    title: "The Monarch Residence",
    location: "Coral Gables, Miami",
    city: "Miami",
    price: 7980000,
    priceLabel: "$7,980,000",
    bedrooms: 5,
    bathrooms: 6,
    area: 6400,
    type: "Residence",
    status: "For Sale",
    image:
      "https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    gallery: [
      "https://images.pexels.com/photos/8082322/pexels-photo-8082322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/8135503/pexels-photo-8135503.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/8146211/pexels-photo-8146211.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    ],
    description:
      "A reimagined Mediterranean estate on one of Coral Gables' most coveted streets. Original 1928 details have been preserved alongside a fully modernized program that includes a guest casita, salt-water pool, and tropical garden by landscape architect Raymond Jungles.",
    features: [
      "Salt-water pool & sun terrace",
      "Guest casita with full kitchen",
      "Wine room with tasting alcove",
      "Hurricane-rated impact glazing",
      "Outdoor summer kitchen",
      "Whole-home generator",
      "Two-car garage + circular drive",
      "Mature tropical landscaping",
    ],
    highlights: [
      { label: "Lot", value: "0.6 Acres" },
      { label: "Year Built", value: "1928 / 2023" },
      { label: "Pool", value: "Salt-water" },
      { label: "Style", value: "Mediterranean" },
    ],
  },
  {
    id: "the-pacific-loft",
    title: "The Pacific Loft",
    location: "South of Market, San Francisco",
    city: "San Francisco",
    price: 4250000,
    priceLabel: "$4,250,000",
    bedrooms: 3,
    bathrooms: 3,
    area: 3200,
    type: "Penthouse",
    status: "For Sale",
    image:
      "https://images.pexels.com/photos/6970061/pexels-photo-6970061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400",
    gallery: [
      "https://images.pexels.com/photos/6970061/pexels-photo-6970061.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/8082242/pexels-photo-8082242.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/7722153/pexels-photo-7722153.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
      "https://images.pexels.com/photos/6492399/pexels-photo-6492399.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    ],
    description:
      "A full-floor loft conversion within a 1920s industrial landmark. Soaring 14-foot ceilings, exposed brick, and steel-sash windows are paired with a serene, gallery-white program. Two private terraces frame views of the Bay Bridge.",
    features: [
      "14 ft ceilings & exposed brick",
      "Two private terraces",
      "Restored steel-sash windows",
      "Open chef's kitchen with island",
      "Primary suite with dual bath",
      "Deeded parking for two",
      "Building roof deck",
      "Bicycle storage",
    ],
    highlights: [
      { label: "Floor", value: "Penthouse" },
      { label: "Built", value: "1924 / 2020" },
      { label: "Ceilings", value: "14 ft" },
      { label: "View", value: "Bay Bridge" },
    ],
  },
];

export const cities = ["All Cities", "Los Angeles", "New York", "Malibu", "Aspen", "Miami", "San Francisco"];
export const propertyTypes = ["All Types", "Estate", "Penthouse", "Villa", "Residence"];
export const priceRanges = [
  { label: "Any Price", min: 0, max: Infinity },
  { label: "Under $5M", min: 0, max: 5_000_000 },
  { label: "$5M – $10M", min: 5_000_000, max: 10_000_000 },
  { label: "$10M – $20M", min: 10_000_000, max: 20_000_000 },
  { label: "$20M+", min: 20_000_000, max: Infinity },
];
