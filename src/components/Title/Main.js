/**
 * @module Main
 */

import React from 'react';
import styles from '../../styles/TitleMain.module.scss';

function Main(props) {
    return <div className={styles.container}>{props.content}</div>;
}

export default Main;
