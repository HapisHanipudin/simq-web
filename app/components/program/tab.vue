<template>
  <template v-if="title === selectedTitle">
    <div class="mx-4 lg:mx-24">
      <UCarousel
        v-slot="{ item }"
        :items="page?.data.sub_program"
        :ui="{
          item: 'basis-full md:basis-1/2 lg:basis-1/3 px-2', // [PERBAIKAN] Basis responsif: 1 item di mobile, 2 di tablet, 3 di desktop.
          arrows: {
            // [PERCANTIK] Menambahkan style pada panah navigasi agar serasi.
            wrapper: 'absolute top-1/2 transform -translate-y-1/2',
            prev: '-left-4 md:-left-8 text-primary-600 hover:text-primary-800',
            next: '-right-4 md:-right-8 text-primary-600 hover:text-primary-800',
            icon: 'w-8 h-8',
          },
        }"
      >
        <div class="flex h-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 class="text-xl font-bold text-primary-600 lg:text-2xl">{{ item.sub_title }}</h3>
          <span class="text-3xl font-light">{{ item.pricing }}</span>

          <div>
            <PrismicLink
              :field="item.button"
              class="inline-block rounded-full px-6 py-2 text-center font-semibold transition-all duration-300"
              :class="{
                'bg-primary-600 text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-300': item.button.variant === 'Primary',
                'border border-primary-600 text-primary-600 hover:bg-primary-50 hover:text-primary-700 focus:ring-4 focus:ring-primary-200': item.button.variant === 'Secondary',
              }"
            />
          </div>

          <div class="my-2 border-t border-gray-200" />

          <PrismicRichText :field="item.benefits" :components="{ list: ProgramUl, listItem: ProgramLi }" class="flex-grow" />
        </div>
      </UCarousel>
    </div>
  </template>
</template>

<style scoped>
/* Saran: Untuk mempercantik daftar benefit, Anda bisa menambahkan ikon
  pada komponen ProgramLi Anda. Contoh:
*/

/* Di dalam file komponen ProgramLi.vue atau di style global */
.benefit-list-item::before {
  content: "✓"; /* Atau gunakan ikon SVG */
  color: #00a97d; /* Warna hijau sebagai contoh */
  margin-right: 0.75rem;
  font-weight: bold;
}
</style>

<script lang="ts" setup>
import { ProgramUl, ProgramLi } from "#components";
const { title } = defineProps({
  title: String,
});
const selectedTitle = inject("selectedTitle");

const prismic = usePrismic();

const { data: page } = await useAsyncData(
  `[programs-uid-${title}]`,

  () => prismic.client.getByUID("programs", title as string)
);
</script>
