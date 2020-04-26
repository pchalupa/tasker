/**
 * @module Tasks
 */

import React from 'react';
import PropTypes from 'prop-types';
import Tasks from '../components/List/Tasks';
import Header from '../components/Image/Header';
import Weeks from '../components/Filter/Weeks';
import { getWeekDates } from '../helper';
import styles from './Screen.module.scss';
import image from '../assets/img/header.svg';

/**
 * Function displays Tasker screen.
 */
class TasksScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = { timePeriod: getWeekDates() };
	}

	handleTimePeriodChange = (timePeriod) => {
		this.setState({ timePeriod: timePeriod });
	};

	render() {
		return (
			<div className={styles.layout}>
				<Header image={image} alt="Header" text={this.props.location.state.alias} />
				<Weeks timePeriod={this.handleTimePeriodChange} />
				<Tasks userId={this.props.location.state.id} timePeriod={this.state.timePeriod} />
			</div>
		);
	}
}

TasksScreen.propTypes = {
	location: PropTypes.any,
	match: PropTypes.object,
};

export default TasksScreen;
