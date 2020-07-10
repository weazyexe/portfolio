<script>
    import { sleep } from "../lib/utils";
    import { pageState, INFO_PAGE_STATE } from "../stores/pageStore";

    const strings = ["Hello there", "What the heck is going here?", "It's my portfolio", "I'm weazyexe"];
    const about = "Android & Web developer. Making design, " +
            "<span class='rainbow rainbow_text_animated'>colored</span> buttons, beautiful Android applications " +
            "and web pages";

    let currentPreviewOutput = "";
    let currentAboutOutput = "";
    let isPreviewEnded = false;

    // Анимирование ввода текста
    const animatePreview = async () => {
        for (let i = 0; i < strings.length; i++) {
            const currentString = strings[i];

            // Если j = 0, значит идет анимация печатания текста
            // Если j = 1, значит текст стирается
            for (let j = 0; j < 2; j++) {
                for (let k = 0; k < currentString.length; k++) {
                    if (j === 0) {
                        currentPreviewOutput += currentString[k];
                        // Если напечаталось всё слово, ждем секунду и стираем его
                        if (k === currentString.length - 1 && i !== strings.length - 1) {
                            await sleep(1500);
                        }
                    } else if (j === 1 && i !== strings.length - 1) {   // Последнюю строку не стирать
                        currentPreviewOutput = currentPreviewOutput.slice(0, -1);
                    }
                    await sleep(30);    // Задержка между выводом букафф
                }
            }
        }

        isPreviewEnded = true;
        await animateAbout();
    };

    const animateAbout = async () => {
        for (let i = 0; i < about.length; i++) {
            currentAboutOutput += about[i];
            await sleep(20);
        }
    }

    animatePreview();
</script>

<style>
    @media screen and (min-width: 900px) {
        .preview-content {
            font-size: 3em;
        }
    }

    @media screen and (max-width: 900px) {
        .preview-content {
            font-size: 2em;
        }
    }

    @media screen and (max-width: 500px) {
        .preview-content {
            font-size: 1.3em;
        }
    }

</style>

<div class="preview-content">
    <span>{currentPreviewOutput}</span>
    {#if isPreviewEnded}
        <div>&nbsp;</div>
    {/if}
    <span>{@html currentAboutOutput}</span>
    <span class="primary">_</span>
</div>