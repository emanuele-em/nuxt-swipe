import { defineNuxtConfig } from 'nuxt/config'
import MyModule from '../src/module'

export default defineNuxtConfig({
  modules: [
    ['../src/module', {routes: ['/', '/about']}]
  ],
  myModule: {
    addPlugin: false
  }
})
