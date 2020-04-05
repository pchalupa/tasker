/**
 * @module Tasks
 */

import React from 'react';
import Tasks from '../components/Tasks';
import Header from '../components/Image/Header';
import styles from '../styles/Screen.module.scss';
import image from '../assets/img/header.svg';

/**
 * Function displays Tasker screen.
 */
class TasksScreen extends React.Component {
    componentDidMount() {
        if (
            !(
                this.props.location.state ||
                (localStorage.getItem('userId') &&
                    localStorage.getItem('userId') !== 'undefined')
            )
        ) {
            this.props.history.push('/');
        }
    }

    render() {
        return this.props.location.state ? (
            <div className={styles.layout}>
                <Header
                    source={image}
                    alt=""
                    student={this.props.location.state.studentAlias}
                />
                <Tasks userId={this.props.location.state.studentId} />
            </div>
        ) : (
            <></>
        );
    }
}

export default TasksScreen;
