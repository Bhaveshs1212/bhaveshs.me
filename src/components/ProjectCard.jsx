import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";

function ProjectCard({ project }) {
  const previewTech = project.getPreviewTechnologies(5);
  const remainingCount = project.getRemainingTechCount(5);
  const previewFeatures = project.getPreviewFeatures(4);

  return (
    <div className="border border-[#2A2A2A] rounded-xl hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.01] md:hover:scale-[1.02] overflow-hidden group">
      <Link
        to={`/projects/${project.slug}`}
        className="block hover:opacity-90 transition-opacity duration-300"
      >
        {/* GRID — 28% left / 72% right split on desktop, stack on mobile */}
        <div className="grid md:grid-cols-[28%_72%] items-stretch">
          
          {/* LEFT IMAGE PANEL - Dark Gray Background */}
          <div className="relative bg-black flex flex-col">
          
          {/* Image container - no extra padding */}
          <div className="w-full bg-[#2A2D33] overflow-hidden max-h-[140px] md:max-h-[160px]">
            {project.hasImage() ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
              />
            ) : (
              <div className="w-full h-[140px] md:h-[160px] flex items-center justify-center transition-transform duration-500 ease-out hover:scale-110">
                <span className="text-white/20 text-sm font-bold">{project.title}</span>
              </div>
            )}
          </div>
          
          {/* Tagline below image */}
          <div className="px-2 md:px-3 py-1.5 md:py-2 bg-black">
            <p className="text-white text-[9px] md:text-[10px] font-normal leading-tight">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT PANEL - Pure Black */}
        <div className="bg-black p-2.5 md:p-3 flex flex-col relative">
          
          {/* Date badge - top right */}
          {project.completionDate && (
            <div className="absolute top-2.5 md:top-3 right-2.5 md:right-3">
              <span className="text-[#888888] text-[8px] md:text-[9px] font-normal uppercase tracking-wider">
                {project.completionDate}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="text-white text-xs md:text-sm font-semibold pr-10 md:pr-12">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mt-1 md:mt-1.5 text-[#AAAAAA] text-[9px] md:text-[10px] leading-snug">
            {project.shortDescription}
          </p>

          {/* Features List */}
          <ul className="mt-1.5 md:mt-2 space-y-0.5 flex-1">
            {previewFeatures.map((feature, i) => (
              <li key={i} className="text-[#AAAAAA] text-[8px] md:text-[9px] flex items-start leading-snug">
                <span className="mr-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
            {project.keyFeatures.length > 4 && (
              <li className="text-[#777777] text-[8px] md:text-[9px] flex items-start">
                <span className="mr-1">•</span>
                <span>+{project.keyFeatures.length - 4} more features</span>
              </li>
            )}
          </ul>

          {/* Tech Stack - pushed to bottom */}
          <div className="pt-1.5 md:pt-2 flex flex-wrap gap-1">
            {previewTech.map((tech, i) => (
              <TechBadge key={i} technology={tech} />
            ))}
            {remainingCount > 0 && (
              <span className="px-1.5 md:px-2 py-0.5 pt-1 md:pt-1.5 text-[9px] md:text-[10px] rounded-md bg-[#1A1A1A] text-[#AAAAAA] border border-[#333333] font-medium">
                +{remainingCount}
              </span>
            )}
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default ProjectCard;
