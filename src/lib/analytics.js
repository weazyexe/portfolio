import { analytics } from "./firebase";
import events from "./events";

export const noticeProjectClick = (project) => {
    if (isProduction) {
        analytics.logEvent(events.PROJECT_CLICK, {
            projectId: project.id,
            projectTitle: project.title,
        });
    }
};

export const noticeProjectsLoadingError = (error) => {
    if (isProduction) {
        analytics.logEvent(events.PROJECTS_LOADING_ERROR, {
            error: error
        });
    }
};