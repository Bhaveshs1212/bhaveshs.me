import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiArrowLeft, FiChevronRight } from 'react-icons/fi';
import { getProjectBySlug } from '../data/projects';
import TechBadge from '../components/TechBadge';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-[#00D9FF] hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const isTeamProject = project.contributors && project.contributors.length > 1;

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-6 md:pt-10 pb-4 md:pb-6">
        <div className="flex items-center gap-2 text-xs md:text-sm text-[#9A9A9A]">
          <Link to="/" className="hover:text-[#F2F2F2] transition-colors duration-200">
            Home
          </Link>
          <FiChevronRight className="text-xs" />
          <Link to="/projects" className="hover:text-[#F2F2F2] transition-colors duration-200">
            Projects
          </Link>
          <FiChevronRight className="text-xs" />
          <span className="text-[#F2F2F2]">{project.title}</span>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-3 md:py-4">
        <div className="relative rounded-3xl overflow-hidden group">
          {/* Team Project Badge */}
          {isTeamProject && (
            <div className="absolute top-4 md:top-6 right-4 md:right-6 z-20">
              <span className="bg-[#0B0B0C] text-[#00D9FF] px-2 md:px-4 py-1 md:py-2 rounded-lg text-[10px] md:text-xs font-semibold tracking-wide">
                TEAM PROJECT
              </span>
            </div>
          )}

          {/* Project Image Container */}
          <div className="relative overflow-hidden max-h-[250px] md:max-h-[400px]">
            {project.hasImage() ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover rounded-3xl transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              <div className={`${project.imageColor} w-full h-[450px] rounded-3xl flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105`}>
                <div className="w-[90%] h-[85%] bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center">
                  <span className="text-black/30 font-bold text-4xl">{project.title}</span>
                </div>
              </div>
            )}

            {/* Dark Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-3xl"></div>

            {/* Title and Tagline Overlay */}
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-12 right-4 md:right-12 z-10">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg">{project.title}</h1>
              <p className="text-white text-sm md:text-lg lg:text-xl font-medium drop-shadow-md">{project.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-4 md:py-8">
        <div className="flex flex-wrap gap-2 md:gap-3">
          {project.technologies.map((tech, index) => (
            <TechBadge key={index} technology={tech} />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Description */}
        <div className="mb-12 md:mb-16">
          <p className="text-[#9A9A9A] text-sm md:text-base leading-relaxed text-justify whitespace-pre-line">
            {project.fullDescription}
          </p>
        </div>

        {/* Links */}
        {project.hasLinks() && (
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16">
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00D9FF] hover:text-[#00C4E6] transition-colors duration-200 flex items-center justify-center sm:justify-start gap-2 font-medium text-sm md:text-base">
              >
                View Live Site <FiExternalLink />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00D9FF] hover:text-[#00C4E6] transition-colors duration-200 flex items-center justify-center sm:justify-start gap-2 font-medium text-sm md:text-base">
              >
                View Source Code <FiGithub />
              </a>
            )}
          </div>
        )}

        {/* Project Timeline */}
        {project.timeline && (
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-[#F2F2F2] mb-6 md:mb-8">Project Timeline</h2>
            <div className="space-y-4 md:space-y-6">
              {project.timeline.started && (
                <div className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-4 md:p-6">
                  <p className="text-[#9A9A9A] text-xs md:text-sm mb-2">Started Development</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F2F2F2] mb-1">{project.timeline.started.date}</h3>
                  <p className="text-[#6F6F6F] text-xs md:text-sm">{project.timeline.started.label}</p>
                </div>
              )}
              {project.timeline.published && (
                <div className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-4 md:p-6">
                  <p className="text-[#9A9A9A] text-xs md:text-sm mb-2">Published</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F2F2F2] mb-1">{project.timeline.published.date}</h3>
                  <p className="text-[#6F6F6F] text-xs md:text-sm">{project.timeline.published.label}</p>
                </div>
              )}
              {project.timeline.lastUpdated && (
                <div className="bg-[#111111] border border-[#1F1F1F] rounded-lg p-4 md:p-6">
                  <p className="text-[#9A9A9A] text-xs md:text-sm mb-2">Last Updated</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#F2F2F2] mb-1">{project.timeline.lastUpdated.date}</h3>
                  <p className="text-[#6F6F6F] text-xs md:text-sm">{project.timeline.lastUpdated.label}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Contributors */}
        {project.contributors && project.contributors.length > 0 && (
          <div className="mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-[#F2F2F2] mb-4 md:mb-6">Contributors</h2>
            {project.contributors.map((contributor, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-[#F2F2F2] font-medium text-base md:text-lg">{contributor.name}</h3>
                    <p className="text-[#6F6F6F] text-xs md:text-sm">{contributor.role}</p>
                  </div>
                  <div className="flex gap-3 md:gap-4">
                    {contributor.github && (
                      <a href={contributor.github} target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:text-[#00C4E6] transition-colors duration-200 text-sm md:text-base">
                        GitHub
                      </a>
                    )}
                    {contributor.linkedin && (
                      <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#00D9FF] hover:text-[#00C4E6] transition-colors duration-200 text-sm md:text-base">
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="mb-12 md:mb-16 pb-8 md:pb-0">
            <h2 className="text-xl md:text-2xl font-bold text-[#F2F2F2] mb-4 md:mb-6">Key Features</h2>
            <ul className="space-y-2 md:space-y-3">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="text-[#F2F2F2] text-sm md:text-base flex items-start">
                  <span className="text-[#00D9FF] mr-3 mt-1">›</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export default ProjectDetail;
