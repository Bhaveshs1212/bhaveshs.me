import { NavLink } from 'react-router-dom';
import { FiHome, FiBriefcase, FiLink, FiCode, FiUser } from 'react-icons/fi';

function Sidebar() {
  const navItems = [
    { path: '/', label: 'Home', icon: FiHome, animation: 'animate-bounce-subtle' },
    { path: '/projects', label: 'Projects', icon: FiBriefcase, animation: 'animate-sway' },
    { path: '/connect', label: 'Connect', icon: FiLink, animation: 'animate-ping' },
    { path: '/skills', label: 'Skills', icon: FiCode, animation: 'animate-pulse' },
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
                `group relative w-11 h-11 rounded-[14px] flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'text-[#00D9FF] bg-[#00D9FF]/10 shadow-[0_0_20px_rgba(0,217,255,0.3)]'
                    : 'text-[#6F6F6F] hover:text-[#00D9FF] hover:bg-[#00D9FF]/10 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)]'
                }`
              }
            >
              <Icon 
                size={20} 
                strokeWidth={1.5} 
                className={`
                  ${item.animation === 'animate-bounce-subtle' ? 'group-hover:animate-bounce-subtle' : ''}
                  ${item.animation === 'animate-sway' ? 'group-hover:animate-sway' : ''}
                  ${item.animation === 'animate-ping' ? 'group-hover:animate-ping' : ''}
                  ${item.animation === 'animate-pulse' ? 'group-hover:animate-pulse' : ''}
                  ${item.animation === 'animate-head-bounce' ? 'group-hover:animate-head-bounce' : ''}
                `}
              />
              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-3 py-1.5 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-white text-xs font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
