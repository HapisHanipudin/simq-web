<template>
  <UApp>
    <Navigation :isAccordion="isAccordion" @toggleAccordion="toggleAccordion" style="z-index: 99999999" />
    <div class="flex w-full min-h-screen justify-center flex-col gap-10" @click="closeAccordion">
      <NuxtPage />
    </div>
    <Footer />
  </UApp>
</template>

<script>
export default {
  data() {
    return {
      isAccordion: false,
    };
  },
  methods: {
    toggleAccordion() {
      this.isAccordion = !this.isAccordion;
    },
    closeAccordion() {
      if (this.isAccordion) {
        this.isAccordion = false;
      }
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
