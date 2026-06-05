import Project from '../models/Project.js';

/**
 * Portfolio Projects Data
 * All project information stored in a centralized location
 */

const projectsData = [
  new Project({
    id: 1,
    slug: "blaezi",
    title: "Blaezi",
    tagline: "Structured DSA Learning, Built for Consistency",
    shortDescription: "A full-stack DSA learning and problem-tracking platform with structured practice, progress tracking, and secure authentication.",
    fullDescription: `Blaezi is a production-ready, full-stack learning and problem-solving platform I architected and developed to help users systematically master Data Structures and Algorithms through structured practice and progress-driven workflows. The platform is designed as a complete digital ecosystem for managing DSA problem sets, tracking user progress, and delivering a focused learning experience tailored for long-term consistency and retention.

The backend is built using Node.js, Express.js, MongoDB, and Mongoose ODM, following a clean RESTful API architecture to efficiently manage complex relationships between users, problems, topics, and progress states. It implements JWT-based authentication with secure password hashing using bcrypt, enabling protected routes and persistent user sessions. Role-based access control allows administrators to manage problem sets, categories, and platform content while ensuring secure user-level access.

Blaezi supports comprehensive CRUD operations for DSA problems, topics, and difficulty levels, along with advanced filtering, searching, and pagination to maintain performance as the dataset scales. The backend architecture emphasizes modular controllers, middleware-driven error handling, request validation, and clear separation of concerns for long-term scalability and maintainability. User activity and problem completion data are stored and updated dynamically, enabling real-time tracking of solved problems, revision status, and learning consistency.

The frontend is developed using React 18 and Vite, delivering a high-performance single-page application with a clean and distraction-free interface optimized for focused learning. Modern UI libraries including shadcn/ui and Radix UI are used alongside Tailwind CSS to implement a structured, developer-centric design system. The application enables users to browse problems by topic, difficulty, and patterns, helping them follow a systematic DSA roadmap rather than unstructured practice.

Blaezi features protected routes with global authentication state management, skeleton loading states for improved perceived performance, and toast-based feedback for user actions. The platform is designed with extensibility in mind, allowing future additions such as analytics dashboards, daily revision planners, streak tracking, and personalized problem recommendations based on user performance.

Overall, Blaezi represents an enterprise-grade full-stack application demonstrating strong proficiency in backend system design, RESTful API development, authentication workflows, database modeling, and modern frontend architecture. The project focuses on solving a real learning problem faced by developers while maintaining production-quality code and scalability.`,
    featured: true,
    completionDate: "Jan 2026",
    technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "React.js", "Vite", "Tailwind CSS", "shadcn/ui", "Radix UI", "JWT", "bcrypt", "Axios"],
    imageColor: "bg-gradient-to-br from-purple-200 to-indigo-200",
    image: "/thumbnails/Blaezi.png",
    liveUrl: "https://blaezi-frontend.vercel.app/",
    githubUrl: "https://github.com/Bhaveshs1212/Blaezi",
    timeline: {
      started: { date: "Dec 23, 2025", label: "First commit" },
      published: { date: "Jan 21, 2026", label: "Public release" },
      lastUpdated: { date: "Jan 21, 2026", label: "Latest update" }
    },
    contributors: [
      {
        name: "Bhavesh Singh",
        role: "Full Stack Developer",
        github: "https://github.com/Bhaveshs1212",
        linkedin: "https://linkedin.com/in/bhaveshsingh"
      }
    ],
    keyFeatures: [
      "JWT-based authentication with bcrypt password hashing",
      "Protected routes with persistent user sessions",
      "Structured DSA problem management with topic and difficulty tagging",
      "Real-time problem completion and progress tracking",
      "Advanced filtering, search, and pagination for problem sets",
      "Role-based access control for admin-level operations",
      "Modular RESTful API architecture with scalable controllers",
      "Clean database modeling using Mongoose ODM",
      "Distraction-free learning UI built with Tailwind CSS and shadcn/ui",
      "Skeleton loaders and toast notifications for enhanced UX",
      "Pattern-based problem organization for systematic learning",
      "Extensible architecture for analytics, streaks, and revision planning"
    ]
  }),

  new Project({
    id: 2,
    slug: "gw-infra",
    title: "GW Infra Solutions",
    tagline: "Powering Sustainable Energy Through Digital Innovation",
    shortDescription: "A comprehensive full-stack solar energy management platform with CMS capabilities, role-based admin control, and dynamic content management.",
    fullDescription: `GW Infra Solutions is a production-ready, full-stack web platform I architected and developed for a solar energy solutions company, combining a robust content management system with modern web technologies to deliver a seamless user experience and powerful administrative capabilities. The platform serves as a complete digital ecosystem for managing solar installations, events, blogs, and customer engagement.

The backend is built with Node.js, Express.js, MongoDB, and Mongoose ODM, implementing a RESTful API architecture that handles complex data relationships across users, blogs, and events. It features JWT-based authentication with secure password hashing using bcrypt, role-based access control for administrative operations, and comprehensive CRUD operations with error handling middleware. The API supports dynamic content creation, image upload handling with Multer, data validation, and population of relational data for enriched responses. Integration with Stripe enables payment processing capabilities, while the modular controller-route architecture ensures scalability and maintainability.

The frontend is developed using React 18, Vite, and modern UI libraries including Radix UI and shadcn/ui, delivering a high-performance, responsive single-page application with advanced component architecture. It features a dual-layout system with separate User and Admin interfaces, comprehensive SEO optimization with React Helmet Async for meta management, and form handling using React Hook Form with Zod validation. The UI showcases animated components using Framer Motion, data visualization through Recharts, and an Apple-inspired design system implemented with Tailwind CSS.

Key features include a dynamic admin dashboard with analytics, blog and event management systems, contact form with validation, testimonial carousels using Keen Slider, and real-time content updates. The platform implements protected routes with authentication context, skeleton loading states for improved UX, and toast notifications for user feedback. Together, GW Infra Solutions represents an enterprise-grade web application demonstrating expertise in full-stack JavaScript development, RESTful API design, authentication flows, content management systems, responsive UI/UX design, and modern web performance optimization.`,
    featured: true,
    completionDate: "Nov 2024",
    technologies: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "React.js", "Vite", "Tailwind CSS", "Radix UI", "Framer Motion", "Stripe", "JWT", "Axios", "Multer"],
    imageColor: "bg-gradient-to-br from-green-200 to-blue-200",
    image: "/thumbnails/GwInfra.png",
    liveUrl: "https://gwinfrasolutions.com",
    githubUrl: "https://github.com/Bhaveshs1212/gwinfra",
    timeline: {
      started: { date: "Aug 18, 2024", label: "First commit" },
      published: { date: "Nov 15, 2024", label: "Official launch" },
      lastUpdated: { date: "Dec 23, 2025", label: "Latest update" }
    },
    contributors: [
      {
        name: "Chahat Kesharwani",
        role: "Full Stack Developer",
        github: "https://github.com/chahatkesh",
        linkedin: "https://linkedin.com/in/chahatkesharwani"
      }
    ],
    keyFeatures: [
      "JWT-based authentication with bcrypt password hashing",
      "Role-based access control for admin operations",
      "Dynamic blog management system with author population",
      "Event management with multi-image gallery support (up to 5 images)",
      "Comprehensive admin dashboard with analytics and data visualization",
      "Contact form with React Hook Form and Zod schema validation",
      "Dual-layout architecture separating user and admin interfaces",
      "Protected routes with authentication context management",
      "SEO optimization with dynamic meta tags using React Helmet Async",
      "Animated UI components using Framer Motion",
      "Responsive Apple-inspired design system with Tailwind CSS",
      "Data visualization dashboards using Recharts",
      "File upload handling with Multer middleware"
    ]
  }),

  new Project({
    id: 3,
    slug: "portfolio",
    title: "Portfolio Website",
    tagline: "A Developer Portfolio Built to Ship",
    shortDescription: "Personal portfolio showcasing projects, skills, unified GitHub + LeetCode activity, and a minimal editorial design — built with React and Vite.",
    fullDescription: `This portfolio is a production-ready single-page application designed and built from scratch to present my work, skills, and coding activity in a clean, professional way.

The frontend uses React 19 with Vite 7 and React Router 7 for fast routing across Home, Projects, Skills, About, and Connect pages. Tailwind CSS 4 powers a dark, editorial UI with subtle accents, responsive layouts, and consistent typography across every section.

A unified coding activity section combines GitHub and LeetCode contribution data into a single heatmap with diagonal split cells, year filters, and platform breakdowns. Project pages use a centralized data model with slug-based routing, featured work, tech badges, and detailed case-study content.

The site integrates resume download, Cal.com scheduling, social links, and a personal About section with football tournament media. It is deployed on Vercel with SPA routing and a LeetCode API proxy for production data fetching.`,
    featured: false,
    completionDate: "Jun 2026",
    technologies: ["JavaScript", "React.js", "Vite", "React Router", "Tailwind CSS", "Lucide React", "Vercel"],
    imageColor: "bg-gradient-to-br from-gray-900 to-black",
    image: "/thumbnails/Portfolio.png",
    liveUrl: null,
    githubUrl: "https://github.com/Bhaveshs1212/MyPortfolio",
    timeline: {
      started: { date: "2025", label: "Initial build" },
      published: { date: "Jun 2026", label: "Current version" },
      lastUpdated: { date: "Jun 2026", label: "Latest update" }
    },
    contributors: [
      {
        name: "Bhavesh Singh",
        role: "Full Stack Developer",
        github: "https://github.com/Bhaveshs1212",
        linkedin: "https://linkedin.com/in/bhavesh-singh12"
      }
    ],
    keyFeatures: [
      "Unified GitHub + LeetCode activity heatmap with year filters",
      "Slug-based project pages with featured work and tech stacks",
      "Editorial About and Connect pages with resume and scheduling links",
      "Responsive dark UI with Tailwind CSS 4",
      "Vercel deployment with SPA routing and API rewrites",
      "Personal life section with tournament photos and video"
    ]
  }),

  new Project({
    id: 4,
    slug: "ai-ui-generator",
    title: "Ryze UI Builder",
    tagline: "Structured dashboard assembly from a fixed component library",
    shortDescription: "Client project — a TypeScript dashboard builder that composes tables, buttons, and charts from a predefined library into structured UI layouts, with JSX output and live preview. No open-ended AI generation.",
    fullDescription: `Ryze UI Builder is a client-facing web application I built to help users assemble basic structured dashboards and UI layouts from a fixed set of approved components — not from open-ended AI image or UI generation.

The product works within strict boundaries: users choose from predefined building blocks such as tables, buttons, and charts, then combine them into coherent dashboard structures. A design brief input and control actions (generate, regenerate, modify, rollback) drive composition through the allowed library only, producing JSX code output and a live rendered preview side by side.

The interface is split into a control sidebar for prompts and actions, a code panel for generated JSX, and a live preview canvas — all in a dark, editorial dashboard layout. Version history lets users roll back to earlier compositions without leaving the workflow.

Built with TypeScript and React, deployed on Vercel at ai-ui-generator-amber.vercel.app. The emphasis throughout was predictable, client-safe UI construction: structured choices, readable code output, and immediate visual feedback — without generating arbitrary UI beyond the supplied component set.`,
    featured: false,
    completionDate: "Feb 2026",
    technologies: ["TypeScript", "React.js", "Vite", "Tailwind CSS", "Vercel"],
    imageColor: "bg-gradient-to-br from-orange-900/40 to-black",
    image: "/thumbnails/RyzeAIUI.png",
    liveUrl: "https://ai-ui-generator-amber.vercel.app/",
    githubUrl: "https://github.com/Bhaveshs1212/AI_UI_generator",
    timeline: {
      started: { date: "Feb 13, 2026", label: "Client kickoff" },
      published: { date: "Feb 2026", label: "Deployed to Vercel" },
      lastUpdated: { date: "Feb 19, 2026", label: "Latest update" }
    },
    contributors: [
      {
        name: "Bhavesh Singh",
        role: "Frontend Developer",
        github: "https://github.com/Bhaveshs1212",
        linkedin: "https://linkedin.com/in/bhavesh-singh12"
      }
    ],
    keyFeatures: [
      "Predefined component library — tables, buttons, charts, and dashboard blocks",
      "Structured UI assembly without open-ended AI UI generation",
      "Design brief input with generate, regenerate, modify, and rollback controls",
      "Generated JSX output with synchronized live preview",
      "Version history for iterating on dashboard layouts",
      "Dark dashboard UI with code and preview split view",
      "Client project deployed on Vercel"
    ]
  }),

  new Project({
    id: 5,
    slug: "tomato",
    title: "Tomato",
    tagline: "Satisfy Your Cravings with Tomato",
    shortDescription: "A comprehensive full-stack food delivery platform with real-time order management, secure payment processing, and dual-interface administration.",
    fullDescription: `Tomato is a full-stack food delivery application that enables users to browse menus, place orders, and track deliveries in real-time. The platform features a modern, responsive interface built with React.js and styled with Tailwind CSS for an optimal user experience across all devices.

The backend is powered by Node.js and Express.js, with MongoDB handling data persistence for menus, orders, users, and delivery tracking. The application integrates Stripe for secure payment processing, ensuring safe and reliable transactions. An admin dashboard provides restaurant owners with tools to manage menus, track orders, view analytics, and handle customer requests.

Key features include real-time order status updates, user authentication with JWT, cart management with session persistence, order history tracking, and restaurant management capabilities. The project demonstrates proficiency in building e-commerce applications, integrating payment gateways, implementing real-time features, and creating intuitive admin interfaces.`,
    featured: false,
    completionDate: "Jul 2024",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"],
    imageColor: "bg-gradient-to-br from-green-100 to-green-300",
    image: "/thumbnails/Tomato.png",
    liveUrl: "https://tomato.bhaveshs.me/",
    githubUrl: "https://github.com/Bhaveshs1212/food-delivery-app",
    timeline: {
      started: { date: "May 10, 2024", label: "Initial development" },
      published: { date: "Jul 25, 2024", label: "Production launch" },
      lastUpdated: { date: "Sep 15, 2024", label: "Payment updates" }
    },
    contributors: [
      {
        name: "Bhavesh Singh",
        role: "Full Stack Developer",
        github: "https://github.com/Bhaveshs1212",
        linkedin: "https://linkedin.com/in/bhaveshsingh"
      }
    ],
    keyFeatures: [
      "Real-time order tracking and management",
      "Secure Stripe payment integration",
      "Comprehensive admin dashboard",
      "JWT-based user authentication",
      "Responsive multi-device design",
      "Cart management with session persistence",
      "Order history and tracking",
      "Restaurant menu management",
      "Real-time order status updates"
    ]
  })
];

/**
 * Get all projects
 */
export const getAllProjects = () => projectsData;

/**
 * Get project by slug
 */
export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

/**
 * Get featured projects
 */
export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

/**
 * Get projects by technology
 */
export const getProjectsByTechnology = (tech) => {
  return projectsData.filter(project => 
    project.technologies.includes(tech)
  );
};

export default projectsData;
