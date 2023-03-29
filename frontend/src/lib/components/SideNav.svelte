<script>
    import {isSideMenuOpened} from '$lib/shared/stores/side-menu'
    import {handleAnchorClick} from "$lib/utils/anchor.js";

    export let contacts;
    export let socLinks;
</script>

<div class="side-menu {$isSideMenuOpened ? 'side-menu_opened' : ''}">
    <div class="side-menu__content">
        <div class="side-menu__close">
            <img src="images/icons/close.png" alt="Закрыть боковое меню" on:click={() => {isSideMenuOpened.set(false)}}>
        </div>
        <div class="side-menu__links">
            <a href="/#team" class="side-menu__link" on:click={handleAnchorClick}>наша команда</a>
            <a href="/#portfolio" class="side-menu__link" on:click={handleAnchorClick}>портфолио</a>
            <a href="/#contacts" class="side-menu__link" on:click={handleAnchorClick}>контакты</a>
        </div>
        <div class="side-menu__contacts">
            <div class="side-menu__phone-row phone-row">
                <a href="tel:{contacts.phone}" class="phone-row__phone">{contacts.phone}</a>
            </div>
            <div class="side-menu__email">
                <a href="mailto:{contacts.email}">{contacts.email}</a>
            </div>
            <div class="side-menu__soc-links">
                {#if contacts.telegram}
                    <a href="{contacts.telegram}" target="_blank" rel="noopener noreferrer" class="side-menu__soc-link soc-link">телеграм</a>
                {/if}
                {#each socLinks as socLink }
                    <a href="{socLink.link}" target="_blank" rel="noopener noreferrer" class="side-menu__soc-link soc-link">{socLink.name}</a>
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
  @import 'src/styles/main.scss';

  .side-menu {
    width: 100%;
    max-width: 900px;
    height: 100vh;
    padding: 0px 120px;
    padding-top: 60px;
    padding-bottom: 80px;
    position: fixed;
    right: 0px;
    top: 0px;
    background-color: #f5f5f5;
    z-index: -1;
    opacity: 0;

    a {
      text-decoration: none;
    }

    &_opened {
      opacity: 1;
      z-index: 1;
      animation: fadeInFromNone 0.5s ease-out;
    }

    &_loaded {
      z-index: 11;
      opacity: 1;
      display: none;
    }

    &__content {
      position: relative;
      padding-top: 30px;
    }

    &__close {
      position: absolute;
      right: 0px;
      top: 0px;
      cursor: pointer;

      img {
        width: 100%;
        max-width: 20px;
      }
    }

    &__links {
    }

    &__link {
      @include text(p1);
      font-size: 30px;
      display: block;
      transition: 0.5s all;

      &:hover {
        background: $gradient_main;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    div &__phone-row {
      margin-top: 65px;
    }

    &__email {
      margin-top: 15px;

      a {
        @include text(p1);
      }
    }

    &__soc-links {
      display: flex;
      margin: 0 -10px;
      margin-top: 30px;
    }

    &__soc-link {
      margin: 0px 10px;
    }
  }


  .phone-row {
    margin: -15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &__phone {
      margin: 0 15px;
      @include text(p1);
      white-space: nowrap;
    }

    &__soc-icon {
      margin: 15px;

      img {
        width: 24px;
      }
    }

    &_mini &__phone {
      font-size: 18px;
    }

    &_mini &__soc-icon {
      margin: 10px;
      display: flex;
      align-items: center;

      img {
        width: 21px;
      }
    }
  }
</style>