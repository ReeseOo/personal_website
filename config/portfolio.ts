// ======================================================
// PORTFOLIO CONFIG — Edit everything in this file!
// ======================================================
// This is the only file you need to touch. Fill in your
// personal info below, and the site updates automatically.

export const portfolio = {

  // ── Identity ────────────────────────────────────────────
  name: "Reese Oo",

  // ── Bio ─────────────────────────────────────────────────
  // Write your bio as an array of paragraphs.
  // **text** → bold white emphasis
  // [[text]] → spaced-out letter tracking (e.g. [[hello]] renders as h e l l o)
  bio: [
    "**Computer Engineering** student at **UCLA** (class of 2030). Previously dual-enrolled at Santa Rosa Junior College (2024–2026), taking Data Structures, Machine Organization & Assembly, Software Construction, and Introductory Web Development.",
    "Certifications: **CS50x** (Harvard/edX, 2024) and **Data Structures and Algorithms** (Zero to Mastery, 2026).",
  ],

  // CTA line shown after your bio
  cta: "Reach me at reeseoo@ucla.edu",

  // ── GitHub ──────────────────────────────────────────────
  // Your GitHub username — displays your contribution graph.
  // Leave as "" to hide the graph.
  githubUsername: "ReeseOo",

  // ── Social Links ────────────────────────────────────────
  // Leave a field as "" to hide that button.
  social: {
    twitter:  "",
    github:   "https://github.com/ReeseOo",
    resume:   "",   // Link to your resume (PDF, Google Drive, etc.)
    discord:  "",   // Discord profile URL or server invite link
    linkedin: "https://www.linkedin.com/in/reese-oo-19a861306/",
  },

  // ── Tech Stack ──────────────────────────────────────────
  // Write your tech stack description as a paragraph.
  // Wrap tool names in {{double braces}} to render them as inline chip badges.
  // Icons are automatically matched from the registry (see lib/tech-icons.ts).
  techStackProse:
    "I program in {{C/C++}}, {{Python}}, {{Java}}, and {{HTML}}/{{CSS}}, and I work with {{Git}} and {{VS Code}}.",

  // Categorized tools revealed when "Show All" is clicked
  // Each entry is a { category, tools } group rendered with a heading
  techStackCategories: [
    {
      category: "Languages",
      tools: ["C/C++", "Python", "Java", "HTML", "CSS", "Swift"],
    },
    {
      category: "Frameworks & Libraries",
      tools: ["SwiftUI", "PhotonVision", "NetworkTables"],
    },
    {
      category: "Developer Tools",
      tools: ["Git", "VS Code", "Xcode"],
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
      company:   "High School Robotics Team",
      photo:     "",
      isCurrent: false,
      roles: [
        {
          title:     "Programming Lead",
          type:      "",
          location:  "Rohnert Park, CA",
          startDate: "2025",
          endDate:   "2026",
          bullets: [
            "Studied AprilTag-based computer vision and robot localization (PhotonVision, NetworkTables) for autonomous target tracking.",
            "Developed a prototype for target-lock logic.",
            "Collaborated and wrote code extensively using Git version control.",
            "Mentored a new programmer in Java, VS Code, Object Oriented Programming, and Git.",
          ],
          tech: ["Java", "PhotonVision", "NetworkTables", "Git", "VS Code"],
        },
      ],
    },
    {
      company:   "High School Coding Club",
      photo:     "",
      isCurrent: false,
      roles: [
        {
          title:     "President",
          type:      "",
          location:  "Rohnert Park, CA",
          startDate: "2025",
          endDate:   "2026",
          bullets: [
            "Founded the club as a chapter of the non-profit Hack Club organization.",
            "Filed for non-profit 501(c)(3) status.",
            "Recruited 8 members, shipped 7+ projects, and organized attendance for 2 hackathons.",
          ],
          tech: [],
        },
      ],
    },
  ],

  // ── Projects ────────────────────────────────────────────
  // Featured projects shown on your portfolio.
  // Leave liveUrl or githubUrl as "" to hide that button.
  projects: [
    {
      title:     "Trading Journal App",
      tagline:   "A macOS journal entry system built in Xcode that displays trading statistics such as trade risk %, average win, and loss rate",
      tech:      ["Swift", "SwiftUI"],
      liveUrl:   "",
      githubUrl: "",
    },
    {
      title:     "Electric Label Roller",
      tagline:   "A motorized label-rewinding device (DC motor, off-the-shelf motor controller, wood frame) that cut rewind time from 5 minutes to 30 seconds for a recurring family business task",
      tech:      [],
      liveUrl:   "",
      githubUrl: "",
    },
  ],
};
