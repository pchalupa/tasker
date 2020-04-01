/**
 * @module Task
 */

import React from 'react';
import styles from '../styles/Task.module.scss';

/**
 * Class represents student.
 *
 * @class
 */
class Task extends React.Component {
    render() {
        return <div className={styles.taskWrapper}>{this.props.task}</div>;
    }
}

export default Task;
