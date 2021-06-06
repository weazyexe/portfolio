import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/storage";

const firebaseConfig = {
    databaseURL: firebaseKeys.FIREBASE_DATABASE_URL,
    messagingSenderId: firebaseKeys.FIREBASE_MESSAGING_SENDER_ID,
    appId: firebaseKeys.FIREBASE_APP_ID,
    apiKey: firebaseKeys.FIREBASE_API_KEY,
    authDomain: firebaseKeys.FIREBASE_AUTH_DOMAIN,
    projectId: firebaseKeys.FIREBASE_PROJECT_ID,
    storageBucket: firebaseKeys.FIREBASE_STORAGE_BUCKET,
    measurementId: firebaseKeys.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const analytics = firebase.analytics();