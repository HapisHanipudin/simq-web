<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HeroWithCtaSlice>(["slice", "index", "slices", "context"]));
</script>

<template>
  <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <Jumbotron :title="slice.primary.title" :description="slice.primary.description" :image="slice.primary.background_image" :cta="slice.primary.cta"></Jumbotron>
  </section>
</template>
