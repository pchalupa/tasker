/**
 * @module TasksContainer
 */

import React from 'react';
import Task from './Task';
import { db } from '../storage/Firebase';
import styles from '../styles/TasksContainer.module.scss';

/**
 * Represents students bar.
 *
 * @class
 */
class TasksContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        this.loadTasksFromDb();
    }

    loadTasksFromDb = () => {
        db.collection('tasks')
            .where('assign', 'array-contains', this.props.userId)
            .get()
            .then((querySnapshot) => {
                const tasks = [];
                querySnapshot.forEach((doc) => {
                    tasks.push({ id: doc.id, data: doc.data() });
                });
                return tasks;
            })
            .then((tasks) => {
                this.setState({ tasks: tasks });
            });
    };

    render() {
        const tasks = this.state.tasks.map((task, index) => (
            <Task
                task={`${
                    task.data.detail.subject +
                    ' - ' +
                    task.data.detail.description
                }`}
                key={`${'task-' + task.id + '-' + index}`}
            />
        ));
        return <div className={styles.tasksContainer}>{tasks}</div>;
    }
}

export default TasksContainer;
