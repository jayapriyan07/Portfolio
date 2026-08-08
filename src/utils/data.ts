export const profile = {
  name: "Jayapriyan K",
  roles: [
    "Software Engineer",
    "Java Developer",
    "Full Stack Developer",
    "AI Enthusiast",
  ],
  tagline:
    "Seeking an entry-level Software Engineer role where I can contribute, learn rapidly, and build impactful software.",
  education: "B.Tech, Information Technology",
  email: "k.jp6002@gmail.com",
  phone: "+91 9894365388",
  links: {
    linkedin: "#",
    github: "#",
    leetcode: "#",
  },
  resumeUrl: "/resume.pdf",
};

export const about = {
  paragraphs: [
    "I'm an Information Technology undergraduate who likes taking a system apart — front end, back end, database — until I understand every seam that holds it together.",
    "Most of what I know, I picked up by shipping small, complete things: a console app, a full-stack billing system, a short internship where I got to read other people's code and argue about pull requests.",
    "I'm early in this career, and I'd rather say that plainly than dress it up — what I bring is speed of learning, care with the basics, and a genuine pull toward AI-assisted engineering as the next thing to go deep on.",
  ],
  timeline: [
    {
      year: "2021",
      title: "Started B.Tech, Information Technology",
      description: "V.S.B Engineering College — began building a foundation in data structures, DBMS, and OOP.",
    },
    {
      year: "2023",
      title: "First full-stack build",
      description: "Moved from console programs to a real client-server project with auth and a database.",
    },
    {
      year: "2024",
      title: "Full Stack Developer Internship",
      description: "Fantasy Solutions — one month embedded with a dev team, shipping and reviewing real code.",
    },
    {
      year: "Now",
      title: "Looking for my first engineering role",
      description: "Open to Software Engineer / Full Stack roles where I can keep compounding what I've learned.",
    },
  ],
};

export const skills = [
  { name: "Java", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "SQL", category: "Language" },
  { name: "HTML", category: "Language" },
  { name: "CSS", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "REST APIs", category: "Backend" },
  { name: "Git", category: "Tooling" },
  { name: "GitHub", category: "Tooling" },
  { name: "OOP", category: "Fundamentals" },
  { name: "Data Structures", category: "Fundamentals" },
  { name: "Algorithms", category: "Fundamentals" },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: "shipped" | "coming-soon";
};

export const projects: Project[] = [
  {
    title: "Student Management System",
    description:
      "A console-based CRUD system in core Java — separate Student and StudentManagementSystem classes, menu-driven interaction, no framework scaffolding to hide behind.",
    tech: ["Java", "ArrayList", "OOP", "CRUD"],
    status: "shipped",
  },
  {
    title: "Smart Grocery Management System",
    description:
      "A full-stack POS and inventory tool with JWT auth and role-based access for Admin and Cashier, automatic PDF invoices, and a small analytics dashboard.",
    tech: ["Node.js", "Express", "PostgreSQL", "JWT", "Billing", "Invoice PDF"],
    github: "https://github.com/jayapriyan07/grocery-management-system",
    status: "shipped",
  },
  {
    title: "HMS Report Analyzer",
    description:
      "A Python-based tool to analyze health management system reports and extract insights.",
    tech: ["Python", "Data Analysis"],
    github: "https://github.com/jayapriyan07/hms-report-analyzer",
    status: "shipped",
  },
  {
    title: "Cyber Shield Project",
    description:
      "A cybersecurity project built with TypeScript to monitor and protect digital assets.",
    tech: ["TypeScript", "Security"],
    github: "https://github.com/jayapriyan07/cyber-shield-project",
    status: "shipped",
  },
];

export const experience = [
  {
    role: "Full Stack Development Intern",
    company: "Fantasy Solutions",
    duration: "1 Month",
    points: [
      "Gained hands-on experience in full-stack web development across frontend and backend.",
      "Assisted in developing and testing web application modules.",
      "Collaborated with the development team to identify and resolve technical issues.",
      "Learned version control using Git and took part in debugging and code reviews.",
    ],
  },
];

export const education = [
  {
    school: "V.S.B Engineering College",
    degree: "Bachelor of Engineering, B.Tech — Information Technology",
    detail: "CGPA: 7.87",
  },
  {
    school: "Gokilambal Matriculation School",
    degree: "Higher Secondary School",
    detail: "85%",
  },
];

export const certifications = [
  { title: "Programming In Java", issuer: "NPTEL", url: "/certificates/cert5.pdf" },
  { title: "Introduction to Machine Learning", issuer: "NPTEL", url: "/certificates/cert4.pdf" },
  { title: "Generative AI Fluency", issuer: "Nasscom", url: "/certificates/cert3.pdf" },
  { title: "Java Foundation Certification", issuer: "Infosys Springboard", url: "/certificates/cert2.pdf" },
  { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", url: "/certificates/cert1.pdf" },
];

export const achievements = [
  { title: "Paper Presentation", detail: "Presented technical papers at college symposiums." },
  { title: "Coding Practice", detail: "Solved programming problems across coding platforms." },
];
