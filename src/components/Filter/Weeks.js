/**
 * @module Weeks
 */

import React, { createRef } from 'react';
import styles from '../../styles/Filter/Weeks.module.scss';

/**
 *
 * @param {object} props
 */
class Weeks extends React.Component {
    constructor() {
        super();
        this.state = { selected: '' };
        this.currentWeek = createRef();
        this.previosWeek = createRef();
    }

    componentDidMount() {
        this.setState({ selected: this.currentWeek.current });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.selected.id) {
            prevState.selected.setAttribute('id', '');
            this.state.selected.setAttribute('id', styles.selected);
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <button
                    onClick={(event) => {
                        this.setState({ selected: event.target });
                        this.props.timePeriod({
                            start: new Date(2020, 3, 13, 0, 0, 0),
                            end: new Date(2020, 3, 19, 0, 0, 0)
                        });
                    }}
                    id={styles.selected}
                    ref={this.currentWeek}
                >
                    Tento týden
                </button>
                <button
                    onClick={(event) => {
                        this.setState({ selected: event.target });
                        this.props.timePeriod({
                            start: new Date(2020, 3, 6, 0, 0, 0),
                            end: new Date(2020, 3, 12, 0, 0, 0)
                        });
                    }}
                    ref={this.previousWeek}
                >
                    Minulý týden
                </button>
            </div>
        );
    }
}

export default Weeks;
