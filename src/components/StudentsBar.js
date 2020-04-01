/**
 * @module StudentsBar
 */

import React from 'react';
import Student from './Student';
import { auth, db } from '../storage/Firebase';

/**
 * Represents students bar.
 *
 * @class
 */
class StudentsBar extends React.Component {
    constructor() {
        super();
        this.state = {
            students: []
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

        this.loadStudentsFromDb();
    }

    loadStudentsFromDb() {
        db.collection('users')
            .get()
            .then(querySnapshot => {
                const users = [];

                querySnapshot.forEach(doc => {
                    users.push({ id: doc.id, data: doc.data() });
                });
                return users;
            })
            .then(users => {
                this.setState({ students: users });
                console.log(this.state.students);
            });
    }

    render() {
        const students = this.state.students.map(student => (
            <Student
                student={`${student.data.name.first +
                    ' ' +
                    student.data.name.last}`}
                key={student.id}
            />
        ));
        return <div className="students-container">{students}</div>;
    }
}

export default StudentsBar;
