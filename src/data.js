export const profile = {
  name: 'Abishek D.',
  monogram: 'AD',
  role: 'Java Backend Developer',
  location: 'Chennai, India',
  experience: '2+ years in technology',
  backendExperience: '1+ year in Java backend',
  email: 'abishek21092001@gmail.com',
  phone: '+91 81241 38439',
  phoneHref: 'tel:+918124138439',
  lead: 'Java backend developer building secure, well-structured APIs.',
  aboutStatement: 'I bring a data-informed perspective to building the systems people rely on.',
  aboutCopy: 'After beginning my career in machine learning and data analysis, I moved into Java backend development to focus on the foundations behind useful products. I build REST APIs and role-based access control with Spring Boot, Spring Security, and Hibernate—organized into clean controller, service, and repository layers. My approach is deliberate: clear structure, secure behavior, and software that is easier to maintain.',
  contactStatement: "Looking for a backend developer who ships dependable code? Let's talk.",
  emailHref: 'https://mail.google.com/mail/?view=cm&fs=1&to=abishek21092001%40gmail.com',
};

export const links = {
  github: 'https://github.com/abishekdharamaraj',
  linkedin: 'https://www.linkedin.com/in/abishek-d-416873190',
  resume: 'https://drive.google.com/file/d/1jHbCzSpSzJ5wIS2mieBhv5C_bwxfZS3C/view?usp=sharing',
};

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    name: 'Backend',
    items: [
      { name: 'Java', icon: 'java' },
      { name: 'Spring Boot and MVC', icon: 'spring' },
      { name: 'Spring Data JPA', icon: 'database' },
      { name: 'Spring Security', icon: 'shield' },
      { name: 'Hibernate', icon: 'layers' },
      { name: 'REST APIs', icon: 'code' },
    ],
  },
  {
    name: 'Data',
    items: [
      { name: 'MySQL and SQL', icon: 'database' },
      { name: 'Database design', icon: 'layers' },
      { name: 'Python, Pandas, NumPy', icon: 'chart' },
      { name: 'TensorFlow', icon: 'spark' },
      { name: 'Power BI', icon: 'chart' },
    ],
  },
  {
    name: 'Architecture',
    items: [
      { name: 'Layered architecture', icon: 'layers' },
      { name: 'SOLID principles', icon: 'compass' },
      { name: 'Bean Validation', icon: 'check' },
      { name: 'Role-based access control', icon: 'shield' },
      { name: 'Microservices (fundamentals)', icon: 'nodes' },
    ],
  },
  {
    name: 'Tools',
    items: [
      { name: 'Git and GitHub', icon: 'git' },
      { name: 'Maven', icon: 'package' },
      { name: 'Postman and JUnit', icon: 'flask' },
      { name: 'Docker and Jenkins', icon: 'boxes' },
      { name: 'AWS (basics)', icon: 'cloud' },
    ],
  },
  {
    name: 'AI tools',
    items: [
      { name: 'Claude', icon: 'spark' },
      { name: 'Cursor', icon: 'cursor' },
      { name: 'Antigravity', icon: 'orbit' },
    ],
  },
];

export const experience = [
  {
    date: 'Aug 2025 – Present',
    role: 'Java Backend Developer',
    company: 'Rooks and Brooks Technologies',
    points: [
      'Develop REST APIs, authentication, and role-based access control.',
      'Build MySQL-backed modules for Hospital and Factory Management systems.',
    ],
  },
  {
    date: 'Aug 2024 – Aug 2025',
    role: 'Machine Learning Engineer',
    company: 'Rooks and Brooks Technologies',
    points: [
      'Prepared, cleaned, and analyzed data for machine learning workflows.',
      'Built predictive models with TensorFlow and delivered Power BI reporting.',
    ],
  },
  {
    date: 'Feb 2024 – May 2024',
    role: 'Customer Support Executive',
    company: 'Tech Mahindra',
    points: [
      'Resolved customer issues across phone, email, and chat while meeting SLA targets.',
    ],
  },
];

export const projects = [
  {
    name: 'E-Commerce Application',
    description: 'A backend storefront with separate Admin and Customer roles, JPA persistence, and email workflows for registration and order confirmation. Built with a focus on clear responsibilities, secure access, and a dependable customer journey.',
    href: `${links.github}/ecommerce`,
    tags: [
      { name: 'Spring Boot', icon: 'spring' },
      { name: 'Spring Security', icon: 'shield' },
      { name: 'JPA / Hibernate', icon: 'database' },
      { name: 'MySQL', icon: 'database' },
      { name: 'Spring Mail', icon: 'mail' },
    ],
  },
];