// ======================================================
// PORTFOLIO CONFIG — Edit everything in this file!
// ======================================================
// This is the only file you need to touch. Fill in your
// personal info below, and the site updates automatically.

export const portfolio = {

  // ── Identity ────────────────────────────────────────────
  name: "Your Name",

  // ── Bio ─────────────────────────────────────────────────
  // Write your bio as an array of paragraphs.
  // **text** → bold white emphasis
  // [[text]] → spaced-out letter tracking (e.g. [[hello]] renders as h e l l o)
  bio: [
    "**Software engineer.** I build products that are fast, clean, and considered, from the backend logic to the last pixel.",
    "**Tennis** player. **Golf** watcher.",
  ],

  // CTA line shown after your bio
  cta: "Got a project in mind? Let's bring it to life!",

  // ── GitHub ──────────────────────────────────────────────
  // Your GitHub username — displays your contribution graph.
  // Leave as "" to hide the graph.
  githubUsername: "yourusername",

  // ── Social Links ────────────────────────────────────────
  // Leave a field as "" to hide that button.
  social: {
    twitter:  "https://twitter.com/yourusername",
    github:   "https://github.com/yourusername",
    resume:   "",   // Link to your resume (PDF, Google Drive, etc.)
    discord:  "",   // Discord profile URL or server invite link
    linkedin: "https://linkedin.com/in/yourusername",
  },

  // ── Tech Stack ──────────────────────────────────────────
  // Write your tech stack description as a paragraph.
  // Wrap tool names in {{double braces}} to render them as inline chip badges.
  // Icons are automatically matched from the registry (see lib/tech-icons.ts).
  techStackProse:
    "My main Tech stack is {{Next.js}} framework with {{Tailwind CSS}} as a styling library, for the database I use {{Postgres}} deployed on {{NeonDB}} with {{Drizzle}} or {{Prisma}} as an ORM, for database management I use {{DataGrip}} and I use {{Cursor IDE}} for creating awesome projects.",

  // Categorized tools revealed when "Show All" is clicked
  // Each entry is a { category, tools } group rendered with a heading
  techStackCategories: [
    {
      category: "Languages",
      tools: ["JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Libraries",
      tools: ["React", "Next.js", "Express.js", "Tailwind CSS", "TanStack Query", "Framer Motion", "GSAP"],
    },
    {
      category: "Backend & Databases",
      tools: ["Node.js", "PostgreSQL", "MongoDB", "Neon", "Drizzle", "Prisma"],
    },
    {
      category: "Platforms & Deployment",
      tools: ["GitHub", "Netlify", "Vercel"],
    },
    {
      category: "Developer Tools",
      tools: ["Cursor", "DataGrip", "Postman"],
    },
  ],

  // ── Experience ──────────────────────────────────────────
  // Group roles by company. Multiple roles at the same company become nested entries.
  // photo: path to an image in /public (e.g. "/companies/acme.png"), or leave "" for initial avatar
  // isCurrent: shows a dot next to the company name
  // bullets: list of accomplishments shown when the role is expanded
  // tech: tools used — rendered as icon chips when expanded
  experience: [
    {
      company:   "Freelance",
      photo:     "",
      isCurrent: true,
      roles: [
        {
          title:     "Software Engineer",
          type:      "Full-Time",
          location:  "Remote",
          startDate: "Mar 2025",
          endDate:   "Present",
          bullets: [
            "Led end-to-end development of 5+ client projects from design to deployment.",
            "Built and shipped responsive web apps with tight deadlines and changing requirements.",
          ],
          tech: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres"],
        },
      ],
    },
    {
      company:   "Company Name",
      photo:     "",
      isCurrent: false,
      roles: [
        {
          title:     "Lead Frontend Developer",
          type:      "Full-Time",
          location:  "City, Country",
          startDate: "Sep 2024",
          endDate:   "Feb 2025",
          bullets: [
            "Built and managed solely many internal websites including dashboards as front-end lead.",
            "Collaborated with back-end team and explored software tools like Docker, DBeaver, etc.",
            "Deployed projects on Vercel, Netlify, and Azure Static Web Apps.",
          ],
          tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Docker", "Vercel"],
        },
        {
          title:     "Frontend Developer",
          type:      "Internship",
          location:  "City, Country",
          startDate: "Jul 2024",
          endDate:   "Sep 2024",
          bullets: [],
          tech:    [],
        },
      ],
    },
  ],

  // ── Projects ────────────────────────────────────────────
  // Featured projects shown on your portfolio.
  // Leave liveUrl or githubUrl as "" to hide that button.
  projects: [
    {
      title:     "Project Name",
      tagline:   "Find your favourite components in seconds",
      tech:      ["Next.js", "TypeScript", "BetterAuth", "NeonDB", "Motion"],
      liveUrl:   "https://yourproject.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title:     "Another Project",
      tagline:   "Make open-source contributions and rank among developers globally",
      tech:      ["Next.js", "Tailwind CSS", "Drizzle", "TypeScript", "NeonDB"],
      liveUrl:   "https://anotherproject.com",
      githubUrl: "https://github.com/yourusername/another",
    },
  ],
};
