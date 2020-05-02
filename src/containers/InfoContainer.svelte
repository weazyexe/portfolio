<script>
    import { pageState, PROJECTS_PAGE_STATE } from "../stores/pageStore";

    const onProjectsClick = () => {
        pageState.set(PROJECTS_PAGE_STATE);
    };
</script>

<style>
    .info-content {
        font-size: 4em;
        font-weight: 700;
    }

    .info-small-content {
        font-size: 0.5em;
        font-weight: 400;
        margin-top: 2em;
    }

    .accent {
        color: var(--accent);
    }

    .link-content {
        margin-top: 2em;
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

<div class="info-content">
    <div>Hello <span class="accent">%%username%%</span></div>
    <div>I'm <span class="accent">weazyexe</span></div>
    <div>Android and web developer</div>
    <div class="info-small-content">
        <div>
            My name is <span class="accent">Timur</span>. I'm 4th grade <span class="accent">student</span> at Vyatka State University.
            Living in Kirov, Russian Federation.
        </div>
        <div>
            Making design, <span class="accent">colored</span> buttons,
            beautiful Android applications and web pages :)
        </div>
        <div class="link-content">
            <div class="link" on:click={onProjectsClick}>
                See projects
            </div>
        </div>
    </div>
</div>