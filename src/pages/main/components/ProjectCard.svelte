<script>
    export let project;
    let clazz;
    export { clazz as class };
</script>

<a class="d-block project-card {clazz}" href={project.link} target="_blank">
    <h4 class="project-title h4 bold text">
        {project.title}
    </h4>
    <div class="project-description pb-2 text">
        {project.description}
    </div>
    {#each project.stack as tag}
        <img src={tag} alt="logo" class="project-tag" />
    {/each}
</a>

<style>
    .project-card {
        box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.24);
        transition: box-shadow 0.2s ease-in-out;
        width: 70vmin;
        margin-bottom: 16px;
        border-radius: 8px;
        padding: 16px;
        background: var(--background);
    }

    @media (prefers-color-scheme: dark) {
		.project-card {
			background: rgb(54, 54, 54);
            transition: background-color 0.3s linear;
		}

        .project-card:hover {
			background: rgb(61, 61, 61);
		}
	}

    .project-card:hover {
        box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.24);
    }

    .project-tag {
        margin-right: 10px;
    }

    .project-title {
        margin-bottom: 0em;
    }
</style>
