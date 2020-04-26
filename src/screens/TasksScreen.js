/**
 * @module Tasks
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tasks from '../components/List/Tasks';
import Header from '../components/Image/Header';
import Weeks from '../components/Filter/Weeks';
import { getWeekDates } from '../helper';
import styles from './Screen.module.scss';
import image from '../assets/img/header.svg';

/**
 * Function displays Tasks screen.
 */
function TasksScreen(props) {
	const [timePeriod, setTimePeriod] = useState(getWeekDates());

	return (
		<div className={styles.layout}>
			<Header image={image} alt="Header" text={props.location.state.alias} />
			<Weeks timePeriod={setTimePeriod} />
			<Tasks userId={props.location.state.id} timePeriod={timePeriod} />
		</div>
	);
}

TasksScreen.propTypes = {
	location: PropTypes.any,
};

export default TasksScreen;
