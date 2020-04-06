/**
 * @module Tasks
 */

import React from 'react';
import { db } from '../storage/Firebase';
import Task from './Task';
import Ring from './Loader/Ring';
import styles from '../styles/Tasks.module.scss';

/**
 * Represents students bar.
 *
 * @class
 */
class Tasks extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            isFetching: true
        };
    }

    componentDidMount() {
        this.loadTasksFromDb();
    }

    loadTasksFromDb = () => {
        const tasksRef = db.collection('tasks');
        tasksRef.where('assign', 'array-contains', this.props.userId);
        // TODO: tasksRef.where('date.end', '>', '2019-04-05');
        tasksRef
            .get()
            .then((querySnapshot) => {
                const tasks = [];
                querySnapshot.forEach((doc) => {
                    tasks.push({ id: doc.id, data: doc.data() });
                });
                return tasks;
            })
            .then((tasks) => {
                this.setState({ tasks: tasks, isFetching: false });
            });
    };

    render() {
        return this.state.isFetching ? (
            <Ring />
        ) : (
            <div className={ styles.tasksContainer }>
                {this.state.tasks.map((task, index) => (
                    <Task
                        subject={ task.data.detail.subject }
                        description={ task.data.detail.description }
                        done={ task.data.done.includes(this.props.userId) }
                        tags={ task.data.detail.tags }
                        taskId={ task.id }
                        userId={ this.props.userId }
                        animationDelay={ index }
                        key={ task.id }
                    />
                ))}
            </div>
        );
    }
}

export default Tasks;
