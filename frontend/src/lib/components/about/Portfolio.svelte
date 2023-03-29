<script>
    import Slider from "$lib/components/slider/Slider.svelte";
    import PortfolioItem from "$lib/components/about/PortfolioItem.svelte";
</script>

<div class="portfolio">
    <h2 class="portfolio__title">Наши проекты</h2>
    <div class="portfolio__slider">
        <Slider>
            <PortfolioItem name="CityGIS2" />
            <PortfolioItem name="CityGIS3" />
            <PortfolioItem name="CityGIS1" />
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