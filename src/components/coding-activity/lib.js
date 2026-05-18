import { LAST_YEAR } from './types'

/** @param {string} iso */
export function parseIsoDate(iso) {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day)
}

/** @param {Date} date */
export function formatIsoDate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

/** @param {number} count @param {number} busiestDayCount */
export function classifyIntensityLevel(count, busiestDayCount) {
  if (count === 0) return 0
  if (busiestDayCount <= 0) return 1
  const ratio = count / busiestDayCount
  if (ratio <= 0.25) return 1
  if (ratio <= 0.5) return 2
  if (ratio <= 0.75) return 3
  return 4
}

/** @param {string} startIso @param {string} dateIso */
export function getWeekIndexForDate(startIso, dateIso) {
  const start = parseIsoDate(startIso)
  const target = parseIsoDate(dateIso)
  const dayOffset = Math.round(
    (target.getTime() - start.getTime()) / 86_400_000,
  )
  return Math.floor((start.getDay() + dayOffset) / 7)
}

/**
 * @param {import('./types').CodingActivityData} data
 * @param {import('./types').ActivityRange} range
 * @returns {import('./types').CodingActivityView}
 */
export function buildActivityView(data, range) {
  let startIso
  let endIso
  let label

  if (range === LAST_YEAR) {
    const start = parseIsoDate(data.latestDate)
    start.setFullYear(start.getFullYear() - 1)
    start.setDate(start.getDate() + 1)
    startIso = formatIsoDate(start)
    endIso = data.latestDate
    label = 'the last year'
  } else {
    startIso = `${range}-01-01`
    endIso = `${range}-12-31`
    label = String(range)
  }

  /** @type {Array<{ date: string, github: number, leetcode: number }>} */
  const perDay = []
  let githubTotal = 0
  let leetcodeTotal = 0
  let busiestDayCount = 0
  let githubBusiest = 0
  let leetcodeBusiest = 0

  const cursor = parseIsoDate(startIso)
  const end = parseIsoDate(endIso)

  while (cursor <= end) {
    const date = formatIsoDate(cursor)
    const github = data.githubCountByDate[date] ?? 0
    const leetcode = data.leetcodeCountByDate[date] ?? 0
    githubTotal += github
    leetcodeTotal += leetcode
    busiestDayCount = Math.max(busiestDayCount, github + leetcode)
    githubBusiest = Math.max(githubBusiest, github)
    leetcodeBusiest = Math.max(leetcodeBusiest, leetcode)
    perDay.push({ date, github, leetcode })
    cursor.setDate(cursor.getDate() + 1)
  }

  const calendarData = perDay.map(({ date, github, leetcode }) => ({
    date,
    count: github + leetcode,
    level: classifyIntensityLevel(github + leetcode, busiestDayCount),
  }))

  const countsByDate = new Map()
  for (const { date, github, leetcode } of perDay) {
    countsByDate.set(date, { github, leetcode })
  }

  const weeks = Math.ceil(
    (parseIsoDate(startIso).getDay() + perDay.length) / 7,
  )

  return {
    calendarData,
    countsByDate,
    githubBusiest,
    leetcodeBusiest,
    githubTotal,
    leetcodeTotal,
    weeks,
    label,
    startIso,
    endIso,
  }
}
