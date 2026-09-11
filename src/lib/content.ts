/* Central content store — copy drawn from energy.connexxiongroup.com,
   lightly refined for a premium tone. Single source of truth. */

export const company = {
  name: "Connexxion Energy",
  legal: "Connexxion Energy Ltd",
  tagline: "Africa's Leading Energy Service Corporation",
  established: 2012,
  phone: "09161240000",
  email: "info@connexxionenergy.com",
  address: "2A Iller Crescent, Maitama, Abuja, Nigeria",
  parent: "Connexxion Group",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const intro =
  "Connexxion Energy is a key and growing player in the Upstream, Midstream and Downstream sectors of the Oil & Gas industry — and the broader Energy sector across Nigeria and Africa.";

/* Each token with `gold: true` renders as the italic gold accent in the headline.
   A line is an array of tokens; a headline is an array of lines. */
export type HeadlineToken = { t: string; gold?: boolean };

export type HeroSlide = {
  src: string;
  alt: string;
  kicker: string;
  eyebrow: string;
  headline: HeadlineToken[][];
  paragraph: string;
  blurDataURL: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/images/hero-oilpump.jpg",
    alt: "Oil pump at sunset against an industrial sky",
    kicker: "Upstream",
    eyebrow: "Upstream · Midstream · Downstream",
    headline: [
      [{ t: "Africa’s Leading" }],
      [{ t: "Energy", gold: true }, { t: " Service" }],
      [{ t: "Corporation" }],
    ],
    paragraph: intro,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGBP/EACMQAAIBAwQBBQAAAAAAAAAAAAECAwAEEQUSIUGxEyIxYaH/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/EABsRAAMAAgMAAAAAAAAAAAAAAAABAgMUERJB/9oADAMBAAIRAxEAPwBfp9vLDGS8cTQn3M0hwMfRrRMqXVxvkRoowoXe2WC9AE9VP2t2ZGRZl9VVyAGY4GR1VrpuJLS2R1BDuv5yPFDdvG+wqmbXHgrGhlgGR0ZT8Ec+KKZ3+sSWN7NBDDHsDEjjFFVuUHpyf//Z",
  },
  {
    src: "/images/downstream-refinery.jpg",
    alt: "Petrochemical refinery with storage spheres at dusk",
    kicker: "Downstream",
    eyebrow: "Downstream · Refining & Trading",
    headline: [
      [{ t: "Refining, Trading" }],
      [{ t: "& " }, { t: "Renewables", gold: true }],
    ],
    paragraph:
      "We convert oil and gas into the finished products that power industry — and trade them across the region — while investing in the clean, lower-carbon energy of tomorrow.",
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAYDBAX/xAAiEAACAQQCAQUAAAAAAAAAAAABAgMABBEhBRMGEiIxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/EABwRAAICAgMAAAAAAAAAAAAAAAABAxECEhMhMf/aAAwDAQACEQMRAD8A0LHlLZreIO+G9IGd7OKkn5yzjDRrMQ2wMjIJxSHazuvtByFBIBqweXfq6mhiZQfsUDh7ux1Iq8GhvIYlwBEW18jVFKknKOxGIYxr8opOPEjdn//Z",
  },
  {
    src: "/images/midstream-pipeline.jpg",
    alt: "Pipeline network transporting oil and gas",
    kicker: "Midstream",
    eyebrow: "Midstream · Transport & Power",
    headline: [
      [{ t: "Infrastructure" }],
      [{ t: "that " }, { t: "Moves", gold: true }, { t: " Energy" }],
    ],
    paragraph:
      "Pipelines, marine logistics and transmission networks engineered to connect production to market — moving energy across West Africa with reliability and precision.",
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAANABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYBAgQF/8QAIhAAAgICAQMFAAAAAAAAAAAAAQIDEQASBAUhUTFBYYGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAYEQADAQEAAAAAAAAAAAAAAAAAASEREv/aAAwDAQACEQMRAD8AZOQ4iCG6GwsWBY+8u83GX1mj/cV5Gd0MjMSYyCL75p4QEvUowwGoNV57e+Jwmqd1HilXaNtl81hkVqABQA+MMOj5R//Z",
  },
  {
    src: "/images/marine-tanker.jpg",
    alt: "Aerial view of an oil tanker at sea",
    kicker: "Marine & FPSO",
    eyebrow: "Upstream · Marine & FPSO",
    headline: [
      [{ t: "Offshore Strength," }],
      [{ t: "Marine", gold: true }, { t: " Precision" }],
    ],
    paragraph:
      "Vessels, FPSO operations and offshore logistics keep production moving safely — handling crude from the field to the market, around the clock.",
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCAwT/xAAfEAACAgICAgMBAAAAAAAAAAABAgADBBEhMRIUMkH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAA//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8AWNl8dyeQ5pStmP2u+D+xQzFgQZfm5VltdCuRpU40Ndy1qUzGn2oRb5mEaP/Z",
  },
];

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

export const chairman: TeamMember = {
  name: "Olorogun O'tega Emerhor",
  title: "Chairman",
  role: "Board of Directors",
  initials: "OE",
  image: "/emerhor1.jpg",
};

export type TeamMember = {
  name: string;
  title: string;
  role: string;
  initials: string;
  image?: string;
};

export const team: TeamMember[] = [
  {
    name: "Engr. Maxwell Esan",
    title: "Chief Executive Officer",
    role: "Executive Leadership",
    initials: "ME",
    image: "/maxwell esan.png",
  },
  {
    name: "Mr. Ayotunde Fatokun",
    title: "Group Chief Operating Officer",
    role: "Operations & Execution",
    initials: "AF",
    image: "/ayotunde-fatokun.png",
  },
  {
    name: "Rotimi E. Akinniyi",
    title: "Chief Financial Officer",
    role: "Finance & Strategy",
    initials: "RA",
    image: "/rotimi.jpeg",
  },
  {
    name: "Barr. Chidiebere Romanus Odo",
    title: "Company Secretary / Legal Representative",
    role: "Legal & Governance",
    initials: "CO",
    image: "/chidi.jpeg",
  },
];

/* ---------- Careers ---------- */

export const careersIntro =
  "Energy is built by people. At Connexxion Energy we bring together engineers, traders, technologists and field crews who want to shape the future of energy across West Africa — with the discipline, safety culture and ambition the work demands.";

export const careerBenefits: { title: string; body: string; icon: string }[] = [
  {
    title: "Work that matters",
    body: "Contribute to projects that power industry and communities across Nigeria and the wider continent.",
    icon: "bolt",
  },
  {
    title: "Grow your career",
    body: "Structured development, mentorship and exposure across the full Upstream, Midstream and Downstream value chain.",
    icon: "growth",
  },
  {
    title: "Safety without compromise",
    body: "International HSE standards on every site — your wellbeing is the foundation of everything we do.",
    icon: "shield",
  },
  {
    title: "People-first culture",
    body: "An indigenous team that values collaboration, integrity and the long-term success of every member.",
    icon: "heart",
  },
  {
    title: "Modern technology",
    body: "Sophisticated engineering and reservoir-management tools that let you do your best work responsibly.",
    icon: "cpu",
  },
  {
    title: "Competitive rewards",
    body: "Market-leading compensation, benefits and recognition that reflect the value you create.",
    icon: "handshake",
  },
];

export type Opening = {
  id: string;
  title: string;
  department: string;
  type: "Full-time" | "Contract" | "Internship";
  location: string;
  stream: Stream | "Corporate";
  summary: string;
};

export const openings: Opening[] = [
  {
    id: "reservoir-engineer",
    title: "Reservoir Engineer",
    department: "Exploration & Production",
    type: "Full-time",
    location: "Abuja, Nigeria",
    stream: "Upstream",
    summary:
      "Lead reservoir characterisation and recovery optimisation across our West African assets using advanced reservoir-management practices.",
  },
  {
    id: "pipeline-integrity-engineer",
    title: "Pipeline Integrity Engineer",
    department: "Pipeline Laying & Coating",
    type: "Full-time",
    location: "Port Harcourt, Nigeria",
    stream: "Upstream",
    summary:
      "Own the integrity programme for onshore and offshore pipelines — inspection, coating standards and corrosion management.",
  },
  {
    id: "marine-logistics-coordinator",
    title: "Marine & FPSO Logistics Coordinator",
    department: "Marine Operations",
    type: "Full-time",
    location: "Lagos, Nigeria",
    stream: "Midstream",
    summary:
      "Coordinate vessels, crew and floating storage to keep offshore production and crude movement running safely around the clock.",
  },
  {
    id: "petroleum-products-trader",
    title: "Petroleum Products Trader",
    department: "Trading & Renewables",
    type: "Full-time",
    location: "Abuja, Nigeria",
    stream: "Downstream",
    summary:
      "Trade gasoline, NGLs and diesel across the region, drawing on market insight to deliver value across the supply chain.",
  },
  {
    id: "renewable-energy-analyst",
    title: "Renewable Energy Analyst",
    department: "Renewables",
    type: "Full-time",
    location: "Abuja, Nigeria",
    stream: "Downstream",
    summary:
      "Evaluate solar, wind and clean-technology opportunities that position Connexxion — and the continent — for a lower-carbon future.",
  },
  {
    id: "hse-officer",
    title: "HSE Officer",
    department: "Health, Safety & Environment",
    type: "Full-time",
    location: "Field-based, Nigeria",
    stream: "Corporate",
    summary:
      "Champion our international HSE standards on site, driving a culture where safety is never compromised.",
  },
  {
    id: "graduate-trainee",
    title: "Graduate Trainee Programme",
    department: "Early Careers",
    type: "Internship",
    location: "Abuja, Nigeria",
    stream: "Corporate",
    summary:
      "A structured rotation across the value chain for ambitious graduates ready to build a career in energy.",
  },
];

export const hiringSteps: { step: string; title: string; body: string }[] = [
  {
    step: "01",
    title: "Apply",
    body: "Submit your details and CV through the form below, or reach out via our virtual assistant.",
  },
  {
    step: "02",
    title: "Screen",
    body: "Our talent team reviews your experience against the role and the standards it demands.",
  },
  {
    step: "03",
    title: "Interview",
    body: "Meet the team — a conversation about your expertise, values and how you work under pressure.",
  },
  {
    step: "04",
    title: "Offer",
    body: "Successful candidates receive an offer and join the Connexxion Energy family.",
  },
];

/* ---------- Chatbot knowledge base ---------- */

export type BotEntry = {
  tags: string[];
  answer: string;
  actions?: { label: string; href: string }[];
};

export const chatbot = {
  greeting:
    "Hello, I'm Cira — the Connexxion Energy virtual assistant. Ask me about our services, careers or how to reach the team.",
  quickReplies: [
    "What does Connexxion do?",
    "Careers",
    "Talk to the team",
    "Where are you based?",
  ],
  knowledge: [
    {
      tags: ["service", "services", "do", "offer", "value chain", "upstream", "midstream", "downstream", "what does"],
      answer:
        "We operate across the full Oil & Gas value chain — Upstream (exploration, production, pipelines, marine/FPSO), Midstream (facilities, transmission, delivery) and Downstream (trading, renewables, consultancy).",
      actions: [{ label: "Explore services", href: "/services" }],
    },
    {
      tags: ["career", "careers", "job", "jobs", "hiring", "role", "roles", "vacancy", "vacancies", "work", "apply", "recruit"],
      answer:
        "We're growing across engineering, trading, technology and field operations. You can browse open roles and apply directly on our Careers page.",
      actions: [{ label: "View open roles", href: "/careers" }],
    },
    {
      tags: ["contact", "talk", "team", "reach", "speak", "enquiry", "enquire", "quote", "email", "phone", "call"],
      answer:
        "Our team would love to hear from you. You can start a conversation through our contact page, or call us directly.",
      actions: [
        { label: "Contact us", href: "/contact" },
        { label: "Call 09161240000", href: "tel:09161240000" },
      ],
    },
    {
      tags: ["location", "based", "where", "address", "office", "abuja", "nigeria", "headquarters"],
      answer:
        "Our head office is at 2A Iller Crescent, Maitama, Abuja, Nigeria, with operations across West Africa.",
      actions: [{ label: "Get directions", href: "/contact" }],
    },
    {
      tags: ["about", "who", "company", "history", "established", "indigenous", "founded"],
      answer:
        "Connexxion Energy is a wholly-owned indigenous corporation registered in Nigeria in 2012, committed to stakeholder value through integrated energy solutions.",
      actions: [{ label: "About us", href: "/about" }],
    },
    {
      tags: ["renewable", "renewables", "solar", "wind", "clean", "green", "sustainable"],
      answer:
        "We generate and trade renewable energy — investing in solar, wind and clean technologies for a lower-carbon future.",
      actions: [{ label: "See renewables", href: "/services" }],
    },
    {
      tags: ["safety", "hse", "health", "environment"],
      answer:
        "Safety is non-negotiable. We apply international HSE standards to every operation, every site, every day — without compromise.",
    },
  ] as BotEntry[],
  fallback: {
    answer:
      "I'm not certain I caught that, but our team can definitely help. Would you like to get in touch, or browse our services?",
    actions: [
      { label: "Contact us", href: "/contact" },
      { label: "Our services", href: "/services" },
    ],
  } as BotEntry,
};
