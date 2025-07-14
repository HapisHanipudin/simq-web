<template>
  <div class="flex justify-center w-full gap-6">
    <button v-for="pg in page.results" @click="selectTab(pg.uid)" :class="pg.uid == selectedTitle ? 'bg-white text-primary-800' : 'text-white'" class="px-4 py-2 rounded-full border border-white">{{ pg.data.title }}</button>
  </div>
  <div class="bg-white w-full rounded-t-4xl px-8 lg:px-32 py-12 min-h-[80vh]">
    <ProgramTab v-for="pg in page.results" :title="pg.uid" />
  </div>
</template>

<script lang="ts" setup>
const { page } = defineProps<{
  page: any;
}>();

const selectTab = (title: string) => {
  selectedTitle.value = title;
};

const tabTitles = computed(() => (page.results || []).map((p: any) => p.uid));
const selectedTitle = ref(page.results[0].uid); // Ensure it has a default value
provide("selectedTitle", selectedTitle);
</script>

<style></style>
