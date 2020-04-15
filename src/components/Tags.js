/**
 * @module Tags
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Tags.module.scss';

function Tags(props) {
	return (
		<div className={styles.container}>
			{props.tags && props.tags.map((tag) => <span className={styles.tag} key={tag}>{`#${tag}`}</span>)}
		</div>
	);
}

Tags.propTypes = {
	tags: PropTypes.any,
};

export default Tags;
