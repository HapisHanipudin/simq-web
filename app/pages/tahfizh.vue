<template>
  <div>
    <Divisi title="Tahfizh" :items="items" />
    <!-- BEGIN: Changed title from IT to Tahfizh -->
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    label: "Hifz Al-Quran",
    description: "Learn the techniques to memorize the Quran effectively.",
    icon: "i-lucide-book",
  },
  {
    label: "Tajwid",
    description: "Explore the rules of Quranic recitation.",
    icon: "i-lucide-volume-2",
  },
  {
    label: "Qira'at",
    description: "Understand the different styles of Quranic recitation.",
    icon: "i-lucide-mic",
  },
  {
    label: "Memorization Techniques",
    description: "Learn various methods to enhance memorization skills.",
    icon: "i-lucide-brain",
  },
] satisfies TabsItem[];
</script>

<style></style>
