<script>
    import GitHub from '../assets/github.svg';
    import Telegram from '../assets/telegram.svg';
    import Twitter from '../assets/twitter.svg';
    import Instagram from '../assets/instagram.svg';
    import VK from '../assets/vk.svg';
</script>

<style>

    @media screen and (min-width: 900px) {
        .footer {
            margin-top: 8em;
        }

        .link-content {
            margin-top: 1em;
        }

        .link {
            width: 2em;
        }
    }

    @media screen and (max-width: 900px) {
        .footer {
            margin-top: 6em;
        }

        .link-content {
            margin-top: 1em;
        }

        .link {
            width: 1.3em;
        }
    }

    @media screen and (max-width: 900px) {
        .footer {
            margin-top: 4em;
        }
    }

    .link {
        fill: var(--text);
        display: inline-block;
        margin-right: 1em;
        transition: fill 0.3s ease-in-out;
    }

    .comment {
        color: var(--darcula-comment);
    }

    .link:hover {
        fill: var(--link);
    }
</style>

<div class="footer">
    <div>with love, weazyexe <span class="comment">// 2020</span></div>
    <div class="link-content">
        <div class="link">
            <a href="https://github.com/weazyexe" class="link" target="_blank"><GitHub/></a>
        </div>
        <div class="link">
            <a href="https://tx.me/weazyexe" class="link" target="_blank"><Telegram/></a>
        </div>
        <div class="link">
            <a href="https://twitter.com/weazyexe" class="link" target="_blank"><Twitter/></a>
        </div>
        <div class="link">
            <a href="https://instagram.com/weazyexe" class="link" target="_blank"><Instagram/></a>
        </div>
        <div class="link">
            <a href="https://vk.com/weazyexe" class="link" target="_blank"><VK/></a>
        </div>
    </div>
</div>