/**
 * @module User
 */

import React from 'react';
import { analytics } from '../../storage/Firebase';
import { ROUTES } from '../../constants/routes';
import { Link } from 'react-router-dom';
import Avatar from '../Image/Avatar';
import PropTypes from 'prop-types';
import styles from './User.module.scss';

/**
 * Class represents user.
 *
 * @class
 */
function User(props) {
	return (
		<Link
			to={{
				pathname: ROUTES.TASKS,
				state: {
					id: props.id,
					alias: props.alias,
				},
			}}>
			<div
				className={styles.wrapper}
				style={{ animationDelay: `${props.index * 50}ms` }}
				onClick={() => {
					analytics.setUserId(props.id);
					analytics.logEvent('user_open', {
						user: props.user,
					});
				}}>
				<Avatar className={styles.avatar} gender={props.gender} />
				<p className={styles.title}>{props.user}</p>
			</div>
		</Link>
	);
}

User.propTypes = {
	id: PropTypes.string,
	alias: PropTypes.string,
	index: PropTypes.number,
	gender: PropTypes.string,
	user: PropTypes.string,
};

export default User;
