import { messaging } from './storage/Firebase';

export function register() {
    const swUrl = `${process.env.PUBLIC_URL}/firebase-messaging-sw.js`;
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register(swUrl)
            .then(function (registration) {
                messaging.useServiceWorker(registration);
            })
            .catch(function (err) {
                console.log(err);
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
