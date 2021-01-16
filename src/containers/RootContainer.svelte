<div class="content">
    {#if currentPageState === PREVIEW_PAGE_STATE}
        <div in:fade={fadePreset} out:fade={fadePreset}>
            <PreviewContainer/>
        </div>
    {:else if currentPageState === PROJECTS_PAGE_STATE}
        <div in:fade={fadePreset} out:fade={fadePreset}>
            <ProjectsContainer/>
        </div>
    {:else if currentPageState === MAIN_PAGE_STATE}
        <div in:fade={fadePreset} out:fade={fadePreset}>
            <MainContainer/>
        </div>
    {:else if currentPageState === INFO_PAGE_STATE}
        <div in:fade={fadePreset} out:fade={fadePreset}>
            <InfoContainer/>
        </div>
    {/if}
</div>

<script>
    import ProjectsContainer from "./ProjectsContainer.svelte";
    import PreviewContainer from "./PreviewContainer.svelte";
    import InfoContainer from "./InfoContainer.svelte";

    import {CHANGE_SCREEN_DELAY_MS, fadePreset, sleep} from "../lib/utils";

    import {fade} from "svelte/transition";

    import {
        pageState,
        PREVIEW_PAGE_STATE,
        PROJECTS_PAGE_STATE,
        INFO_PAGE_STATE,
        MAIN_PAGE_STATE
    } from "../stores/pageStore"
    import MainContainer from "./MainContainer.svelte";

    let currentPageState;

    pageState.subscribe(async (value) => {
        currentPageState = "";
        await sleep(CHANGE_SCREEN_DELAY_MS);
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

