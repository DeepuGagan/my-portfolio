import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
];

// export const experiencesData = [
//   {
//     title: 'Trustsoft s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Providing services in the field of information technology services, including administration servers, cloud services, information systems and software development.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Oct 2024 - Present',
//   },
//   {
//     title: 'Granton s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Oct 2024 - Present',
//   },
//   {
//     title: 'WhirrCrew s.r.o.',
//     location: 'Prague, Czechia',
//     description:
//       'Front-end Developer. Responsible for implemntation of accessible and interactive interface. Working on various projects with AI integration.',
//     icon: React.createElement(BriefcaseBusinessIcon),
//     date: 'Jun 2024 - Present',
//   },
//   {
//     title: 'NAU',
//     location: 'Kyiv, Ukraine',
//     description: `Bachelor's degree in Cybersecurity. The faculty of Cyber Security and Software Engineering.`,
//     icon: React.createElement(BookIcon),
//     date: 'Sep 2022 - Jun 2024',
//   },
// ];

export const experiencesData = [
  {
    title: 'Dotdash Meredith',
    location: 'Software Engineer I',
    description:
    'Architected backend systems powering content for millions, enhanced accessibility with automated RSS feed integration and PDF export features, and enforced a scalable data retention policy. Spearheaded SEO-focused document workflows and led a team of six during key transitions. Drove technical interviews and upskilled 30+ professionals through JavaScript training.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Apr 2023 - Present',
  },
  {
    title: 'Dotdash Meredith',
    location: 'Associate Software Development Engineer',
    description:
    'Streamlined reporting through automated cron jobs, built reusable React components, and optimized dashboard performance for seamless user interaction. Contributed to efficiency and scalability across high-traffic platforms.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Apr 2022 - Mar 2023',
  },
  {
    title: 'Dotdash Meredith',
    location: 'Software Engineering Intern',
    description:
    'Participated in full-stack development of internal dashboards, collaborated in code reviews, and adopted best practices from senior engineers to sharpen code quality and delivery.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Sep 2021 - Mar 2022',
  },
  {
    title: 'Finflux',
    location: 'Web Developer Intern',
    description:
    'Enhanced a React-based banking dashboard by developing dynamic components and supporting test automation. Focused on clean UI delivery and improved developer collaboration.',
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jul 2021 - Sep 2021',
  },
];

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

// export const projectsData = [
//   {
//     title: 'Audit Master',
//     description: `Audit Master is a platform that streamlines the process of obtaining legal expertise and resources. It automates tasks like GAP Analysis, GAP Reporting, Due Diligence & more.`,
//     tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'SCRUM Methodology'],
//     imageUrl: auditMasterImg,
//     link: 'https://auditmaster.ai/',
//   },
//   {
//     title: 'Demo Automation of accounting documents processing',
//     description:
//       'Upload any receipt or invoice (even a crumpled one from your pocket) and watch our AI accurately extract its data.',
//     tags: ['TypeScript', 'React', 'Docker', 'Next.js', 'GraphQL', 'Tailwind'],
//     imageUrl: accountingImg,
//     link: 'https://demo.grantonai.cz/',
//   },
//   {
//     title: 'FileDrive',
//     description:
//       'A platform for decentralized file storage with robust user management.',
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'Convex',
//       'Clerk',
//       'Shadcn',
//       'Tailwind',
//     ],
//     imageUrl: filedriveImg,
//     link: 'https://github.com/bbyc4kes/file-drive',
//   },
//   {
//     title: 'Portfolio',
//     description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'Framer Motion',
//       'Cloudinary',
//       'React Email',
//       'Tailwind',
//     ],
//     imageUrl: portfolioImg,
//     link: 'https://github.com/bbyc4kes/portfolio',
//   },

//   {
//     title: 'Surge',
//     description:
//       'Service that allows users to build and manage their own websites with integrated payment processing.',
//     tags: [
//       'React',
//       'TypeScript',
//       'Next.js',
//       'MySQL',
//       'Clerk',
//       'Stripe Connect',
//       'Shadcn',
//       'Tailwind',
//     ],
//     imageUrl: surgeImg,
//     link: 'https://github.com/bbyc4kes/surge',
//   },
// ];

export const projectsData = [
  {
    title: 'ExploreEase',
    description:
      'AI-powered travel itinerary planner that generates fully personalized travel plans based on user preferences. Built with OpenAI, Next.js, and Node.js to deliver dynamic, user-centric experiences.',
    tags: ['React', 'Next.js', 'Node.js', 'OpenAI', 'Tailwind'],
    // imageUrl: exploreEaseImg,
    link: 'https://github.com/yourusername/exploreease', // Replace with actual link
  },
  {
    title: 'Scribe Bot',
    description:
      'AI-driven web app designed to streamline content creation for writers. Leverages OpenAI to generate structured article outlines, reducing brainstorming time and boosting productivity.',
    tags: ['React', 'Next.js', 'Node.js', 'OpenAI', 'Tailwind'],
    // imageUrl: scribeBotImg,
    link: 'https://github.com/yourusername/scribe-bot', // Replace with actual link
  },
  {
    title: 'CodeSage',
    description:
      'Developed an intelligent Visual Studio Code extension using DeepSeek’s open-source tools. Enhances developer workflows by providing contextual code navigation, AI-assisted suggestions, and cross-repo insights.',
    tags: ['VS Code Extension', 'TypeScript', 'AI', 'DeepSeek', 'Open Source'],
    // imageUrl: codeSageImg,
    link: 'https://github.com/yourusername/codesage', // Replace with actual link
  },
  {
    title: 'People Comics',
    description:
      'Creative web and mobile app that transforms user prompts into unique, shareable comics using DALL·E, Midjourney, and custom AI pipelines. Built with React, Node.js, and Ionic for cross-platform compatibility.',
    tags: ['React', 'Node.js', 'DALL·E', 'Midjourney', 'Ionic', 'AI'],
    // imageUrl: peopleComicsImg,
    link: 'https://github.com/yourusername/people-comics', // Replace with actual link
  },
]


export const skillsData = [
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Vite', '/svgs/vite-svgrepo-com.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['Bootstrap', '/svgs/bootstrap-4-logo-svgrepo-com.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express', '/svgs/express-original.svg'],
  ['Api gateway(crud)', '/svgs/api-settings-svgrepo-com.svg'],
  // ['Shadcn', '/svgs/shadcnui.svg'],
  // ['Headless', '/svgs/brand-headlessui.svg'],
  // ['Prisma', '/svgs/file-type-light-prisma.svg'],
  ['ES6/7/8', '/svgs/es6-svgrepo-com.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['ElasticSearch', '/svgs/elasticsearch-logo-svgrepo-com.svg'],
  ['Serverless', '/svgs/serverless-svgrepo-com.svg'],
  ['AWS', '/svgs/aws-svgrepo-com.svg'],
  ['Lambda', '/svgs/aws-lambda-svgrepo-com.svg'],

  // ['PostgreSQL', '/svgs/postgresql.svg'],
  // ['MySQL', '/svgs/MySQL.svg'],
  // ['Tanstack Query', '/svgs/react-query-seeklogo.svg'],
  // ['Tanstack Table', '/svgs/db-table-svgrepo-com.svg'],
  // ['Cloudinary', '/svgs/cloudinary.svg'],
  // ['Golang', '/svgs/golang.svg'],
  // ['Docker', '/svgs/Docker.svg'],
  // ['Clerk', '/svgs/clerk.svg'],
  // ['Axios', '/svgs/axios.svg'],

  ['Mocha', '/svgs/mocha-svgrepo-com.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['Bitbucket', '/svgs/bitbucket-svgrepo-com.svg'],
  ['Jira', '/svgs/jira-svgrepo-com.svg'],
  ['', '/svgs/etc.svg'],
];
