<script>
    import TitleText from "../../../common/TitleText.svelte";
    import PlainText from "../../../common/PlainText.svelte";
</script>

<div class="pt-5">
    <TitleText title="Still reading?">Just one more thing 🙄</TitleText>
</div>

<div class="mt-5">
    <PlainText title="Interests">
        <div class="body-text text">
            I like to design delightful mobile apps and web pages in Figma. Also
            I’m learning Android development and software engineering art more
            deeper, for sure. And I want to learn to play tennis in the future
            🎾 🙈
        </div>
    </PlainText>

    <PlainText title="At last">
        <div class="body-text text">
            If you’re still reading it, my congratulations! You’re the best! ✨
            There is a gift for you 🐸
        </div>
    </PlainText>

    <div class="text-center">
        <img src="assets/jabu.jpg" alt="¿jabu?" class="jabu" />
    </div>
</div>

<style>
    .body-text {
        font-size: 1.2em;
    }

    .jabu {
        width: 70vmin;
    }
</style>
