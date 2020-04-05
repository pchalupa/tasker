/**
 * @module Avatar
 */

import React from 'react';
import styles from '../../styles/Avatar.module.scss';
import f_1 from '../../assets/img/avatars/female/1.svg';
import f_2 from '../../assets/img/avatars/female/2.svg';
import f_3 from '../../assets/img/avatars/female/3.svg';
import m_1 from '../../assets/img/avatars/male/1.svg';
import m_2 from '../../assets/img/avatars/male/2.svg';
import m_3 from '../../assets/img/avatars/male/3.svg';

function Avatar(props) {
    const female = [f_1, f_2, f_3];
    const male = [m_1, m_2, m_3];
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
