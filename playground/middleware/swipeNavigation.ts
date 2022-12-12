import { useNuxtApp, useRoute } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
console.log(to);
const nuxtApp = useNuxtApp();
    let currentRoute = useRoute().path;


    const routes = ['/', '/about']
    currentRoute = routes.indexOf(currentRoute);
    const next = routes[currentRoute + 1] ? routes[currentRoute + 1] : null
    const prev = routes[currentRoute - 1] ? routes[currentRoute - 1] : null

    nuxtApp.$bus.$on('swipe', (direction) => {
        if (direction === 'left' && next) { return navigateTo('/about') }
        if (direction === 'right' && prev) { return navigateTo('/about') }
        return;
    })
})
