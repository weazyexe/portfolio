<script lang="ts">
    import AboutHeader from "./components/AboutHeader.svelte";
    import BasicInfo from "./components/BasicInfo.svelte";
    import Projects from "./components/Projects.svelte";
    import YetAnotherInfo from "./components/YetAnotherInfo.svelte";
    import { getProjects } from "../../lib/repository";
    import { store, storeData } from "../../store/store";

    let projectsState;

    store.projects.subscribe((projects) => {
        if (projects.length !== 0) {
            projectsState = projects;
        }
    });

    const loadProjects = async () => {
        try {
            store.projects.set(storeData(null, true));
            const projects = (await getProjects()).sort((a, b) => a.sortWeight - b.sortWeight);
            store.projects.set(storeData(projects, false));
        } catch (e) {
            console.log(e);
            store.projects.set(storeData(null, false, e));
        }
    };

    loadProjects();
</script>

<!-- svelte-ignore missing-declaration -->
<div class="container">
    <AboutHeader />
    <BasicInfo />
    <Projects projectsStoreData={projectsState} />
    <YetAnotherInfo />
</div>

<style>
    .container {
        background-color: var(--background);
    }
</style>
