/**
 * @module Users
 */

import React from 'react';
import { db } from '../../storage/Firebase';
import User from './User';
import Ring from '../Loader/Ring';

import styles from './Users.module.scss';

/**
 * Represents users.
 *
 * @class
 */
class Users extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			isFetching: true,
		};
	}

	componentDidMount() {
		this.loadUsersFromDb();
	}

	loadUsersFromDb() {
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
				this.setState({ users: users, isFetching: false });
			});
	}

	render() {
		return this.state.isFetching ? (
			<Ring />
		) : (
			<div className={styles.container}>
				{this.state.users.map((user, index) => (
					<User
						id={user.id}
						user={user.data.name.first}
						gender={user.data.gender}
						alias={user.data.name.alias}
						index={index}
						key={user.id}
					/>
				))}
			</div>
		);
	}
}

export default Users;
