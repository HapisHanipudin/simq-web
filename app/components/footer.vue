<template>
  <footer class="bg-primary-100 text-center lg:text-start py-5" id="footer">
    <UContainer class="p-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 max-lg:px-16">
        <div class="lg:col-span-6 md:col-span-12 mb-4 md:mb-0">
          <img class="mb-5" src="../assets/logo.png" alt="" />

          <div class="flex flex-col gap-4">
            <p class="text-left text-primary-800 text-[20px] font-medium leading-[21px]">SIMQ adalah Sebuah lembaga pendidikan yg sangat peduli dengan pembentukan karakter sesuai tuntunan Quran dan Sunnah.</p>
            <p class="text-left text-primary-800 text-[15px] font-medium leading-[17px]">© Copyright Yayasan SIMQ</p>
          </div>
        </div>

        <div class="lg:col-span-6 md:col-span-12 mb-4 md:mb-0 contact">
          <h5 class="text-primary-800 text-[20px] font-bold leading-[21px] mb-4">Kontak kami</h5>
          <div class="grid grid-cols-1 md:grid-cols-10 gap-4">
            <a href="#" class="md:col-span-5 me-2 text-start flex items-center gap-2">
              <UIcon name="fa-whatsapp" class="text-primary-800 text-[20px]"></UIcon><span class="text-primary-800 text-[20px] font-medium leading-[21px]"> 08123456789</span>
            </a>
            <a href="#" class="md:col-span-5 me-2 text-start flex items-center gap-2"
              ><UIcon name="fa-instagram" class="text-primary-800 text-[20px]"></UIcon> <span class="text-primary-800 text-[20px] font-medium leading-[21px]">SIMQ</span></a
            >
            <a href="#" class="md:col-span-5 me-2 text-start flex items-center gap-2"
              ><UIcon name="fa-instagram" class="text-primary-800 text-[20px]"></UIcon> <span class="text-primary-800 text-[20px] font-medium leading-[21px]">SIMQ</span></a
            >
            <a href="#" class="md:col-span-5 me-2 text-start flex items-center gap-2"
              ><UIcon name="fa-youtube" class="text-primary-800 text-[20px]"></UIcon> <span class="text-primary-800 text-[20px] font-medium leading-[21px]">SIMQ</span></a
            >
          </div>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </UContainer>
    <!-- Grid container -->
  </footer>
</template>

<script lang="ts" setup></script>

<style>
*::-webkit-scrollbar {
  display: none;
}

body {
  overflow-x: hidden;
}
</style>
