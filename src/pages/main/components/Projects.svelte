<script>
    import TitleText from "../../../common/TitleText.svelte";
    import ProjectCard from "./ProjectCard.svelte";
    import { SyncLoader } from "svelte-loading-spinners";
    import { fade } from "svelte/transition";

    export let projectsStoreData;
    export let onProjectClick = (project) => {
        // Do nothing
    };
</script>

<div class="pt-5 pb-5">
    {#if projectsStoreData.loading}
        <TitleText title="Projects">Loading, wait a second please ⏱</TitleText>
    {:else}
        <TitleText title="Projects">
            All the projects of mine right here, folks ✨
        </TitleText>
    {/if}

    <div class="pt-4">
        {#if projectsStoreData.data && projectsStoreData.data.length === 0}
            <div class="text-center">Wow, such empty</div>
        {:else if projectsStoreData.data}
            {#each projectsStoreData.data as project}
                <div transition:fade>
                    <ProjectCard
                        {project}
                        class="mx-auto"
                        onClick={(p) => onProjectClick(p)}
                    />
                </div>
            {/each}
        {:else if projectsStoreData.loading}
            <div class="d-flex justify-content-center">
                <SyncLoader color="#b5b5b5" duration="1s" size="40" />
            </div>
        {:else}
            <div class="text-center" transition:fade>
                ✨ Удивительное упущение разработчика, легко исправить такую ошибку ✨
            </div>
        {/if}
    </div>
</div>
