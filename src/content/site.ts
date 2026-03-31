export const site = {
  name: "Sumit Niveriya",
  title: "IT & Database Specialist • CIT Student",
  location: "Lethbridge, AB (Remote OK)",
  email: "niveriyasumit@gmail.com",
  links: {
    portfolio: "https://sumit240203.github.io",
    github: "https://github.com/sumit240203",
    linkedin: "https://linkedin.com/in/sumitniveriya",
  },
  opening: {
    badge: "Open to co-op & internships",
    headline: "I build clean web interfaces and practical systems.",
    subhead:
      "CIT student graduating Winter 2026 from Lethbridge Polytechnic. I turn messy workflows into clean dashboards, systems, and tools people actually want to use.",
  },
};

export type Project = {
  slug: string;
  name: string;
  blurb: string;
  tags: string[];
  links?: { label: string; href: string }[];
  image?: { src: string; alt: string };
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "helpdesk-asset-tracker",
    name: "Helpdesk + Asset Tracker",
    blurb:
      "Ticketing + asset tracking app with role-based access, ticket workflows, and a clean admin-style UI.",
    tags: ["Next.js", "TypeScript", "Prisma", "SQLite", "RBAC"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sumit240203/helpdesk-asset-tracker",
      },
    ],
    highlights: [
      "Tickets: create, list, view details, update status/priority",
      "Role-based demo login (User/Tech/Manager) + protected routes",
      "Prisma + SQLite persistence (migrations + server actions)",
      "Designed an admin-style layout (sidebar, tables, forms)",
    ],
  },
  {
    slug: "peachtrack",
    name: "PeachTrack — Shift & Tip Dashboard",
    blurb:
      "Role-based web app for tracking shifts, tips, and payroll-style summaries. Includes admin tools and reporting dashboards.",
    tags: ["PHP", "MySQL/MariaDB", "UI/UX", "Reporting"],
    image: { src: "/peachtrack/Login.png", alt: "PeachTrack login screen" },
    links: [
      { label: "UI & Input Design (doc)", href: "https://github.com/sumitniveriya" }
    ],
    highlights: [
      "Login + role-based navigation (employee vs manager)",
      "Shift flows: start/end shift, edit shift",
      "Reports + payroll-style views with export workflows",
      "Clear input validation, labels, and feedback states",
    ],
  },
  {
    slug: "auth-system",
    name: "User Registration & Login",
    blurb:
      "PHP/MySQL authentication with hashed passwords, validation, and predictable error handling.",
    tags: ["PHP", "MySQL", "Security"],
    image: { src: "/register-ui.png", alt: "Registration UI screenshot" },
    highlights: [
      "Secure password hashing + unique email checks",
      "Clear form validation and user feedback",
      "Clean database schema for users and sessions",
    ],
  },
  {
    slug: "it-support",
    name: "IT Support Portfolio",
    blurb:
      "Troubleshooting playbooks and workstation setup checklists for repeatable IT support.",
    tags: ["Documentation", "IT Support"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sumit240203/it-support-portfolio",
      },
    ],
    highlights: [
      "Step-by-step checklists that reduce mistakes",
      "Clear triage flows for common issues (Wi-Fi, DNS, printers)",
      "Documentation optimized for handoffs",
    ],
  },
  {
    slug: "ecommerce-inventory",
    name: "E-Commerce Inventory Database",
    blurb:
      "Normalized relational database for high-volume retail inventory tracking. Includes complex SQL queries, stored procedures, and indexing for performance.",
    tags: ["MySQL", "SQL", "Normalization", "Stored Procedures"],
    highlights: [
      "Schema normalized to 3NF: products, categories, suppliers, orders, stock levels",
      "Stored procedures for report generation and stock updates",
      "Indexing strategy to optimize high-frequency queries",
      "Complex joins and subqueries for sales tracking and restocking alerts",
    ],
  },
];

export const skills = {
  languages: ["Python", "C++", "PHP", "JavaScript"],
  databases: ["MySQL", "SQL Server", "Oracle", "MongoDB", "Normalization (1NF–3NF)", "ERDs"],
  networking: ["TCP/IP basics", "Subnetting", "DHCP/DNS", "Windows Server labs"],
  tools: ["Git/GitHub", "VS Code", "DBeaver", "Nmap"],
};

export const experience = [
  {
    role: "Casino Dealer",
    org: "Lethbridge, AB",
    dates: "2023 – Present",
    bullets: [
      "Maintain accuracy under pressure while following strict procedures.",
      "Communicate clearly with customers and teammates; resolve issues calmly.",
    ],
  },
  {
    role: "Shift Supervisor",
    org: "McDonald's",
    dates: "2022 – 2023",
    bullets: [
      "Led shift operations and supported training during busy periods.",
      "Balanced speed and accuracy while keeping operations organized.",
    ],
  },
  {
    role: "Peer Tech Support (Volunteer)",
    org: "Lethbridge Polytechnic",
    dates: "2023 – Present",
    bullets: [
      "Help classmates troubleshoot SQL/database and web issues.",
      "Explain steps clearly and document fixes so others can repeat them.",
      "Helped peers with database design, normalization (1NF–3NF), ERDs, and SQL query debugging.",
    ],
  },
];

export const certifications = [
  { name: "SQL Fundamentals", issuer: "Coursera" },
  { name: "Database Management Systems (DBMS)", issuer: "AML" },
];
