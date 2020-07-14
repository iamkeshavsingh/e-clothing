import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
export const firestore = firebase.firestore();

export const storeUser = async (userAuth, additional) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additional
            });
        } catch (e) {
            console.log('Error while creating user', e);
        }
    }
    return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectToAdd.forEach(obj => {
        const newDoc = collectionRef.doc();
        batch.set(newDoc, obj);
    });

    batch.commit();
};

export const transformCollectionToMap = collections => {
    return collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
