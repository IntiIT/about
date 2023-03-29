<script>
    import {breadcrumb} from "$lib/shared/stores/breadcrumb.js";
    import Typing from "$lib/components/effects/Typing.svelte";
    import {Button} from "carbon-components-svelte";
    import Contacts from "$lib/components/about/Contacts.svelte";
    import Team from "$lib/components/about/Team.svelte";
    import Portfolio from "$lib/components/about/Portfolio.svelte";

    export let data;

    breadcrumb.set([])
</script>

<div class="about-page">
    <div class="about-page__about about">
        <h1 class="about__company">ИНТИИТ</h1>
        <div class="about__about">
            <Typing textStart="это" textEndingList={data.aboutTextEndingList} />
        </div>
        <div class="about__more">
            <Button>Узнать подробнее</Button>
        </div>
        <div class="about__image"></div>
    </div>
    <div class="about-page__team" id="team">
        <Team />
    </div>
    <div class="about-page__portfolio" id="portfolio">
        <Portfolio />
    </div>
    <div class="about-page__contacts" id="contacts">
        <Contacts contacts={data.contacts} officeCoords={data.officeCoords} />
    </div>
</div>



<style lang="scss">
    .about-page {
      &__about{
      }

      &__team {
        margin-top: 50px;
      }

      &__portfolio {
        margin-top: 50px;
      }

      &__contacts {
        margin-top: 50px;
      }
    }

    .about {
      &__company{
        margin-top: 70px;
        font-size: 64px;
      }

      &__about {
        font-size: 48px;
      }

      &__more {
        margin-top: 20px;
      }

      &__image {
        margin-top: 120px;
        height: 100px;
        border-radius: 20px;
        background: url('/images/pattern.png') 50% 50%;
        background-size: 100px;
      }
    }
</style>