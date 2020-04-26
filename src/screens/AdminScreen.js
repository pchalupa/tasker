/**
 * @module Admin
 */

import React from 'react';
import { auth } from '../storage/Firebase';
import Login from '../components/Form/Login';
import AddTask from '../components/Form/AddTask';
import styles from './Screen.module.scss';

/**
 * Function displays Admin screen.
 */
class Admin extends React.Component {
	constructor() {
		super();
		this.state = { isSignedIn: false };
	}
	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			this.setState({ isSignedIn: user ? true : false });
		});
	}
	render() {
		return <div className={styles.layout}>{this.state.isSignedIn ? <AddTask /> : <Login />}</div>;
	}
}

export default Admin;
