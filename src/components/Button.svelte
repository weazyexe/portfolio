<script>
    export let text;
    export let onClick;
</script>

<style>
    .button {
        font-family: 'JetBrains Mono', sans-serif;
        display: block;
        padding: 1em 2em;
        color: var(--text);
        border-style: none;
        background: var(--darcula-comment);
        transition: box-shadow 0.3s ease-in-out, background 0.2s ease-in-out, display 0.3s ease-in-out;
        outline: none;
        min-width: 10em;
    }

    .button:hover {
        box-shadow: 0 5px 11px 0 rgba(255,255,255,0.1);
    }

    .button:active {
        background: var(--darcula-comment-dark);
    }
</style>

<button class="button" on:click={onClick}>{text}</button>