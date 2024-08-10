// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['@/assets/main.css'],
  generate: {
    routes: ['/', '/contacts'],
  },
  app: {
    head: {
      title: 'Another test task',
      meta: [
        {
          name: 'description',
          content: "Don't forget to give feedback :)",
        },
      ],
    },
  },
  routeRules: {
    '/': { swr: 3600 },
  },

  modules: ['@pinia/nuxt'],
});
