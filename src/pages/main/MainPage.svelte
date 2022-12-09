<script lang="ts">
    import AboutHeader from "./components/AboutHeader.svelte";
    import BasicInfo from "./components/BasicInfo.svelte";
    import Projects from "./components/Projects.svelte";
    import { getProjects } from "../../lib/repository";
    import { store, storeData } from "../../store/store";
    import {
        noticeProjectClick,
        noticeProjectsLoadingError,
    } from "../../lib/analytics";

    let projectsState;

    store.projects.subscribe((projects) => {
        if (projects.length !== 0) {
            projectsState = projects;
        }
    });

    const loadProjects = async () => {
        try {
            store.projects.set(storeData(null, true));
            const projects = (await getProjects())
                .filter((it) => it.isVisible)
                .sort((a, b) => b.sortWeight - a.sortWeight);
            store.projects.set(storeData(projects, false));
        } catch (e) {
            store.projects.set(storeData(null, false, e));
            noticeProjectsLoadingError(e);
        }
    };

    const onProjectClick = (project) => {
        noticeProjectClick(project);
    };

    loadProjects();
</script>

<!-- svelte-ignore missing-declaration -->
<div class="container">
    <AboutHeader />
    <BasicInfo />
    <Projects projectsStoreData={projectsState} />
</div>

<style>
    .container {
        background-color: var(--background);
    }
</style>
