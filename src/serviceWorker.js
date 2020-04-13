export function register(config) {
    const swUrl = `${process.env.PUBLIC_URL}/firebase-messaging-sw.js`;
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register(swUrl)
            .then(function (registration) {
                console.log(
                    'Registration successful, scope is:',
                    registration.scope
                );
            })
            .catch(function (err) {
                console.log('Service worker registration failed, error:', err);
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
