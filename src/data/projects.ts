import type { Project } from '../types';

const defaultFeatures = [
  { t: 'Responsive Design:', d: ' The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.' },
  { t: 'Modern UI/UX:', d: ' The website features a modern and clean user interface, providing a pleasant user experience. It uses a consistent color scheme and typography throughout the site.' }
];

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    category: 'Frontend',
    desc: "This project is a portfolio website developed using React.js. The website is designed to showcase the user's skills, projects, and services. It features a modern and clean design with smooth navigation and responsive layout.",
    cardDesc: 'Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma.',
    thumb: 'https://placehold.co/700x460/1c2b06/d7ff3d?text=Mahanthi+Portfolio',
    features: defaultFeatures
  },
  {
    id: 'weather',
    title: 'Weather App',
    category: 'Fulll Stack',
    desc: 'Developed a full-stack weather app using NodeJS/Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time weather data.',
    cardDesc: 'Developed a full-stack weather app using NodeJS/Express for server-side logic and ReactJS/Handlebars for interactive frontend, delivering real-time weather data.',
    thumb: 'https://placehold.co/700x460/1e3a5f/ffffff?text=Weather+App',
    features: defaultFeatures
  },
  {
    id: 'cred',
    title: 'Cred Clone',
    category: 'Frontend',
    desc: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    cardDesc: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    thumb: 'https://placehold.co/700x460/2b1854/ffffff?text=CRED+Clone',
    features: defaultFeatures
  },
  {
    id: 'auth',
    title: 'User Authentication syst....',
    category: 'Full Stack',
    desc: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    cardDesc: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    thumb: 'https://placehold.co/700x460/0f766e/ffffff?text=Metrohm+Login',
    features: defaultFeatures
  },
  {
    id: 'todo',
    title: 'Todo List',
    category: 'Frontend',
    desc: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    cardDesc: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    thumb: 'https://placehold.co/700x460/7c2d12/ffffff?text=Work+In+Progress',
    features: defaultFeatures
  },
  {
    id: 'qr',
    title: 'QR Scanner',
    category: 'Frontend',
    desc: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    cardDesc: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    thumb: 'https://placehold.co/700x460/1e1b6e/ffffff?text=QR+Scanner',
    features: defaultFeatures
  },
  {
    id: 'playlist',
    title: 'Playlist Generator',
    category: 'Frontend',
    desc: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    cardDesc: 'Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.',
    thumb: 'https://placehold.co/700x460/0a0a0a/1db954?text=Playlist+Generator',
    features: defaultFeatures
  }
];
