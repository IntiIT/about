<script>
    import {breadcrumb} from '$lib/shared/stores/breadcrumb'
    import {Breadcrumb, BreadcrumbItem} from "carbon-components-svelte";

    $: {
        if (($breadcrumb.length === 0) || ($breadcrumb[0].url !== '/')) {
            $breadcrumb.unshift(
                {
                    url: '/',
                    title: 'главная'
                },
            )
        }
    }
</script>

<div class="breadcrumb">
    <Breadcrumb>
        {#each $breadcrumb as breadcrumbPage}
            <BreadcrumbItem href={breadcrumbPage.url}>{breadcrumbPage.title}</BreadcrumbItem>
        {/each}
    </Breadcrumb>
</div>

<style>
    .breadcrumb {
        margin-bottom: 20px;
    }
</style>