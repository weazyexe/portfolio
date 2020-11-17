<script>
    import {sleep} from "../lib/utils";

    let currentAboutOutput = "";

    const about = "Android & Web developer. Making design, " +
        "colored buttons, beautiful Android applications " +
        "and web pages";

    const rainbowClassName = "rainbow_text_animated";
    const rainbowClassNameTemp = "__rainbow_text_animated__";
    const rainbowStartTag = `<span class='${rainbowClassName}'>`;
    const rainbowEndTag = "</span>";

    const animateAbout = async () => {
        for (let i = 0; i < about.length; i++) {
            currentAboutOutput += about[i];
            await sleep(20);
        }
        makeColored();
        await makeFlickEffect();
    }

    const makeColored = () => {
        const keyword = "colored";
        const startIndex = currentAboutOutput.indexOf(keyword);
        currentAboutOutput = currentAboutOutput.slice(0, startIndex)
            + rainbowStartTag
            + currentAboutOutput.slice(startIndex, startIndex + keyword.length)
            + rainbowEndTag
            + currentAboutOutput.slice(startIndex + keyword.length, currentAboutOutput.length);
    };

    const makeFlickEffect = async () => {
        for (let i = 0; i < 9; i++) {
            if (i % 2 === 0) {
                currentAboutOutput = currentAboutOutput.replace(rainbowClassName, rainbowClassNameTemp);
            } else {
                currentAboutOutput = currentAboutOutput.replace(rainbowClassNameTemp, rainbowClassName);
            }
            await sleep(100);
        }

        await sleep(600);
        currentAboutOutput = currentAboutOutput.replace(rainbowClassNameTemp, rainbowClassName);
    };

    animateAbout();
</script>

<div class="preview-content">
    <span>{@html currentAboutOutput}</span>
    <span class="primary">_</span>
</div>