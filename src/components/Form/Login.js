/**
 * @module LoginForm
 */

import React from 'react';
import * as firebase from 'firebase';
import styles from '../../styles/LoginForm.module.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        this.setState({ currentUser: firebase.auth().currentUser });
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
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(function (error) {
                alert(error.message);
            });
    };

    render() {
        return (
            <form className={styles.container} onSubmit={this.handleSubmit}>
                <label>
                    <p>E-mail:</p>
                    <input
                        name="email"
                        type="text"
                        placeholder="E-mail"
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                        required
                    />
                </label>
                <label>
                    <p>Heslo:</p>
                    <input
                        name="password"
                        type="password"
                        placeholder="Heslo"
                        value={this.state.tags}
                        onChange={this.handleInputChange}
                    />
                </label>
                <input type="submit" value="Odeslat" />
            </form>
        );
    }
}

export default Login;
