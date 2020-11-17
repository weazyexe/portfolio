import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

const firebaseConfig = {
    databaseURL: env.FIREBASE_DATABASE_URL,
    messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
    appId: env.FIREBASE_APP_ID,
    apiKey: env.FIREBASE_API_KEY,
    authDomain: env.FIREBASE_AUTH_DOMAIN,
    projectId: env.FIREBASE_PROJECT_ID,
    storageBucket: env.FIREBASE_STORAGE_BUCKET,
    measurementId: env.FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const analytics = firebase.analytics();
