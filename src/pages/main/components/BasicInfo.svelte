<script>
    import PlainText from "../../../common/PlainText.svelte";
</script>

<div class="mt-5">
    <PlainText title="Summary">
        <div class="body-text text">
            Hello there! My name is Timur and I live in <span class="medium">Tbilisi, Georgia</span> 🇬🇪<br>
            I do love <span class="medium">Android development</span>,
            building my own <span class="medium">home lab</span> with Raspberry Pi
            and learning new technologies such as
            <span class="medium">Golang</span> and <span class="medium">Swift</span> ✨
        </div>
    </PlainText>

    <PlainText title="Education and career">
        <div class="body-text text">
            I got a <span class="medium">computer science bachelor</span>
            degree at Vyatka State University. Now I am working at Surf as an
            <span class="medium">Android Engineer</span>. In the past I was
            a <span class="medium">frontend developer</span>
            – that's why you can see this page right now 🤓
        </div>
    </PlainText>
</div>

<style>
    .body-text {
        font-size: 1.2em;
    }
</style>