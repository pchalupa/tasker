/**
 * @module Student
 */

import React from 'react';
import { ROUTES } from '../constants/routes';
import { Link } from 'react-router-dom';
import styles from '../styles/StudentWrapper.module.scss';

/**
 * Class represents student.
 *
 * @class
 */
class Student extends React.Component {
    render() {
        return (
            <div className={styles.studentWrapper}>
                <Link
                    to={{
                        pathname: ROUTES.TASKS,
                        state: {
                            studentId: this.props.studentId
                        }
                    }}
                >
                    <div>{this.props.student}</div>
                </Link>
            </div>
        );
    }
}

export default Student;
