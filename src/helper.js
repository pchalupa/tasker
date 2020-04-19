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
	const dateStart = current.getDate() - (current.getDay() === 0 ? 6 : current.getDay() - 1);
	const dateEnd = dateStart + 6;
	const start = new Date();
	start.setHours(0, 0, 0, 0);
	start.setDate(dateStart + 7 * past);
	const end = new Date();
	end.setHours(0, 0, 0, 0);
	end.setDate(dateEnd + 7 * past);
	return {
		start: start,
		end: new Date(end),
	};
}
