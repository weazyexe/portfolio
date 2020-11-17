<style>
    :global(.rainbow_text_animated) {
        background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: rainbow_animation 6s ease-in-out infinite;
        background-size: 400% 100%;
        transition: background 1.5s linear;
    }

    @media screen and (min-width: 900px) {
        :global(.preview-content) {
            margin-top: 5em;
            font-size: 3em;
        }
    }

    @media screen and (max-width: 900px) {
        :global(.preview-content) {
            margin-top: 10em;
            font-size: 2em;
        }
    }

    @media screen and (max-width: 500px) {
        :global(.preview-content) {
            margin-top: 10em;
            font-size: 1.3em;
        }
    }
</style>