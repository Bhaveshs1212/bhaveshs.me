import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0C]/80 backdrop-blur-sm border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex justify-between h-16 items-center">
          {/* Logo/Name */}
          <Link to="/" className="text-[#F2F2F2] font-medium hover:text-white transition-colors">
            BS
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className="text-sm text-[#9A9A9A] hover:text-[#F2F2F2] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-sm text-[#9A9A9A] hover:text-[#F2F2F2] transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className="text-sm text-[#9A9A9A] hover:text-[#F2F2F2] transition-colors duration-200"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
