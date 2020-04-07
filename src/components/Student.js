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
function Student(props) {
    return (
        <Link
            to={{
                pathname: ROUTES.TASKS,
                state: {
                    studentId: props.studentId,
                    studentAlias: props.studentAlias
                }
            }}
            onClick={() => {
                firebase.analytics().logEvent('user_open', {
                    userId: props.studentId,
                    student: props.student
                });
            }}
        >
            <div
                className={styles.wrapper}
                style={{ animationDelay: `${props.index * 50}ms` }}
            >
                <Avatar className={styles.avatar} gender={props.gender} />
                <p className={styles.title}>{props.student}</p>
            </div>
        </Link>
    );
}

export default Student;
