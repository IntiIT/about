<script>
    import {ContentSwitcher, RecursiveList, Switch} from "carbon-components-svelte";
    import {Group, ListChecked, Network_4} from "carbon-icons-svelte";

    let contentIndex = 0;
    const competencies = [
        {
            text: "Аналитика",
            children: [
                {
                    text: "Составление технического задания и других документов",
                },
                {
                    text: "Оптимизация карты пути пользователя",
                },
                {
                    text: "Проверка бизнес-гипотез",
                },
            ]
        },
        {
            text: "Дизайн интерфейсов",
            children: [
                {
                    text: "Проектирование интуитивно понятных макетов",
                },
                {
                    text: "Адаптивность под разные разрешения экранов",
                },
            ]
        },
        {
            text: "Разработка",
            children: [
                {
                    text: "Автоматизация бизнес-процессов",
                },
                {
                    text: "Интеграция систем и поддержка",
                },
                {
                    text: "Машинное обучение",
                },
            ],
        },
    ];

    const consumerAdvantages = [
        {
            text: "Предварительные этапы",
            children: [
                {
                    text: "Полное понимание бизнес процессов и запросов целевой аудитории",
                },
                {
                    text: "Различные решения поставленных задач для оптимизации времени разработки и цены",
                },
            ]
        },
        {
            text: "Разработка",
            children: [
                {
                    text: "Документация и покрытие автоматическими тестами",
                },
                {
                    text: "Прозрачная работа с мониторингом прогресса",
                },
                {
                    text: "Расширяемость функционала и масштабируемость",
                },
            ]
        },
        {
            text: "Период тестирования",
            children: [
                {
                    text: "Бесплатная доработка небольших дополнительных правок",
                },
            ],
        },
        {
            text: "Поддержка",
            children: [
                {
                    text: "Всегда на связи",
                },
            ],
        },
    ];
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
                    <h2 class="about-team__title">О компании</h2>
                    <div class="about-team__description about-team-description">
                        <p class="about-team-description__block">ИНТИИТ — команда молодых специалистов. Мы постоянно развиваем наши компетенции и применяем проверенные <span class="about-team-description__bold">инновационные</span> решения для реализации функционала проекта.</p>
                        <p class="about-team-description__block">Проекты в нашем портфолио разработаны с использованием современных технологий, в том числе с использованием машинного обучения. Это позволяет нам создавать масштабируемое программного обеспечение сохраняя высокую скорость разработки.</p>
                        <p class="about-team-description__competencies">
                            <RecursiveList children={competencies} />
                        </p>
                    </div>
                </div>
                <div class="about-team__image">
                    <img src="/images/team/team.svg" alt="Компетенции">
                </div>
            </div>
        <!--  Как мы работаем  -->
        {:else if contentIndex === 1}
            <div class="about-team__slide about-team__how">
                <div class="about-team__about">
                    <h2 class="about-team__title">Процесс разработки</h2>
                    <div class="about-team__description">
                        <div class="about-team__description about-team-description">
                            <p class="about-team-description__block">
                                Перед началом работы мы <span class="about-team-description__bold">бесплатно</span> проводим анализ бизнес процессов для автоматизации и предлагаем несколько вариантов для решения задач.
                                После утверждения функционала мы высылаем коммерческое предложение, проект договора и согласуем детали.</p>
                            <p class="about-team-description__block">
                                Наша команда работает по двух недельным спринтам, по окончанию спринтов мы документируем разработку и пишем автоматические тесты для повышения надежности приложений.
                                Преимущества для партнеров:
                            </p>
                            <p class="about-team-description__competencies">
                                <RecursiveList children={consumerAdvantages} />
                            </p>
                        </div>
                    </div>
                </div>
                <div class="about-team__image">
                    <img src="/images/team/project-cycle.svg" alt="Алгоритм работы">
                </div>
            </div>
        <!--  Технологии  -->
        {:else if contentIndex === 2}
            <div class="about-team__slide about-team__technologies">
                <div class="about-team__about">
                    <h2 class="about-team__title">Технологии</h2>
                    <p class="about-team__description">
                        В процессе разработки мы используем микросервисную разработку, это позволяет сохранить цену разработки нового функционала при росте кодовой базы.
                        Использование технологий искусственного интеллекта позволяет решать самые смелые и <span class="about-team-description__bold">нестандартные</span> задачи.
                    </p>
                    <p class="about-team__description">
                        Наши разработки документируются для упрощения процессов подключения к проекту новых сотрудников и покрываются программными тестами для автоматического поиска ошибок до выгрузки обновления. Наши системы открыты к интеграции с внешними системами.
                    </p>
                </div>
                <div class="about-team__image">
                    <img src="/images/team/technologies.svg" alt="Алгоритм работы">
                </div>
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
      background-size: 100px;
      margin-left: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        max-width: 100%;
      }
    }

    &__title {
    }

    &__description {
      margin-top: 20px;
    }
  }

  .about-team-description {
    &__bold {
      font-weight: bold;
    }

    &__block {
      margin-top: 10px;

      &:nth-child(1) {
        margin-top: 0;
      }
    }

    &__competencies {
      margin-top: 10px;
      margin-left: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    .about-team {

      &__slide {
        flex-wrap: wrap;
      }

      &__title {
        font-size: 24px;
      }

      &__description {
        margin-top: 10px;
      }

      &__about {
        max-width: 100%;
        margin-top: 20px;
        order: 1;
      }

      &__image {
        margin-left: 0px;
        max-width: 100%;
      }
    }

    :global(.about-team__switcher .bx--content-switcher) {
      flex-direction: column;
      height: auto;
    }

    :global(.about-team__switcher .bx--content-switcher button) {
      border-radius: 10px;
      border: none;
      outline: none;

      margin-top: 5px;

      &:nth-child(1) {
        margin-top: 0;
      }
    }
  }
</style>