/**
 * @module Tasker
 */

import React from 'react';
import StudentsContainer from '../components/StudentsContainer';
import DaysContainer from '../components/DaysContainer';
import styles from '../styles/Tasker.module.scss';

/**
 * Function displays Tasker screen.
 */
function Tasker() {
    return (
        <div className={styles.tasker}>
            <StudentsContainer />
            <DaysContainer />
        </div>
    );
}

export default Tasker;
