/**
 * @module LoginForm
 */

import React from 'react';
import { auth } from '../../storage/Firebase';
import styles from '../../styles/Form/LoginForm.module.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        this.setState({ currentUser: auth.currentUser });
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
        auth.signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        ).catch(function (error) {
            // eslint-disable-next-line no-undef
            alert('Špatné heslo nebo e-mail!');
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
