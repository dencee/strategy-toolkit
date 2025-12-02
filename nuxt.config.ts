// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'github-pages',
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/strategy-toolkit/' : '/',
  },
})