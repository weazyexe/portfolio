<script>
    import {sleep} from "../lib/utils";
    import {pageState, MAIN_PAGE_STATE} from "../stores/pageStore";

    const strings = ["Hello there", "Let's find out whoami", "I'm weazyexe"];
    let currentPreviewOutput = "";

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

        await goToMain();
    };

    const goToMain = () => {
        pageState.set(MAIN_PAGE_STATE);
    };

    animatePreview();
</script>

<div class="preview-content">
    <span>{currentPreviewOutput}</span>
    <span class="primary">_</span>
</div>