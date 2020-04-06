import firebase from 'firebase/app';
import 'firebase/firebase-messaging';

export function register(config) {
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register(swUrl)
            .then(function (registration) {
                firebase.messaging().useServiceWorker(registration);
            })
            .catch(function (err) {
                console.log(
                    'Whoops. Service worker registration failed, error:' + err
                );
            });
    }
}

export function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then((registration) => {
                registration.unregister();
            })
            .catch((error) => {
                console.error(error.message);
            });
    }
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('token do usuário:', token);

        return token;
    } catch (error) {
        console.error(error);
    }
};
