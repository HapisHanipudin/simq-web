<template>
  <UContainer class="py-16 flex items-center">
    <div id="visi-misi" class="px-8 flex flex-col max-xl:gap-4">
      <h2 class="text-4xl font-bold">Visi dan Misi</h2>
      <div class="flex xl:flex-row flex-col gap-6 justify-center">
        <div class="flex flex-col justify-center gap-4 xl:max-w-1/2">
          <div class="flex flex-col gap-2">
            <h3 class="text-2xl md:text-3xl font-semibold">Visi dan Tujuan</h3>
            <p class="text-justify text-lg">{{ visi }}</p>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-2xl md:text-3xl font-semibold">Misi</h3>
            <div>
              <PrismicRichText :field="misi" />
            </div>
          </div>
        </div>
        <div class="w-1/2 max-xl:hidden">
          <PrismicImage :field="image" />
          <!-- <img class="" src="https://www.bunayahebat.com/assets/islamkid.png" alt="" /> -->
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script lang="ts" setup>
const { visi, misi, image } = defineProps<{
  visi: any;
  misi: any;
  image: any;
}>();
</script>

<style></style>
