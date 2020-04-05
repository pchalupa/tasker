/**
 * @module Header
 */

import React from 'react';
import styles from '../../styles/Header.module.scss';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div
                    className={styles.title}
                >{`Tohle jsou tvoje úkoly ${this.props.student}.`}</div>
                <img
                    className={styles.image}
                    src={this.props.source}
                    alt={this.props.alt}
                />
            </div>
        );
    }
}

export default Header;
