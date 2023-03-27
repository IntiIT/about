<script>
    import {onMount} from "svelte";

    let typedTextSpan;
    let cursorSpan;

    export let textStart = '';
    export let textEndingList = [];
    export const typingDelay = 100;
    export const erasingDelay = 100;
    export const newTextDelay = 1000; // Delay between current and next text

    let textEndingListIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textEndingList[textEndingListIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textEndingList[textEndingListIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textEndingList[textEndingListIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        }
        else {
            cursorSpan.classList.remove("typing");
            textEndingListIndex++;
            if(textEndingListIndex>=textEndingList.length) textEndingListIndex=0;
            setTimeout(type, typingDelay + 1100);
        }
    }
    
    onMount(() => {
        if(textEndingList.length) setTimeout(type, newTextDelay + 250);
    })
</script>

<div class="container">
    <p style="font-size: {48}px;">{textStart} <span class="typed-text" bind:this={typedTextSpan}></span><span class="cursor" bind:this={cursorSpan}>&nbsp;</span></p>
</div>

<style>
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    
    .container p {
        letter-spacing: 0.1rem;
        overflow: hidden;
    }
    .container p span.typed-text {
        font-weight: normal;
        color: #1b63fe;
    }
    .container p span.cursor {
        display: inline-block;
        background-color: #ccc;
        margin-left: 0.1rem;
        width: 3px;
        animation: blink 1s infinite;
    }
    .container p span.cursor.typing {
        animation: none;
    }
    
    @keyframes blink {
        0%  { background-color: #ccc; }
        49% { background-color: #ccc; }
        50% { background-color: transparent; }
        99% { background-color: transparent; }
        100%  { background-color: #ccc; }
    }
</style>