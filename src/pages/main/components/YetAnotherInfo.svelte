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
            I like to design <span class="medium">delightful</span> mobile apps
            and web pages in Figma. Also I’m learning
            <span class="medium">Android development</span>
            more and more and trying to <span class="medium">explore</span>
            other dev directions, like
            <span class="medium">iOS, Web</span>
            etc. 👨‍💻
            <br />
            Btw I have meme
            <a href="https://t.me/weazyexesaved" target="_blank">
                Telegram channel
            </a>, so welcome 🤪
            <br />
            At last I have a trade offer to you 🍻
        </div>
    </PlainText>

    <div class="text-center mb-5">
        <img src="assets/trade-offer.png" alt="beer?" class="jabu" />
    </div>

    <PlainText title="At last">
        <div class="body-text text">
            If you’re still reading it, my congratulations! You’re the best!
            There is a gift for you 🥇
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
