/**
 * @module StudentsContainer
 */

import React from 'react';
import Student from './Student';
import { db } from '../storage/Firebase';
import styles from '../styles/StudentsContainer.module.scss';

/**
 * Represents students bar.
 *
 * @class
 */
class StudentsContainer extends React.Component {
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
            .then((querySnapshot) => {
                const users = [];

                querySnapshot.forEach((doc) => {
                    users.push({ id: doc.id, data: doc.data() });
                });
                return users;
            })
            .then((users) => {
                this.setState({ students: users });
            });
    }

    render() {
        const students = this.state.students.map((student) => (
            <Student
                student={student.data.name.first}
                studentId={student.id}
                key={student.id}
            />
        ));
        return <div className={styles.studentsContainer}>{students}</div>;
    }
}

export default StudentsContainer;
