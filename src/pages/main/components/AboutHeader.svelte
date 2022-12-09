<script>
    import SocialLink from "./SocialLink.svelte";
    import TitleText from "../../../common/TitleText.svelte";

    const ME_IMAGE = "assets/me.jpeg";
</script>

<div class="pt-5">
    <img src={ME_IMAGE} alt="Hey, it's me" class="avatar mx-auto" />

    <div class="pt-3">
        <TitleText title="Timur Zadvornov">
            Android Engineer at
            <a href="https://surf.dev" target="_blank">@surf</a>
        </TitleText>
    </div>

    <div class="mt-2 mx-auto" style="display: table;">
        <SocialLink
            defaultImage="assets/github.svg"
            hoverImage="assets/github-active.svg"
            altText="GitHub"
            link="https://github.com/weazyexe"
            classes="mx-2"
        />
        <SocialLink
            defaultImage="assets/twitter.svg"
            hoverImage="assets/twitter-active.svg"
            altText="Twitter"
            link="https://twitter.com/weazyexe"
            classes="mx-2"
        />
        <SocialLink
            defaultImage="assets/telegram.svg"
            hoverImage="assets/telegram-active.svg"
            altText="Telegram"
            link="https://t.me/weazyexe"
            classes="mx-2"
        />
        <SocialLink
            defaultImage="assets/linkedin.svg"
            hoverImage="assets/linkedin-active.svg"
            altText="LinkedIn"
            link="https://linkedin.com/in/weazyexe"
            classes="mx-2"
        />
    </div>
</div>

<style>
    .avatar {
        width: 200px;
        border-radius: 50%;
        display: block;
    }
</style>
