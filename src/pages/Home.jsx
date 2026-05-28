import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { SocialIcon } from 'react-social-icons'
import { techIcons } from '../data/techIcons'
import { EMAIL, MAILTO_URL } from '../constants/profile'
import CodingActivity from '../components/coding-activity'
import ProjectCard from '../components/ProjectCard'
import projectsData from '../data/projects'
import OutsideTheScreen from '../components/OutsideTheScreen'

const accentLink =
  'text-[#00adb5] hover:text-[#0097a7] transition-colors underline-offset-4 hover:underline'

function Home() {
  const [hoveredIcon, setHoveredIcon] = useState(null)

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto pt-8 md:pt-16 pb-6 px-4 md:px-8">
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#F2F2F2] mb-1">
          Bhavesh Singh
        </h1>
        <p className="text-sm text-[#9A9A9A] mb-6">Developer / Builder</p>

        <div className="space-y-4 text-[#B0B0B0] text-sm sm:text-base leading-relaxed max-w-2xl">
          <p>
            I build full-stack web applications — practical, user-focused products
            from structured learning platforms to production-grade web apps.
          </p>
          <p>
            Based in India. I care about clean architecture, readable code, and
            shipping things that work. Right now I&apos;m focused on deepening my
            fundamentals through hands-on projects and consistent problem-solving.
          </p>
          <p>
            If this sounds interesting,{' '}
            <Link to="/connect" className={accentLink}>
              reach out
            </Link>
            {' '}or{' '}
            <Link to="/projects" className={accentLink}>
              see my work
            </Link>
            .
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link
            to="/connect"
            className="inline-flex items-center gap-1 font-medium text-[#00adb5] hover:text-[#0097a7] transition-colors"
          >
            Get in touch
            <ChevronRight className="size-4" />
          </Link>
          <Link
            to="/projects"
            className="text-[#9A9A9A] hover:text-[#F2F2F2] transition-colors"
          >
            View projects
          </Link>
        </div>
      </section>

      {/* Activity Calendar */}
      <section className="max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-8">
        <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Activity</h2>
        
        <CodingActivity />
      </section>

      {/* Tech Stack Section */}
      <section className="max-w-4xl mx-auto pb-6 px-4 md:px-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Tools that I have used</h2>
        
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
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] rounded-full border border-[#2A2A2A] whitespace-nowrap flex-shrink-0 hover:border-[#3A3A3A] transition-colors"
                >
                  {Icon && <Icon className="text-base flex-shrink-0" style={{ color: tech.color }} />}
                  <span className="text-[#E0E0E0] text-sm font-medium">{tech.name}</span>
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
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] rounded-full border border-[#2A2A2A] whitespace-nowrap flex-shrink-0 hover:border-[#3A3A3A] transition-colors"
                >
                  {Icon && <Icon className="text-base flex-shrink-0" style={{ color: tech.color }} />}
                  <span className="text-[#E0E0E0] text-sm font-medium">{tech.name}</span>
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
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] rounded-full border border-[#2A2A2A] whitespace-nowrap flex-shrink-0 hover:border-[#3A3A3A] transition-colors"
                >
                  {Icon && <Icon className="text-base flex-shrink-0" style={{ color: tech.color }} />}
                  <span className="text-[#E0E0E0] text-sm font-medium">{tech.name}</span>
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

      {/* Outside the Screen */}
      <section className="max-w-4xl mx-auto py-8 md:py-12 px-4 md:px-8">
        <OutsideTheScreen />
      </section>

      {/* Get in Touch Section */}
      <section className="max-w-4xl mx-auto py-6 px-4 md:px-8 pb-16 md:pb-16">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Get in Touch</h2>
        
        <p className="text-base md:text-lg text-[#B0B0B0] leading-relaxed mb-6 md:mb-8 max-w-4xl">
          Have a project in mind or want to collaborate? I'm always open to discussing new opportunities, 
          creative ideas, or just having a chat about technology and design.
        </p>
        
        <p className="text-base md:text-lg text-[#B0B0B0] mb-8 md:mb-10">
          Reach out via email at <a href={MAILTO_URL} className="text-[#00ADB5] hover:text-[#0097A7] transition-colors font-medium">{EMAIL}</a>
        </p>
        
        <div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">Connect with me</h3>
          <div className="flex flex-wrap gap-4">
            <SocialIcon 
              url="https://github.com/bhaveshs1212" 
              style={{ height: 48, width: 48 }} 
              bgColor={hoveredIcon === 'github' ? '#575656' : '#333'} 
              fgColor="#fff"
              target="_blank"
              onMouseEnter={() => setHoveredIcon('github')}
              onMouseLeave={() => setHoveredIcon(null)}
            />
            
            <SocialIcon 
              url="https://linkedin.com/in/bhavesh-singh12" 
              style={{ height: 48, width: 48 }} 
              bgColor={hoveredIcon === 'linkedin' ? '#0077B5' : '#333'} 
              fgColor="#fff"
              target="_blank"
              onMouseEnter={() => setHoveredIcon('linkedin')}
              onMouseLeave={() => setHoveredIcon(null)}
            />
            
            <SocialIcon 
              url="https://instagram.com/bhavesh" 
              style={{ height: 48, width: 48 }} 
              bgColor={hoveredIcon === 'instagram' ? '#E4405F' : '#333'} 
              fgColor="#fff"
              target="_blank"
              onMouseEnter={() => setHoveredIcon('instagram')}
              onMouseLeave={() => setHoveredIcon(null)}
            />
            
            <SocialIcon 
              url="https://twitter.com/bhavesh" 
              style={{ height: 48, width: 48 }} 
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
