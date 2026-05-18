import { useEffect, useRef } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import { GITHUB_ACCENT, LEETCODE_ACCENT } from './constants'
import { parseIsoDate } from './lib'

const DATE_FORMAT = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}

const TOOLTIP_GAP = 6
const VIEWPORT_PADDING = 8
const ESTIMATED_HALF_WIDTH = 80

function plural(n, word) {
  return `${n} ${word}${n === 1 ? '' : 's'}`
}

/**
 * @param {{ hovered: import('./types').HoveredDay, onDismiss: () => void }} props
 */
export function ActivityTooltip({ hovered, onDismiss }) {
  const tooltipRef = useRef(null)

  useEffect(() => {
    if (!hovered) return

    const handler = (e) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target)
      ) {
        onDismiss()
      }
    }

    document.addEventListener('pointerdown', handler, { passive: true })
    return () => document.removeEventListener('pointerdown', handler)
  }, [hovered, onDismiss])

  if (!hovered) return null

  const { date, github, leetcode, rect } = hovered
  const formattedDate = parseIsoDate(date).toLocaleDateString(
    'en-US',
    DATE_FORMAT,
  )

  let left = rect.left + rect.width / 2
  const top = rect.top - TOOLTIP_GAP

  const minLeft = VIEWPORT_PADDING + ESTIMATED_HALF_WIDTH
  const maxLeft = window.innerWidth - VIEWPORT_PADDING - ESTIMATED_HALF_WIDTH
  left = Math.max(minLeft, Math.min(maxLeft, left))

  return (
    <div
      ref={tooltipRef}
      role="tooltip"
      className="fixed z-50 pointer-events-none w-max max-w-[200px] rounded-md border border-[#2a2a2a] bg-[#1a1a1a] px-2.5 py-1.5 text-[11px] leading-tight text-[#B0B0B0] shadow-md"
      style={{
        left,
        top,
        transform: 'translate(-50%, -100%)',
      }}
    >
      <p className="font-medium text-[#F2F2F2]">{formattedDate}</p>
      {github + leetcode === 0 ? (
        <p className="text-[#9A9A9A]">No activity</p>
      ) : (
        <div className="mt-0.5 flex flex-col gap-0.5 text-[#9A9A9A]">
          {github > 0 && (
            <span className="flex items-center gap-1.5">
              <FaGithub className="size-2.5" style={{ color: GITHUB_ACCENT }} />
              {plural(github, 'contribution')}
            </span>
          )}
          {leetcode > 0 && (
            <span className="flex items-center gap-1.5">
              <SiLeetcode
                className="size-2.5"
                style={{ color: LEETCODE_ACCENT }}
              />
              {plural(leetcode, 'submission')}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
