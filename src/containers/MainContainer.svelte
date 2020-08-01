<script>
    import ProjectsContainer from "./ProjectsContainer.svelte";
    import PreviewContainer from "./PreviewContainer.svelte";
    import InfoContainer from "./InfoContainer.svelte";
    import { parseQuery } from "../lib/utils";
    import { trackUser } from "../lib/repository";

    import {
        pageState,
        PREVIEW_PAGE_STATE,
        PROJECTS_PAGE_STATE,
        INFO_PAGE_STATE
    } from "../stores/pageStore"

    let currentPageState;

    const params = parseQuery(window.location.search);
    trackUser(params.r);

    pageState.subscribe((value) => {
        currentPageState = value;
    });
</script>

<style>
    @media screen and (min-width: 900px) {
        .content {
            margin: 4em;
        }
    }

    @media screen and (max-width: 900px) {
        .content {
            margin: 2em;
        }
    }

    @media screen and (max-width: 500px) {
        .content {
            margin: 1.3em;
        }
    }

</style>

<div class="content">
    {#if currentPageState === PREVIEW_PAGE_STATE}
        <div in:fade={{ duration: 500 }} out:fly={{ y: 400, duration: 500 }}>
            <PreviewContainer/>
        </div>
        {:else if currentPageState === PROJECTS_PAGE_STATE}
        <div in:fly={{ y: -3000, duration: 2000 }} out:fly={{ y: 400, duration: 500 }}>
            <ProjectsContainer/>
        </div>
        {:else if currentPageState === INFO_PAGE_STATE}
        <div in:fly={{ y: -3000, duration: 2000 }} out:fly={{ y: 400, duration: 500 }}>
            <InfoContainer/>
        </div>
    {/if}
</div>

