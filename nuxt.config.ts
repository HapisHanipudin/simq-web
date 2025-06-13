import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/prismic"
  ],

  fonts: {
    families: [{ name: "Plus Jakarta Sans", provider: "google" }],
  },

  css: ["~/assets/css/main.css"],

  ui: {
    colorMode: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: "2024-11-27",

  prismic: {
    endpoint: apiEndpoint || repositoryName
  }
});