import { cloneElement } from 'react'
import {
  GITHUB_CONTRIBUTION_COLORS,
  LEETCODE_CALENDAR_COLORS,
  EMPTY_CELL_COLOR,
} from './constants'
import { classifyIntensityLevel } from './lib'

/**
 * @param {import('./types').CodingActivityView} view
 * @param {(h: import('./types').HoveredDay) => void} setHovered
 */
export function createRenderBlock(view, setHovered) {
  const renderBlock = (block, activity) => {
    const counts = view.countsByDate.get(activity.date) ?? {
      github: 0,
      leetcode: 0,
    }
    const gh = counts.github
    const lc = counts.leetcode

    const ghFill =
      GITHUB_CONTRIBUTION_COLORS[classifyIntensityLevel(gh, view.githubBusiest)]
    const lcFill =
      LEETCODE_CALENDAR_COLORS[
        classifyIntensityLevel(lc, view.leetcodeBusiest)
      ]

    const enter = (e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      setHovered({ date: activity.date, github: gh, leetcode: lc, rect })
    }
    const leave = () => setHovered(null)

    const interactionStyle = { cursor: 'pointer' }
    const handlers = {
      onMouseEnter: enter,
      onMouseLeave: leave,
      onFocus: enter,
      onBlur: leave,
      onTouchStart: enter,
      style: interactionStyle,
    }

    if (gh + lc === 0) {
      return cloneElement(block, { fill: EMPTY_CELL_COLOR, ...handlers })
    }

    if (lc === 0) {
      return cloneElement(block, { fill: ghFill, ...handlers })
    }

    if (gh === 0) {
      return cloneElement(block, { fill: lcFill, ...handlers })
    }

    const x = Number(block.props.x)
    const y = Number(block.props.y)
    const w = Number(block.props.width)
    const h = Number(block.props.height)
    const r = Number(block.props.rx) || 0
    const clipId = `cell-${activity.date}`

    return (
      <g data-date={activity.date} {...handlers}>
        <defs>
          <clipPath id={clipId}>
            <rect x={x} y={y} width={w} height={h} rx={r} ry={r} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clipId})`}>
          <polygon
            points={`${x},${y} ${x + w},${y} ${x},${y + h}`}
            fill={ghFill}
          />
          <polygon
            points={`${x + w},${y} ${x + w},${y + h} ${x},${y + h}`}
            fill={lcFill}
          />
        </g>
      </g>
    )
  }

  return renderBlock
}
