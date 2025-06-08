<template>
  <div>
    <Divisi title="Business" :items="items" />
    <!-- BEGIN: Changed title from IT to Business -->
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    label: "Marketing",
    description: "Learn how to promote products and services effectively.",
    icon: "i-lucide-bullhorn",
  },
  {
    label: "Finance",
    description: "Explore financial management and investment strategies.",
    icon: "i-lucide-dollar-sign",
  },
  {
    label: "Entrepreneurship",
    description: "Understand how to start and manage a business.",
    icon: "i-lucide-briefcase",
  },
  {
    label: "Operations Management",
    description: "Learn about optimizing business processes.",
    icon: "i-lucide-cogs",
  },
] satisfies TabsItem[];
</script>

<style></style>
