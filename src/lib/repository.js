import { firestore } from "./firebase";

export const getContent = async () => {
    const response = await firestore.doc('content/all').get();
    return response.data();
};

export const getProjects = async () => {
    const response = await firestore.collection('projects').get();
    return response.docs.map(it => it.data());
}
