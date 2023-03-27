<script>
    import {breadcrumb} from "$lib/shared/stores/breadcrumb.js";
    import Typing from "$lib/components/effects/Typing.svelte";
    import {Button} from "carbon-components-svelte";

    breadcrumb.set([])

    const aboutTextEndingList = [
        "команда профессионалов",
        "современные технологии",
        "понимание бизнес процессов",
        "надежные решения",
        "масштабируемые системы"
    ]
</script>

<div class="about">
    <h1 class="about__company">ИНТИИТ</h1>
    <div class="about__about">
        <Typing textStart="это" textEndingList={aboutTextEndingList} />
    </div>
    <div class="about__more">
        <Button>Узнать подробнее</Button>
    </div>
    <div class="about__image"></div>
</div>

<style lang="scss">
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