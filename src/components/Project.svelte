<div class="project">
    <div>
        <a class="project-title" href={project.link} target="_blank">{project.title}</a>
        {#each project.stack as tag}
            <img src={tag} alt="logo" class="project-tag" />
        {/each}
    </div>
    <div class="project-description">{project.description}</div>
</div>

<script>
    /**
     * Отображаемый проект со следующими полями:
     * @param {number} id
     * @param {string} title
     * @param {string} link
     * @param {number} sortWeight
     * @param {string[]} stack
     */
    export let project;
</script>

<style>
    .project {
        width: 40vmax;
        margin-right: 1em;
        margin-bottom: 1em;
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
            width: 2em;
            height: 2em;
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
            width: 1.5em;
            height: 1.5em;
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