import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  git,
  pinlogo,
  theceslogo,
  slhclogo,
  threejs,
  dmagazine,
  ocn,
  socialmediabackend,
  sqlecommercebackend,
  weatherapi,
  seoblog,
  github,
  penicon,
  stargazer,
  python,
  travelbuddy,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
    target: "",
    rel:"",
  },
  {
    id: "#work",
    title: "Work",
    target: "",
    rel:"",
  },
  {
    id: "https://drive.google.com/file/d/1Um2toDbWkU8vmoBwFTvUQMa7N1ITLv-V/view?usp=sharing",
    title: "Resume",
    target: '"_blank"',
    rel:'"noopener noreferrer"',
  },
  {
    id: "#contact",
    title: "Contact",
    target: "",
    rel:"",
  },

];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "Back-End Developer",
    icon: mobile,
  },
  {
    title: "Sr. Copywriter",
    icon: backend,
  },
  {
    title: "Seasoned Professional",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python, 
  }
];

const experiences = [
  {
    title: "Sr. Copywriter",
    company_name: "PIN Business Network",
    icon: pinlogo,
    iconBg: "#383E56",
    date: "Sep. 2016 - Feb. 2020",
    points: [
      "Pitch, coordinate, create, and deploy marketing copy for all enterprise-level clients ($1 million + ad spend).",
      "Produce write-ups, reviews, interviews, AP style news articles, and other long form pieces for our website that drew 250 - 500K unique visitors weekly.",
      "Implement and maintain best practice SEO strategy using various tools (SEM Rush, Yoast, Google Trends, Search Console).",
      "Analyze key campaign metrics to inform and direct overall content strategy.",
    ],
  },
  {
    title: "SEO Content Specialist",
    company_name: "The CE Shop",
    icon: theceslogo,
    iconBg: "#E6DEDD",
    date: "Feb. 2020 - Aug. 2022",
    points: [
      "Create, edit, and manage web content via CMS (Content Management System) with best practice SEO strategy at the forefront.",
      "Act as primary contributor to multi-award winning (Content Marketing Awards) to our corporate blog and site which garnered 1 million + views monthly.",
      "Responsible for developing, coordinating, and executing a growth focused content strategy. In the first 6 months, we saw a $60k increase in revenue — a figure that’s poised to grow exponentially.",
      "Produce ad copy for multi-faceted digital marketing campaigns, including those for social media, AdWords, and Google Display Network.",
      "Analyze key account metrics and communicate strategy shifts to internal stakeholders.",
    ],
  },
  {
    title: "Sr. Copywriter & Content Manager",
    company_name: "Swisslog Healthcare",
    icon: slhclogo,
    iconBg: "#261a3c",
    date: "Aug. 2022 - Current",
    points: [
      "Lead efforts to develop and execute a ground-up omni-channel content marketing strategy for our new product offerings in the healthcare robotics field",
      "Pilot the construction of a completely new site - helping code along the way and working with software developers in Germany.",
      "Collaborate across the organization with subject matter experts to take technical information and turn it into effective marketing literature like blogs, white papers, ebooks, infographics, brochures, and more.",
      "Perform in-depth SEO competitor analysis and guide our strategies around key areas of opportunity.",
      "Present monthly KPI analysis to c-suite and other internal stakeholders. In 2023 alone, we have seen 1000% growth in web traffic and added 4k+ new followers on LinkedIn.",
    ],
  },
];

const projects = [
  {
    name: "Python Powered Travel Planning App + AI",
    description:
      "Travel planning app built using Python, Flask, and OpenAI_API (and then some).",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI_API",
        color: "pink-text-gradient",
      },
    ],
    image: travelbuddy,
    icon: github,
    source_code_link:
      "https://github.com/Jerbert16/travel-buddy-powered-by-python",
  },
  {
    name: "E-Commerce Back-End",
    description:
      "E-commerce back-end architecture built using MySQL2, Express.js, Sequelize, and JavaScript.",
    tags: [
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Sequelize",
        color: "pink-text-gradient",
      },
    ],
    image: sqlecommercebackend,
    icon: github,
    source_code_link:
      "https://github.com/Jerbert16/e-commerce-back-end-refactor-wk-13",
  },
  {
    name: "Social Media Back-End",
    description:
      "Social media site back-end architecture built using MongoDB, Express.js, Mongoose, and JavaScript.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Mongoose",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: socialmediabackend,
    icon: github,
    source_code_link:
      "https://github.com/Jerbert16/no-sql-same-great-database-functionality",
  },
  {
    name: "Magazine Post",
    description:
      "A sponsored post I authored published in DMagazine. The goal was to inform and inspire perspective real estate professionals.",
    tags: [
      {
        name: "Magazine",
        color: "blue-text-gradient",
      },
      {
        name: "Real Estate",
        color: "green-text-gradient",
      },
      {
        name: "Short-Form",
        color: "pink-text-gradient",
      },
    ],
    image: dmagazine,
    icon: penicon,
    source_code_link:
      "https://www.dmagazine.com/sponsored/2020/03/the-big-ds-habanero-hot-real-estate-market-is-fertile-ground-for-aspiring-real-estate-agents/",
  },
  {
    name: "SEO-Focused Blog",
    description:
      "This blog was written with both the reader and SEO in mind. Today, it remains one of the strongest pieces in the real estate education space.",
    tags: [
      {
        name: "SEO",
        color: "blue-text-gradient",
      },
      {
        name: "Blog",
        color: "green-text-gradient",
      },
      {
        name: "Long-Form",
        color: "pink-text-gradient",
      },
    ],
    image: seoblog,
    icon: penicon,
    source_code_link:
      "https://www.theceshop.com/agent-essentials/real-estate-agent-encyclopedia/real-estate-agent-salary-california",
  },
  {
    name: "Product Review",
    description:
      "For several years, I was given vehicles on media loan to thoroughly evaluate and write reviews. Needless to say, it was a gas.",
    tags: [
      {
        name: "Media",
        color: "blue-text-gradient",
      },
      {
        name: "Review",
        color: "green-text-gradient",
      },
      {
        name: "Car-Nerd",
        color: "pink-text-gradient",
      },
    ],
    image: ocn,
    icon: penicon,
    source_code_link:
      "https://ourcommunitynow.com/automotive/the-2021-mercedes-amg-e53-coupe-will-make-you-a-smooth-criminal",
  },
];

export { services, technologies, experiences, projects };
