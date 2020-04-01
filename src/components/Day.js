/**
 * @module Day
 */

import React from 'react';
import styles from '../styles/Day.module.scss';

/**
 * Class represents student.
 *
 * @class
 */
class Day extends React.Component {
    render() {
        return <div className={styles.dayWrapper}>{this.props.day}</div>;
    }
}

export default Day;
