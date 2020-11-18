<div class="link-content">
    {#if currentPage !== MAIN_PAGE_STATE}
        <div class="link" on:click={() => navigate(MAIN_PAGE_STATE)}>
            Main page
        </div>
    {/if}
    {#if currentPage !== PROJECTS_PAGE_STATE}
        <div class="link" on:click={() => navigate(PROJECTS_PAGE_STATE)}>
            Projects
        </div>
    {/if}
    {#if currentPage !== INFO_PAGE_STATE}
        <div class="link" on:click={() => navigate(INFO_PAGE_STATE)}>
            About me
        </div>
    {/if}
    <div class="link">
        Design
    </div>
</div>

<script>
    import {INFO_PAGE_STATE, MAIN_PAGE_STATE, pageState, PROJECTS_PAGE_STATE} from "../stores/pageStore";

    let currentPage;

    pageState.subscribe((value) => {
        currentPage = value;
    });

    const navigate = (page) => {
        pageState.set(page);
    };
</script>

<style>
    .link-content {
        display: inline-block;
        margin-top: 2em;
    }

    .link {
        color: #49AAE0;
        display: inline-block;
        text-decoration: underline;
        margin-right: 1em;
    }

    .link:hover {
        cursor: pointer;
    }
</style>