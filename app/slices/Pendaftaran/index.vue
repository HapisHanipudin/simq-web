<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.AdmissionsFlowSlice>(["slice", "index", "slices", "context"]));
</script>

<template>
  <section :data-slice-type="slice.slice_type" :data-slice-variation="slice.variation">
    <Pendaftaran :title="slice.primary.main_title" :description="slice.primary.main_description" :steps="slice.primary.steps" :image="slice.primary.visual_image" :cta="slice.primary.cta_button" :requirements="slice.primary.requirements" />
  </section>
</template>
