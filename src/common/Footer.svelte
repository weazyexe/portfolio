<script>
    const EMOJIS = [
        "💙",
        "💖",
        "💚",
        "💛",
        "🤪",
        "👨‍💻",
        "🌚",
        "🌈",
        "😎",
        "👽",
        "🐸",
        "🐊",
        "🦜",
        "🤙"
    ];

    const random = Math.round(Math.random() * (EMOJIS.length - 1));
    const emojiToShow = EMOJIS[random];

    const currentUrl = window.location.href;
</script>

<div class="text-center light sign pt-5 pb-5">
    <div class="pt-5 text">
        made for you {emojiToShow}
    </div>
    <a href={currentUrl}>
        <div class="medium text sign">by weazyexe</div>
    </a>
</div>

<style>
    .sign {
        font-size: 0.8em;
    }
</style>
