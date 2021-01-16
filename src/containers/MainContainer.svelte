<div class="main-content">
    <div class="title">
        <span class="name">Timur Zadvornov</span>
        <span class="name nick">==&nbsp;weazyexe</span>
    </div>
    <span>{@html currentAboutOutput}</span>
    <span class="rainbow_text_animated">_</span>

    {#if isAnimationEnded}
        <div in:fade={fadePreset}>
            <Navigation currentPage={MAIN_PAGE_STATE} />
        </div>
    {/if}
</div>

{#if isAnimationEnded}
    <div in:fade={fadePreset}>
        <Footer/>
    </div>
{/if}

<script>
    import {sleep, fadePreset} from "../lib/utils";
    import Navigation from "../components/Navigation.svelte";
    import Footer from "../components/Footer.svelte";
    import {fade} from "svelte/transition";
    import {MAIN_PAGE_STATE} from "../stores/pageStore";
    import {animationEnded} from "../stores/animationStore";

    let currentAboutOutput = "";
    let isAnimationEnded = false;

    const about = "Android & Web developer. Making design, " +
        "colored buttons, beautiful Android applications " +
        "and web pages";

    const rainbowClassName = "rainbow_text_animated";
    const rainbowClassNameTemp = "__rainbow_text_animated__";
    const rainbowStartTag = `<span class='${rainbowClassName}'>`;
    const rainbowEndTag = "</span>";

    animationEnded.subscribe((value) => {
        isAnimationEnded = value;
    });

    const animateAbout = async () => {
        if (!isAnimationEnded) {
            for (let i = 0; i < about.length; i++) {
                currentAboutOutput += about[i];
                await sleep(20);
            }
            makeColored();
            await makeFlickEffect();
            animationEnded.set(true);
        } else {
            currentAboutOutput = about;
            makeColored();
        }
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

<style>
    .title {
        margin-bottom: 2em;
    }

    .name {
        font-size: 1.5em;
        font-weight: bold;
    }

    .nick {
        color: #444444;
    }
</style>