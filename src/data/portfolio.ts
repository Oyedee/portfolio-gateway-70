// Single source of truth for portfolio content. Components only handle presentation.

export const profile = {
  name: 'Hamid Oyempemi',
  handle: 'Oyedee',
  role: 'Senior Mobile Engineer',
  email: 'oyempemia@gmail.com',
  positioning: "I don't just build screens. I build the systems behind the experience.",
  philosophy: ['Build for the user.', 'Design for change.', 'Engineer for production.'],
};

export type SocialLink = {
  label: string;
  href: string;
  display: string;
};

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Oyedee', display: 'github.com/Oyedee' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/hamid-oyempemi-gmnse-828a22115',
    display: 'in/hamid-oyempemi',
  },
  { label: 'X', href: 'https://x.com/poraayy', display: '@poraayy' },
  { label: 'Email', href: `mailto:${profile.email}`, display: profile.email },
];

export const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'work' },
  { label: 'Engineering', id: 'engineering' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
] as const;

export const stats = [
  { value: '5+', label: 'Years engineering' },
  { value: '15+', label: 'Products worked on' },
  { value: 'Fintech', label: 'Payments & commerce' },
  { value: 'iOS + Android', label: 'Mobile platforms' },
];

export type FeaturedProject = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  /** Short engineering story, rendered as a chain: A → B → C */
  story: string[];
  url?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: 'CredPal',
    category: 'Fintech · Credit · Payments',
    description:
      'Building production financial experiences while working closely with product, backend and QA teams.',
    stack: ['Flutter', 'Dart', 'Fintech', 'REST APIs'],
    story: ['Fintech', 'Financial workflows', 'APIs', 'Production'],
    url: 'https://credpal.com/',
  },
  {
    name: 'Dukka',
    category: 'Commerce · POS · Business',
    description:
      'Built and evolved mobile experiences for business owners across sales, inventory, wallets, KYC/KYB, payments, notifications, POS hardware and offline-first commerce.',
    stack: ['Flutter', 'Dart', 'Offline-first', 'POS', 'Payments'],
    story: ['Commerce', 'Offline-first', 'POS', 'Payments', 'Hardware'],
    url: 'https://dukka.com/',
  },
  {
    name: 'Weeshr',
    category: 'Social · Gifting · Fintech',
    description:
      'Evolved a social gifting platform from wishlists into a broader product experience involving wallets, payouts, marketplace functionality, notifications and social features.',
    stack: ['Flutter', 'Firebase', 'Wallets', 'Notifications'],
    story: ['Social', 'Gifting', 'Wallets', 'Marketplace'],
    url: 'https://weeshr.com/',
  },
  {
    name: 'Kada',
    category: 'Fintech · Community',
    description:
      'Built a mobile product and supporting Spring Boot services for a financial platform, including mobile, backend and deployment infrastructure.',
    stack: ['Flutter', 'Java', 'Spring Boot', 'AWS'],
    story: ['Mobile', 'Spring Boot', 'AWS'],
    url: 'https://kada.ng/',
  },
  {
    name: 'MyInvestar',
    category: 'Fintech · Investment',
    description:
      'Built mobile investment experiences around onboarding, financial data, APIs and user account flows.',
    stack: ['Flutter', 'Fintech', 'APIs'],
    story: ['Onboarding', 'Financial data', 'Accounts'],
    url: 'https://myinvestar.ng/',
  },
  {
    name: 'ZuriChat',
    category: 'Social · Communication',
    description:
      'Worked on a social communication product focused on mobile experiences and API-driven functionality.',
    stack: ['Flutter', 'Mobile', 'APIs'],
    story: ['Social', 'Messaging', 'APIs'],
  },
];

export type OtherProduct = { name: string; status?: string };

export const otherProducts: OtherProduct[] = [
  { name: 'Yesa' },
  { name: 'KWIQ' },
  { name: 'SwiftBill' },
  { name: 'Tap2Pay' },
  { name: 'Payflex' },
  { name: 'RockPay' },
  { name: 'Onafriq', status: 'Paused' },
  { name: 'Enforcecam' },
  { name: 'Cleanily' },
];

export type BuildingProject = {
  name: string;
  status: string;
  description: string;
};

export const currentlyBuilding: BuildingProject[] = [
  {
    name: 'Vistacks',
    status: 'Building',
    description: 'An independent product, in active development.',
  },
  {
    name: 'Pano',
    status: 'Building · Open Source',
    description: 'An open-source project, developed in public.',
  },
  {
    name: 'HowFar',
    status: 'Building',
    description: 'An independent product, in active development.',
  },
];

export type EngineeringArea = { title: string; body: string };

export const engineeringAreas: EngineeringArea[] = [
  {
    title: 'Mobile Architecture',
    body: 'Flutter, Dart, BLoC/Cubit, Riverpod, clean architecture, reusable components and scalable project structure.',
  },
  {
    title: 'Offline-first systems',
    body: 'Local persistence, synchronization, queued operations, connectivity handling and eventual consistency.',
  },
  {
    title: 'Payments & Fintech',
    body: 'Wallets, transactions, authentication, KYC/KYB, financial workflows and payment integrations.',
  },
  {
    title: 'Hardware & POS',
    body: 'POS terminals, printers, Bluetooth integrations and device-specific workflows.',
  },
  {
    title: 'Backend & APIs',
    body: 'REST APIs, Spring Boot, authentication, data persistence and service integration.',
  },
  {
    title: 'Production & Delivery',
    body: 'CI/CD, Codemagic, Jenkins, Docker, AWS, App Store and Google Play releases.',
  },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: 'CredPal',
    title: 'Senior Mobile Engineer',
    period: 'Current',
    highlights: [
      'Building production fintech mobile experiences',
      'Working closely with Product, Backend and QA',
      'Shipping customer-facing features',
      'Translating business requirements into mobile implementations',
      'Improving reliability and production workflows',
    ],
  },
  {
    company: 'Dukka',
    title: 'Mobile Engineer',
    period: 'From Feb 2024',
    highlights: [
      'Commerce and business management: sales and inventory',
      'KYC/KYB, wallets and payments',
      'POS hardware integrations',
      'Notifications and offline-first functionality',
    ],
  },
  {
    company: 'Sankore',
    title: 'Lead Mobile Engineer',
    period: 'Aug 2022 — Jan 2024',
    highlights: [
      'Built mobile products from scratch in Flutter',
      'Spring Boot backend services',
      'AWS, Docker and CI/CD',
      'Production deployment',
    ],
  },
];

export const aboutParagraphs = [
  "I'm a senior software engineer focused on building mobile products that work in the real world. Most of my work has been around Flutter, fintech, payments and commerce, but I've also worked across social, utility and backend systems.",
  "I've worked on products from early development through production — including architecture, APIs, integrations, hardware, CI/CD and app store releases.",
  'I enjoy solving the problems that sit between product requirements and reliable software.',
];
