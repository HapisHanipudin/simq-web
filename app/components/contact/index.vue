<template>
  <div class="min-h-screen">
    <UContainer>
      <div class="flex items-end py-8">
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
            <div class="text-white">
              <h2 class="text-2xl font-semibold">Informasi Kontak</h2>
              <table class="min-w-full divide-y">
                <tbody class="divide-y">
                  <tr>
                    <td class="px-2 py-3">
                      <div class="flex items-center h-full">
                        <UIcon name="mdi:map-marker" class="w-6 h-6" color="currentColor" />
                      </div>
                    </td>
                    <td class="px-2 py-3">Alamat</td>
                    <td class="px-2 py-3">{{ alamat }}</td>
                  </tr>
                  <tr v-for="contact in contact_list" :key="contact.platform">
                    <td class="px-2 py-3">
                      <div class="flex items-center h-full">
                        <UIcon :name="contact.icon" class="w-6 h-6" color="currentColor" />
                      </div>
                    </td>
                    <td class="px-2 py-3">{{ contact.platform }}</td>
                    <td class="px-2 py-3"><PrismicLink :field="contact.link" /></td>
                  </tr>
                </tbody>
              </table>
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
