<script>
    import {isSideMenuOpened} from "$lib/shared/stores/side-menu.js";
    import {handleAnchorClick} from "$lib/utils/anchor.js";

    export let contacts;
</script>

<header class="header">
    <div class="header__inner">
        <a href="/"
        ><img
                class="header__logo logo logo__image"
                src="/logo2.png"
                alt="Логотип"
        /></a>
        <nav class="header__nav main-nav">
            <div class="main-nav__links">
                <a href="/#team" class="main-nav__link" on:click={handleAnchorClick}>наша команда</a>
                <a href="/#portfolio" class="main-nav__link" on:click={handleAnchorClick}>портфолио</a>
                <a href="/#contacts" class="main-nav__link" on:click={handleAnchorClick}>контакты</a>
            </div>
        </nav>
        <div class="header__contacts header-contacts">
            <a class="header-contacts__phone" href="tel:{contacts.phone}"
            >{contacts.phone}</a
            >
        </div>
        <div class="header__menu">
            <div class="side-menu-btn">
                <img
                        src="/images/icons/burger.svg"
                        alt="Меню"
                        on:click={() => {isSideMenuOpened.set(true)}}
                >
            </div>
        </div>
    </div>
</header>

<style lang="scss">
  @import 'src/styles/main.scss';

  .header {
    font-family: $font_main;
    white-space: nowrap;
    padding: 0 20px;

    a {
      text-decoration: none;
    }

    &__inner {
      height: 130px;
      max-width: $page_inner_width;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__logo {
      max-width: 200px;
    }

    &__nav {
      margin-left: 10px;
    }

    &__contacts {
      margin-left: 10px;
    }

    &__menu {
      display: flex;
      margin-left: 10px;
    }
  }

  .logo {
  }

  .main-nav {
    &__links {
      display: flex;
    }

    &__link {
      @include text(p2);
      margin-left: 50px;
      opacity: 0.9;

      &:nth-child(1) {
        margin-left: 0px;
      }
    }
  }

  .header-contacts {
    display: flex;

    &__phone {
      opacity: 1;
      @include text(p2);
      color: #1b63fe;
      font-weight: normal;
    }

    &__soc-list {
      display: flex;
      align-items: center;
      margin-left: 48px;
    }

    &__soc {
      margin-left: 25px;

      &:nth-child(1) {
        margin-left: 0px;
      }

      img {
        width: 17px;
      }
    }
  }

  .side-menu-btn {
    &:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 992px) {
    .header {
      &__nav {
        display: none;
      }

      &__contacts {
        display: none;
      }
    }
  }
</style>