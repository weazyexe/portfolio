<script>
    import SocialLink from "./SocialLink.svelte";

    const ME_IMAGE = "assets/me.jpeg";
</script>

<div class="pt-5">
    <img src={ME_IMAGE} alt="Hey, it's me" class="avatar mx-auto" />

    <div class="name display-4 pt-3 text-center text">Timur Zadvornov</div>
    <div class="text-center text">
        Android Developer at
        <a href="https://surf.ru" target="_blank">@surfstudio</a>
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
            defaultImage="assets/instagram.svg"
            hoverImage="assets/instagram-active.svg"
            altText="Instagram"
            link="https://instagram.com/weazyexe"
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

    .name {
        font-weight: 700;
    }
</style>
