import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandBehance,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons-react';

export const siteName = 'Mahanthi';

export const navLinks = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Projects', page: 'projects' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Contact', page: 'contact' },
] as const;

export const socialIcons = [
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandBehance,
  IconBrandLinkedin,
  IconBrandGithub,
];

export const hero = {
  greeting: "Hey There I'm",
  name: siteName,
  subtitleLine1: 'Currently Studying Computer Science',
  subtitleLine2: 'and Engineering',
  ghostLine1: 'DESIGNER  UI  DESIGNER  UI  DESIGNER',
  ghostLine2: 'AND  DEVELOPER  FRONTEND  DEVELOPER',
  heroSocials: [
    { icon: IconBrandLinkedin, url: '#' },
    { icon: IconBrandGithub, url: '#' },
  ],
};

export const homeAbout = {
  title: 'About',
  text: "Hi there! I'm Mahanthi, a third-year Computer Science student at SRM Institute with a passion for crafting user-centric experiences. I specialize in UI/UX design, front-end development, and graphic design, with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, QML, and C++. I thrive on collaboration and bring experience in agile scrum methodologies. Beyond coding, I enjoy photography, graphic design, and exploring music. Let's connect and bring your digital visions to life",
  buttonLabel: 'More...',
};

export const recentProjects = {
  title: 'Recent Projects',
  seeAllLabel: 'See all',
};

export const getInTouch = {
  title: 'Get in Touch',
  text: 'If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas .',
  followMeLabel: 'Follow me on',
  buttonLabel: 'Contact Me',
};

export const aboutPage = {
  title: 'ABOUT',
  portrait: {
    src: 'https://placehold.net/10.png',
    alt: 'Mahanthi portrait',
  },
  bio: [
    { text: "I'm a Computer Science student at ", highlight: false },
    { text: 'SRM Institute of Science and Technology.', highlight: true },
    { text: ' My passion lies in building user-friendly solutions that enhance overall user experiences. I am currently focused on', highlight: false },
    { text: ' React Native, Expo, Firebase, and React', highlight: true },
    { text: ', leveraging these technologies to create responsive and functional applications. One of my ongoing projects is Rescue Paws, a mobile app designed to facilitate the rescue and adoption of stray and pet dogs. The app will soon be published on the ', highlight: false },
    { text: 'Play Store and App Store', highlight: true },
    { text: ', and it incorporates AI-driven features to guide users through the adoption process. In addition to app development, I\'ve led the design and development of platforms like the GitHub Community SRM website, which serves as an all-in-one platform for the community. I\'ve also organized and managed events such as hackathons and workshops, mentoring others in UI/UX and graphic design. I thrive in ', highlight: false },
    { text: 'Agile Scrum environments', highlight: true },
    { text: ' and believe collaboration and teamwork are essential to delivering successful projects. I\'m always eager to work on impactful projects that challenge me to grow while also contributing to meaningful outcomes. So, whether you\'re', highlight: false },
    { text: ' looking for a dedicated developer, a creative designer, or a collaborative team member,', highlight: true },
    { text: " I'm here to help bring ideas to life. Let's connect and create innovative solutions together!", highlight: false },
  ],
  resumeButton: 'Download Resume',
};

export const projectsPage = {
  title: 'PROJECTS',
};

export const projectDetail = {
  backLabel: 'Back',
  featuresTitle: 'Main Features',
  demoLabel: 'Demo',
  gitHubLabel: 'GitHub',
};

export const galleryPage = {
  title: 'Gallery',
};

export const contactPage = {
  title: 'CONTACT',
  heading: 'Get in Touch',
  text: 'If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas .',
  form: {
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    submitLabel: 'Send',
    successMessage: "Thanks! I'll get back to you soon.",
  },
};

export const footer = {
  taglineParts: [
    { text: 'Designing the ', className: 'text-gray-500' },
    { text: 'extraordinary', className: 'text-lime' },
    { text: 'one ', className: 'text-gray-500' },
    { text: 'pixel', className: 'text-lime' },
    { text: ' at a time.', className: 'text-gray-500' },
  ],
  copyrightPrefix: 'Portfolio v2.3',
};
