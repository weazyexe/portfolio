import { firestore } from "./firebase";

export const getContent = async () => {
    const response = await firestore.doc('content/all').get();
    return response.data();
};
