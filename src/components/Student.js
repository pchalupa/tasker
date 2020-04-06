/**
 * @module Student
 */

import React from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import { ROUTES } from '../constants/routes';
import { Link } from 'react-router-dom';
import Avatar from './Image/Avatar';
import styles from '../styles/Student.module.scss';

/**
 * Class represents student.
 *
 * @class
 */
class Student extends React.Component {
    render() {
        return (
            <Link
                to={{
                    pathname: ROUTES.TASKS,
                    state: {
                        studentId: this.props.studentId,
                        studentAlias: this.props.studentAlias
                    }
                }}
                onClick={firebase.analytics().logEvent('user_open', {
                    userId: this.props.studentId,
                    student: this.props.student
                })}
            >
                <div
                    className={styles.wrapper}
                    style={{ animationDelay: `${ this.props.index * 50 }ms` }}
                >
                    <Avatar
                        className={styles.avatar}
                        gender={this.props.gender}
                    />
                    <p className={styles.title}>{this.props.student}</p>
                </div>
            </Link>
        );
    }
}

export default Student;
