import { firestore, storage } from "./firebase";

export const getProjects = async () => {
    const response = await firestore.collection('v2/data/projects').get();
    const projects = response.docs.map(it => it.data());
    return await mapToImageLink(projects);
}

const mapToImageLink = async (projects) => {
    const result = [];
    for (const project of projects) {
        const pics = [];
        for (const tag of project.stack) {
            const pic = await storage.ref(`v2/stack/${tag}.svg`).getDownloadURL();
            pics.push(pic);
        }

        result.push({
            ...project,
            stack: pics
        });
    }

    return result;
};