<script>
    export let contacts;
    export let socLinks = [];
</script>

<footer class="footer">
    <div class="footer__inner">
        <div class="footer__content">
            <div class="footer__column footer__column_column1">
                <a href="/">
                    <img class="footer__logo logo logo__image" src="logo-full-short.png" alt="Логотип">
                </a>
            </div>
            <div class="footer__column footer__column_column2">
                <div class="footer__contacts footer-contacts">
                    <div class="footer-contacts__row phone-row phone-row_mini">
                        <a href="tel:{contacts.phone}" class="phone-row__phone">{contacts.phone}</a>
                        {#if contacts.telegram}
                            <a href="{contacts.telegram}" class="phone-row__soc-icon">телеграм</a>
                        {/if}
                    </div>
                    <div class="footer-contacts__row"><a href="mailto:{contacts.email}">{contacts.email}</a></div>
                    <div class="footer-contacts__row">
                        {#each socLinks as socLink }
                            <a href="{socLink.link}" class="footer-contacts__soc soc-link">{socLink.name}</a>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="footer__column footer__column_column3">
            </div>
            <div class="footer__column footer__column_column4">
                <div class="footer__links">
                    <div class="footer__link"><a href="/team">наша команда</a></div>
                    <div class="footer__link"><a href="/portfolio">портфолио</a></div>
                    <div class="footer__link"><a href="/contacts">контакты</a></div>
                </div>
                <div class="footer__dev">ООО "ИНТИИТ"</div>
            </div>
        </div>
    </div>
</footer>

<style lang="scss">
  @import 'src/styles/main.scss';

  .footer {
    margin-top: 100px;

    a {
      text-decoration: none;
    }

    &__inner {
      margin: 0 auto;
      height: 270px;
      max-width: $page_inner_width;
    }

    &__content {
      margin: 0 auto;
      padding: 0 20px;
      padding-top: 10px;
      padding-bottom: 30px;
      max-width: $page_content_width;
      min-height: 270px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &__column {
      margin-top: 30px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__column_column1 {
      max-width: 260px;
    }

    &__logo {
      max-width: 250px;
    }

    &__regulations {
      margin-top: 25px;
      @include text(p5);
    }

    &__column_column2 {
    }

    &__contacts {
    }

    &__rights {
      margin-top: 44px;
      @include text(p5);
    }

    &__column_column3 {
    }

    &__link {
      a {
        @include text(p5);
        font-size: 16px;
        opacity: 0.9;
        line-height: 200%;
      }
    }

    &__column_column4 {
    }

    &__links {
    }

    &__dev {
      margin-top: 41px;

      a {
        @include text(p5);
        opacity: 0.9;
      }
    }
  }

  .footer-contacts {
    &__row {
      margin-top: 14px;
      display: flex;
      @include text(p4);

      &:nth-child(1) {
        margin-top: 0;
      }
    }

    &__phone {
    }

    &__soc-icon {
      margin-left: 20px;
      display: flex;
      align-items: center;

      &:nth-child(1) {
        margin-left: 0px;
      }

      img {
        width: 17px;
      }
    }

    &__soc {
      margin-left: 20px;

      &:nth-child(1) {
        margin-left: 0px;
      }
    }
  }
</style>