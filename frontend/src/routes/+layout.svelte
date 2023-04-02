<script>
    import "carbon-components-svelte/css/white.css";

    import {Content} from "carbon-components-svelte";
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
    import SideNav from '$lib/components/SideNav.svelte';
    import Header from '$lib/components/Header.svelte';
    import Footer from "$lib/components/Footer.svelte";

    export let data;
</script>

<Header contacts={data.contacts} />
<SideNav contacts={data.contacts} socLinks={data.socLinks} />

<svelte:head>
    <title>ИНТИИТ</title>
    <meta name="description" content="ИНТИИТ — команда молодых специалистов, разрабатывающая масштабируемые системы с использованием искусственного интеллекта">
    <meta name="keywords" content="информационные системы, разработка проектов, сайты, приложения, аналитика">

    <meta property="og:title" content="ООО ИНТИИТ"/>
    <meta property="og:description" content="ИНТИИТ — команда молодых специалистов, разрабатывающая масштабируемые системы с использованием искусственного интеллекта"/>
    <meta property="og:type" content="website" />
    <meta property="og:image" content="favicon.png"/>
</svelte:head>

<Content>
    <Breadcrumb/>
    <slot/>
</Content>
<Footer contacts={data.contacts} socLinks={data.socLinks} />

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