export const profile = {
  name: "Steven Moore",
  initials: "SM",
  headline: "Sr Account Manager & Enterprise Account Executive",
  summary:
    "Enterprise Account Executive with 8+ years of experience driving revenue growth in high-growth startups and corporations. Proven track record of exceeding quota, accelerating sales cycles, and partnering closely with customers to solve complex problems. Strong background in consultative, solution-based selling with a technical foundation (GCP Certified Cloud Architect), enabling effective collaboration with product, engineering, and creative stakeholders.",
  links: {
    linkedin: "https://www.linkedin.com/in/steven-t-moore/",
    github: "https://github.com/stevenmoore0425",
    email: "stevenmoore0425@gmail.com",
  },
};

export const strengths = [
  { label: "Experience", value: "8+ Years" },
  { label: "Cloud Cert", value: "GCP PCA" },
  { label: "Location", value: "Los Angeles" },
  { label: "Industry", value: "Enterprise SaaS" },
];

export const experience = [
  {
    years: "2024 - Present",
    title: "Sr Account Manager",
    company: "Oracle NetSuite",
    description:
      "FY25: 109% attainment | Rank: 4/117 | Presidents Club. FY24 (partial): 110% attainment | Rank: 1/21 | Presidents Club. Manage $27M book of business across 30+ accounts, driving expansion and renewals. Build executive relationships and lead multi-threaded deals across finance, ops, and IT. Drive upsell across NSAW, WMS, NSPB, ACS through value-based selling.",
  },
  {
    years: "2021 - 2024",
    title: "Enterprise Account Executive",
    company: "Uber Technologies",
    description:
      "FY23: 132% attainment | Top 5 SoCal | Presidents Club. FY22: 101% attainment | Top performer among new hires. Built pipeline and closed net-new business across enterprise accounts. Led multi-threaded deals across operations, finance, and executive stakeholders. Promoted after FY23 performance.",
  },
  {
    years: "2020 - 2021",
    title: "Enterprise Account Executive",
    company: "Edify",
    description:
      "130%+ attainment. Closed $1.3M in new ARR through outbound and full-cycle sales. Built pipeline from scratch in early-stage startup environment.",
  },
  {
    years: "2017 - 2020",
    title: "Account Executive (promotion) & Account Manager",
    company: "FusionZone",
    description:
      "FY20: 124% | FY19: 117% | FY18: 112% | FY17: 102%. Presidents Club: FY18-FY20. Managed $13.5M+ book while closing net-new business. Promoted from Account Manager to Account Executive.",
  },
];

export const projects = [
  {
    name: "Portfolio Website",
    status: "Live",
    description:
      "This site — built with Next.js and deployed on Google Cloud. Showcases experience, certifications, and cloud architecture work.",
    tags: ["Next.js", "GCP", "Firebase"],
  },
  {
    name: "GCP Architecture Lab",
    status: "In Progress",
    description:
      "Personal lab for building and documenting reference architectures on Google Cloud as part of ongoing cloud practice.",
    tags: ["GCP", "Terraform", "Cloud Run"],
  },
  {
    name: "Sales Analytics Dashboard",
    status: "Prototype",
    description:
      "A BigQuery-powered dashboard to visualize pipeline health, quota attainment, and expansion trends across accounts.",
    tags: ["BigQuery", "Looker Studio", "Python"],
  },
];

export const labNotes = [
  {
    title: "Reference Architecture: Cloud-Native SaaS Platform",
    description:
      "Designing a scalable, multi-tenant SaaS backend on GCP using Cloud Run, Pub/Sub, and Firestore.",
  },
  {
    title: "Cloud Run vs GKE: When to Use Which",
    description:
      "Decision framework for choosing between serverless containers and managed Kubernetes on Google Cloud.",
  },
  {
    title: "Terraform Module Patterns for GCP",
    description:
      "Reusable infrastructure-as-code patterns for provisioning GCP resources consistently across environments.",
  },
];
