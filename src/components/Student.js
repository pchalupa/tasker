/**
 * @module Student
 */

import React from 'react';
import { analytics } from '../storage/Firebase';
import { ROUTES } from '../constants/routes';
import { Link } from 'react-router-dom';
import Avatar from './Image/Avatar';
import PropTypes from 'prop-types';
import styles from '../styles/Student.module.scss';

/**
 * Class represents student.
 *
 * @class
 */
function Student(props) {
	return (
		<Link
			to={{
				pathname: ROUTES.TASKS,
				state: {
					studentId: props.studentId,
					studentAlias: props.studentAlias,
				},
			}}>
			<div
				className={styles.wrapper}
				style={{ animationDelay: `${props.index * 50}ms` }}
				onClick={() => {
					analytics.setUserId(props.studentId);
					analytics.logEvent('user_open', {
						student: props.studentAlias,
					});
				}}>
				<Avatar className={styles.avatar} gender={props.gender} />
				<p className={styles.title}>{props.student}</p>
			</div>
		</Link>
	);
}

Student.propTypes = {
	studentId: PropTypes.string,
	studentAlias: PropTypes.string,
	index: PropTypes.number,
	gender: PropTypes.string,
	student: PropTypes.string,
};

export default Student;
