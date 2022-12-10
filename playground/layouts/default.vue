<template>
    <div @touchstart="e => $swipe(e, routes)" @touchend="e => $handleSwipe(e)">
        <slot />
    </div>
</template>
  
<script setup lang="ts">
import { useNuxtApp } from '#app'
const routes = ['/', '/about']
</script>
  