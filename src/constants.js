export const PAGES = [
  { title: "Home", path: "/" },
  { title: "About Me", path: "/about" },
  { title: "My Projects", path: "/projects" },
  { title: "Contact Me", path: "/contact" },
];
export const FOOTER_LINKS = [
    {
      title: "LinkedIn",
      iconName: "linkedin",
      href: "https://www.linkedin.com/in/michalgordon/",
      download: false,
    },
    {
      title: "GitHub",
      iconName: "github",
      href: "https://github.com/Michalgordon",
      download: false,
    },
    {
      title: "Resume",
      iconName: "file-download-solid",
      href: "./assets/files//Resume - Michal Gordon.pdf",
      download: true,
    },
]
export const ORBIT_ICONS = [
  { iconName: "vuejs", className: "w-6 laptop:w-10" },
  { iconName: "react", className: "w-3 laptop:w-6" },
  { iconName: "html5", className: "w-4 laptop:w-8" },
  { iconName: "node-js", className: "w-3 laptop:w-6" },
  { iconName: "css3-alt", className: "w-5 laptop:w-9" },
  { iconName: "js-square", className: "w-4 laptop:w-8" },
];
export const SKILLS = [
    { title: "Vue", iconName: "vuejs", info: "my comfort zone!" },
    { title: "React", iconName: "react", info: "Can't wait to dive deeper!" },
    { title: "HTML", iconName: "html5" ,info: "A major building block" },
    { title: "CSS", iconName: "css3-alt" , info: "I love making things look beautiful"},
    { title: "JavaScript", iconName: "js-square", info: "I mean... what can I say?" },
    { title: "Node", iconName: "node-js" , info: "Backend and frontend services" },
    { title: "REST api", iconName: "cog-solid", info: "implemented and consumed" },
    { title: "Python", iconName: "python", info: "Backend, automation, and many school projects" },
    { title: "AWS", iconName: "aws", info: "DynamoDB, S3, EC2 and AWS Lambda" },
    { title: "Jest", iconName: "jest-js", info: "Investing in testing" },
    { title: "GitHub", iconName: "github", info: "as part of a team and for my own projects" },
    { title: "Figma", iconName: "figma", info: "where UI components are born" },
    { title: "Jira", iconName: "jira", info: "for an agile team that moves FAST" },
    { title: "Tailwind", iconName: "tailwindcss", info: "Let's go Utility classes!" },
    { title: "Make", iconName: "make", info: "Automated complex workflows" },
    { title: "Framer Motion", iconName: "framer-logo", info: "Check out my website's page transitions!" },

  ];
  export const SOFT_SKILLS =[
    { title: "Part of the ship, part of the crew", iconName: "ship-solid", info: "I love being a part of something, and thrive when i work with others" },

  ]
  export const RANDOM_FACTS = [
    {title: "I drink black tea with milk and honey", iconName: "mug-hot-solid"},
    {title: "Cilantro is my favorite", iconName: "pagelines"},
    {title: "Nature is my happy place", iconName:"mountain-solid"},
    {title: "I'm a loud sneezer", iconName: "volume-up-solid"},
    {title: "Spaceships, mag-boots and anything sci-fi are my jam" , iconName: "robot-solid" },
    {title: "I always eat too many cookies", iconName: "cookie-bite-solid"},
    {title: "Going to a museum is a fun activity for me", iconName: "portrait-solid"},
    {title: "My Phone battery is always low", iconName: "battery-empty-solid"},
    {title: "I love taking baths", iconName: "bath-solid"},


  ]
  export const EXPERIENCE_LIST = [
    {
      timeLine: "2023 - present",
      location: "Remote",
      company: "SafeHeart",
      href: "https://www.safeheartil.com/en",
      title: "Volunteer Automation Developer",
      info: ["Assisting in developing the architecture for a Monday.com workflow", "Automating complex scenarios in Monday.com using Make (integromat)", ],
      imgSrc: "",
      iconName: "heartbeat-solid",
    },
    {
      timeLine: "2020 - 2022",
      location: "Tel Aviv, Israel",
      company: "Paradox Inc.",
      href: "https://www.paradox.ai/",
      title: "Full Stack developer",
      info: ["Led a Vuex refactoring project maximizing efficiency and reactivity",
     "Led the development of a successful Chrome extension using Whatsapp’s API",
      "Created modular, reusable UI components using HTML, CSS and JavaScript",
      "Implemented and consumed REST APIs using NodeJS and Python",
      "Worked with AWS services such as DynamoDB, EC2 and S3",
      "Participated in code reviews, peer programming and peer planning",
      "Developed unit tests for complex workflows using Jest and Cypress"],
      iconName: "paradox",
    },
    {
      timeLine: "2019 - 2020",
      location: "Tel Aviv, Israel",
      company: "Cybint Solutions",
      href: "https://www.linkedin.com/company/starter-digital-israel",
      title: "Content editor & QA",
      info: ["Edited, uploaded and QA'ed educational content"],
      iconName: "cybint-owl",
    },
    {
      timeLine: "2019 - 2020",
      location: "Jerusalem, Israel",
      company: "The Digital starter",
      href: "https://www.linkedin.com/company/starter-digital-israel",
      title: "Volunteer Web Designer",
      info: ["Designed web pages for a cooperative initiative between “Atidim”, Google and Wix for the development of peripheral businesses in the Jerusalem area."],
      iconName: "wix",
    },
    {
      timeLine: "2017 - 2020",
      location: "Jerusalem, Israel",
      company: "Hebrew University",
      href: "https://matar.cs.huji.ac.il/he/",
      title: "B.A - Internet and Society",
      info: ["Alumni of the ‘Internet and Society’ honors program, which combined computer science with social sciences."],
      iconName: "scroll-solid",
    },
    {
      timeLine: "2010 - 2013",
      location: "Israel Defense Forces",
      company: "Air Defense command",
      title: "Staff Sergeant",
      info: ["Completed combat training with Rifleman 03 certification","Specialized in the HAWK and Arrow missile systems"],
      iconName: "rocket-solid",
    },
    {
      timeLine: "2004 - 2010",
      location: "Kibutz Ein Shemer, Israel",
      company: "Mevo'ot Iron high school",
      href: "https://www.mevoot-eron.com/",
      title: "Student",
      info: ["Majored in computer science and cinematography", "Competed on the school's volleyball team"],
      iconName: "book-solid",
    },
  ];
  export const PROJECTS = [
    {
      title: "WhatsApp Extension",
      imgSrc: "/assets/images/whatsapp-extension.png",
      links: [
        {
          title: "Geektime",
          iconName: "external-link-alt-solid",
          href: "https://www.geektime.co.il/chrome-whatsapp-messages/?fbclid=IwAR01mMmlvUkjOMvnK0bSllA6PLHkm2dxmXuLoe3axdjPR-tBpmLqoLPOpKs",
          download: false,
        },
        {
          title: "Store",
          iconName: "chrome",
          href: "https://chromewebstore.google.com/detail/olivia-for-recruiters/ldcjdglgbpfldnfebjkejpppfiedkkec?hl=en-GB",
          download: false,
        },
      ],
      skills: [
        { iconName: "js-square", tooltip: "Javascript"  },
        { iconName: "puzzle-piece-solid", tooltip: "Chrome Extension" },
        { iconName: "whatsapp", tooltip: "Whatsapp API" },
      ],
      info: "A chrome extension using WhatsApp API written about in Geektime magazine!",
    },
    {
      title: "botanica",
      imgSrc: "/assets/images/botanica.png",
      links: [
        {
          title: "GitHub",
          iconName: "github",
          href: "https://github.com/Michalgordon/Botanica",
          download: false,
        },
        {
          title: "Website",
          iconName: "external-link-alt-solid",
          href: "https://amazing-hotteok-99b058.netlify.app/",
          download: false,
        },
        {
          title: "Figma",
          iconName: "figma",
          href: "https://www.figma.com/file/aKhZMcWnrJaaVVJ7iCdm2D/Botanica---Confrence?type=design&mode=design&t=1cxyzr8mr8Z1fHlp-0",
          download: false,
        },
      ],
      skills: [
        { iconName: "react", tooltip: "react" },
        { iconName: "js-square", tooltip: "Javascript"  },
        { iconName: "html5", tooltip: "HTML" },
        { iconName: "css3-alt", tooltip: "CSS" },
        { iconName: "tailwindcss", tooltip: "tailwind" },
      ],
      info: "A responsive website I developed using a friend's design!",
    },

    {
      title: "Personal Portfolio",
      imgSrc: "/assets/images/personal-website.png",
      links: [
        {
          title: "Github",
          iconName: "github",
          href: "https://github.com/Michalgordon/michalgordon.github.io",
          download: false,
        },
      ],
      skills: [
        { iconName: "react", tooltip: "react" },
        { iconName: "js-square", tooltip: "Javascript"  },
        { iconName: "html5", tooltip: "HTML" },
        { iconName: "css3-alt", tooltip: "CSS" },
        {iconName: "framer-logo", tooltip: "Framer Motion"},
        { iconName: "tailwindcss", tooltip: "tailwind" },
      ],
      info: "My personal website that I designed and implemented!",
    },
  ];