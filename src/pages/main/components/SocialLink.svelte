<script>
    export let defaultImage;
    export let hoverImage;
    export let altText;
    export let classes = "";
    export let link;
</script>

<a href={link} target="_blank">
    <div class="image-box {classes}">
        <div>
            <img src={defaultImage} alt={altText} class="image" />
        </div>
        <div class="hover-image">
            <img src={hoverImage} alt={altText} class="image" />
        </div>
    </div>
</a>

<style>
    .image-box {
        position: relative;
        float: left;
    }

    .image-box .hover-image {
        position: absolute;
        left: 0;
        top: 0;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.2s ease-in-out;
    }

    .image-box:hover .hover-image {
        visibility: visible;
        opacity: 1;
    }

    .image {
        width: 25px;
        height: 25px;
    }
</style>
