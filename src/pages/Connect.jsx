import { useState, useEffect } from 'react'
import { SocialIcon } from 'react-social-icons'

function Connect() {
  const [emailCopied, setEmailCopied] = useState(false)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('bhavesh.singhjayash@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const socialLinks = [
    {
      url: 'https://linkedin.com/in/bhavesh-singh12',
      label: 'LinkedIn',
      description: 'Connect professionally'
    },
    {
      url: 'https://github.com/bhaveshs1212',
      label: 'GitHub',
      description: 'Check out my code'
    },
    {
      url: 'https://twitter.com/bhaveshsingh12',
      label: 'Twitter', 
      description: 'Follow me for updates'
    },
    {
      url: 'https://instagram.com/bhaveshsingh__12',
      label: 'Instagram',
      description: 'Behind the scenes'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-16 pb-16 md:pb-16">
        
        {/* Header Section */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-[10px] md:text-xs">Let's connect and build something amazing</span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 md:mb-8 text-[#F2F2F2]">
            Get In Touch
          </h1>
          
          <p className="text-[#9A9A9A] text-sm md:text-base leading-relaxed max-w-3xl">
            Ready to bring your ideas to life? I'm always excited to discuss new projects, creative collaborations, 
            or opportunities to be part of your vision. Let's connect and see what we can create together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-12">
          
          {/* Email Contact */}
          <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-xl p-4 md:p-6 hover:bg-[#1A1A1A] hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] md:hover:scale-[1.03]">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm md:text-base">Email Me Directly</h3>
                <p className="text-[#9A9A9A] text-[10px] md:text-xs">Quick response guaranteed</p>
              </div>
            </div>
            
            <a 
              href="https://mail.google.com/mail/?view=cm&to=bhavesh.singhjayash@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 md:p-3 bg-[#333] border border-[#555] rounded-lg w-full hover:bg-[#444] transition-colors"
            >
              <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#9A9A9A]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <div className="text-left">
                <div className="text-white text-xs md:text-sm">bhavesh.singhjayash@gmail.com</div>
                <div className="text-[#9A9A9A] text-[10px] md:text-xs">
                  Click to send email
                </div>
              </div>
            </a>
          </div>

          {/* Schedule a Call */}
          <div className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-xl p-4 md:p-6 hover:bg-[#1A1A1A] hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] md:hover:scale-[1.03]">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <div className="w-6 h-6 bg-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm md:text-base">Schedule a Call</h3>
                <p className="text-[#9A9A9A] text-[10px] md:text-xs">Let's discuss your project</p>
              </div>
            </div>
            
            <a 
              href="https://cal.com/bhavesh-singh12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-white text-black text-center py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-medium text-sm md:text-base hover:bg-gray-100 transition-colors"
            >
              Book a Free Call
            </a>
          </div>

        </div>

        {/* Social Media Section */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Follow Me Online</h2>
          <p className="text-[#9A9A9A] text-xs md:text-sm mb-4 md:mb-6">Stay updated with my latest projects and thoughts</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {socialLinks.map((social, index) => (
              <div 
                key={index} 
                className="bg-[#0B0B0C] border border-[#2A2A2A] rounded-xl p-6 text-center hover:bg-[#1A1A1A] hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.03]"
              >
                <div className="flex justify-center mb-4">
                  <SocialIcon 
                    url={social.url}
                    target="_blank"
                    style={{ height: 36, width: 36 }}
                    className="hover:scale-110 transition-transform duration-200 md:w-10 md:h-10"
                  />
                </div>
                <h3 className="text-white font-medium text-xs md:text-sm mb-0.5 md:mb-1">{social.label}</h3>
                <p className="text-[#9A9A9A] text-[10px] md:text-xs">{social.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 text-xs">Currently Available</span>
          </div>
          
          <h3 className="text-white font-semibold mb-4">
            Ready for New Opportunities
          </h3>
          
          <p className="text-[#9A9A9A] text-sm mb-4">
            I'm actively looking for new projects and collaborations. Whether you need a full-stack developer, 
            have an exciting startup idea, or want to discuss potential partnerships, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://mail.google.com/mail/?view=cm&to=bhavesh.singhjayash@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/bhavesh-singh12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-400 hover:text-black transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Connect