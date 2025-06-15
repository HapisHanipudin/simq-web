<template>
  <div class="relative h-screen flex flex-col mt-20 items-end">
    <div class="bg-white pt-22 px-12 md:px-18 lg:px-20 pb-24 p-8 rounded-lg shadow-lg w-full">
      <div class="grid md:grid-cols-12 justify-center lg:px-16 gap-8">
        <div class="md:col-span-8 lg:col-span-9 xl:col-span-10">
          <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold">{{ title }}</h1>
          <p class="mt-4 text-lg">{{ description }}</p>
        </div>
        <div class="items-end flex md:col-span-4 lg:col-span-3 xl:col-span-2">
          <div>
            <!-- <UButton size="xl" color="primary" variant="subtle" class="px-4 py-2">
              <PrismicLink :field="cta" />
            </UButton> -->
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden flex w-full h-full">
      <PrismicImage class="object-cover w-full object-top" :field="image" />
      <!-- <img class="self-end" src="https://www.successacademies.org/wp-content/uploads/2024/01/Blog-Header-01.jpg" alt="" /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
const { title, description, image, cta } = defineProps<{
  title: any;
  description: any;
  image: any;
  cta: any;
}>();
</script>

<style></style>
