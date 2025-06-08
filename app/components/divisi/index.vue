<template>
  <UContainer class="mt-20 py-4 min-h-screen space-y-4">
    <h1 class="text-2xl font-bold">Program Divisi {{ title }}</h1>
    <UTabs :ui="{ root: 'items-start' }" orientation="vertical" color="primary" :items="items" class="w-full">
      <template #content="{ item }">
        <p>This is the {{ item.label }} tab.</p>
        <p>{{ item.description }}</p>
      </template>
    </UTabs>
  </UContainer>
</template>

<script lang="ts" setup>
import type { TabsItem } from "@nuxt/ui";

const {
  title = "Default Title",
  items = [
    { label: "Tab 1", description: "Description for Tab 1" },
    { label: "Tab 2", description: "Description for Tab 2" },
  ],
} = defineProps<{
  title: string; // BEGIN: Define title prop
  items: TabsItem[]; // NEW: Define items prop
}>();
</script>

<style></style>
