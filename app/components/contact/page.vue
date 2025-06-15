<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = await useAsyncData("[kontakk]", () => prismic.client.getSingle("kontakk"));
</script>

<template>
  <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components="components" />
</template>
