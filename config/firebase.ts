// config/firebase.ts

import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

export default firebase;
