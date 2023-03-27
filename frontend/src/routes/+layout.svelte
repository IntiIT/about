<script>
    import "carbon-components-svelte/css/white.css";

    import {Content} from "carbon-components-svelte";
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
    import SideNav from '$lib/components/SideNav.svelte';
    import Header from '$lib/components/Header.svelte';

    const contacts = {
        phone: "+7 (904) 221 38 18",
        email: "efim-02@mail.ru",
        telegram: "",
    }

    const socLinks = [
        {
            name: "vk",
            link: "vk.com"
        }
    ]
</script>

<Header {contacts} />
<SideNav {contacts} {socLinks} />

<svelte:head>
    <title>ИНТИИТ</title>
</svelte:head>

<Content>
    <Breadcrumb/>
    <slot/>
</Content>

<style lang="scss" global>
  @import 'src/styles/main.scss';

  .instruction {
    &__title {
    }

    &__description {
      font-size: 16px;
    }

    &__video {
      margin-top: 20px;
    }
  }
</style>