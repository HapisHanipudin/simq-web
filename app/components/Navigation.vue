<script setup lang="ts">
import type { NavigationMenuItem, AccordionItem } from "@nuxt/ui";

const navItems = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Website SIMQ",
      to: "/",
    },
  ],
  [
    {
      label: "Beranda",
      icon: "i-lucide-home",
      children: [
        {
          label: "Visi, Misi, Tujuan",
          icon: "i-lucide-target",
          to: "/beranda/visi-misi-tujuan",
          description: "Menjelaskan arah dan tujuan utama SIMQ.",
        },
        {
          label: "Tentang SIMQ",
          icon: "i-lucide-info",
          to: "/beranda/tentang-simq",
          description: "Profil singkat tentang SIMQ dan sejarahnya.",
        },
      ],
    },
    {
      label: "Divisi",
      icon: "i-lucide-layers",
      children: [
        {
          label: "Tahfidh",
          icon: "i-lucide-book",
          to: "/divisi/tahfidh",
          description: "Divisi penguatan hafalan Qur'an.",
        },
        {
          label: "IT",
          icon: "i-lucide-code",
          to: "/divisi/it",
          description: "Divisi teknologi dan pengembangan perangkat lunak.",
        },
        {
          label: "Pertanian",
          icon: "i-lucide-leaf",
          to: "/divisi/pertanian",
          description: "Divisi pertanian modern dan keberlanjutan.",
        },
        {
          label: "Bisnis",
          icon: "i-lucide-briefcase",
          to: "/divisi/bisnis",
          description: "Divisi wirausaha dan pengembangan bisnis.",
        },
      ],
    },
    {
      label: "Jadwal Santri",
      icon: "i-lucide-calendar-days",
      to: "/jadwal-santri",
      description: "Lihat jadwal kegiatan harian santri.",
    },
    {
      label: "Pendaftaran",
      icon: "i-lucide-pencil-line",
      to: "/pendaftaran",
      description: "Formulir dan informasi untuk pendaftaran santri baru.",
    },
    {
      label: "Berita",
      icon: "i-lucide-newspaper",
      to: "/berita",
      description: "Informasi terbaru dan pengumuman dari SIMQ.",
    },
    {
      label: "Kontak",
      icon: "i-lucide-phone",
      to: "/kontak",
      description: "Hubungi kami untuk informasi lebih lanjut.",
    },
  ],
]);

const accordionItems = ref<AccordionItem[]>([
  {
    label: "Website SIMQ",
    slot: "nav" as const,
  },
]);
</script>

<template>
  <div class="sticky top-0 left-0 w-full px-12 py-4 border border-black">
    <UAccordion class="xl:hidden" :items="accordionItems">
      <template #nav="{ item }">
        <UNavigationMenu orientation="vertical" :items="navItems" class="w-full" />
      </template>
    </UAccordion>
    <UNavigationMenu class="max-xl:hidden w-full" orientation="horizontal" :items="navItems" />
  </div>
</template>
