import {writable} from 'svelte/store';

export const breadcrumb = writable([]);
// Example:
// [
//     {
//         url: '/',
//         title: 'главная'
//     },
// ]