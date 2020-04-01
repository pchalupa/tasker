/**
 * @module Student
 */

import React from 'react';

/**
 * Class represents student.
 *
 * @class
 */
class Student extends React.Component {
    render() {
        return <div className="student-wrapper">{this.props.student}</div>;
    }
}

export default Student;
