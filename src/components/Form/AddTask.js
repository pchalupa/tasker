/**
 * @module AddTask
 */

import React from 'react';
import { db } from '../../storage/Firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import pell from 'pell';
import styles from '../../styles/AddTaskForm.module.scss';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            assgin: [],
            date: '',
            subject: '',
            description: '',
            tags: ''
        };
    }

    componentDidMount() {
        this.getUsers();
        this.editorInit();
    }

    async getUsers() {
        const querySnapshot = await db.collection('users').get();
        const users = [];
        querySnapshot.forEach((doc) => {
            users.push({
                id: doc.id,
                name: `${doc.data().name.first} ${doc.data().name.last}`,
                assign: true
            });
        });
        this.setState({ users: users });
    }

    editorInit = () => {
        pell.init({
            element: document.querySelector('#wysiwyg-editor'),
            onChange: (html) => this.setState({ description: html }),
            defaultParagraphSeparator: 'p',
            actions: [
                'bold',
                'italic',
                'underline',
                'heading1',
                'heading2',
                'olist',
                'ulist',
                'link'
            ],
            classes: {
                actionbar: styles.actionbar,
                button: styles.button,
                content: styles.content,
                selected: styles.selected
            }
        });
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: name === 'tags' ? value.split(',') : value
        });
    };

    handleSetAssign = (event) => {
        event.preventDefault();
        const users = this.state.users;
        users.forEach((user) => {
            if (user.id === event.target.name) {
                user.assign = !user.assign;
            }
        });
        this.setState({ users: users });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const assign = [];
        this.state.users.forEach((user) => {
            if (user.assign) {
                assign.push(user.id);
            }
        });
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
            assign: assign,
            done: []
        });

        // eslint-disable-next-line no-undef
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
                <label>Přiřazení:</label>
                <div className={styles.assign}>
                    {this.state.users.map((user) => (
                        <button
                            type="button"
                            name={user.id}
                            className={styles.user}
                            id={user.assign ? styles.selected : ''}
                            onClick={this.handleSetAssign}
                            key={user.id}
                        >
                            {user.name}
                        </button>
                    ))}
                </div>
                <label>
                    <p>Popis:</p>
                    {this.state.editor}
                    <div id="wysiwyg-editor" className={styles.editor}></div>
                </label>
                <input type="submit" value="Odeslat" />
            </form>
        );
    }
}

export default AddTask;
