<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const route = useRoute();
const { data: page } = await useAsyncData(`[program_divisi-uid-${"tahfizh"}]`, () => prismic.client.getByUID("program_divisi", "tahfizh" as string));
</script>

<template>
  <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components="components" />
</template>
