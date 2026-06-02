/* Central content store — copy drawn from energy.connexxiongroup.com,
   lightly refined for a premium tone. Single source of truth. */

export const company = {
  name: "Connexxion Energy",
  legal: "Connexxion Energy Ltd",
  tagline: "Africa's Leading Energy Service Corporation",
  established: 2012,
  phone: "01-252-5141",
  email: "info@connexxiongroup.com.ng",
  address: "2A Iller Crescent, Maitama, Abuja, Nigeria",
  parent: "Connexxion Group",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const heroSlides = [
  {
    src: "/images/hero-oilpump.jpg",
    alt: "Oil pump at sunset against an industrial sky",
    kicker: "Upstream",
  },
  {
    src: "/images/downstream-refinery.jpg",
    alt: "Petrochemical refinery with storage spheres at dusk",
    kicker: "Downstream",
  },
  {
    src: "/images/midstream-pipeline.jpg",
    alt: "Pipeline network transporting oil and gas",
    kicker: "Midstream",
  },
  {
    src: "/images/marine-tanker.jpg",
    alt: "Aerial view of an oil tanker at sea",
    kicker: "Marine & FPSO",
  },
];

export const intro =
  "Connexxion Energy is a key and growing player in the Upstream, Midstream and Downstream sectors of the Oil & Gas industry — and the broader Energy sector across Nigeria and Africa.";

export const aboutParagraphs = [
  "Registered in Nigeria in 2012, Connexxion Energy is a wholly-owned indigenous company with a single aim: to be the preferred player in the energy sector, with an absolute commitment to stakeholder value through integrated business solutions.",
  "Our activities are focused on Africa, concentrating on oil and gas resources where we can raise production by deploying appropriate technology and sophisticated reservoir-management practices. Across every operation, we adhere to international health and safety standards — without compromise.",
  "From exploration and pipeline construction to trading, marine logistics, power transmission and renewable energy, Connexxion Energy is a bridge and a link to West Africa: handling the challenges posed by modern oil and gas technology with discipline and precision.",
];

export type Stream = "Upstream" | "Midstream" | "Downstream";

export const segments: {
  id: string;
  stream: Stream;
  index: string;
  title: string;
  blurb: string;
  image: string;
  alt: string;
  points: string[];
}[] = [
  {
    id: "upstream",
    stream: "Upstream",
    index: "01",
    title: "Exploration & Production",
    blurb:
      "Our drilling services cut across West Africa. We use sophisticated technology for petroleum exploration and drilling, raising production through advanced reservoir administration.",
    image: "/images/hero-oilpump.jpg",
    alt: "Oil pump jack operating at sunset",
    points: [
      "Exploration & Production",
      "Offshore / Onshore Pipeline Laying & Coating",
      "Marine / FPSO Vessels",
    ],
  },
  {
    id: "midstream",
    stream: "Midstream",
    index: "02",
    title: "Transport, Storage & Power",
    blurb:
      "We construct and maintain the facilities that move energy — pipelines, marine logistics and transmission infrastructure that connect production to market with reliability.",
    image: "/images/midstream-pipeline.jpg",
    alt: "Industrial pipeline transporting oil and gas",
    points: [
      "Pipeline Facility Construction & Maintenance",
      "Electricity Transmission",
      "Delivery of Petroleum Products",
    ],
  },
  {
    id: "downstream",
    stream: "Downstream",
    index: "03",
    title: "Refining, Trading & Renewables",
    blurb:
      "We handle the conversion of oil and gas into finished products — gasoline, natural gas liquids, diesel and more — and trade petroleum products while building a renewable future.",
    image: "/images/downstream-refinery.jpg",
    alt: "Refinery storage spheres at sunset",
    points: [
      "Trading of Petroleum Products",
      "Renewable Energy Generation & Trading",
      "Consultancy Services",
    ],
  },
];

export type Service = {
  title: string;
  stream: Stream;
  description: string;
  detail: string;
  image: string;
  alt: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Exploration & Production",
    stream: "Upstream",
    description:
      "Petroleum exploration and drilling across West Africa, powered by sophisticated technology and advanced reservoir management.",
    detail:
      "From seismic study to first oil, we explore and develop hydrocarbon resources across West Africa. Sophisticated drilling technology and disciplined reservoir-management practices let us raise recovery responsibly — always within international health and safety standards.",
    image: "/images/hero-oilpump.jpg",
    alt: "Oil pump jack at sunset",
    icon: "drill",
  },
  {
    title: "Pipeline Laying & Coating",
    stream: "Upstream",
    description:
      "Offshore and onshore pipeline laying and coating, engineered to international integrity and safety standards.",
    detail:
      "We lay and coat offshore and onshore pipelines to exacting integrity standards, protecting flowlines against corrosion and the elements. The result is infrastructure built to move product safely and reliably for decades.",
    image: "/images/pipe-welding.jpg",
    alt: "Welder constructing a pipeline",
    icon: "pipeline",
  },
  {
    title: "Marine / FPSO Vessels",
    stream: "Upstream",
    description:
      "Marine logistics and FPSO vessel operations supporting offshore production and the movement of crude at sea.",
    detail:
      "Our marine and FPSO operations keep offshore production moving — vessels, logistics and floating storage working in concert around the clock to handle crude safely from the field to the market.",
    image: "/images/marine-tanker.jpg",
    alt: "Oil tanker viewed from above",
    icon: "ship",
  },
  {
    title: "Facility Construction & Maintenance",
    stream: "Midstream",
    description:
      "Construction and maintenance of pipeline facilities and energy infrastructure built to last in demanding conditions.",
    detail:
      "We build and maintain the facilities that keep energy flowing — pump stations, terminals and pipeline infrastructure engineered to endure the most demanding environments, then kept at peak performance through proactive maintenance.",
    image: "/images/construction.jpg",
    alt: "Engineers installing reinforced steel on site",
    icon: "wrench",
  },
  {
    title: "Electricity Transmission",
    stream: "Midstream",
    description:
      "Power transmission infrastructure that carries reliable electricity across the grid and into communities.",
    detail:
      "We develop and maintain transmission infrastructure that carries reliable power across the grid — connecting generation to the homes, businesses and communities that depend on it every day.",
    image: "/images/power-lineman.jpg",
    alt: "Lineman working on power transmission lines",
    icon: "bolt",
  },
  {
    title: "Delivery of Petroleum Products",
    stream: "Midstream",
    description:
      "Dependable distribution and delivery of petroleum products, connecting supply to demand with precision.",
    detail:
      "A dependable distribution network moves refined products from depot to destination. Coordinated logistics connect supply to demand with the precision and accountability our clients rely on.",
    image: "/images/gas-bottles.jpg",
    alt: "Stacked gas bottles ready for distribution",
    icon: "truck",
  },
  {
    title: "Trading of Petroleum Products",
    stream: "Downstream",
    description:
      "Trading gasoline, natural gas liquids, diesel and a variety of refined energy products across the region.",
    detail:
      "We trade gasoline, natural gas liquids, diesel and a range of refined products, drawing on regional reach and market insight to deliver value reliably across the supply chain.",
    image: "/images/downstream-refinery.jpg",
    alt: "Refinery at dusk",
    icon: "exchange",
  },
  {
    title: "Renewable Energy",
    stream: "Downstream",
    description:
      "Renewable energy generation and products trading — investing today in the clean, sustainable energy of tomorrow.",
    detail:
      "We generate and trade renewable energy, investing in solar, wind and clean technologies that position our clients — and the continent — for a sustainable, lower-carbon energy future.",
    image: "/images/renewable.jpg",
    alt: "Wind turbines and solar panels at sunrise",
    icon: "leaf",
  },
  {
    title: "Consultancy Services",
    stream: "Downstream",
    description:
      "Advisory and training across the energy value chain, promoting small- and large-scale industry growth.",
    detail:
      "Our advisory and training practice shares decades of technical expertise across the value chain, building capability and promoting growth for small- and large-scale industry alike.",
    image: "/images/team-exec.jpg",
    alt: "Business executive in a meeting",
    icon: "compass",
  },
];

export const stats = [
  { value: 2012, label: "Established in Nigeria", prefix: "", suffix: "" },
  { value: 3, label: "Integrated value streams", prefix: "", suffix: "" },
  { value: 9, label: "Service capabilities", prefix: "", suffix: "" },
  { value: 100, label: "Indigenous ownership", prefix: "", suffix: "%" },
];

export const mission =
  "To provide an unparalleled experience as the most trusted leaders in Technology, Engineering, Oil & Gas and Energy-related services.";

export const vision: { title: string; body: string; icon: string }[] = [
  {
    title: "Maximizing Resources",
    body: "Helping our clients maximize resources whilst reducing operational cost — while maintaining the highest quality.",
    icon: "layers",
  },
  {
    title: "Increase Revenue",
    body: "Helping our clients increase revenue and retained earnings.",
    icon: "exchange",
  },
  {
    title: "Increase Productivity",
    body: "Helping our clients increase their productivity across every operation.",
    icon: "bolt",
  },
];

export const values = [
  {
    title: "Integrated solutions",
    body: "One partner across Upstream, Midstream and Downstream — removing seams between exploration, transport and market.",
    icon: "layers",
  },
  {
    title: "Health & safety first",
    body: "International HSE standards applied to every operation, every site, every day — without compromise.",
    icon: "shield",
  },
  {
    title: "Appropriate technology",
    body: "Sophisticated reservoir management and modern engineering deployed to raise production responsibly.",
    icon: "cpu",
  },
  {
    title: "Stakeholder value",
    body: "An absolute commitment to stakeholder value as a wholly-owned, indigenous African enterprise.",
    icon: "handshake",
  },
];

export const team = [
  { name: "Group Managing Director", role: "Executive Leadership", initials: "GMD" },
  { name: "Executive Director, Operations", role: "Upstream & Midstream", initials: "ED" },
  { name: "Chief Financial Officer", role: "Finance & Strategy", initials: "CFO" },
  { name: "Head, Downstream & Trading", role: "Trading & Renewables", initials: "HD" },
  { name: "Head, HSE & Quality", role: "Health, Safety & Environment", initials: "HSE" },
  { name: "Head, Business Development", role: "Partnerships & Growth", initials: "BD" },
];
