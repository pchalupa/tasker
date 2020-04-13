/**
 * @module Students
 */

import React from 'react';
import Students from '../components/Students';
import Main from '../components/Title/Main';
//import { messaging } from '../storage/Firebase';
import styles from '../styles/Screen/Screen.module.scss';

/**
 * Function displays Tasker screen.
 */
function StudentsScreen() {
    /*
    useEffect(() => {
        messaging
            .requestPermission()
            .then(async function () {
                const token = await messaging.getToken();
            })
            .catch(function (err) {
                console.log(err);
            });
        navigator.serviceWorker.addEventListener('message', (message) =>
            console.log(message)
        );
    });
	*/
    return (
        <div className={styles.layout}>
            <Main content="Úkolníček 6.A" />
            <Students />
        </div>
    );
}

export default StudentsScreen;
