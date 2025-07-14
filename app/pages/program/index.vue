<template>
  <div class="w-full space-y-5 bg-primary-700 min-h-screen">
    <h1 class="text-4xl mt-10 text-center text-white font-extrabold">Program Unggulan SIMQ</h1>
    <ProgramWrapper :page="page" />
  </div>
</template>

<script setup lang="ts">
const prismic = usePrismic();

const { data: page } = await useAsyncData("program-divisi", () => prismic.client.getByType("programs"));
</script>
