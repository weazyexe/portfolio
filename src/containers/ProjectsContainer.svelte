<div class="main-content">
    <div class="header">Projects</div>

    <div class="projects-content">
        {#each projects as project}
            <div class="project-content">
                <Project project={project} />
            </div>
        {/each}
    </div>

    <Navigation currentPage={PROJECTS_PAGE_STATE} />
</div>

<Footer/>

<script>
    import Project from "../components/Project.svelte";

    import {pageState, INFO_PAGE_STATE} from "../stores/pageStore";
    import Footer from "../components/Footer.svelte";
    import {projectsState} from "../stores/projectsStore";
    import Navigation from "../components/Navigation.svelte";
    import {PROJECTS_PAGE_STATE} from "../stores/pageStore";

    let projects;

    projectsState.subscribe((value) => {
        projects = value;
    });

    const onInfoClick = () => {
        pageState.set(INFO_PAGE_STATE);
    };
</script>

<style>
    .header {
        font-size: 1.5em;
        font-weight: 700;
        margin-bottom: 1em;
    }

    .projects-content {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .project-content {
        display: inline-block;
        margin-bottom: 2em;
        margin-right: 1em;
    }
</style>
