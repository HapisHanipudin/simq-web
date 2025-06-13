<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.FooterSlice>(["slice", "index", "slices", "context"]));
</script>

<template>
  <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <Footer :copyright="slice.primary.copyright" :social_links="slice.primary.socmed_list" :icon="slice.primary.icon" :description="slice.primary.description" />
  </section>
</template>
