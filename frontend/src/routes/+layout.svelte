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
    <meta name="description" content="ИНТИИТ — команда профессионалов, разрабатывающая масштабируемые системы с использованием искусственного интеллекта">
    <meta name="keywords" content="информационные системы, разработка проектов, сайты, приложения, аналитика">

    <meta property="og:title" content="ООО ИНТИИТ"/>
    <meta property="og:description" content="ИНТИИТ — команда профессионалов, разрабатывающая масштабируемые системы с использованием искусственного интеллекта"/>
    <meta property="og:type" content="website" />
    <meta property="og:image" content="favicon.png"/>

    <!-- TODO expose ya_metrika_id   -->
    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(93923996, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/93923996" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
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