/**
 * @module Weeks
 */

import React, { createRef } from 'react';
import { getWeekDates } from '../../helper';
import PropTypes from 'prop-types';
import styles from './Weeks.module.scss';

/**
 *	Represents weeks filter.
 */
class Weeks extends React.Component {
	constructor() {
		super();
		this.state = { selected: '' };
		this.currentWeekRef = createRef();
	}

	componentDidMount() {
		this.setState({ selected: this.currentWeekRef.current });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.selected.id) {
			prevState.selected.setAttribute('id', '');
			this.state.selected.setAttribute('id', styles.selected);
		}
	}

	render() {
		const buttons = [];
		for (var i = 0; i < 3; i++) {
			const weekDates = getWeekDates(-i);
			buttons.push(
				<button
					onClick={(event) => {
						this.setState({ selected: event.target });
						this.props.timePeriod({
							start: weekDates.start,
							end: weekDates.end,
						});
					}}
					id={i === 0 ? styles.selected : ''}
					ref={i === 0 ? this.currentWeekRef : null}
					key={i}>
					{i === 0
						? 'Tento týden'
						: i === 1
						? 'Minulý týden'
						: `${weekDates.start.getDate()}.${
								weekDates.start.getMonth() + 1
						  }. - ${weekDates.end.getDate()}.${weekDates.end.getMonth() + 1}.`}
				</button>
			);
		}
		return <div className={styles.container}>{buttons}</div>;
	}
}

Weeks.propTypes = {
	timePeriod: PropTypes.func,
};

export default Weeks;
