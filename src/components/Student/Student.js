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
    /**
     * Creates new instance of Students class.
     *
     */
    constructor() {
        super();
    }

    render() {
        return <>{this.props.student}</>;
    }
}

export default Student;
