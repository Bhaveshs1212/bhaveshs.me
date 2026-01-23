import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto pt-32 pb-10 px-8">
        {/* Metadata - Small and Quiet */}
        <p className="text-[#6F6F6F] text-xs uppercase tracking-wider mb-8">
          Developer / Builder / Open Source
        </p>

        {/* Hero Statement - Large Serif */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-[#F2F2F2]">
          I experiment with ideas that push me forward.
        </h1>

        {/* Body Text - Muted, Relaxed */}
        <div className="space-y-4 text-[#9A9A9A] leading-relaxed">
          <p>
            Hello! I'm <span className="text-[#F2F2F2]">Bhavesh Singh</span>, a developer from India who enjoys building practical, user-focused web applications and experimenting with new technologies.
          </p>
          
          <p>
            I've worked on multiple full-stack projects, explored real-world problem solving through internships and independent builds, and continuously improve my skills through hands-on development. I believe in learning by building and refining things until they work better.
          </p>
          
          <p>
            I'm focused on strengthening my fundamentals in development and problem-solving while contributing to meaningful projects. When I'm not coding, I spend time learning new concepts, revising DSA, or exploring tech content online.
          </p>
        </div>

        {/* CTA - White Button */}
        <div className="mt-12 flex gap-6 items-center">
          <Link to="/contact" className="bg-white text-[#0B0B0C] px-6 py-3 rounded-lg font-medium hover:bg-[#F2F2F2] transition-colors duration-200">
            Contact Me →
          </Link>
          <Link to="/projects" className="text-[#9A9A9A] hover:text-[#F2F2F2] transition-colors duration-200">
            View Projects
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
