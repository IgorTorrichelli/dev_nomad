import firebase from '../firebase/firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase);

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('user.UID: ${substring(user.uid, 0, 0)}**********************')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Code: ${errorCode}, Message: $`errorMessage}')
    });

signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });