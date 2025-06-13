<script setup lang="ts">
import type { Content } from "@prismicio/client";
import type Kontak from "~/pages/kontak.vue";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.KontakSlice>(["slice", "index", "slices", "context"]));
</script>

<template>
  <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <Contact :alamat="slice.primary.alamat" :gmaps="slice.primary.gmaps" :contact_list="slice.primary.contact_list" />
  </section>
</template>
