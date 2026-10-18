export const profile = {
  name: "Saibal Kole",
  email: "saibalkole@gmail.com",
  phone: "+918116658972",
  phoneDisplay: "(+91) 8116658972",
  github: "https://github.com/saibalweb",
  linkedin: "https://www.linkedin.com/in/saibal-kole-549b41209/",
  twitter: "https://x.com/SaibalKole",
};

export const navigation = [
  { label: "Home", href: "/#home" },
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const projects = [
  {
    id: "docrx", name: "DocRx", category: "Healthcare · Mobile App", status: "Digital health",
    title: "Digital Prescription & Patient Portal",
    description: "A mobile-first medical records application empowering healthcare practitioners to author digital prescriptions, manage patient information, and keep medical records organized.",
    features: ["Digital prescription creation", "Patient medical history", "Secure digital records", "PDF prescription generation"],
    stack: ["React Native", "Expo", "Node.js", "MongoDB", "Express"],
    challenge: "Give doctors a straightforward way to create prescriptions and manage patient records without interrupting the consultation.",
    approach: "A focused React Native interface connects prescription authoring and patient management to a structured Node.js and Express backend. Reusable form components keep the workflow consistent across screens.",
    outcome: "One connected workflow for prescription creation, patient information, and digital record storage.",
    link: "https://www.saibal.dev/project/docrx",
  },
  {
    id: "friendly", name: "Friendly", category: "Social · Mobile App", status: "Community platform",
    title: "Real-Time Community & Interactive Feed",
    description: "A social platform built around connecting people. An intuitive mobile feed brings together user profiles, posts, likes, and everyday conversations.",
    features: ["Authenticated user profiles", "Interactive community feed", "Posts and social interactions", "Cross-platform mobile UI"],
    stack: ["React Native", "Expo", "Node.js", "Express.js", "MongoDB"],
    challenge: "Make the essential social interactions feel natural on a mobile screen, while keeping the application modular and maintainable.",
    approach: "Reusable feed and profile components share a consistent interface, with authenticated backend endpoints supporting accounts and post interactions.",
    outcome: "A unified mobile experience for discovering posts and connecting with other people.",
    link: "https://www.saibal.dev/project/friendly",
  },
  {
    id: "nadplay", name: "NadPlay", category: "Entertainment · Streaming", status: "Movie discovery",
    title: "Movie Discovery & Streaming Companion",
    description: "An entertainment mobile app with a focus on user experience. Browse movies, explore your favorites, and keep a personalized library close at hand.",
    features: ["Movie discovery experience", "Personalized library", "Favorites and playlists", "Responsive mobile navigation"],
    stack: ["React Native", "Expo", "TypeScript", "REST APIs", "Reanimated"],
    challenge: "Present a rich movie catalog in a mobile interface that stays easy to browse and navigate.",
    approach: "An image-led catalog, reusable movie cards, and clear navigation connect discovery with a personalized collection of favorites.",
    outcome: "A cohesive viewing companion that makes discovering and saving movies simple.",
    link: "https://www.saibal.dev/project/nadplay",
  },
] as const;
export type Project = (typeof projects)[number];

export const services = [
  { icon: "mobile", title: "Mobile App Development", description: "Cross-platform iOS and Android applications with thoughtful native interactions and a unified codebase.", deliverables: ["React Native & Expo", "Native gestures & UI", "Store deployment support"] },
  { icon: "web", title: "Web App Development", description: "Responsive SaaS dashboards, founder portals, and customer web applications with a consistent design system.", deliverables: ["Next.js & React", "Reusable UI components", "Responsive, accessible interfaces"] },
  { icon: "server", title: "Backend & API Systems", description: "Reliable APIs, authentication flows, and structured data models that support your product as it grows.", deliverables: ["Node.js & Express APIs", "MongoDB & PostgreSQL", "Authentication & authorization"] },
  { icon: "tools", title: "App Maintenance & Fixes", description: "Refactoring existing code, resolving native issues, improving performance, and shipping new features.", deliverables: ["Debugging & performance", "SDK & Expo upgrades", "Third-party API integrations"] },
] as const;

export const process = [
  { icon: "compass", title: "Discovery & Planning", description: "We define the features, technical constraints, user flows, and milestones together before development begins.", detail: "Clear scope & milestones" },
  { icon: "code", title: "Design & Development", description: "Iterative development with regular progress updates and test builds you can try on your own device.", detail: "Regular demo builds" },
  { icon: "check", title: "Testing & Refinement", description: "Device testing, edge-case checks, and interface polishing to prepare your product for real users.", detail: "Multi-device testing" },
  { icon: "rocket", title: "Launch & Handover", description: "Production deployment, a clean repository, and practical documentation to help you move forward.", detail: "Full codebase ownership" },
] as const;

export const experience = [
  { title: "Commercial Full-Time Roles", icon: "building", roles: [
    { title: "Frontend Software Engineer", company: "Trigital Technologies Pvt Ltd", period: "Feb 2024 – Feb 2025", points: ["Built and maintained multi-screen React Native applications for commercial projects.", "Worked on reusable interfaces, application integrations, and dependable user flows.", "Collaborated with the engineering team to refine application performance and reliability."] },
    { title: "Frontend Engineering Intern", company: "Trigital Technologies Pvt Ltd", period: "Nov 2023 – Jan 2024", points: ["Developed modular React components following the team's design specifications.", "Resolved responsive interface issues and supported cross-browser testing."] },
  ] },
  { title: "Independent Practice & Open Source", icon: "code", roles: [
    { title: "Freelance Mobile & Web Developer", company: "Independent · Freelance / Contract", period: "Feb 2025 – Present", points: ["Partnering directly with founders to plan and develop mobile and web products.", "Working across frontend interfaces, backend APIs, and application deployment.", "Direct developer-to-client communication throughout the project."] },
    { title: "Open Source & Tooling Builder", company: "GitHub Community · @saibalweb", period: "Ongoing", points: ["Building and sharing projects across mobile development and cloud tooling.", "Exploring reusable components and practical cross-platform architecture patterns."] },
  ] },
] as const;

export const stack = [
  { icon: "web", title: "Mobile & Frontend", subtitle: "User interfaces & native apps", items: ["React Native", "Expo", "TypeScript", "React.js", "Next.js", "Redux", "Tailwind CSS", "Reanimated"] },
  { icon: "database", title: "Backend & Database", subtitle: "Services, APIs & data", items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Supabase", "Firebase", "REST APIs"] },
  { icon: "terminal", title: "Tools & DevOps", subtitle: "Tooling & distribution", items: ["Git & GitHub", "Expo EAS", "Docker", "AWS", "Nginx", "Kubernetes", "Figma"] },
] as const;
