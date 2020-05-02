<script>
    import ProjectsContainer from "./ProjectsContainer.svelte";
    import PreviewContainer from "./PreviewContainer.svelte";
    import InfoContainer from "./InfoContainer.svelte";
    import AboutContainer from "./AboutContainer.svelte";

    import {
        pageState,
        PREVIEW_PAGE_STATE,
        PROJECTS_PAGE_STATE,
        ABOUT_PAGE_STATE,
        INFO_PAGE_STATE
    } from "../stores/pageStore"

    let currentPageState;

    pageState.subscribe((value) => {
        currentPageState = value;
    });
</script>

<style>
    .content {
        margin: 4em;
    }
</style>

<div class="content">
    {#if currentPageState === PREVIEW_PAGE_STATE}
        <PreviewContainer/>
        {:else if currentPageState === PROJECTS_PAGE_STATE}
        <ProjectsContainer/>
        {:else if currentPageState === INFO_PAGE_STATE}
        <InfoContainer/>
        {:else if currentPageState === ABOUT_PAGE_STATE}
        <AboutContainer/>
    {/if}
</div>

