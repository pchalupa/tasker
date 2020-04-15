/**
 * @module Main
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/TitleMain.module.scss';

function Main(props) {
	return <div className={styles.container}>{props.content}</div>;
}

Main.propTypes = {
	content: PropTypes.string,
};

export default Main;
