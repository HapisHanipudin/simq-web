<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = await useAsyncData("[pendaftaran]", () => prismic.client.getSingle("pendaftaran"));
</script>

<template>
  <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components="components" />
</template>
