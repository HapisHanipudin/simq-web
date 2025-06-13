<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TimetableListSlice>(["slice", "index", "slices", "context"]));
</script>

<template>
  <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <UContainer class="p-4">
      <h1 class="text-2xl font-bold mb-4"><PrismicRichText :field="slice.primary.title" /></h1>
      <ul class="space-y-2">
        <li v-for="item in slice.primary.periods" class="bg-white shadow-md rounded-lg p-4">
          <h2 class="font-semibold">{{ item.period_name }}</h2>
          <div><PrismicRichText :field="item.activities" /></div>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
