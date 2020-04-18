/**
 * @module helper
 */

/**
 * Returns start, end dates of week. When passing parametr, returns past weeks.
 *
 * @param {int} past number of past weeks from current
 */
export function getWeekDates(past = 0) {
	const current = new Date();
	current.setHours(0, 0, 0, 0);
	const start = current.getDate() - (current.getDay() === 0 ? 6 : current.getDay() - 1);
	const end = start + 6;
	return {
		start: new Date(current.setDate(start - 7 * past)),
		end: new Date(current.setDate(end - 7 * past)),
	};
}
