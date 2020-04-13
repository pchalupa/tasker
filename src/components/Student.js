/**
 * @module Student
 */

import React from 'react';
import { analytics } from '../storage/Firebase';
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
        >
            <div
                className={styles.wrapper}
                style={{ animationDelay: `${props.index * 50}ms` }}
                onClick={() => {
                    analytics.setUserId(props.studentId);
                    analytics.logEvent('user_open', {
                        student: props.studentAlias
                    });
                }}
            >
                <Avatar className={styles.avatar} gender={props.gender} />
                <p className={styles.title}>{props.student}</p>
            </div>
        </Link>
    );
}

export default Student;
