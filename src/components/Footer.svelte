<script>
    import GitHub from '../assets/github.svg';
    import Telegram from '../assets/telegram.svg';
    import Twitter from '../assets/twitter.svg';
    import Instagram from '../assets/instagram.svg';
    import VK from '../assets/vk.svg';
</script>

<style>
    .footer {
        margin-top: 8em;
    }

    .comment {
        color: var(--darcula-comment);
    }

    .link-content {
        margin-top: 1em;
    }

    .link {
        width: 2em;
        fill: var(--text);
        display: inline-block;
        margin-right: 1em;
        transition: fill 0.3s ease-in-out;
    }

    .link:hover {
        fill: var(--link);
    }
</style>

<div class="footer">
    <div>with love, weazy <span class="comment">// 2020</span></div>
    <div class="link-content">
        <div class="link">
            <a href="https://github.com/weazyexe" class="link"><GitHub/></a>
        </div>
        <div class="link">
            <a href="https://tx.me/weazyexe" class="link"><Telegram/></a>
        </div>
        <div class="link">
            <a href="https://twitter.com/weazyexe" class="link"><Twitter/></a>
        </div>
        <div class="link">
            <a href="https://instagram.com/weazyexe" class="link"><Instagram/></a>
        </div>
        <div class="link">
            <a href="https://vk.com/weazyexe" class="link"><VK/></a>
        </div>
    </div>
</div>