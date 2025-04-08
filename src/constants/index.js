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
  slhcblog,
  slhcwebcopy,
  theceshopebook,
  socialmediabackend,
  sqlecommercebackend,
  weatherapi,
  seoblog,
  github,
  penicon,
  stargazer,
  python,
  travelbuddy,
  passwordgenerator,
  readmegenerator,
  personalsite,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
    target: "",
    rel:"",
  },
  {
    id: "#experience",
    title: "Experience",
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
    id: "#contact",
    title: "Contact",
    target: "",
    rel:"",
  },
  {
    id: "https://drive.google.com/file/d/1jMY07cG_lfgKyGGja9eDVOxc7XP49Rdt/view?usp=sharing",
    title: "Resume",
    target: '"_blank"',
    rel:'"noopener noreferrer"',
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
      "Nurture relationships through regular client-facing meetings, education, and listening",
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
      "Spearhead a growth-focused content strategy. In the first 6 months, we saw a $60k increase in revenue.",
      "Produce ad copy for omni-channel marketing campaigns including sponsored content, PPC ads ($1+ million ad spend), social media posts, ebooks, and web pages.",
      "Analyze key account metrics and communicate strategy shifts to internal stakeholders.",
    ],
  },
  {
    title: "Sr. Copywriter & Content Manager",
    company_name: "Swisslog Healthcare",
    icon: slhclogo,
    iconBg: "#261a3c",
    date: "Aug. 2022 - Present",
    points: [
      "Lead efforts to develop and execute a ground-up omni-channel content marketing strategy for our new product offerings in the healthcare robotics field.",
      "Pilot the construction of a completely new site - helping code along the way and working with software developers in Germany.",
      "Engineer and customize all landing pages related to PPC efforts.",
      "Collaborate across the organization with subject matter experts to take technical information and turn it into effective marketing literature like blogs, white papers, ebooks, infographics, brochures, and more.",
      "Perform in-depth SEO competitor analysis and guide our strategies around key areas of opportunity.",
      "Present monthly KPI analysis to c-suite and other internal stakeholders. In 2023, we witnessed 1000% growth in web traffic and added 4k+ new followers on LinkedIn. In 2024, we grew 715.49% in organic keywords and our blog won a dotCOMM awards gold medal for content marketing.",
    ],
  },
];

const softwareProjects = [
  {
    name: "AI Travel Planning App",
    description:
      "A simple travel planning app built using Python, Flask, and OpenAI_API (and then some).",
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
    name: "Random Password Generator",
    description:
      "This application uses HTML, JavaScipt, and CSS to help make random ultra-secure passwords.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: passwordgenerator,
    icon: github,
    source_code_link:
      "https://github.com/Jerbert16/operation-password-generator-refactoring-week-3?tab=readme-ov-file",
  },
  {
    name: "README Generator Tool",
    description:
      "Writing READMEs in markup can be a pain. This Node.js-powered app makes it easy for devs.",
    tags: [
      {
        name: "README",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Inquirer",
        color: "pink-text-gradient",
      },
    ],
    image: readmegenerator,
    icon: github,
    source_code_link:
      "https://github.com/Jerbert16/node-JS-README-generator-tool/tree/main",
  },  {
    name: "My Personal Site (AKA This Site)",
    description:
      "My site uses Three.js, React, and Tailwind CSS to create an engaging UX, complete with 3D elements.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "3D-Elements",
        color: "pink-text-gradient",
      },
    ],
    image: personalsite,
    icon: github,
    source_code_link:
      "https://github.com/Jerbert16/jeff-erbert-portfolio-react",
  },
]

  const writingSamples = [
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
      "https://web.archive.org/web/20200408081739/https://www.dmagazine.com/sponsored/2020/03/the-big-ds-habanero-hot-real-estate-market-is-fertile-ground-for-aspiring-real-estate-agents/",
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
      "For several years, I was given vehicles from the manufacturer to thoroughly evaluate and write reviews. Needless to say, it was a gas.",
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
  {
    name: "Trending Topic Blog",
    description: "Even though this blog has search value, it was created with the intent to share on social and give sales a trendy conversation starter.",
    tags: [
      {
        name: "Trending",
        color: "blue-text-gradient",
      },
      {
        name: "Short-Blog",
        color: "green-text-gradient",
      },
      {
        name: "Listicle",
        color: "pink-text-gradient",
      },
    ],
    image: slhcblog,
    icon: penicon,
    source_code_link:
      "https://www.swisslog-healthcare.com/en-us/company/new-blog-overview-page/5-areas-where-ai-could-impact-hospital-operations",
  },
  {
    name: "eBook",
    description: "When paired with design, the eBook can be a powerful and fun medium that permits its creators to go in depth while exercising their creativity.",
    tags: [
      {
        name: "eBook",
        color: "blue-text-gradient",
      },
      {
        name: "Long-Form",
        color: "green-text-gradient",
      },
      {
        name: "Design-Matters",
        color: "pink-text-gradient",
      },
    ],
    image: theceshopebook,
    icon: penicon,
    source_code_link:
      "https://drive.google.com/file/d/1d59uKPsgE3_wQ9_wl7-UunDYwa76s4b9/view?usp=sharing",
  },
  {
    name: "Web Copy (Draft)",
    description: "This is a draft of the web copy that eventually became the language featured on the Swisslog-Healthcare.com home page.",
    tags: [
      {
        name: "Web-Copy",
        color: "blue-text-gradient",
      },
      {
        name: "Home-Page",
        color: "green-text-gradient",
      },
      {
        name: "Short-Form",
        color: "pink-text-gradient",
      },
    ],
    image: slhcwebcopy,
    icon: penicon,
    source_code_link:
      "https://drive.google.com/file/d/1Y7bvRQuF0tjHtS8AesZ0n4ldbdMqosUi/view?usp=sharing",
  },
];

export { services, technologies, experiences, softwareProjects, writingSamples };
