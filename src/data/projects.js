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
    image: "/thumbnails/blaezi.png",
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
    image: "/thumbnails/gw-infra.png",
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
    slug: "openlearn",
    title: "OpenLearn",
    tagline: "Democratising Learning, Transforming Futures",
    shortDescription: "A full-stack cohort learning platform with gamified progression and role-based collaboration built using TypeScript and React 19.",
    fullDescription: `OpenLearn is a comprehensive cohort-based learning platform that revolutionizes online education through gamification, role-based access control, and collaborative learning environments. Built with modern TypeScript and React 19, the platform features a sophisticated hierarchical RBAC system with 5 levels ranging from Grand Pathfinder to Luminary, enabling structured mentorship and progression tracking.

The platform implements cohort-based learning with specialization leagues, allowing learners to join specific learning paths and compete within their peer groups. Gamification elements include badges, leaderboards, and progress tracking to maintain engagement and motivation. The assignment submission system includes grading workflows and detailed feedback mechanisms. Security is ensured through OTP-based email verification and JWT authentication.

The platform supports real-time collaboration features, discussion forums, and peer review systems, creating an interactive and engaging learning experience. OpenLearn demonstrates expertise in TypeScript development, complex state management, authentication systems, and building scalable educational platforms.`,
    featured: false,
    completionDate: "Nov 2024",
    technologies: ["TypeScript", "Node.js", "Express.js", "Prisma ORM", "PostgreSQL", "React.js"],
    imageColor: "bg-yellow-400",
    image: "/thumbnails/openlearn.png",
    liveUrl: "https://openlearn-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/openlearn",
    timeline: {
      started: { date: "Sep 1, 2024", label: "Initial development" },
      published: { date: "Nov 20, 2024", label: "Beta launch" },
      lastUpdated: { date: "Jan 10, 2026", label: "Latest features" }
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
      "Hierarchical RBAC (5 levels: Grand Pathfinder → Luminary)",
      "Cohort-based learning with specialization leagues",
      "Gamified learning with badges, leaderboards, and progress",
      "Assignment submission, grading, and feedback workflows",
      "OTP-based email verification and JWT authentication",
      "Real-time collaboration and discussion forums",
      "Peer review and mentorship systems",
      "Progress tracking and analytics dashboard",
      "Interactive learning materials with rich media support"
    ]
  }),

  new Project({
    id: 4,
    slug: "webmark",
    title: "Webmark",
    tagline: "Master Your Bookmarks with Webmark",
    shortDescription: "A full-stack bookmark management solution for organizing and categorizing web links with advanced search and cross-device sync.",
    fullDescription: `Webmark is a sophisticated bookmark management platform designed to help users organize, categorize, and efficiently manage their web bookmarks. The application features an intuitive drag-and-drop interface for easy organization, advanced search and filtering capabilities, and a tag-based categorization system.

Users can save bookmarks with one-click functionality and enjoy cross-device synchronization for seamless access across multiple platforms. The platform is built with React.js for a responsive frontend experience, Node.js backend for robust API handling, and MongoDB with Redis for optimal data storage and caching.

The application implements real-time updates, folder hierarchies, and collaborative bookmark sharing features. Webmark showcases expertise in building productive tools with excellent UX, implementing efficient search algorithms, and handling real-time data synchronization.`,
    featured: false,
    completionDate: "Oct 2024",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Redis"],
    imageColor: "bg-white",
    image: "/thumbnails/webmark.png",
    liveUrl: "https://webmark-app.vercel.app",
    githubUrl: "https://github.com/yourusername/webmark",
    timeline: {
      started: { date: "Jul 15, 2024", label: "Project kickoff" },
      published: { date: "Oct 10, 2024", label: "Public release" },
      lastUpdated: { date: "Dec 15, 2025", label: "Feature updates" }
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
      "Intuitive drag-and-drop organization",
      "Advanced search and filtering",
      "Tag-based categorization system",
      "One-click bookmark saving",
      "Cross-device synchronization",
      "Folder hierarchies and nested organization",
      "Collaborative bookmark sharing",
      "Browser extension integration",
      "Bulk import/export functionality"
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
    image: "/thumbnails/tomato.png",
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
  }),

  new Project({
    id: 6,
    slug: "blogger",
    title: "Blogger",
    tagline: "Full-Stack Blog Platform with Admin Panel",
    shortDescription: "A sophisticated full-stack blog platform that revolutionizes the blogging experience for both creators and readers with comprehensive content management.",
    fullDescription: `Blogger is a full-featured blogging platform that provides creators with powerful tools to publish, manage, and grow their content while offering readers an engaging and intuitive reading experience. Built with React.js and Node.js, the platform features a rich text editor with formatting capabilities, allowing authors to create beautifully formatted posts with images, code blocks, and multimedia content.

The backend implements a RESTful API using Express.js and MongoDB, handling user authentication, post management, comments, and category organization. JWT-based authentication ensures secure access to author and admin features. The admin panel provides comprehensive CRUD operations for managing posts, users, and comments, along with analytics to track post performance and reader engagement.

Readers can browse posts by category, search for specific topics, leave comments, and interact with content through likes and shares. The platform features a responsive design that adapts seamlessly to different screen sizes, ensuring an optimal reading experience on desktop and mobile devices. Blogger demonstrates expertise in content management systems, user authentication flows, rich text editing, and building scalable web applications.`,
    featured: false,
    completionDate: "Jul 2024",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    imageColor: "bg-gradient-to-br from-purple-600 to-purple-800",
    image: "/thumbnails/blogger.png",
    liveUrl: "https://blogger-platform.vercel.app",
    githubUrl: "https://github.com/yourusername/blogger",
    timeline: {
      started: { date: "Apr 20, 2024", label: "Project start" },
      published: { date: "Jul 18, 2024", label: "Beta release" },
      lastUpdated: { date: "Aug 30, 2024", label: "Feature additions" }
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
      "Professional admin panel with comprehensive CRUD operations",
      "Rich text editor with formatting capabilities",
      "User authentication and profile management",
      "Comment system with moderation",
      "Category-based content organization",
      "Post analytics and engagement tracking",
      "Responsive reading experience",
      "Search functionality across all posts",
      "Social sharing integration",
      "Draft and published post management",
      "Image upload and optimization"
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
