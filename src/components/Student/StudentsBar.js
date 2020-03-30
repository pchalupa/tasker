/**
 * @module StudentsBar
 */

import React from 'react';
import Student from './Student';

/**
 * Represents students bar.
 *
 * @class
 */
class StudentsBar extends React.Component {
    render() {
        return (
            <>
                <Student student="Petr Novák" />
            </>
        );
    }
}

export default StudentsBar;
