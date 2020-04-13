/**
 * @module Students
 */

import React from 'react';
import { db } from '../storage/Firebase';
import Student from './Student';
import Ring from './Loader/Ring';

import styles from '../styles/Students.module.scss';

/**
 * Represents students.
 *
 * @class
 */
class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            isFetching: true
        };
    }

    componentDidMount() {
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
                this.setState({ students: users, isFetching: false });
            });
    }

    render() {
        return this.state.isFetching ? (
            <Ring />
        ) : (
            <div className={styles.container}>
                {this.state.students.map((student, index) => (
                    <Student
                        student={student.data.name.first}
                        gender={student.data.gender}
                        studentId={student.id}
                        studentAlias={student.data.name.alias}
                        index={index}
                        key={student.id}
                    />
                ))}
            </div>
        );
    }
}

export default Students;
