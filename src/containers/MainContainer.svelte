<script>
    import { getContent } from "../lib/repository";

    const contentPromise = getContent();
</script>

<style>
    .content {
        padding: 1em;
    }

    .title {
        margin-top: 2em;
        font-size: 4em;
        font-weight: 700;
    }

    .description {
        font-size: 1.5em;
    }
</style>

<div class="content">
    {#await contentPromise}
        <p>...waiting</p>
    {:then content}
        <div class="title">{@html content.title}</div>
        <p class="description">{@html content.text}</p>
    {:catch error}
        <p style="color: red">{error}</p>
    {/await}
</div>

