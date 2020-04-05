/**
 *@module Ring
 */

import React from 'react';
import RingLoader from '../../assets/img/ring-loader.svg';

function Ring() {
    return (
        <img
            src={RingLoader}
            alt="Ring loader"
            style={{ display: 'block', margin: '0 auto' }}
        />
    );
}

export default Ring;
