<template>
  <UTabs :items="items" size="xl">
    <template #tahfizh> <DivisiTahfizh /> </template>
    <template #bisnis>
      <DivisiBisnis />
    </template>
  </UTabs>
</template>

<script lang="ts" setup>
const items = [
  { label: "Tahfizh", slot: "tahfizh" as const },
  { label: "Bisnis", slot: "bisnis" as const },
];
</script>

<style></style>
