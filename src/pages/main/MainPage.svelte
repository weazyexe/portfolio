<script lang="ts">
    import AboutHeader from "./components/AboutHeader.svelte";
    import BasicInfo from "./components/BasicInfo.svelte";
    import Projects from "./components/Projects.svelte";
</script>

<!-- svelte-ignore missing-declaration -->
<div class="container">
    <AboutHeader />
    <BasicInfo />
    <Projects />
</div>

<style>
    .container {
        background-color: var(--background);
    }
</style>
