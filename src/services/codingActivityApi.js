import { GITHUB_USERNAME, LEETCODE_USERNAME } from '../constants/profile'

const GITHUB_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`
const LEETCODE_API = '/leetcode'

const ACTIVE_YEARS_QUERY = `
  query getActiveYears($username: String!) {
    matchedUser(username: $username) {
      userCalendar {
        activeYears
      }
    }
  }
`

const YEAR_CALENDAR_QUERY = `
  query getYearCalendar($username: String!, $year: Int!) {
    matchedUser(username: $username) {
      userCalendar(year: $year) {
        submissionCalendar
      }
    }
  }
`

function toIsoDate(date) {
  return date.toISOString().slice(0, 10)
}

function toDateString(timestamp) {
  const d = new Date(Number(timestamp) * 1000)
  const y = d.getUTCFullYear()
  const m = String(d.getUTCMonth() + 1).padStart(2, '0')
  const day = String(d.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

async function queryLeetCode(query, variables) {
  const response = await fetch(LEETCODE_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Referer: 'https://leetcode.com',
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!response.ok) {
    throw new Error(`LeetCode API error: ${response.status}`)
  }

  return response.json()
}

async function getLeetCodeSubmissionCounts(username) {
  const activeYearsJson = await queryLeetCode(ACTIVE_YEARS_QUERY, { username })
  const activeYears =
    activeYearsJson.data?.matchedUser?.userCalendar?.activeYears ?? []

  const countByDate = {}

  await Promise.all(
    activeYears.map(async (year) => {
      const yearJson = await queryLeetCode(YEAR_CALENDAR_QUERY, {
        username,
        year,
      })
      const rawCalendar =
        yearJson.data?.matchedUser?.userCalendar?.submissionCalendar
      if (!rawCalendar) return

      const calendarMap =
        typeof rawCalendar === 'string' ? JSON.parse(rawCalendar) : rawCalendar

      for (const [timestamp, count] of Object.entries(calendarMap)) {
        countByDate[toDateString(timestamp)] = count
      }
    }),
  )

  return countByDate
}

const EMPTY_RESPONSE = {
  githubCountByDate: {},
  leetcodeCountByDate: {},
  availableYears: [],
  latestDate: toIsoDate(new Date()),
}

/**
 * @returns {Promise<import('../components/coding-activity/types').CodingActivityData>}
 */
export async function fetchCodingActivityData() {
  try {
    const [githubResponse, leetcodeCountByDate] = await Promise.all([
      fetch(GITHUB_API),
      getLeetCodeSubmissionCounts(LEETCODE_USERNAME),
    ])

    if (!githubResponse.ok) {
      throw new Error(`GitHub API error: ${githubResponse.status}`)
    }

    const githubJson = await githubResponse.json()
    const latestDate = toIsoDate(new Date())

    const githubCountByDate = {}
    for (const day of githubJson.contributions ?? []) {
      if (day.count > 0 && day.date <= latestDate) {
        githubCountByDate[day.date] = day.count
      }
    }

    const leetcodeCounts = {}
    for (const [date, count] of Object.entries(leetcodeCountByDate)) {
      if (count > 0 && date <= latestDate) {
        leetcodeCounts[date] = count
      }
    }

    const years = new Set()
    for (const date of Object.keys(githubCountByDate)) {
      years.add(Number(date.slice(0, 4)))
    }
    for (const date of Object.keys(leetcodeCounts)) {
      years.add(Number(date.slice(0, 4)))
    }

    const availableYears = [...years].sort((a, b) => b - a)

    return {
      githubCountByDate,
      leetcodeCountByDate: leetcodeCounts,
      availableYears,
      latestDate,
    }
  } catch (error) {
    console.error('Coding activity fetch error:', error)
    return EMPTY_RESPONSE
  }
}
