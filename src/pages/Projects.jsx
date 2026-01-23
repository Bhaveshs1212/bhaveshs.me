import { getAllProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto pt-16 pb-8 px-8">
        <p className="text-[#6F6F6F] text-sm">
          Home <span className="mx-2">›</span> Projects
        </p>
      </div>

      {/* Page Title */}
      <div className="max-w-5xl mx-auto px-8 mb-16">
        <h1 className="text-3xl font-bold text-[#F2F2F2]">All Projects</h1>
      </div>

      {/* Projects List */}
      <div className="max-w-5xl mx-auto px-8 pb-24 space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
