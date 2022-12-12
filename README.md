
# Nuxt-Swipe

This Nuxt 3 module allows you to easily add swipe gestures to your Vue 3 App. With just a few lines of code, you can enable swiping on your website or web application.



## Installation

To add this module to your Nuxt.js project, run the following command:

```bash
  npm i @emanuele-em/nuxt-swipe

```
Then, add nuxt-swipe to the modules section of your nuxt.config.js file:

```javascript
  export default {
    modules: [
        'nuxt-swipe'
    ]
  }

```    

## Usage

To use the module, simply add `<Swipe>` componentit will be the component that will intercept the _swipe_ gesture

For example:
```javascript
<template>
    <Swipe>
        <slot />
    </Swipe>
</template>
```

The module will create a plugin that will emit the `Swipe` event only after some checks to make sure that the gesture is really a swipe gesture.

You can handle that event in the script section of your component, **remember to import nuxtApp**:

```html
<script setup>

import { useNuxtApp } from '#app'

const nuxtApp = useNuxtApp()

nuxtApp.$bus.$on('swipe', (direction) => {
    switch (direction) {
        case 'left': 
            // swiped left, do things
            break;
        case 'right':
            // swiped right, do things
            break;
        case 'up':
            // swiped up, do things
            break;
        case 'down':
            // swiped down, do things
            break;
        default:
            break;
    }
})

</script>
```
## Examples

Swipe navigation with `Swipe` component as Default Layout

_layouts/default.vue_
```javascript
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
  
```


## Demo

demo


## Roadmap

- Typescript correct syntax

- Swipe handling during the `touchEvent` and not just at `touchend` 


## License

[MIT](https://choosealicense.com/licenses/mit/)

