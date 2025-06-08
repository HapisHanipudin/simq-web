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
              <p>📍 Alamat: Jl. Pendidikan No. 45, Ciawi, Bogor, Jawa Barat</p>
              <p>📞 WhatsApp: <a href="https://wa.me/6281234567890" class="underline hover:text-blue-300">+62 812-3456-7890</a></p>
              <p>📧 Email: <a href="mailto:info@qbs.sch.id" class="underline hover:text-blue-300">info@qbs.sch.id</a></p>
              <p>🌐 Instagram: <a href="https://instagram.com/qbs_school" class="underline hover:text-blue-300">@qbs_school</a></p>
            </div>
          </div>

          <!-- Google Maps -->
          <div>
            <iframe
              class="w-full h-full min-h-[370px] rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.92468553369!2d106.69447597588068!3d-6.65625686507254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69d1027ef9ea39%3A0x8bc33d5bc117c098!2sQuadrant%20Boarding%20School%20(QBS)!5e0!3m2!1sid!2sid!4v1749347551307!5m2!1sid!2sid"
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
// Pastikan <ContactForm /> sudah terdaftar dan tersedia di komponen
</script>

<style scoped>
/* Tambahkan styling kustom jika diperlukan */
</style>
