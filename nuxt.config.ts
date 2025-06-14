import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxtjs/prismic"],

  app: {
    head: {
      title: "About SIMQ",
      meta: [
        { name: "description", content: "Sekolah Indonesia Menerjemah Qur'an merupakan pesantren yang menggabungkan kekuatan penghafalan Al-Qur'an dan kemandirian ekonomi." },
        { name: "keywords", content: "SIMQ, pesantren, Al-Qur'an, tahfizh, tafsir, pendidikan bisnis islami" },
      ],
    },
  },
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
    endpoint: apiEndpoint || repositoryName,
  },
});
