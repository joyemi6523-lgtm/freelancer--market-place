import f1 from "@/assets/f1.jpg";
import f2 from "@/assets/f2.jpg";
import f3 from "@/assets/f3.jpg";

export type Job = {
  id: string;
  category: string;
  title: string;
  rate: string;
  tags: string[];
  company: string;
  summary: string;
};

export const jobs: Job[] = [
  {
    id: "brand-architect",
    category: "Visual Systems",
    title: "Senior Brand Architect for Munich-based Studio",
    rate: "$120/hr",
    tags: ["3 Months", "Remote"],
    company: "Aether Studio",
    summary:
      "Rebuild an institutional identity system across print, signage and product surfaces. Type-led, archival sensibility required.",
  },
  {
    id: "rust-infra",
    category: "Technical Architecture",
    title: "Full-stack Rust Infrastructure Lead",
    rate: "Fixed $4.5k",
    tags: ["Long-term", "Async"],
    company: "LogiFlow",
    summary:
      "Own the migration of a legacy ingestion pipeline into a distributed Rust service with strict latency budgets.",
  },
  {
    id: "editorial-writer",
    category: "Editorial",
    title: "Principal Copywriter — Financial Reporting",
    rate: "$95/hr",
    tags: ["6 Weeks", "Hybrid"],
    company: "Meridian Capital",
    summary:
      "Draft and edit an annual report with a rigorous, restrained voice. Prior institutional experience essential.",
  },
  {
    id: "motion-systems",
    category: "Motion",
    title: "Motion Systems Designer for Product Launch",
    rate: "Fixed $8.2k",
    tags: ["2 Months", "Remote"],
    company: "Northline",
    summary:
      "Define a motion language and deliver a documented set of primitives for web and mobile release surfaces.",
  },
  {
    id: "ios-engineer",
    category: "Mobile",
    title: "Senior iOS Engineer, Payments Surface",
    rate: "$140/hr",
    tags: ["Ongoing", "Remote"],
    company: "Ledgerhouse",
    summary:
      "Ship a rewritten checkout flow with offline tolerance and strong accessibility guarantees.",
  },
  {
    id: "research-lead",
    category: "Research",
    title: "Design Research Lead — Public Sector",
    rate: "$88/hr",
    tags: ["4 Months", "On-site"],
    company: "Civic Works",
    summary:
      "Run field research across three municipalities and translate findings into a service blueprint.",
  },
];

export type Freelancer = {
  id: string;
  name: string;
  role: string;
  rating: string;
  rate: string;
  location: string;
  image: string;
  bio: string;
  skills: string[];
};

export const freelancers: Freelancer[] = [
  {
    id: "elias-thorne",
    name: "Elias Thorne",
    role: "Principal Copywriter",
    rating: "5.0",
    rate: "$110/hr",
    location: "Berlin",
    image: f1,
    bio: "Fourteen years writing for institutions, museums and financial reporting. Precise, unhurried, archival.",
    skills: ["Editorial", "Naming", "Annual Reports"],
  },
  {
    id: "mira-halden",
    name: "Mira Halden",
    role: "Brand Architect",
    rating: "4.9",
    rate: "$135/hr",
    location: "Copenhagen",
    image: f2,
    bio: "Identity systems for cultural and civic clients. Grid-first, typographic, documented to the last token.",
    skills: ["Identity", "Typography", "Design Systems"],
  },
  {
    id: "jonas-reeve",
    name: "Jonas Reeve",
    role: "Infrastructure Engineer",
    rating: "4.8",
    rate: "$150/hr",
    location: "Lisbon",
    image: f3,
    bio: "Rust and Go services under load. Migration work, observability, and boring reliable systems.",
    skills: ["Rust", "Kubernetes", "Observability"],
  },
];

export type Thread = {
  id: string;
  name: string;
  role: string;
  image: string;
  preview: string;
  time: string;
  messages: { from: "them" | "me"; text: string; time: string }[];
};

export const threads: Thread[] = [
  {
    id: "elias-thorne",
    name: "Elias Thorne",
    role: "Principal Copywriter",
    image: f1,
    preview: "Final assets delivered — review when you can.",
    time: "2m",
    messages: [
      { from: "them", text: "Draft two is uploaded to the shared folder.", time: "09:12" },
      { from: "me", text: "Reading it now. The opening section is much tighter.", time: "09:20" },
      { from: "them", text: "Final assets delivered — review when you can.", time: "09:41" },
    ],
  },
  {
    id: "mira-halden",
    name: "Mira Halden",
    role: "Brand Architect",
    image: f2,
    preview: "Sending the grid specimen tonight.",
    time: "1h",
    messages: [
      { from: "them", text: "I've locked the baseline grid at 8px.", time: "08:02" },
      { from: "me", text: "Works. Does it hold at the small breakpoint?", time: "08:15" },
      { from: "them", text: "Sending the grid specimen tonight.", time: "08:31" },
    ],
  },
  {
    id: "jonas-reeve",
    name: "Jonas Reeve",
    role: "Infrastructure Engineer",
    image: f3,
    preview: "Staging cluster is green across all checks.",
    time: "Yesterday",
    messages: [
      { from: "them", text: "Cutover script is idempotent now.", time: "17:40" },
      { from: "them", text: "Staging cluster is green across all checks.", time: "18:05" },
    ],
  },
];
