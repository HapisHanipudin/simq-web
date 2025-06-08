<template>
  <UCard class="shadow-black/30 shadow-[0_0_25px]">
    <template #header>
      <h2>Kirim Pesan Untuk Kami</h2>
    </template>
    <UForm class="space-y-4" :validate="validate" :state="state" @submit="submitForm">
      <UFormField label="Nama Lengkap" name="name">
        <UInput class="w-full" v-model="state.name" placeholder="Masukkan nama Anda" />
      </UFormField>

      <UFormField label="Email" name="email">
        <UInput class="w-full" v-model="state.email" type="email" placeholder="nama@email.com" />
      </UFormField>

      <UFormField label="No. Whatsapp" name="phone">
        <UInput class="w-full" v-model="state.phone" type="tel" placeholder="081234567890" />
      </UFormField>

      <UFormField label="Pesan" name="message">
        <UTextarea class="w-full" v-model="state.message" placeholder="Tulis pesan Anda di sini..." />
      </UFormField>

      <UButton type="submit" color="primary" block :loading="loading"> Kirim Pesan </UButton>
    </UForm>
  </UCard>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormError, FormSubmitEvent } from "@nuxt/ui";

const state = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const loading = ref(false);

const validate = (state: any): FormError[] => {
  const errors: FormError[] = [];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10,15}$/; // Contoh pola untuk no telepon

  if (!state.name) errors.push({ name: "name", message: "Nama Lengkap diperlukan." });
  if (!state.email || !emailPattern.test(state.email)) errors.push({ name: "email", message: "Email tidak valid." });
  if (!state.phone || !phonePattern.test(state.phone)) errors.push({ name: "phone", message: "No. Telepon tidak valid." });
  if (!state.message) errors.push({ name: "message", message: "Pesan diperlukan." });

  return errors;
};

const submitForm = async (event: FormSubmitEvent<typeof state>) => {
  loading.value = true;

  const noWa = state.phone.startsWith("08") ? state.phone.replace("0", "62") : state.phone.startsWith("8") ? state.phone.replace("8", "628") : state.phone.startsWith("628") ? state.phone : state.phone; // Mengatur noWa menjadi string kosong jika tidak memenuhi kondisi
  const whatsapp = "https://wa.me/" + noWa;

  try {
    const response = await fetch("https://formspree.io/f/mqabenpg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...state, whatsapp }), // Menambahkan property whatsapp
    });
    alert("Pesan berhasil dikirim. Terima kasih!");
    Object.assign(state, { name: "", email: "", phone: "", message: "" });
  } catch (err: any) {
    alert("Terjadi kesalahan: " + err.message);
  } finally {
    loading.value = false;
  }
};
</script>
