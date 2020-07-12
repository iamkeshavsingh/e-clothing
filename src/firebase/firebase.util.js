import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDa93kzuJJQ3Xbugt0YdrkCYEOXRuvKMtQ",
    authDomain: "e-clothing-1f89a.firebaseapp.com",
    databaseURL: "https://e-clothing-1f89a.firebaseio.com",
    projectId: "e-clothing-1f89a",
    storageBucket: "e-clothing-1f89a.appspot.com",
    messagingSenderId: "125261626902",
    appId: "1:125261626902:web:8b4317e50cff640343bf37"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;