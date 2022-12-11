<template>
    <div @touchstart="e => $swipe(e)" @touchend="e => $handleSwipe(e)">
        <slot />
    </div>
</template>
  
<script setup lang="ts">
import { useNuxtApp } from '#app'

let nuxtApp = useNuxtApp()
console.log(nuxtApp)

</script>
  