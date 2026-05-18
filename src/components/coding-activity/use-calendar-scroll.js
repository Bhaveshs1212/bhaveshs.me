import { useEffect } from 'react'
import { CALENDAR_SCROLL_SELECTOR } from './constants'
import { LAST_YEAR } from './types'
import { getWeekIndexForDate } from './lib'

function getCalendarScrollEl(container) {
  return container?.querySelector(CALENDAR_SCROLL_SELECTOR) ?? null
}

function setCalendarScrollbarHidden(scrollEl, hidden) {
  scrollEl.classList.toggle('scrollbar-hide', hidden)
  if (hidden) {
    scrollEl.style.setProperty('scrollbar-width', 'none')
    scrollEl.style.setProperty('-ms-overflow-style', 'none')
  } else {
    scrollEl.style.removeProperty('scrollbar-width')
    scrollEl.style.removeProperty('-ms-overflow-style')
  }
}

function getScrollTargetDate(range, latestDate, endIso) {
  if (range === LAST_YEAR) return latestDate
  const latestYear = Number(latestDate.slice(0, 4))
  if (range === latestYear) return latestDate
  return endIso
}

function scrollCalendarToDate(
  container,
  startIso,
  targetDate,
  blockSize,
  blockMargin,
) {
  const scrollEl = getCalendarScrollEl(container)
  if (!scrollEl) return

  const maxScroll = scrollEl.scrollWidth - scrollEl.clientWidth
  if (maxScroll <= 0) return

  const columnWidth = blockSize + blockMargin
  const weekIndex = getWeekIndexForDate(startIso, targetDate)
  const scrollLeft =
    weekIndex * columnWidth - scrollEl.clientWidth + columnWidth
  scrollEl.scrollLeft = Math.max(0, Math.min(maxScroll, scrollLeft))
}

/**
 * @param {Object} params
 * @param {import('react').RefObject<HTMLElement|null>} params.containerRef
 * @param {import('./types').CodingActivityView|null} params.view
 * @param {import('./types').ActivityRange} params.range
 * @param {boolean} params.isMobile
 * @param {number} params.blockSize
 * @param {number} params.blockMargin
 * @param {string|undefined} params.latestDate
 */
export function useCalendarScroll({
  containerRef,
  view,
  range,
  isMobile,
  blockSize,
  blockMargin,
  latestDate,
}) {
  useEffect(() => {
    if (!view || !latestDate) return

    const containerEl = containerRef.current

    const sync = () => {
      const scrollEl = getCalendarScrollEl(containerRef.current)
      if (!scrollEl) return

      if (isMobile) {
        setCalendarScrollbarHidden(scrollEl, true)
        const targetDate = getScrollTargetDate(range, latestDate, view.endIso)
        scrollCalendarToDate(
          containerRef.current,
          view.startIso,
          targetDate,
          blockSize,
          blockMargin,
        )
      } else {
        setCalendarScrollbarHidden(scrollEl, false)
      }
    }

    sync()
    const frame = requestAnimationFrame(sync)

    return () => {
      cancelAnimationFrame(frame)
      const scrollEl = getCalendarScrollEl(containerEl)
      if (scrollEl) setCalendarScrollbarHidden(scrollEl, false)
    }
  }, [
    isMobile,
    view,
    blockSize,
    blockMargin,
    range,
    latestDate,
    containerRef,
  ])
}
