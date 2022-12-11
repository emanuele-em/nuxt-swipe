import { defineNuxtConfig } from 'nuxt/config'
import MyModule from '../src/module'

export default defineNuxtConfig({
  modules: [
    ['../src/module']
  ],
  myModule: {
    addPlugin: false
  }
})
