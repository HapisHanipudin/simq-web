<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-primary-800"><PrismicRichText :field="title" /></h1>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto"><PrismicRichText :field="description" /></p>
        <UButton size="xl" class="mt-8"> <PrismicLink :field="cta" /> </UButton>
        <!-- <img src="https://www.bunayahebat.com/assets/islamkid.png" alt="Ilustrasi" class="mx-auto mt-12 max-w-md" /> -->
        <PrismicImage class="mx-auto mt-12 max-w-md" :field="image" />
      </div>
    </section>

    <!-- Prosedur Pendaftaran -->
    <section class="bg-primary-700 text-white py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Prosedur Pendaftaran</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div v-for="(step, index) in steps">
            <div class="text-4xl font-bold"><PrismicRichText :field="step.step_title" /></div>
            <p class="mt-2"><PrismicRichText :field="step.step_description" /></p>
          </div>
        </div>
      </div>
    </section>

    <!-- Syarat dan Ketentuan -->
    <section class="bg-gray-100 py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Ketentuan & Persyaratan PPDB</h2>
        <div v-for="item in requirements" class="bg-white p-6 rounded-2xl shadow-md mb-12">
          <h3 class="text-2xl font-semibold text-primary-800 mb-4">{{ item.requirement_title }}</h3>
          <p class="text-gray-700 whitespace-pre-line">
            <PrismicRichText :field="item.requirement_details" />
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const { title, description, steps, image, cta } = defineProps<{
  title: any;
  description: any;
  steps: {
    step_title: any;
    step_description: any;
  }[];
  image: any;
  cta: any;
  requirements: {
    requirement_title: any;
    requirement_details: any;
  }[];
}>();
</script>
