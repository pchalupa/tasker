/**
 * @module Header
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

function Header(props) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{`Tohle jsou tvoje úkoly ${props.text}.`}</div>
			<img className={styles.image} src={props.image} alt={props.alt} />
		</div>
	);
}

Header.propTypes = {
	text: PropTypes.string,
	image: PropTypes.string,
	alt: PropTypes.string,
};

export default Header;
