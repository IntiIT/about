<script>
    import {ContentSwitcher, Switch} from "carbon-components-svelte";
    import {Group, ListChecked, Network_4} from "carbon-icons-svelte";

    let contentIndex = 0;
</script>

<div class="about-team">
    <div class="about-team__switcher">
        <ContentSwitcher bind:selectedIndex={contentIndex}>
            <Switch>
                <div style="display: flex; align-items: center;">
                    <Group style="margin-right: 10px;"/>
                    Команда

                </div>
            </Switch>
            <Switch>
                <div style="display: flex; align-items: center;">
                    <ListChecked style="margin-right: 10px;"/>
                    Как мы работаем
                </div>
            </Switch>
            <Switch>
                <div style="display: flex; align-items: center;">
                    <Network_4 style="margin-right: 10px;"/>
                    Технологии
                </div>
            </Switch>
        </ContentSwitcher>
    </div>
    <div class="about-team__content">
        <!--  Команда  -->
        {#if contentIndex === 0}
            <div class="about-team__slide about-team__people">
                <div class="about-team__about">
                    <h2 class="about-team__title">Команда</h2>
                    <div class="about-team__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem culpa deleniti, doloremque earum eligendi id modi numquam omnis quas quasi repellat, repellendus repudiandae sunt tempora, tempore voluptas voluptates. Officiis!
                    </div>
                </div>
                <div class="about-team__image"></div>
            </div>
        <!--  Как мы работаем  -->
        {:else if contentIndex === 1}
            <div class="about-team__slide about-team__how">
                <div class="about-team__about">
                    <h2 class="about-team__title">Как мы работаем</h2>
                    <div class="about-team__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, sunt unde? Accusantium at, beatae consequuntur deleniti ea eligendi enim et hic itaque laboriosam molestias necessitatibus nobis qui ratione, sit vel.
                    </div>
                </div>
                <div class="about-team__image"></div>
            </div>
        <!--  Технологии  -->
        {:else if contentIndex === 2}
            <div class="about-team__slide about-team__technologies">
                <div class="about-team__about">
                    <h2 class="about-team__title">Технологии</h2>
                    <div class="about-team__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur culpa eaque incidunt iste iusto molestiae nemo nesciunt nihil perferendis perspiciatis quam quasi quos, ratione rem rerum ullam unde vitae.
                    </div>
                </div>
                <div class="about-team__image"></div>
            </div>
        {:else }
            Контент не найден
        {/if}
    </div>

</div>

<style lang="scss">
  .about-team {
    &__switcher {
    }

    &__content {
      margin-top: 20px;
    }

    &__people {
    }

    &__how {
    }

    &__technologies {
    }

    &__slide {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__about {
      width: 100%;
      max-width: calc(50% - 20px);
    }

    &__image {
      width: 100%;
      max-width: 500px;
      height: 500px;
      border-radius: 20px;
      background-color: #f5f5f5;
      background-size: 100px;
    }

    &__title {
    }

    &__description {
      margin-top: 20px;
    }
  }
</style>