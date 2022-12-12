<template>
    <Swipe>
        <slot />
    </Swipe>
</template>
  
<script setup>
import { useNuxtApp, useRoute, navigateTo } from '#app'

const nuxtApp = useNuxtApp()
const routes = ['/', '/about']

nuxtApp.$bus.$on('swipe', (direction) => {
    let indexCurrentRoute = routes.indexOf(useRoute().path)
    if (direction === 'left' && routes[indexCurrentRoute + 1]) {
        indexCurrentRoute += 1
    }
    if (direction === 'right' && routes[indexCurrentRoute - 1]) {
        indexCurrentRoute -= 1
    }
    return navigateTo(routes[indexCurrentRoute])
})

</script>
  