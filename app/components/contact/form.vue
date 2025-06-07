<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
    <UForm @submit="submitForm" class="space-y-4">
      <UFormField label="Nama Lengkap" name="name" required>
        <UInput v-model="state.name" placeholder="Masukkan nama Anda" />
      </UFormField>

      <UFormField label="Email" name="email" required>
        <UInput v-model="state.email" type="email" placeholder="nama@email.com" />
      </UFormField>

      <UFormField label="No. Telepon" name="phone" required>
        <UInput v-model="state.phone" type="tel" placeholder="081234567890" />
      </UFormField>

      <UFormField label="Pesan" name="message" required>
        <UTextarea v-model="state.message" placeholder="Tulis pesan Anda di sini..." />
      </UFormField>

      <UButton type="submit" color="blue" block :loading="loading"> Kirim Pesan </UButton>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const state = reactive({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const loading = ref(false);

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone: string) => /^\d{10,15}$/.test(phone);

const submitForm = async () => {
  if (!validateEmail(state.email)) {
    return alert("Email tidak valid.");
  }
  if (!validatePhone(state.phone)) {
    return alert("Nomor telepon tidak valid.");
  }

  loading.value = true;

  try {
    const response = await fetch("https://formspree.io/f/mqabenpg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state),
    });

    if (!response.ok) throw new Error("Gagal mengirim pesan.");

    alert("Pesan berhasil dikirim. Terima kasih!");
    Object.assign(state, { name: "", email: "", phone: "", message: "" });
  } catch (err: any) {
    alert("Terjadi kesalahan: " + err.message);
  } finally {
    loading.value = false;
  }
};
</script>
