/**
 * @module Avatar
 */

import React from 'react';
import styles from '../../styles/image/Avatar.module.scss';
import F_1 from '../../assets/img/avatars/female/1.svg';
import F_2 from '../../assets/img/avatars/female/2.svg';
import F_3 from '../../assets/img/avatars/female/3.svg';
import M_1 from '../../assets/img/avatars/male/1.svg';
import M_2 from '../../assets/img/avatars/male/2.svg';
import M_3 from '../../assets/img/avatars/male/3.svg';

/**
 * Renders user avatart from random picture set.
 *
 * @param {Object} props
 */
function Avatar(props) {
    const female = [F_1, F_2, F_3];
    const male = [M_1, M_2, M_3];
    const index = Math.floor(Math.random() * 3);
    return (
        <img
            className={styles.container}
            src={props.gender === 'male' ? male[index] : female[index]}
            alt="Avatar"
        />
    );
}

export default Avatar;
