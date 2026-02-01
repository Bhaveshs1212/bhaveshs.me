import { 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiPrisma, 
  SiPostgresql, 
  SiReact, 
  SiTailwindcss, 
  SiMongodb, 
  SiRedis, 
  SiJavascript, 
  SiMongoose,
  SiStripe,
  SiVite,
  SiRadixui,
  SiFramer,
  SiAxios,
  SiJsonwebtokens,
  SiZod
} from 'react-icons/si';
import { 
  FaLock,
  FaChartBar,
  FaWpforms,
  FaFileUpload,
  FaCode
} from 'react-icons/fa';

/**
 * Technology Icon Mapping
 * Maps technology names to their respective icons and brand colors
 */
export const techIcons = {
  "TypeScript": { 
    icon: SiTypescript, 
    color: "#3178C6",
    name: "TypeScript" 
  },
  "JavaScript": { 
    icon: SiJavascript, 
    color: "#F7DF1E",
    name: "JavaScript" 
  },
  "Node.js": { 
    icon: SiNodedotjs, 
    color: "#339933",
    name: "Node.js" 
  },
  "Express.js": { 
    icon: SiExpress, 
    color: "#FFFFFF",
    name: "Express.js" 
  },
  "React.js": { 
    icon: SiReact, 
    color: "#61DAFB",
    name: "React.js" 
  },
  "Prisma ORM": { 
    icon: SiPrisma, 
    color: "#2D3748",
    name: "Prisma ORM" 
  },
  "PostgreSQL": { 
    icon: SiPostgresql, 
    color: "#4169E1",
    name: "PostgreSQL" 
  },
  "MongoDB": { 
    icon: SiMongodb, 
    color: "#47A248",
    name: "MongoDB" 
  },
  "Mongoose": { 
    icon: SiMongoose, 
    color: "#880000",
    name: "Mongoose" 
  },
  "Tailwind CSS": { 
    icon: SiTailwindcss, 
    color: "#06B6D4",
    name: "Tailwind CSS" 
  },
  "Redis": { 
    icon: SiRedis, 
    color: "#DC382D",
    name: "Redis" 
  },
  "Stripe": { 
    icon: SiStripe, 
    color: "#635BFF",
    name: "Stripe" 
  },
  "Vite": { 
    icon: SiVite, 
    color: "#646CFF",
    name: "Vite" 
  },
  "Radix UI": { 
    icon: SiRadixui, 
    color: "#E93D82",
    name: "Radix UI" 
  },
  "Framer Motion": { 
    icon: SiFramer, 
    color: "#0055FF",
    name: "Framer Motion" 
  },
  // Technologies with specific icons
  "shadcn/ui": { 
    icon: FaCode, 
    color: "#FFFFFF",
    name: "shadcn/ui" 
  },
  "bcrypt": { 
    icon: FaLock, 
    color: "#FFFFFF",
    name: "bcrypt" 
  },
  "JWT": { 
    icon: SiJsonwebtokens, 
    color: "#FFFFFF",
    name: "JWT" 
  },
  "Axios": { 
    icon: SiAxios, 
    color: "#5A29E4",
    name: "Axios" 
  },
  "Recharts": { 
    icon: FaChartBar, 
    color: "#FF6B6B",
    name: "Recharts" 
  },
  "React Hook Form": { 
    icon: FaWpforms, 
    color: "#EC5990",
    name: "React Hook Form" 
  },
  "Zod": { 
    icon: SiZod, 
    color: "#3E67B1",
    name: "Zod" 
  },
  "Multer": { 
    icon: FaFileUpload, 
    color: "#F7B731",
    name: "Multer" 
  }
};

/**
 * Get technology icon configuration by name
 */
export const getTechIcon = (techName) => {
  return techIcons[techName] || { icon: null, color: "#9A9A9A", name: techName };
};
