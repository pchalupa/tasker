/**
 * @module Header
 */

import React from 'react';
import styles from '../../styles/Header.module.scss';

function Header(props) {
    return (
        <div className={styles.container}>
            <div
                className={styles.title}
            >{`Tohle jsou tvoje úkoly ${ props.student }.`}</div>
            <img className={styles.image} src={props.source} alt={props.alt} />
        </div>
    );
}

export default Header;
