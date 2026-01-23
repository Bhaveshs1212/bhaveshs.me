import { NavLink } from 'react-router-dom';
import { FiHome, FiBriefcase, FiImage, FiCompass, FiUser } from 'react-icons/fi';

function Sidebar() {
  const navItems = [
    { path: '/', label: 'Home', icon: FiHome, animation: 'animate-bounce-subtle' },
    { path: '/projects', label: 'Projects', icon: FiBriefcase, animation: 'animate-sway' },
    { path: '/gallery', label: 'Gallery', icon: FiImage, animation: 'animate-pulse-image' },
    { path: '/journey', label: 'Journey', icon: FiCompass, animation: 'animate-spin-compass' },
    { path: '/about', label: 'About', icon: FiUser, animation: 'animate-head-bounce' },
  ];

  return (
    <aside className="hidden md:block fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-[#0D0D0D] border border-[#1F1F1F] rounded-[28px] py-4 px-3 flex flex-col items-center gap-1">
        {/* Navigation Icons */}
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group w-11 h-11 rounded-[14px] flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'text-[#00D9FF] bg-[#00D9FF]/10 shadow-[0_0_20px_rgba(0,217,255,0.3)]'
                    : 'text-[#6F6F6F] hover:text-[#00D9FF] hover:bg-[#00D9FF]/10 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]'
                }`
              }
              title={item.label}
            >
              <Icon 
                size={20} 
                strokeWidth={1.5} 
                className={`
                  ${item.animation === 'animate-bounce-subtle' ? 'group-hover:animate-bounce-subtle' : ''}
                  ${item.animation === 'animate-sway' ? 'group-hover:animate-sway' : ''}
                  ${item.animation === 'animate-pulse-image' ? 'group-hover:animate-pulse-image' : ''}
                  ${item.animation === 'animate-spin-compass' ? 'group-hover:animate-spin-compass' : ''}
                  ${item.animation === 'animate-head-bounce' ? 'group-hover:animate-head-bounce' : ''}
                `}
              />
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
