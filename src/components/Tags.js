/**
 * @module Tags
 */

import React from 'react';
import styles from '../styles/Tags.module.scss';

function Tags(props) {
    return (
        <div className={styles.container}>
            {props.tags &&
                props.tags.map((tag) => (
                    <span className={styles.tag} key={tag}>{`#${tag}`}</span>
                ))}
        </div>
    );
}

export default Tags;
