/**
 * @module Tags
 */

import React from 'react';
import styles from '../styles/Tags.module.scss';

class Tags extends React.PureComponent {
    render() {
        return (
            <div className={ styles.tagsContainer }>
                {this.props.tags &&
                    this.props.tags.map((tag, index) => (
                        <span
                            className={ styles.tag }
                            key={ index }
                        >{`#${ tag }`}</span>
                    ))}
            </div>
        );
    }
}

export default Tags;
