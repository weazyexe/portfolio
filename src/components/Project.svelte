<div class="project">
    <div class="project-head">
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
    .project-title {
        font-size: 1.1em;
    }

    .project-description {
        font-size: 0.9em;
    }

    .project {
        width: 40vmax;
        margin-right: 1em;
        margin-top: 1em;
    }

    .project-tag {
        width: 1em;
        height: 1em;
    }

    .project-title {
        font-weight: 700;
        margin-bottom: 1em;
        text-decoration: none;
        color: white;
    }

    .project-description {
        margin-bottom: 0.7em;
    }

    .project-tag {
        display: inline-block;
        margin-right: 0.5em;
        vertical-align: text-bottom;
    }

    .project-head {
        margin-bottom: 0.5em;
    }
</style>