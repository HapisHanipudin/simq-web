<template>
  <div>
    <UContainer>
      <div class="flex items-end h-[20vh] pb-8">
        <h1 class="text-4xl font-bold">Kontak & Informasi</h1>
      </div>
    </UContainer>

    <div class="bg-primary w-full py-12">
      <UContainer>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          <!-- Contact Form -->
          <div class="space-y-6">
            <ContactForm />
            <!-- Contact Info -->
            <div class="text-white space-y-3">
              <h2 class="text-2xl font-semibold">Informasi Kontak</h2>
              <p class="flex items-center gap-2 capitalize"><UIcon name="mdi:map-marker" class="w-6 h-6" color="currentColor" /> {{ alamat }}</p>
              <!-- <p class="flex items-center gap-2"><UIcon name="mdi:whatsapp" class="w-6 h-6" color="currentColor" /> WhatsApp: <a href="https://wa.me/6281234567890" class="underline hover:text-blue-300">+62 812-3456-7890</a></p> -->
              <p v-for="contact in contact_list" class="flex items-center gap-2 capitalize"><UIcon :name="contact.icon" class="w-6 h-6" color="currentColor" /> {{ contact.platform }}: <PrismicLink :field="contact.link" /></p>
            </div>
          </div>

          <!-- Google Maps -->
          <div>
            <iframe
              class="w-full h-full min-h-[370px] rounded-lg shadow-lg"
              :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d${gmaps.longitude}!3d${gmaps.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ5JzQwLjAiTiAxMDZ8MjA0NDAwMDAw!5e0!3m2!1sen!2sid!4v1234567890`"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </UContainer>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { alamat, gmaps, contact_list } = defineProps<{
  alamat: any;
  gmaps: any;
  contact_list: Array<{
    icon: any;
    platform: any;
    link: any;
  }>;
}>();
</script>

<style scoped>
/* Tambahkan styling kustom jika diperlukan */
</style>
