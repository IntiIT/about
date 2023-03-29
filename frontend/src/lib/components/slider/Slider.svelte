<script>
    import {onMount} from "svelte";

    let Carousel;
    onMount(async () => {
        const module = await import("svelte-carousel");
        Carousel = module.default;
    });
</script>

<svelte:component autoplay autoplayDuration={5000} this={Carousel} let:showPrevPage let:showNextPage>
    <button
        type="button"
        slot="prev"
        on:click={showPrevPage}
        class="nav-btn"
    >
        &LongLeftArrow;
    </button>
    <slot/>
    <button
        type="button"
        slot="next"
        on:click={showNextPage}
        class="nav-btn"
    >
        &LongRightArrow;
    </button>
</svelte:component>

<style>
    .nav-btn {
        background: none;
        border: none;
    }
</style>