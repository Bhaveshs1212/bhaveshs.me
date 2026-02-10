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
      className={`bg-[#1A1A1A] text-[#E0E0E0] px-2 py-1 rounded-full text-[10px] font-medium border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors duration-200 flex items-center gap-1 ${className}`}
    >
      {Icon && <Icon style={{ color: techInfo.color }} className="text-xs" />}
      {techInfo.name}
    </span>
  );
}

export default TechBadge;
