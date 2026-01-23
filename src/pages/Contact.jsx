function Contact() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      {/* Contact Section */}
      <section className="max-w-4xl mx-auto pt-32 pb-24 px-8">
        {/* Metadata - Small and Quiet */}
        <p className="text-[#6F6F6F] text-xs uppercase tracking-wider mb-8">
          Get In Touch
        </p>

        {/* Hero Statement - Large Serif */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-[#F2F2F2]">
          Let's build something together.
        </h1>

        {/* Body Text - Muted, Relaxed */}
        <div className="space-y-4 text-[#9A9A9A] leading-relaxed mb-12">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Options */}
        <div className="space-y-6">
          <div>
            <h3 className="text-[#F2F2F2] font-medium mb-2">Email</h3>
            <a href="mailto:your.email@example.com" className="text-[#9A9A9A] hover:text-[#F2F2F2] transition-colors duration-200">
              your.email@example.com
            </a>
          </div>

          <div>
            <h3 className="text-[#F2F2F2] font-medium mb-2">LinkedIn</h3>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-[#9A9A9A] hover:text-[#F2F2F2] transition-colors duration-200">
              linkedin.com/in/yourprofile
            </a>
          </div>

          <div>
            <h3 className="text-[#F2F2F2] font-medium mb-2">GitHub</h3>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#9A9A9A] hover:text-[#F2F2F2] transition-colors duration-200">
              github.com/yourusername
            </a>
          </div>

          <div>
            <h3 className="text-[#F2F2F2] font-medium mb-2">Twitter/X</h3>
            <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-[#9A9A9A] hover:text-[#F2F2F2] transition-colors duration-200">
              @yourhandle
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
