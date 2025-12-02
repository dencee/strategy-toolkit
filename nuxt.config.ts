// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,           // default, OK
  nitro: {
    preset: 'github-pages'
  },
  app: {
    baseURL: '/strategy-toolkit/',     // important for GitHub Pages
    buildAssetsDir: 'assets'      // optional but common
  }
})