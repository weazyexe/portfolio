<script lang="ts">
    import AboutHeader from "./components/AboutHeader.svelte";
    import BoxWithTitle from "./components/BoxWithTitle.svelte";
</script>

<div class="container">
    <AboutHeader />

    <div class="mt-5">
        <BoxWithTitle title="Summary">
            <div class="body-text text">My name is <span class="medium">Timur Zadvornov</span>. I’m <span class="medium">22 years old</span>. Currently living in <span class="medium">Voronezh</span> 🇷🇺</div>
        </BoxWithTitle>

        <BoxWithTitle title="Education">
            <div class="body-text text">I got a <span class="medium">computer science bachelor</span> degree at Vyatka State University. Currently studying for a <span class="medium">master degree</span> at Voronezh State University 🎓</div>
        </BoxWithTitle>

        <BoxWithTitle title="Career">
            <div class="body-text text">Now I’m working at Surf Studio as an <span class="medium">Android Developer</span>. In the past I was a <span class="medium">frontend developer</span> (React as a main tool, now interesting in Svelte) 💻</div>
        </BoxWithTitle>
    </div>
</div>

<style>
    .container {
        background-color: var(--background);
    }

    .body-text {
        font-size: 1.2em;
    }
</style>