import { firestore } from "./firebase";
import firebase from "firebase/app";
import {generateId, handleReference} from "./utils";

export const getContent = async () => {
    const response = await firestore.doc('content/all').get();
    return response.data();
};

export const getProjects = async () => {
    const response = await firestore.collection('projects').get();
    return response.docs.map(it => it.data());
};

/**
 * Tracks user's visit
 * @param ref {string} reference
 * @returns {Promise<void>}
 */
export const trackUser = async (ref) => {
    const response = await fetch(`https://ip-api.io/api/json?api_key=${env.TRACK_API_KEY}`);
    const data = Math.floor(response.status / 100) === 2 && response.ok ? await response.json() : {};

    const id = generateId(12);
    const result = {
        ip: data.ip,
        country: data.country_name,
        countryEmoji: data.emojiFlag,
        city: data.city,
        timezone: data.time_zone,
        ref: handleReference(ref),
        time: new firebase.firestore.Timestamp(Date.now() / 1000, 0),
        id: id
    };

    await firestore.doc(`content/all/visits/${id}`).set(result);
};
