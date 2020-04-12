import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/performance';
import 'firebase/analytics';

const config = {
    apiKey: 'AIzaSyBto1cuKtwUZONzQ4PBt7zTpvqWkgep8aQ',
    authDomain: 'tasker-926bd.firebaseapp.com',
    databaseURL: 'https://tasker-926bd.firebaseio.com',
    projectId: 'tasker-926bd',
    storageBucket: 'tasker-926bd.appspot.com',
    messagingSenderId: '815411434227',
    appId: '1:815411434227:web:a4309274c0dd75baaadd86',
    measurementId: 'G-LMFR2XGNDL'
};

firebase.initializeApp(config);

export const base = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const perf = firebase.performance();
export const analytics = firebase.analytics();
