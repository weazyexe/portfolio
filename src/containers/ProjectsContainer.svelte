<script>
    import {getProjects} from "../lib/repository";
    import Loader from "../components/Loader.svelte";
    import Project from "../components/Project.svelte";

    const projectsPromise = getProjects();

    import {pageState, INFO_PAGE_STATE} from "../stores/pageStore";
    import Footer from "../components/Footer.svelte";

    const onInfoClick = () => {
        pageState.set(INFO_PAGE_STATE);
    };
</script>

<style>
    @media screen and (min-width: 900px) {
        .header {
            font-size: 4em;
        }

        .link {
            font-size: 2em;
        }
    }

    @media screen and (max-width: 900px) {
        .header {
            font-size: 3em;
        }

        .link {
            font-size: 1.5em;
        }
    }

    @media screen and (max-width: 500px) {
        .header {
            font-size: 1.6em;
        }

        .link {
            font-size: 1em;
        }
    }

    .header {
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
    }

    .link-content {
        margin-top: 3em;
    }

    .link {
        color: #49AAE0;
        display: inline-block;
        text-decoration: underline;
    }

    .link:hover {
        cursor: pointer;
    }
</style>

<div>
    <div class="header">Projects</div>
    {#await projectsPromise}
        <Loader/>
    {:then projects}
        <div class="projects-content">
            {#each projects as project}
                <div class="project-content">
                    <Project project={project} />
                </div>
            {/each}
        </div>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}

    <div class="link-content">
        <div class="link" on:click={onInfoClick}>
            Back to info
        </div>
    </div>

    <Footer/>
</div>
