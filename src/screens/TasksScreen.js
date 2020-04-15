/**
 * @module Tasks
 */

import React from 'react';
import Tasks from '../components/Tasks';
import Header from '../components/Image/Header';
import Weeks from '../components/Filter/Weeks';
import getCurrentWeek from '../tools/Helper';
import PropTypes from 'prop-types';
import styles from '../styles/Screen/Screen.module.scss';
import image from '../assets/img/header.svg';

/**
 * Function displays Tasker screen.
 */
class TasksScreen extends React.Component {
	constructor() {
		super();
		this.state = { timePeriod: getCurrentWeek() };
	}
	componentDidMount() {
		if (
			!(
				this.props.location.state ||
				(localStorage.getItem('userId') && localStorage.getItem('userId') !== 'undefined')
			)
		) {
			this.props.history.push('/');
		}
	}

	handleTimePeriodChange = (timePeriod) => {
		this.setState({ timePeriod: timePeriod });
	};

	render() {
		return this.props.location.state ? (
			<div className={styles.layout}>
				<Header source={image} alt="" student={this.props.location.state.studentAlias} />
				<Weeks timePeriod={this.handleTimePeriodChange} />
				<Tasks userId={this.props.location.state.studentId} timePeriod={this.state.timePeriod} />
			</div>
		) : (
			<></>
		);
	}
}

TasksScreen.propTypes = {
	location: PropTypes.any,
	history: PropTypes.any,
};

export default TasksScreen;
