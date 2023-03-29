<script>
    import {Map, Marker} from "@beyonk/svelte-mapbox";
    import {PUBLIC_MAPBOX_TOKEN} from "$env/static/public";
    import {Button} from "carbon-components-svelte";
    import {LogoGithub} from "carbon-icons-svelte";

    export let contacts = {};
    export const officeCoords = {
        lat: 56.149745,
        lon: 47.2201752,
    }
</script>

<div class="about-contacts">
    <div class="about-contacts__contacts contacts">
        <h2 class="contacts__title">Контакты</h2>

        {#if contacts.phone}
            <div class="contacts__row">
                <div class="contacts__label">Телефон:</div>
                <div class="contacts__value">{contacts.phone}</div>
            </div>
        {/if}
        {#if contacts.email}
            <div class="contacts__row">
                <div class="contacts__label">E-mail:</div>
                <div class="contacts__value">{contacts.email}</div>
            </div>
        {/if}
        {#if contacts.telegram}
            <div class="contacts__row">
                <div class="contacts__label">Телеграм:</div>
                <div class="contacts__value">{contacts.telegram}</div>
            </div>
        {/if}
        <div class="contacts__row">
            <div class="contacts__label">Адрес офиса:</div>
            <div class="contacts__value">Чебоксары, Чувашская Респ., ул. Афанасьева, 8, кабинет 411</div>
        </div>
        <div class="contacts__btn-links">
            <div class="contacts__btn-link">
                <Button kind="secondary"
                        iconDescription="GitHub"
                        icon={LogoGithub}
                        size="small"
                        href="https://github.com/IntiIT">GitHub</Button>
            </div>
        </div>
    </div>
    <div class="about-contacts__map">
        <Map accessToken={PUBLIC_MAPBOX_TOKEN}
             zoom={14}
             options={{
                container: "map",
                language: "ru",
                center: [officeCoords.lon, officeCoords.lat],
            }}
        >
            <Marker color="#1b63fe" popup={false} lat={officeCoords.lat} lng={officeCoords.lon}></Marker>
        </Map>
    </div>
</div>

<style lang="scss">
    .about-contacts {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__contacts {
        align-self: start;
      }

      &__map {
        width: 100%;
        max-width: 700px;
        height: 400px;
        margin-left: 20px;
      }
    }

    .contacts {
      &__row {
        display: flex;
        margin-top: 20px;

        &:nth-child(1) {
          margin-top: 0;
        }
      }

      &__label {
        font-weight: 600;
      }

      &__value {
        margin-left: 20px;
      }

      &__btn-links {
        margin-top: 20px;
        display: flex;
      }

      &__btn-link {
        margin-left: 20px;

        &:nth-child(1) {
          margin-left: 0;
        }
      }
    }

    @media screen and (max-width: 768px) {
      .about-contacts {
        flex-wrap: wrap;

        &__map {
          width: 100%;
          margin-top: 20px;
          margin-left: 0px;

        }
      }

      .contacts {
        &__row {
          display: flex;
          justify-content: space-between;
        }

        &__value {
          margin-left: 20px;
        }
      }
    }

    @media screen and (max-width: 480px) {
      .about-contacts {
        &__map {
          height: 300px;
        }
      }
    }
</style>