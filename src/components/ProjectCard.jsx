import { Link } from 'react-router-dom';
import TechBadge from './TechBadge';

/**
 * ProjectCard Component
 * Displays a project card with image, description, features, and tech stack
 */
function ProjectCard({ project }) {
  const previewTech = project.getPreviewTechnologies(5);
  const remainingCount = project.getRemainingTechCount(5);
  const previewFeatures = project.getPreviewFeatures(5);

  return (
    <Link 
      to={`/projects/${project.slug}`}
      className="block bg-[#111111] rounded-lg overflow-hidden border border-[#1F1F1F] hover:border-[#2F2F2F] transition-colors duration-300 cursor-pointer"
    >
      <div className="grid md:grid-cols-2 gap-8 p-8">
        {/* Left Side - Image */}
        <div className="flex flex-col justify-between">
          <div className={`${project.imageColor} rounded-lg aspect-video flex items-center justify-center relative overflow-hidden`}>
            {project.hasImage() ? (
              /* Real project image */
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              /* Placeholder with gradient and project name */
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[70%] bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                  <span className="text-black/30 font-bold text-2xl">{project.title}</span>
                </div>
              </div>
            )}
          </div>
          <p className="text-[#F2F2F2] text-sm mt-4 font-medium">{project.tagline}</p>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-between relative">
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-0 right-0">
              <span className="text-[#00D9FF] text-xs font-medium uppercase tracking-wider">FEATURED</span>
            </div>
          )}

          {/* Date Badge */}
          {!project.featured && project.completionDate && (
            <div className="absolute top-0 right-0">
              <span className="text-[#6F6F6F] text-xs font-medium">{project.completionDate}</span>
            </div>
          )}

          <div>
            {/* Title */}
            <h2 className="text-2xl font-bold text-[#F2F2F2] mb-4 pr-24">{project.title}</h2>

            {/* Description */}
            <p className="text-[#9A9A9A] text-sm leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-6">
              {previewFeatures.map((feature, index) => (
                <li key={index} className="text-[#9A9A9A] text-sm flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
              {project.keyFeatures.length > 5 && (
                <li className="text-[#6F6F6F] text-sm flex items-start">
                  <span className="mr-2">•</span>
                  <span>+{project.keyFeatures.length - 5} more features</span>
                </li>
              )}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {previewTech.map((tech, index) => (
              <TechBadge key={index} technology={tech} />
            ))}
            {remainingCount > 0 && (
              <span className="bg-[#1A1A1A] text-[#9A9A9A] px-3 py-1.5 rounded-full text-xs font-medium border border-[#2A2A2A]">
                +{remainingCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
