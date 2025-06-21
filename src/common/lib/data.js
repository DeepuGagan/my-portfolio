import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import exploreEaseImg from '@/../public/images/ExploreEase-min.png';
import stitchEcommerceImg from '@/../public/images/Stitch-min.png';
import newslyNewsImg from '@/../public/images/NewslyWebsite-min.png';
import scribeBotImg from '@/../public/images/ScribeBot-min.png';
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

export const projectsData = [
  {
    title: 'ExploreEase',
    description:
      'AI-powered travel itinerary planner that generates fully personalized travel plans based on user preferences. Built with OpenAI, Next.js, and Node.js to deliver dynamic, user-centric experiences.',
    tags: ['React', 'Next.js', 'Node.js', 'OpenAI', 'Tailwind','SwiperJs','Framer Motion'],
    imageUrl: exploreEaseImg,
    link: 'https://github.com/DeepuGagan/ExploreEase-prototype',
  },
  {
    title: 'Stitch Ecommerce Website',
    description:
      'A modern, fully responsive fashion e-commerce platform featuring interactive 3D product models and seamless cart management. Built with React.js, Material-UI, Redux Toolkit, and Three.js.',
    tags: ['React.js', 'Material-UI', 'Redux Toolkit', 'Three.js', 'E-commerce'],
    imageUrl: stitchEcommerceImg,
    link: 'https://github.com/DeepuGagan/stitch-ecommerce-website',
  },  
  // {
  //   title: 'CodeSage',
  //   description:
  //     'Developed an intelligent Visual Studio Code extension using DeepSeek’s open-source tools. Enhances developer workflows by providing contextual code navigation, AI-assisted suggestions, and cross-repo insights.',
  //   tags: ['VS Code Extension', 'TypeScript', 'AI', 'DeepSeek', 'Open Source'],
  //   // imageUrl: codeSageImg,
  //   link: 'https://github.com/yourusername/codesage',
  // },
  {
    title: 'Newsly News Website',
    description:
      'A responsive news aggregator built with React and React Router that displays the latest news from multiple categories. Features intuitive navigation, dynamic loading, and an optimized UI for all devices.',
    tags: ['React', 'React Router', 'NewsData.io API', 'Responsive Design', 'News Aggregator'],
    imageUrl: newslyNewsImg,
    link: 'https://github.com/DeepuGagan/news-article-website',
  },
  {
    title: 'Scribe Bot',
    description:
      'AI-driven web app designed to streamline content creation for writers. Leverages OpenAI to generate structured article outlines, reducing brainstorming time and boosting productivity.',
    tags: ['React', 'Next.js', 'Node.js', 'OpenAI', 'Tailwind'],
    imageUrl: scribeBotImg,
    link: 'https://github.com/DeepuGagan/scribe-bot-prototype',
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
