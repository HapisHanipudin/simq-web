<script setup lang="ts">
import { JadwalTable, JadwalTbody, JadwalTablehead, JadwalTabledata } from "#components";
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TimetableListSlice>(["slice", "index", "slices", "context"]));
</script>

<template>
  <section class="flex items-center mt-16" :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <UContainer class="p-4">
      <h1 class="text-2xl font-bold mb-4"><PrismicRichText :field="slice.primary.title" /></h1>
      <div class="grid grid-cols-1 md:grid-cols-7 gap-5">
        <div class="md:col-span-3 flex items-center">
          <PrismicImage :field="slice.primary.image" class="w-full h-auto rounded-lg shadow-md" />
          <!-- <p class="mt-2 text-sm text-gray-600"><PrismicRichText :field="slice.primary.description" /></p> -->
        </div>
        <div class="md:col-span-4 flex flex-col justify-center">
          <ul class="space-y-2">
            <li v-for="item in slice.primary.periods" class="bg-white shadow-md rounded-lg p-4 space-y-2">
              <h2 class="font-semibold text-xl">{{ item.period_name }}</h2>
              <div class="prismic-table">
                <PrismicTable :components="{ table: JadwalTable, tbody: JadwalTbody, th: JadwalTablehead, td: JadwalTabledata }" :field="item.schedule" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>
  </section>
</template>
