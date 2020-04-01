/**
 * @module DaysContainer
 */

import React from 'react';
import Day from './Day';
import TaskContainer from './TasksContainer';
import { db } from '../storage/Firebase';
import styles from '../styles/DaysContainer.module.scss';

/**
 * Represents students bar.
 *
 * @class
 */
class DaysContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            days: []
        };
    }

    componentDidMount() {
        /*
        db.collection('users')
            .doc('zabr00')
            .set({
                name: {
                    first: 'Karolína',
                    last: 'Zábranská'
                },
                class: '6.A'
            });
            */

        this.loadDaysFromDb();
    }

    loadDaysFromDb() {
        db.collection('days')
            .get()
            .then(querySnapshot => {
                const days = [];

                querySnapshot.forEach(doc => {
                    days.push({ id: doc.id, data: doc.data() });
                });
                return days;
            })
            .then(days => {
                this.setState({ days: days });
            });
    }

    render() {
        const days = this.state.days.map(day => (
            <>
                <Day day={`${day.data.date}`} key={day.id} />
                <TaskContainer task="test" />
            </>
        ));
        return <div className={styles.daysContainer}>{days}</div>;
    }
}

export default DaysContainer;
