import firebase from 'firebase';
const firebaseConfig = {
    // insert firebase project config info here
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

firebase.initializeApp(firebaseConfig);
export default firebase;
