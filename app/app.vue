<script lang="ts" setup>
import { components } from "~/slices";

useHead({
  titleTemplate: "%s | SIMQ",
});

const prismic = usePrismic();
const { data: page } = await useAsyncData("[root]", () => prismic.client.getSingle("root"));

const isAccordion = ref(false);

function toggleAccordion() {
  isAccordion.value = !isAccordion.value;
}

function closeAccordion() {
  if (isAccordion.value) {
    isAccordion.value = false;
  }
}
</script>

<template>
  <UApp>
    <Navigation :icon="page?.data.icon" :isAccordion="isAccordion" @toggleAccordion="toggleAccordion" style="z-index: 99999999" />
    <div class="flex w-full min-h-screen justify-center flex-col gap-10" @click="closeAccordion">
      <NuxtPage />
    </div>
    <Footer :copyright="page?.data.copyright" :social_links="page?.data.socmed_list || []" :icon="page?.data.icon" :description="page?.data.description" />
  </UApp>
</template>

<style scoped>
/* Add any necessary styles here */
</style>
