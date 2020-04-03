/**
 * @module Tasks
 */

import React from 'react';
import TasksContainer from '../components/TasksContainer';
import styles from '../styles/TasksScreen.module.scss';

/**
 * Function displays Tasker screen.
 */
class Tasks extends React.Component {
    render() {
        return (
            <div className={styles.tasker}>
                <TasksContainer userId={this.props.location.state.studentId} />
            </div>
        );
    }
}

export default Tasks;
