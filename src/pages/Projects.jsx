import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { getAllProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto pt-8 md:pt-12 pb-4 md:pb-6 px-4 md:px-8">
        <div className="flex items-center gap-2 text-xs md:text-sm text-[#9A9A9A]">
          <Link to="/" className="hover:text-[#F2F2F2] transition-colors duration-200">
            Home
          </Link>
          <FiChevronRight className="text-xs" />
          <span className="text-[#F2F2F2]">Projects</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 mb-8 md:mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-[#F2F2F2]">All Projects</h1>
      </div>

      {/* Projects List */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-16 space-y-6 md:space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
