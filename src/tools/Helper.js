/**
 * @module Helper
 */

/**
 * Returns date start and end of current week.
 *
 * @returns {object} start, end
 */
export default function getCurrentWeek() {
    const current = new Date();
    current.setHours(0, 0, 0, 0);
    const start =
        current.getDate() - (current.getDay() === 0 ? 6 : current.getDay() - 1);
    const end = start + 6;
    return {
        start: new Date(current.setDate(start)),
        end: new Date(current.setDate(end))
    };
}
