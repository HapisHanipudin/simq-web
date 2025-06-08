<template>
  <div>
    <Divisi title="Pertanian" :items="items" />
    <!-- BEGIN: Changed title from IT to Pertanian -->
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    label: "Pertanian Berkelanjutan",
    description: "Pelajari cara menerapkan praktik pertanian yang ramah lingkungan.",
    icon: "i-lucide-leaf",
  },
  {
    label: "Teknologi Pertanian",
    description: "Jelajahi inovasi teknologi dalam sektor pertanian.",
    icon: "i-lucide-computer",
  },
  {
    label: "Manajemen Sumber Daya Air",
    description: "Pahami pentingnya pengelolaan air dalam pertanian.",
    icon: "i-lucide-water",
  },
  {
    label: "Pemasaran Hasil Pertanian",
    description: "Pelajari cara memasarkan produk pertanian secara efektif.",
    icon: "i-lucide-shopping-cart",
  },
] satisfies TabsItem[];
</script>

<style></style>
