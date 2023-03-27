<script>
    import {page} from '$app/stores';

    import {breadcrumb} from '$lib/shared/stores/breadcrumb'

    breadcrumb.set([
        {
            url: undefined,
            title: 'ошибка'
        },
    ])
</script>

<svelte:head>
    <title>Ошибка</title>
</svelte:head>

<div class="error">
    <h1 class="error__title">Оупс...</h1>
    {#if $page.status === 404}
        <p class="error__description">Страница не найдена</p>
    {:else}
        <p class="error__description">Ошибка {$page.status} ({$page.error.message})</p>
    {/if}
</div>

<style lang="scss">
  .error {
    &__title {
    }

    &__description {
      margin-top: 10px;
    }
  }
</style>