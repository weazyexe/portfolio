<script>
    /**
     * Отображаемый проект со следующими полями:
     * @param {number} id
     * @param {string} name
     * @param {number} sortWeight
     * @param {string[]} tags
     * @param {string} color
     * @param {string[]} images
     */
    export let project;
</script>

<style>
    .project {
        background: var(--background-secondary);
        width: 40vmax;
        margin-right: 1em;
        margin-bottom: 1em;
        padding: 1em;
    }

    @media screen and (min-width: 900px) {
        .project-title {
            font-size: 2em;
        }

        .project-description {
            font-size: 1.3em;
        }

        .project-tag {
            font-size: 1em;
        }

        .project-link {
            font-size: 1.3em;
        }
    }

    @media screen and (max-width: 900px) {
        .project-title {
            font-size: 1.5em;
        }

        .project-description {
            font-size: 1em;
        }

        .project-tag {
            font-size: 0.8em;
        }

        .project-link {
            font-size: 1em;
        }
    }

    .project-title {
        font-weight: 700;
        margin-bottom: 1em;
    }

    .project-description {
        margin-bottom: 0.7em;
    }

    .project-tag {
        display: inline-block;
        margin-right: 1em;
    }

    .project-link {
        color: #49AAE0;
        margin-bottom: 2em;
    }
</style>

<div class="project">
    <div class="project-title" style="color: {project.color}">{project.name}</div>
    <div class="project-description">{project.description}</div>
    <div class="project-link">
        <a class="project-link" href={`https://github.com/${project.github.link}`} target="_blank">GitHub</a>
    </div>
    {#each project.tags as tag}
        <div class="project-tag" style="color: {project.color}">#{tag}</div>
    {/each}
</div>