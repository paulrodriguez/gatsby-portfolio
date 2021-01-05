import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Paul Rodriguez | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'welcome to the site of paul rodriguez, not the comedian.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'My name is',
  name: 'Paul Rodriguez',
  subtitle1: 'I am a Web Developer',
  subtitle2: 'Programmer',
  subtitle3: 'Software Developer',
  subtitle4: 'Software Engineer',
  subtitle5: 'Problem Solver',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a professional Web Developer with 6+ years of experience, mostly focusing on PHP for the Magento platform.',
  paragraphTwo: 'I have always been a curious individual, and I am always learn how anything works that might catch my eye. I can disect a problem, break it down into smaller problems, and solve each of those problem to build up a solution to the original problem.',
  paragraphThree: 'I want to help businesses solve their technological needs by coming up with solutions that can catapult their business to success.',
  resume: 'paul-rodriguez-resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'next-level-apparel.png',
    title: 'Next Level Apparel',
    info: 'Maintain and build new features for Next Level Apparel\'s B2B website build using the Magento 1x platform.',
    info2: 'Currently, I am helping the migration of the e-commerce store from Magento 1x to Magento 2.',
    info3:'All work done was while employed at Next Level Apparel.',
    url: 'https://www.nextlevelapparel.com/'
  },
  {
    id: nanoid(),
    img: 'tadashi-shoji.png',
    title: 'Tadashi Shoji',
    info: 'Lead efforts to change the User Interface of the e-commerce store. Developed RMA functionality to process and analyze returns.',
    info2: 'All work done was while employed at Tadashi Shoji.',
    url: 'https://www.tadashishoji.com/'
  },
  {
    id: nanoid(),
    img: 'feedmi.png',
    title: 'FeedMI',
    info: 'Italian restaurant locator built with custom MVC framework.',
    info2: 'Allows owners to manage their menu, business hours and amenities, while customers can search by location, transportation, city, price, etc.',
    info3:'All Work done was while employed at Emagid.',
    url: 'http://feedmi.it',
  },
  {
    id: nanoid(),
    img: 'metro-apartments-nyc.png',
    title: 'Metro Apartments NYC',
    info: 'Property listing locator for NYC-based company built with custom MVC framework',
    info2: 'Allows real estate agents to post rental and sale properties online. search properties by price, amenities, location, size. Ability to contact agent through website.',
    info3:'All Work done was while employed at Emagid.',
    url: 'http://www.metroaptnyc.com/'
  },
  {
    id: nanoid(),
    img:'israel-outdoors.png',
    title:'Israel Outdoors',
    info: 'Trip Service website, offering trips to individuals looking to visit Israel.',
    info2: 'Allows guests to sign up for an account, fill out their information for a chance to be selected for a trip. Admininstration side can see all signed up users and talks to an API that can gather more information about applicants.',
    info3:'All Work done was while employed at Emagid.',
    url:'https://www.israeloutdoors.com/'
  },
  {
    id: nanoid(),
    img:'ata-enterprises.png',
    title: 'ATA Enterprises',
    info: 'Real estate website with listing for rental properties in the Manhattan New York area.',
    info2: 'Allows to view rental listings by neighborhood, filter through a variety of criteria.',
    info3:'All Work done was while employed at Emagid.',
    url:'https://ataenterprises.com/'
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'Need help with your website?',
  btn: 'Contact Me',
  email: 'paul.d.rodriguez@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/pauldrodriguez',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/paul-rodriguez-a108259a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/paulrodriguez',
    },
    {
      id: nanoid(),
      name: 'hackerrank',
      url: 'https://www.hackerrank.com/laxpaul17',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
