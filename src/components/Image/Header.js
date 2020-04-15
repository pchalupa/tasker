/**
 * @module Header
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../styles/Image/Header.module.scss';

function Header(props) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>{`Tohle jsou tvoje úkoly ${props.student}.`}</div>
			<img className={styles.image} src={props.source} alt={props.alt} />
		</div>
	);
}

Header.propTypes = {
	student: PropTypes.string,
	source: PropTypes.string,
	alt: PropTypes.string,
};

export default Header;
