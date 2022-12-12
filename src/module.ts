import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

export interface ModuleOptions {
  addPlugin: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@emanuele-em/nuxt-swipe',
    configKey: 'nuxt-swipe',
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    addPlugin: true
  },
  setup (options, nuxt) {
    if (options.addPlugin) {
      const { resolve } = createResolver(import.meta.url)
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

      addComponent({
        name: 'Swipe',
        filePath: resolve(runtimeDir, 'components', 'Swipe.vue')
      })
      
      addPlugin(
        resolve(runtimeDir, 'plugin')
      )
    }
  }
})
