<template>
  <UContainer :class="{ 'min-h-screen': isProgramRoute }" class="py-4 space-y-4">
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <UTabs size="xl" :ui="{ root: 'items-start ', trigger: 'min-w-60', content: 'mx-10' }" orientation="vertical" color="primary" :items="items" class="w-full max-md:hidden">
      <template #content="{ item }">
        <PrismicRichText :field="item.tab_content" />
      </template>
    </UTabs>
    <UTabs size="xl" :ui="{ root: 'items-start' }" orientation="horizontal" color="primary" :items="items" class="w-full md:hidden">
      <template #content="{ item }">
        <PrismicRichText :field="item.tab_content" />
      </template>
    </UTabs>
  </UContainer>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

const {
  title = "Default Title",
  items = [
    { label: "Tab 1", description: "Description for Tab 1" },
    { label: "Tab 2", description: "Description for Tab 2", content: {} },
  ],
} = defineProps<{
  title: any; // BEGIN: Define title prop
  items: any[]; // NEW: Define items prop
}>();

const route = useRoute();
const isProgramRoute = route.path.startsWith("/program"); // BEGIN: Check if route starts with "/program"
</script>

<style></style>
