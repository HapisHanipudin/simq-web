<template>
  <UContainer class="py-16 flex items-center">
    <div id="visi-misi" class="px-8 flex flex-col max-xl:gap-4 w-full">
      <h2 class="text-4xl font-bold">Visi dan Misi</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full justify-center items-center">
        <div class="flex max-md:justify-center">
          <div class="flex flex-col justify-center gap-4">
            <div class="flex flex-col gap-2">
              <h3 class="text-2xl md:text-3xl font-semibold">Visi dan Tujuan</h3>
              <p class="text-justify text-lg">{{ visi }}</p>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-2xl md:text-3xl font-semibold">Misi</h3>
              <div>
                <PrismicRichText class="list-disc text-xl" :field="misi" />
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <PrismicImage class="rounded-2xl" :field="image" />
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
