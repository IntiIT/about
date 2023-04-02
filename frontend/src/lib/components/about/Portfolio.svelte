<script>
    import Slider from "$lib/components/slider/Slider.svelte";
    import PortfolioItem from "$lib/components/about/PortfolioItem.svelte";
</script>

<div class="portfolio">
    <h2 class="portfolio__title">Наши проекты</h2>
    <div class="portfolio__slider">
        <Slider>
            <PortfolioItem name="portfolio1" />
            <PortfolioItem name="portfolio2" />
            <PortfolioItem name="portfolio3" />
            <PortfolioItem name="portfolio4" />
            <PortfolioItem name="portfolio5" />
        </Slider>
    </div>
</div>

<style lang="scss">
    .portfolio {
      &__title {
      }

      &__slider {
        margin-top: 20px;
      }
    }
</style>