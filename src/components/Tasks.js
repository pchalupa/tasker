/**
 * @module Tasks
 */

import React from 'react';
import { db } from '../storage/Firebase';
import Task from './Task';
import Ring from './Loader/Ring';
import PropTypes from 'prop-types';
import styles from '../styles/Tasks.module.scss';

/**
 * Represents students tasks.
 *
 * @class
 */
class Tasks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			isFetching: true,
		};
	}

	shouldComponentUpdate(nextProps) {
		return nextProps.tasks !== this.state.tasks ? true : false;
	}

	componentDidMount() {
		this.loadTasksFromDb();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.timePeriod !== this.props.timePeriod) {
			this.loadTasksFromDb();
		}
	}

	loadTasksFromDb = (
		timePeriod = {
			start: this.props.timePeriod.start,
			end: this.props.timePeriod.end,
		}
	) => {
		this.setState({ isFetching: true });
		const tasks = [];
		db.collection(process.env.NODE_ENV === 'production' ? 'tasks' : 'tasks_dev')
			.where('date.start', '>=', timePeriod.start)
			.where('assign', 'array-contains', this.props.userId)
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					if (doc.data().date.end.toDate() <= timePeriod.end) {
						tasks.push({ id: doc.id, data: doc.data() });
					}
				});
				return tasks;
			})
			.then((tasks) => {
				this.setState({ tasks: tasks, isFetching: false });
			})
			.catch((e) => {
				console.log(e);
			});

		return tasks;
	};

	render() {
		return this.state.isFetching ? (
			<Ring />
		) : (
			<div className={styles.container}>
				{this.state.tasks.map((task, index) => (
					<Task
						subject={task.data.detail.subject}
						description={task.data.detail.description}
						done={task.data.done.includes(this.props.userId)}
						tags={task.data.detail.tags}
						taskId={task.id}
						userId={this.props.userId}
						animationDelay={index}
						key={task.id}
					/>
				))}
			</div>
		);
	}
}

Tasks.propTypes = {
	timePeriod: PropTypes.object,
	userId: PropTypes.string,
};

export default Tasks;
