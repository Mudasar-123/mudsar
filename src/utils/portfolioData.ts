import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiVite, SiFigma, SiVercel, SiNetlify } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const personalInfo = {
  name: 'Muhammad Mudasar',
  title: 'Frontend Web Developer',
  email: 'muhammadmudasar0625@gmail.com',
  phone: '03098624009',
  location: 'Multan, Pakistan',
  portfolio: 'https://mudasar-123.github.io/my-portfolio/',
  github: 'https://github.com/Mudasar-123',
  bio: `Frontend Developer with a strong foundation in modern web technologies. 
Skilled in building responsive and user-friendly web interfaces using HTML, CSS, and JavaScript. 
Passionate about creating clean UI, optimizing performance, and improving user experience. 
Currently learning advanced frontend frameworks to build scalable web applications.`,
  typingTexts: [
    'Frontend Developer',
    'React Enthusiast',
    'UI/UX Passionate',
    'Web Designer',
    'Problem Solver',
  ],
};

export const skills = [
  { name: 'HTML5', icon: FaHtml5, level: 90, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', icon: FaCss3Alt, level: 85, color: '#1572B6', category: 'Frontend' },
  { name: 'JavaScript', icon: FaJs, level: 80, color: '#F7DF1E', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, level: 65, color: '#3178C6', category: 'Frontend' },
  { name: 'React', icon: FaReact, level: 75, color: '#61DAFB', category: 'Framework' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80, color: '#06B6D4', category: 'Framework' },
  { name: 'Bootstrap', icon: FaBootstrap, level: 85, color: '#7952B3', category: 'Framework' },
  { name: 'Git', icon: FaGitAlt, level: 75, color: '#F05032', category: 'Tools' },
  { name: 'GitHub', icon: FaGithub, level: 80, color: '#fff', category: 'Tools' },
  { name: 'VS Code', icon: VscVscode, level: 90, color: '#007ACC', category: 'Tools' },
  { name: 'Vite', icon: SiVite, level: 70, color: '#646CFF', category: 'Tools' },
  { name: 'Figma', icon: SiFigma, level: 60, color: '#F24E1E', category: 'Tools' },
  { name: 'Vercel', icon: SiVercel, level: 70, color: '#fff', category: 'Tools' },
  { name: 'Netlify', icon: SiNetlify, level: 65, color: '#00C7B7', category: 'Tools' },
];

export const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Ace Connect',
    period: '2026 – Present',
    description: [
      'Assisted in developing responsive web pages using HTML, CSS, and JavaScript',
      'Worked on improving user interface and website layout',
      'Collaborated with team members to implement frontend features',
      'Debugged and fixed basic UI issues',
      'Used development tools like Visual Studio Code and version control with Git',
    ],
    icon: '💼',
  },
  {
    title: 'Front-End Web Developer',
    company: 'Freelance Projects',
    period: '2024 – 2026',
    description: [
      'Developed responsive websites using HTML, CSS, and JavaScript',
      'Built user-friendly web interfaces with modern UI design principles',
      'Implemented responsive layouts using Bootstrap and Flexbox',
      'Optimized website performance and improved page load speed',
      'Used version control with Git and hosted projects on GitHub',
    ],
    icon: '🚀',
  },
  {
    title: 'Personal Web Projects',
    company: 'Self-Initiated',
    period: '2023 – Present',
    description: [
      'Built portfolio websites and landing pages',
      'Experimented with React and modern frameworks',
      'Created responsive designs for mobile and desktop',
      'Contributed to open-source projects on GitHub',
    ],
    icon: '🎨',
  },
];

export const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio website built with HTML, CSS, and JavaScript featuring modern design and smooth animations.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '🌐',
    link: 'https://mudasar-123.github.io/my-portfolio/',
    github: 'https://github.com/Mudasar-123/my-portfolio',
  },
  {
    title: 'E-Commerce Landing Page',
    description: 'A responsive e-commerce landing page with product showcase, cart functionality, and modern UI design using Bootstrap.',
    tech: ['HTML5', 'Bootstrap', 'JavaScript'],
    image: '🛒',
    link: '#',
    github: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather dashboard using API integration, featuring location search, forecasts, and beautiful data visualization.',
    tech: ['React', 'Tailwind CSS', 'API'],
    image: '🌦️',
    link: '#',
    github: '#',
  },
  {
    title: 'Task Manager App',
    description: 'A full-featured task management application with drag-and-drop, categories, due dates, and local storage persistence.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    image: '✅',
    link: '#',
    github: '#',
  },
  {
    title: 'Restaurant Website',
    description: 'A beautiful, responsive restaurant website with menu sections, reservation forms, and image gallery with animations.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '🍕',
    link: '#',
    github: '#',
  },
  {
    title: 'Blog Platform UI',
    description: 'Modern blog platform interface with dark mode, responsive design, post cards with tags and reading time estimates.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: '📝',
    link: '#',
    github: '#',
  },
];

export const education = {
  degree: 'Specialty',
  institution: 'Islamia University Bahawalpur',
  period: '2021 – 2025',
  coursework: ['Web Development', 'Programming Fundamentals', 'Database Systems'],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
