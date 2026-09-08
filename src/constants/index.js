import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  Perception,
  tesla,
  shopify,
  carrent,
  collabspace,
  rag,
  jobit,
  vaibhav,
  shivangi,
  aviral,
  tripguide,
  docflow,
  nextjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UX Designer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX Designer",
    company_name: "Perception.ai",
    icon: Perception,
    iconBg: "#383E56",
    date: "January 2024-November 2024",
    points: [
      "Conducted user research and analysis to understand user needs and behaviors of Visually impaired users.",
      "Created wireframes, mockups, and prototypes to visualize design concepts.",
      "Designed intuitive and visually appealing user interfaces for the organization's website.",
      "Developed user flows, information architecture, and interaction design solutions for Visually impaired users.",
      "Conducted usability testing and iterated designs based on visually impaired user feedback.",
      "Created content for Visually Impaired users for Productivity tools."
    ],
  },
  
  {
    title: "UI/UX Designer Intern",
    company_name: "Perception.ai",
    icon: Perception,
    iconBg: "#383E56",
    date: "September 2023-January 2024",
    points: [
      "Conducted user research and analysis to understand user needs and behaviors of Visually impaired users.",
      "Created wireframes, mockups, and prototypes to visualize design concepts.",
      "Designed intuitive and visually appealing user interfaces for the organization's website.",
      "Developed user flows, information architecture, and interaction design solutions for Visually impaired users.",
      "Conducted usability testing and iterated designs based on visually impaired user feedback.",
      "Created content for Visually Impaired users for Productivity tools."
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "“Kaustubh is a thoughtful, user-focused UX Designer with strong visual skills and attention to detail. He turns complex ideas into intuitive experiences and collaborates effectively with development teams.”",
    name: "Shivangi Sharma",
    designation: "Manager",
    company: "Perception.ai, Presently in Capgemini",
    image: shivangi,
  },
  {
    testimonial:
      "“Kaustubh is a creative and user-focused UX Designer with a strong eye for detail. He consistently turns ideas into intuitive, engaging, and user-friendly experiences”",
    name: "Aviral Kumar Goel",
    designation: "CEO",
    company: "Perception.ai",
    image: aviral,
  },
  {
    testimonial:
      "“Kaustubh is a skilled UX Designer with strong expertise in accessibility. His ability to design intuitive experiences for visually impaired users sets him apart.”",
    name: "Vaibhav Ganatra",
    designation: "CTO",
    company: "Perception.ai",
    image: vaibhav,
  },
];

const projects = [
  {
    name: "CollabSpace",
    description:
      "CollabSpace is a collaborative workspace designed to help teams communicate, manage tasks, share ideas, and work together efficiently. It brings essential collaboration tools into one streamlined platform, making teamwork more organized, transparent, and productive.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Ollama mcp",
        color: "pink-text-gradient",
      },
    ],
    image: collabspace,
    source_code_link: "https://github.com/kaustubh99j/kaustubh99j",
  },
  {
    name: "RAG Analysis using RAGAS",
    description:
      "Improved a Retrieval-Augmented Generation (RAG) system using RAGAS evaluation metrics to identify retrieval and response-quality issues. Iteratively optimized the pipeline to improve context relevance, faithfulness, and overall answer accuracy.",
    tags: [
      {
        name: "Retrieval Augmented Generation",
        color: "blue-text-gradient",
      },
      {
        name: "Vector Database",
        color: "green-text-gradient",
      },
      {
        name: "RAGAS",
        color: "pink-text-gradient",
      },
    ],
    image: rag,
    source_code_link: "https://github.com/kaustubh99j/RAG-based-Project",
  },
  {
    name: "DocFlow",
    description:
      "DocFlow is a scalable document processing system built with BullMQ workers and asynchronous job processing. It efficiently handles resource-intensive document tasks through background jobs, improving performance, reliability, and responsiveness.",
    tags: [
      {
        name: "BullMQ",
        color: "blue-text-gradient",
      },
      {
        name: "Job Queues",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: docflow,
    source_code_link: "https://github.com/kaustubh99j/Bull-MQ-based-backend-workers",
  },
];

export { services, technologies, experiences, testimonials, projects };