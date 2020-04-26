import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "API-Key",
    authDomain: "Firebase Domain",
    databaseURL: "database URL",
    projectId: "project ID",
    storageBucket: "storage bucket",
    messagingSenderId: "sender!",
    appId: "app ID"
};

firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
const storage = firebase.storage()

export  {
   storage, firebase as default
 }
