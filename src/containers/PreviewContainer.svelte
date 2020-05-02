<script>
    import { sleep } from "../lib/utils";
    import { fade } from 'svelte/transition';
    import { pageState, INFO_PAGE_STATE } from "../stores/pageStore";
    import Button from "../components/Button.svelte";
    import Loader from "../components/Loader.svelte";

    const code = "<div class=\"imports\">" +
            "<div><span class=\"keyword\">package</span> dev.weazyexe</div>" +
            "<div><span class=\"keyword\">import</span> dev.weazyexe.texts</div>" +
            "</div>" +
            "<div class=\"comment\">// oh hi! whats up?</div>" +
            "<div class=\"comment\">// press run if you wanna see more</div>" +
            "<div><span class=\"keyword\">fun</span> main() {</div>" +
            "<div class=\"tab-1\"><span class=\"static-fun\">println</span>(<span class=\"const\">GREETING</span>)</div>" +
            "<div class=\"tab-1\">loadProjects()</div>" +
            "<div>}</div>"

    let currentCode = "";
    let isButtonVisible = false;
    let isLoaderVisible = false;

    // Анимирование ввода текста
    const animate = async () => {
        let toAdd = ""; // Чтобы < и /> не выводились в анимации набора текста
        for (let i = 0; i < code.length; i++) {

            // Проверка, является ли текущий символ началом или конца тега HTML
            if (code[i] === "<" || code[i] === ">" || code[i] === "/") {
                toAdd += code[i];
            }

            // Если нет служебных HTML символов для добавления к строке, то добавляем очередной символ
            if (!toAdd && code[i] !== '>') {
                currentCode = currentCode + code[i];
                await sleep(10);
            } else { // Иначе добавлям к коду служебные символы и очищаем toAdd
                currentCode += toAdd;
                toAdd = "";
            }

            if (i === code.length - 1) {
                isButtonVisible = true;
            }
        }
    };

    const onRunClick = async () => {
        isLoaderVisible = true;
        await sleep(2000);
        isLoaderVisible = false;
        pageState.set(INFO_PAGE_STATE);
    }

    animate();
</script>

<style>
    .preview-content {
        font-size: 3em;
    }

    .button {
        margin-top: 2em;
    }
</style>

<div class="preview-content">
    {@html currentCode}
    {#if isButtonVisible}
        <div class="button" transition:fade>
            <Button onClick={() => onRunClick()} text="Run the code"/>
        </div>
    {/if}
    {#if isLoaderVisible}
        <div transition:fade>
            <Loader/>
        </div>
    {/if}
</div>