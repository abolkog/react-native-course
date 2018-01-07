import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD4pew2Pd3-2eWtMUH6QQQEbkY_8G6X9pA",
    authDomain: "auth-9b2e6.firebaseapp.com",
    databaseURL: "https://auth-9b2e6.firebaseio.com",
    projectId: "auth-9b2e6",
    storageBucket: "auth-9b2e6.appspot.com",
    messagingSenderId: "582327069395"
};

firebase.initializeApp(config);

export default firebase;