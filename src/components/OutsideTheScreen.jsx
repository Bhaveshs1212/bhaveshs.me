import { Dumbbell, Gamepad2, Trophy } from 'lucide-react'
import { hobbies } from '../data/personalLife'

const hobbyIconConfig = {
  gym: { Icon: Dumbbell, color: 'text-green-400' },
  football: { Icon: Trophy, color: 'text-amber-500' },
  gaming: { Icon: Gamepad2, color: 'text-blue-300' },
}

function OutsideTheScreen({ id, className = '' }) {
  return (
    <section
      id={id}
      aria-label="Beyond Code"
      className={`space-y-6 ${className}`}
    >
      <h2 className="text-lg sm:text-xl font-semibold text-[#F2F2F2]">
        Outside the Screen
      </h2>
      <div className="mt-4 grid gap-6 sm:grid-cols-2">
        {hobbies.map((hobby) => {
          const { Icon, color } = hobbyIconConfig[hobby.id]

          return (
            <div
              key={hobby.title}
              className="group rounded-lg border border-[#2A2A2A] bg-[#111]/50 p-6 transition-all duration-300 hover:border-[#3A3A3A]/80 hover:shadow-lg hover:shadow-black/20"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#1A1A1A]/80 transition-transform duration-300 group-hover:rotate-6">
                  <Icon className={`size-5 ${color}`} />
                </div>
                <h3 className="text-base font-medium text-[#F2F2F2]">{hobby.title}</h3>
              </div>
              <p className="text-sm text-[#9A9A9A] leading-relaxed">{hobby.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default OutsideTheScreen
