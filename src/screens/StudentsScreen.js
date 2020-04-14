/**
 * @module Students
 */

import React from 'react';
import Students from '../components/Students';
import Main from '../components/Title/Main';
import styles from '../styles/Screen/Screen.module.scss';

/**
 * Function displays Tasker screen.
 */
function StudentsScreen() {
    return (
        <div className={styles.layout}>
            <Main content="Úkolníček 6.A" />
            <Students />
        </div>
    );
}

export default StudentsScreen;
