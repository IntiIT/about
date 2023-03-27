<script>
    import {Pagination} from "carbon-components-svelte";

    export let pagination;
    export let itemsCount;
</script>

<Pagination
        bind:pageSize={pagination.pageSize}
        bind:page={pagination.pageNum}
        on:update
        totalItems={itemsCount}
        pageSizeInputDisabled
        itemText={(min, max) => `${min}–${max} страниц`}
        itemRangeText={(min, max, total) => `${min}–${max} всего: ${total}`}
        pageText={(number) => `страница ${number}`}
        pageRangeText={(number) => `всего: ${number}`}
        forwardText="Далее"
        backwardText="Назад"
/>