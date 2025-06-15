<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = await useAsyncData("[jadwal_santri]", () => prismic.client.getSingle("jadwal_santri"));
</script>

<template>
  <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components="components" />
</template>
