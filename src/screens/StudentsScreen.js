/**
 * @module Students
 */

import React from 'react';
import Users from '../components/List/Users';
import Main from '../components/Title/Main';
import styles from './Screen.module.scss';

/**
 * Function displays Tasker screen.
 */
function StudentsScreen() {
	return (
		<div className={styles.layout}>
			<Main content="Úkolníček 6.A" />
			<Users />
		</div>
	);
}

export default StudentsScreen;
