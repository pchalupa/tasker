/**
 * @module Task
 */

import React from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import { db } from '../storage/Firebase';
import Tags from './Tags';
import styles from '../styles/Task.module.scss';

/**
 * Class represents student.
 *
 * @class
 */
class Task extends React.Component {
    constructor() {
        super();
        this.state = {
            done: false
        };
    }

    componentDidMount() {
        this.setState({ done: this.props.done });
    }

    handleCheckboxChange = (event) => {
        this.setState({ done: event.target.checked });

        db.collection('tasks')
            .doc(this.props.taskId)
            .update({
                done: event.target.checked
                    ? firebase.firestore.FieldValue.arrayUnion(
                          this.props.userId
                      )
                    : firebase.firestore.FieldValue.arrayRemove(
                          this.props.userId
                      )
            });
    };

    render() {
        return (
            <div
                className={styles.wrapper}
                id={this.state.done ? styles.done : ''}
                style={{
                    animationDelay: `${ this.props.animationDelay * 200 }ms`
                }}
            >
                <div className={styles.header}>
                    <div className={styles.title}>{this.props.subject}</div>
                    <input
                        className={styles.status}
                        type="checkbox"
                        checked={this.state.done}
                        onChange={this.handleCheckboxChange}
                        onClick={() => {
                            firebase.analytics().logEvent('task_state_change', {
                                taskId: this.props.taskId,
                                userId: this.props.userId,
                                subject: this.props.subject
                            });
                        }}
                    />
                </div>
                <Tags tags={this.props.tags} />
                <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: this.props.description }}
                />
            </div>
        );
    }
}

export default Task;
