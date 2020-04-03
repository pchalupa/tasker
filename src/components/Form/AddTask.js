/**
 * @module AddTask
 */

import React from 'react';
import { db } from '../../storage/Firebase';

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            subject: '',
            description: ''
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        db.collection('tasks').add({
            date: { start: this.state.date, end: this.state.date },
            detail: {
                subject: this.state.subject,
                description: this.state.description
            },
            assign: ['fuci00']
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Předmět:
                    <input
                        name="subject"
                        type="text"
                        placeholder="Předmět"
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Popis:
                    <input
                        name="description"
                        type="text"
                        placeholder="Popis"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <label>
                    Datum:
                    <input
                        name="date"
                        type="text"
                        placeholder="Datum"
                        value={this.state.date}
                        onChange={this.handleInputChange}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddTask;
