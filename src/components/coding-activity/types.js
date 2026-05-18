/** Default range: trailing 12 months */
export const LAST_YEAR = 'last'

/**
 * @typedef {Object} CodingActivityData
 * @property {Record<string, number>} githubCountByDate
 * @property {Record<string, number>} leetcodeCountByDate
 * @property {number[]} availableYears
 * @property {string} latestDate
 */

/**
 * @typedef {typeof LAST_YEAR | number} ActivityRange
 */

/**
 * @typedef {{ github: number, leetcode: number }} DayCounts
 */

/**
 * @typedef {Object} CodingActivityView
 * @property {Array<{ date: string, count: number, level: 0|1|2|3|4 }>} calendarData
 * @property {Map<string, DayCounts>} countsByDate
 * @property {number} githubBusiest
 * @property {number} leetcodeBusiest
 * @property {number} githubTotal
 * @property {number} leetcodeTotal
 * @property {number} weeks
 * @property {string} label
 * @property {string} startIso
 * @property {string} endIso
 */

/**
 * @typedef {Object} HoveredDay
 * @property {string} date
 * @property {number} github
 * @property {number} leetcode
 * @property {DOMRect} rect
 */

export {}
