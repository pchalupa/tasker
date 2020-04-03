/**
 * @module Students
 */

import React from 'react';
import StudentsContainer from '../components/StudentsContainer';
import styles from '../styles/StudentsScreen.module.scss';

/**
 * Function displays Tasker screen.
 */
function Students() {
    return (
        <div className={styles.studentsScreen}>
            <StudentsContainer />
        </div>
    );
}

export default Students;
