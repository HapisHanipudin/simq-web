<script setup lang="ts">
import type { NavigationMenuItem, AccordionItem } from "@nuxt/ui";
import { ref, watch } from "vue";

const { isAccordion, icon } = defineProps<{
  isAccordion: any;
  icon: any;
}>();

const navItems = ref<NavigationMenuItem[]>([
  {
    label: "Beranda",
    icon: "i-lucide-home",
    to: "/",
    children: [
      {
        label: "Visi, Misi",
        icon: "i-lucide-target",
        to: "/visi-misi",
        description: "Menjelaskan arah dan tujuan utama SIMQ.",
      },
      {
        label: "Tentang SIMQ",
        icon: "i-lucide-info",
        to: "/about",
        description: "Profil singkat tentang SIMQ dan sejarahnya.",
      },
    ],
  },
  {
    label: "Divisi",
    icon: "i-lucide-layers",
    children: [
      {
        label: "Tahfizh",
        icon: "i-lucide-book",
        to: "/program/tahfizh",
        description: "Divisi penguatan hafalan Qur'an.",
      },
      // {
      //   label: "IT",
      //   icon: "i-lucide-code",
      //   to: "/it",
      //   description: "Divisi teknologi dan pengembangan perangkat lunak.",
      // },
      // {
      //   label: "Pertanian",
      //   icon: "i-lucide-leaf",
      //   to: "/pertanian",
      //   description: "Divisi pertanian modern dan keberlanjutan.",
      // },
      {
        label: "Bisnis",
        icon: "i-lucide-briefcase",
        to: "/program/bisnis",
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
  // {
  //   label: "Berita",
  //   icon: "i-lucide-newspaper",
  //   to: "/berita",
  //   description: "Informasi terbaru dan pengumuman dari SIMQ.",
  // },
  {
    label: "Kontak",
    icon: "i-lucide-phone",
    to: "/kontak",
    description: "Hubungi kami untuk informasi lebih lanjut.",
  },
]);

const accordionItems = ref<AccordionItem[]>([
  {
    label: "Website SIMQ",
    slot: "nav" as const,
  },
]);

const open = ref(true);

watch(
  () => isAccordion,
  (newVal) => {
    open.value = newVal;
  }
);

const toggleAccordion = () => {
  open.value = !open.value;
};
</script>

<template>
  <div class="fixed top-0 left-0 w-full px-8 py-4 bg-white/70 backdrop-blur-lg flex flex-col gap-4">
    <div class="w-full flex items-center justify-between">
      <PrismicImage class="w-8 h-auto" :field="icon" />

      <!-- <span class="truncate">Website SIMQ</span> -->
      <UNavigationMenu class="max-xl:hidden" orientation="horizontal" :items="navItems" />
      <UButton class="xl:hidden" variant="ghost" icon="i-lucide-menu" @click="toggleAccordion" />
    </div>
    <div :class="{ hidden: open }" class="xl:hidden">
      <UNavigationMenu class="" orientation="vertical" :items="navItems" />
    </div>
  </div>
</template>
