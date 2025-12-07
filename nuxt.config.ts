// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'github-pages',
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/strategy-toolkit/' : '/',
  },
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  router: {
    base: '/strategy-toolkit/'
  },
})