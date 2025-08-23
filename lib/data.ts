import { Project, Skill, TimelineItem, SocialLink } from './types'

export const projects: Project[] = [
  {
    id: 'lockr-password-manager',
    title: '🔒 Lockrr — Password Manager',
    description: 'Zero-knowledge password manager with AES-256 encryption. Backend API built with Node.js/Express, frontend with Next.js, deployed via Docker on Railway.',
    longDescription: 'Developed a robust password management solution implementing industry-standard security practices. The application uses AES-256 encryption for credential storage, ensuring maximum security for sensitive user data. Built with a secure JWT-based authentication system that provides stateless session management and enhanced API security. Master passwords are protected using bcrypt hashing with salt rounds, making them virtually impossible to reverse-engineer. The system follows a zero-knowledge architecture, ensuring complete user data privacy where even the server cannot access unencrypted credentials. Backend features a RESTful API design with Express for clean, maintainable endpoints, and PostgreSQL for reliable data persistence with ACID compliance. The entire application is containerized using Docker for consistent deployment across environments, and hosted on Railway platform for production-ready scalability and monitoring.',
    image: '/images/projects/lockrr-logo.svg',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Railway'],
    liveUrl: 'https://www.lockrr.app',
    githubUrl: 'https://github.com/josephwaugh312/Lockr',
    featured: true,
    categories: ['backend', 'security', 'fullstack']
  },
  {
    id: 'vibeflo-pomodoro',
    title: '🎶 VibeFlo — Pomodoro Timer',
    description: 'Full-stack productivity app combining Pomodoro technique with YouTube music. React/MUI frontend, Node.js/Express backend with JWT auth and PostgreSQL.',
    longDescription: 'Developed a unique productivity application that combines the proven Pomodoro technique with music integration to help users maintain focus and flow. The app features customizable work and break session lengths, integrated YouTube music playback for ambient focus music, and a clean Material UI design. Users can create custom playlists, track their daily productivity statistics, and personalize their timer settings. The application uses JWT authentication for user accounts, stores session history and preferences in PostgreSQL, and provides a responsive design that works seamlessly across all devices. Built with modern React patterns including hooks and context API for state management.',
    image: '/images/projects/vibeflo-logo.svg',
    technologies: ['React', 'JavaScript', 'Material UI', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Render'],
    liveUrl: 'https://www.vibeflo.app',
    githubUrl: 'https://github.com/josephwaugh312/VibeFlo',
    featured: true,
    categories: ['fullstack']
  },
  {
    id: 'shiftsync-scheduler',
    title: '📅 ShiftSync — Team Shift Scheduler',
    description: 'PWA for team shift management with offline support. Built with React, Redux Toolkit, and Tailwind CSS. Features drag-and-drop scheduling and real-time sync.',
    longDescription: 'Developed a comprehensive shift scheduling solution designed for small to medium-sized teams. The application features an intuitive drag-and-drop interface for easy shift management, real-time updates ensuring all team members see the latest schedule changes instantly, and full offline support through Progressive Web App capabilities. Built with Redux Toolkit for robust state management, the app includes features like shift swapping requests, availability management, automated conflict detection, and mobile-responsive design. The PWA functionality allows team members to access schedules even without internet connectivity, with automatic syncing when connection is restored.',
    image: '/images/projects/shiftsync-logo.svg',
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'React Router', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    liveUrl: 'https://shiftsyncc.com',
    githubUrl: 'https://github.com/josephwaugh312/ShiftSync',
    featured: false,
    categories: ['frontend', 'pwa']
  }
]

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Framer Motion', level: 80, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 80, category: 'backend' },
  { name: 'Express', level: 85, category: 'backend' },
  { name: 'FastAPI', level: 70, category: 'backend' },
  { name: 'GraphQL', level: 65, category: 'backend' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'AWS', level: 65, category: 'tools' },
  { name: 'Vercel', level: 85, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Figma', level: 60, category: 'tools' },
]

export const timeline: TimelineItem[] = [
  {
    year: '2025',
    title: 'Portfolio Development',
    description: 'Building and polishing a professional developer portfolio while actively seeking full-stack engineering opportunities.',
    type: 'milestone'
  },
  {
    year: '2024',
    title: 'Career Pivot into Software Engineering',
    description: 'Completed Codecademy\'s Full-Stack Engineer Career Path and deployed multiple full-stack projects (Lockr, VibeFlo, ShiftSync) using React, Next.js, Node.js, and PostgreSQL.',
    type: 'milestone'
  },
  {
    year: '2022–2023',
    title: 'Account Executive Roles',
    company: 'Tech Startups',
    description: 'Worked in mid-market sales at early-stage startups, gaining firsthand experience with product strategy, customer needs, and the startup growth environment.',
    type: 'work'
  },
  {
    year: '2021–2022',
    title: 'MBA in Finance',
    company: 'Pepperdine Graziadio Business School',
    description: 'Earned MBA in Finance, developing strong analytical, problem-solving, and leadership skills.',
    type: 'education'
  },
  {
    year: '2013–2017',
    title: 'BBA in Marketing & Business Strategy',
    company: 'Concordia University Wisconsin',
    description: 'Graduated with BBA in Marketing & Business Strategy.',
    type: 'education'
  }
]

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/josephwaugh312',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/waughjoseph/',
    icon: 'linkedin'
  },
  {
    name: 'Twitter/X',
    url: 'https://x.com/jojo60102',
    icon: 'twitter'
  },
  {
    name: 'Email',
    url: 'mailto:joseph.waugh312@gmail.com',
    icon: 'mail'
  }
]

export const techStack = {
  'Frontend': [
    'HTML/CSS',
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Redux Toolkit',
    'Next.js',
    'Tailwind CSS',
    'Framer Motion',
    'Material UI (MUI)'
  ],
  'Backend': [
    'Node.js',
    'Express',
    'PostgreSQL'
  ],
  'Deployment': [
    'Docker',
    'Vercel',
    'Render',
    'Railway'
  ]
}