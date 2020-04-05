/**
 * @module AddTask
 */

import React from 'react';
import { db } from '../../storage/Firebase';
import * as firebase from 'firebase';
import styles from '../../styles/AddTaskForm.module.scss';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            date: '',
            subject: '',
            description: '',
            tags: ''
        };
    }

    componentDidMount() {
        this.getUsers();
    }

    async getUsers() {
        const querySnapshot = await db.collection('users').get();
        const users = [];
        querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, data: doc.data() });
        });
        this.setState({ users: users });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: name === 'tags' ? value.split(',') : value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        db.collection('tasks').add({
            date: {
                start: firebase.firestore.Timestamp.fromDate(
                    new Date('2020-04-10')
                ),
                end: firebase.firestore.Timestamp.fromDate(
                    new Date('2020-04-10')
                )
            },
            detail: {
                subject: this.state.subject,
                description: this.state.description,
                tags: this.state.tags
            },
            assign: this.state.users.map((user) => user.id),
            done: []
        });

        alert('Úkol byl zadán!');
    };

    render() {
        return (
            <form className={styles.container} onSubmit={this.handleSubmit}>
                <label>
                    <p>Předmět:</p>
                    <input
                        name="subject"
                        type="text"
                        placeholder="Předmět"
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                        required
                    />
                </label>
                <label>
                    <p>Štítky:</p>
                    <input
                        name="tags"
                        type="text"
                        placeholder="test, zápis, ..."
                        value={this.state.tags}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    <p>Popis:</p>
                    <textarea
                        rows="12"
                        name="description"
                        placeholder="Popis"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        required
                    />
                </label>
                <input type="submit" value="Odeslat" />
            </form>
        );
    }
}

export default AddTask;
