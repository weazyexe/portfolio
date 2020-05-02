<script>
    import ProjectsContainer from "./ProjectsContainer.svelte";
    import PreviewContainer from "./PreviewContainer.svelte";
    import InfoContainer from "./InfoContainer.svelte";

    import { inAnimationParams, outAnimationParams } from "../lib/utils";

    import { fade, fly } from 'svelte/transition';

    import {
        pageState,
        PREVIEW_PAGE_STATE,
        PROJECTS_PAGE_STATE,
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
        <div in:fade={{ duration: 500 }} out:fly={{ y: 400, duration: 500 }}>
            <PreviewContainer/>
        </div>
        {:else if currentPageState === PROJECTS_PAGE_STATE}
        <ProjectsContainer/>
        {:else if currentPageState === INFO_PAGE_STATE}
        <div in:fly={{ y: -3000, duration: 2000 }} out:fly={{ y: 400, duration: 500 }}>
            <InfoContainer/>
        </div>
    {/if}
</div>

