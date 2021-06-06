<script>
    export let title;
</script>

<div class="mx-auto text-container mb-5">
    <div class="display-6 title text pb-1">
        {title}
    </div>
    <slot></slot>
</div>

<style>
    .title {
        font-weight: 700;
    }

    .text-container {
        width: 70vmin;
    }
</style>