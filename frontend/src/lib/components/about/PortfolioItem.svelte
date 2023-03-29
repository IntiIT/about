<script>
    import {ImageLoader, InlineLoading} from "carbon-components-svelte";

    export let name = "";
</script>

{#if name}
    <div class="portfolio-item">
        <div class="portfolio-item__image">
            <ImageLoader
                    src="/images/portfolio/{name}.png"
                    alt="Проект '{name}'"
                    fadeIn
            >
                <svelte:fragment slot="loading">
                    <InlineLoading />
                </svelte:fragment>
                <svelte:fragment slot="error">Ошибка при загрузке изображения</svelte:fragment>
            </ImageLoader>
        </div>
    </div>
{/if}

<style lang="scss">
    .portfolio-item {
      display: flex;
      justify-content: center;
      align-items: center;

      &__image {
        max-width: 700px;
        max-height: 400px;
      }
    }
</style>