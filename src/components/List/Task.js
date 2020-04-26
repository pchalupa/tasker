/**
 * @module Task
 */

import React from 'react';
import { base, db, analytics } from '../../storage/Firebase';
import Tags from './Tags';
import PropTypes from 'prop-types';
import styles from './Task.module.scss';

/**
 * Represents task.
 *
 * @class
 */
class Task extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false,
		};
	}

	componentDidMount() {
		this.setState({ done: this.props.done });
	}

	handleCheckboxChange = (event) => {
		this.setState({ done: event.target.checked });

		db.collection(process.env.NODE_ENV === 'production' ? 'tasks' : 'tasks_dev')
			.doc(this.props.taskId)
			.update({
				done: event.target.checked
					? base.firestore.FieldValue.arrayUnion(this.props.userId)
					: base.firestore.FieldValue.arrayRemove(this.props.userId),
			});
	};

	render() {
		return (
			<div
				className={styles.wrapper}
				id={this.state.done ? styles.done : ''}
				style={{
					animationDelay: `${this.props.animationDelay * 200}ms`,
				}}>
				<div className={styles.header}>
					<div className={styles.title}>{this.props.subject}</div>
					<input
						className={styles.status}
						type="checkbox"
						checked={this.state.done}
						onChange={this.handleCheckboxChange}
						onClick={() => {
							analytics.logEvent('task_state_change', {
								taskId: this.props.taskId,
								subject: this.props.subject,
							});
						}}
					/>
				</div>
				<Tags tags={this.props.tags} />
				<div className={styles.description} dangerouslySetInnerHTML={{ __html: this.props.description }} />
			</div>
		);
	}
}

Task.propTypes = {
	done: PropTypes.bool,
	taskId: PropTypes.string,
	userId: PropTypes.string,
	animationDelay: PropTypes.number,
	subject: PropTypes.string,
	tags: PropTypes.any,
	description: PropTypes.string,
};

export default Task;
