/**
 * @module Student
 */

import React from 'react';
import styles from '../styles/Student.module.scss';

/**
 * Class represents student.
 *
 * @class
 */
class Student extends React.Component {
    render() {
        return (
            <div className={styles.studentWrapper}>{this.props.student}</div>
        );
    }
}

export default Student;
