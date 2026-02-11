import { getTechIcon } from '../data/techIcons';

/**
 * TechBadge Component
 * Displays a technology badge with icon and name
 */
function TechBadge({ technology, className = "" }) {
  const techInfo = getTechIcon(technology);
  const Icon = techInfo.icon;

  return (
    <span 
      className={`bg-[#1A1A1A] text-[#E0E0E0] px-2.5 py-1.5 rounded-full text-xs md:text-sm font-medium border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors duration-200 flex items-center gap-1.5 ${className}`}
    >
      {Icon && <Icon style={{ color: techInfo.color }} className="text-[1em]" />}
      {techInfo.name}
    </span>
  );
}

export default TechBadge;
