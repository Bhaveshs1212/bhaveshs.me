import { Link } from 'react-router-dom'
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { techIcons } from '../data/techIcons'
import GitHubContributions from '../components/GitHubContributions'
import LinkStats from '../components/LinkStats'
import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects'

function Home() {
  const [hoveredIcon, setHoveredIcon] = useState(null)

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto pt-8 md:pt-16 pb-6 px-4 md:px-8">
        <p className="text-[#6F6F6F] text-xs uppercase tracking-wider mb-6 md:mb-8">
          Developer / Builder / Open Source
        </p>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 md:mb-8">
          I experiment with ideas that push me forward.
        </h1>

        <div className="space-y-3 md:space-y-4 text-[#9A9A9A] text-sm md:text-base leading-relaxed">
          <p>
            Hello! I'm <span className="text-[#F2F2F2]">Bhavesh Singh</span>, a developer from India who enjoys building practical, user-focused web applications and experimenting with new technologies.
          </p>
          <p>
            I've worked on multiple full-stack projects, explored real-world problem solving through internships and independent builds, and continuously improve my skills through hands-on development.
          </p>
          <p>
            I'm focused on strengthening my fundamentals in development and problem-solving while contributing to meaningful projects.
          </p>
        </div>

        <div className="mt-12 flex gap-6 items-center">
          <Link
            to="/connect"
            className="bg-white text-[#0B0B0C] px-6 py-3 rounded-lg font-medium"
          >
            Contact Me →
          </Link>
          <Link
            to="/projects"
            className="text-[#9A9A9A] hover:text-[#F2F2F2]"
          >
            View Projects
          </Link>
        </div>
      </section>

      {/* GitHub Activity Calendar */}
      <section className="max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-8">
        <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">GitHub Activity</h2>
        
        <div className="[&_.react-activity-calendar__scroll-container]:pl-6">
          <GitHubContributions />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-4xl mx-auto pb-6 px-4 md:px-8">
        <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Tools that I have used</h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-3 items-center animate-scroll py-3" 
            style={{ animation: 'scroll 30s linear infinite' }}
          >
            {[...Object.values(techIcons), ...Object.values(techIcons)].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="inline-flex items-center gap-2 px-3 py-2.75 bg-[#1A1A1A] rounded-full border border-[#2A2A2A] whitespace-nowrap flex-shrink-0"
                >
                  {Icon && <Icon className="text-sm flex-shrink-0" style={{ color: tech.color }} />}
                  <span className="text-[#E0E0E0] text-xs font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
          
          <div 
            className="flex gap-3 items-center animate-scroll-reverse py-3" 
            style={{ animation: 'scroll-reverse 25s linear infinite' }}
          >
            {[...Object.values(techIcons).reverse(), ...Object.values(techIcons).reverse()].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-reverse-${index}`}
                  className="inline-flex items-center gap-2 px-3 py-2.75 bg-[#1A1A1A] rounded-full border border-[#2A2A2A] whitespace-nowrap flex-shrink-0"
                >
                  {Icon && <Icon className="text-sm flex-shrink-0" style={{ color: tech.color }} />}
                  <span className="text-[#E0E0E0] text-xs font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
          
          <div 
            className="flex gap-3 items-center animate-scroll py-3" 
            style={{ animation: 'scroll 35s linear infinite' }}
          >
            {[...Object.values(techIcons), ...Object.values(techIcons)].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-third-${index}`}
                  className="inline-flex items-center gap-2 px-3 py-2.75 bg-[#1A1A1A] rounded-full border border-[#2A2A2A] whitespace-nowrap flex-shrink-0"
                >
                  {Icon && <Icon className="text-sm flex-shrink-0" style={{ color: tech.color }} />}
                  <span className="text-[#E0E0E0] text-xs font-medium">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>  
      
      {/* Featured Projects Section */}
      <section className="max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-8">
        <div className="flex justify-between items-center mb-6 md:mb-8">
          <h2 className="text-lg md:text-xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Featured Projects</h2>
          <Link 
            to="/projects" 
            className="text-[#9A9A9A] hover:text-[#F2F2F2] text-sm transition-colors"
          >
            View All →
          </Link>
        </div>
        
        <div className="space-y-6">
          {projectsData
            .filter(project => project.featured)
            .slice(0, 2)
            .map(project => (
              <div key={project.id} className="border border-[#2A2A2A] rounded-xl overflow-hidden">
                <ProjectCard project={project} />
              </div>
            ))}
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="max-w-4xl mx-auto py-6 px-4 md:px-8 pb-16 md:pb-16">
        <h2 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Get in Touch</h2>
        
        <p className="text-sm md:text-base text-[#9A9A9A] leading-relaxed mb-4 md:mb-6 max-w-4xl">
          Have a project in mind or want to collaborate? I'm always open to discussing new opportunities, 
          creative ideas, or just having a chat about technology and design.
        </p>
        
        <p className="text-sm md:text-base text-[#9A9A9A] mb-6 md:mb-8">
          Reach out via email at <a href="mailto:bhavesh.singhjayash@gmail.com" className="text-[#00ADB5] hover:text-[#0097A7] transition-colors">bhavesh.singhjayash@gmail.com</a>
        </p>
        
        <div>
          <h3 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">Connect with me</h3>
          <div className="flex flex-wrap gap-3">
            <SocialIcon 
              url="https://github.com/bhaveshs1212" 
              style={{ height: 40, width: 40 }} 
              bgColor={hoveredIcon === 'github' ? '#575656' : '#333'} 
              fgColor="#fff"
              target="_blank"
              onMouseEnter={() => setHoveredIcon('github')}
              onMouseLeave={() => setHoveredIcon(null)}
            />
            
            <SocialIcon 
              url="https://linkedin.com/in/bhavesh-singh12" 
              style={{ height: 40, width: 40 }} 
              bgColor={hoveredIcon === 'linkedin' ? '#0077B5' : '#333'} 
              fgColor="#fff"
              target="_blank"
              onMouseEnter={() => setHoveredIcon('linkedin')}
              onMouseLeave={() => setHoveredIcon(null)}
            />
            
            <SocialIcon 
              url="https://instagram.com/bhavesh" 
              style={{ height: 40, width: 40 }} 
              bgColor={hoveredIcon === 'instagram' ? '#E4405F' : '#333'} 
              fgColor="#fff"
              target="_blank"
              onMouseEnter={() => setHoveredIcon('instagram')}
              onMouseLeave={() => setHoveredIcon(null)}
            />
            
            <SocialIcon 
              url="https://twitter.com/bhavesh" 
              style={{ height: 40, width: 40 }} 
              bgColor={hoveredIcon === 'twitter' ? '#1DA1F2' : '#333'} 
              fgColor="#fff"
              target="_blank"
              onMouseEnter={() => setHoveredIcon('twitter')}
              onMouseLeave={() => setHoveredIcon(null)}
            />
            
           
            
           
          </div>
        </div>
      </section>
  </div>
  )
}

export default Home
