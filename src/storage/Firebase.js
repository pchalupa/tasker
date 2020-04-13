import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/performance';
import 'firebase/analytics';
import 'firebase/messaging';

firebase.initializeApp({
    apiKey: 'AIzaSyBto1cuKtwUZONzQ4PBt7zTpvqWkgep8aQ',
    authDomain: 'tasker-926bd.firebaseapp.com',
    databaseURL: 'https://tasker-926bd.firebaseio.com',
    projectId: 'tasker-926bd',
    storageBucket: 'tasker-926bd.appspot.com',
    messagingSenderId: '815411434227',
    appId: '1:815411434227:web:a4309274c0dd75baaadd86',
    measurementId: 'G-LMFR2XGNDL'
});

const base = firebase;
const db = firebase.firestore();
const auth = firebase.auth();
const perf = firebase.performance();
const analytics = firebase.analytics();
const messaging = firebase.messaging();

messaging.usePublicVapidKey(
    'BArE0LCwlkWVqQTEuL67pICCGEOvlfxFAS62uakcLEfMhYljvGL8ZG2mxNUIvoRg7vGHV8SzLmTVveY534WHaRs'
);

export { base, db, auth, perf, analytics, messaging };
