<template>
  <footer class="bg-primary-100 text-center lg:text-start py-5" id="footer">
    <UContainer class="p-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 max-lg:px-16">
        <div class="lg:col-span-6 md:col-span-12 mb-4 md:mb-0">
          <!-- <img class="mb-5" src="https://picsum.photos/70" alt="" /> -->
          <PrismicImage class="mb-5 w-20 h-auto" :field="icon" />

          <div class="flex flex-col gap-4">
            <p class="text-left text-primary-800 text-[20px] font-medium leading-[21px]">{{ description }}</p>
            <p class="text-left text-primary-800 text-[15px] font-medium leading-[17px]">© {{ copyright }}</p>
          </div>
        </div>

        <div class="lg:col-span-6 md:col-span-12 mb-4 md:mb-0 contact flex flex-col justify-center">
          <h5 class="text-primary-800 text-[20px] font-bold leading-[21px] mb-4">Kontak kami</h5>
          <div class="grid grid-cols-1 md:grid-cols-10 gap-4">
            <!-- <a href="#" class="md:col-span-5 me-2 text-start flex items-center gap-2">
              <UIcon name="fa-whatsapp" class="text-primary-800 text-[20px]"></UIcon><span class="text-primary-800 text-[20px] font-medium leading-[21px]"> 08123456789</span>
            </a> -->
            <span v-for="social in social_links" class="md:col-span-5 me-2 text-start flex items-center gap-2">
              <UIcon :name="social.icon" class="text-primary-800 text-[20px]"></UIcon><PrismicLink class="text-primary-800 text-[20px] font-medium leading-[21px]" :field="social.link" />
            </span>
          </div>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </UContainer>
    <!-- Grid container -->
  </footer>
</template>

<script lang="ts" setup>
const { description, icon, social_links, copyright } = defineProps<{
  description: any;
  icon: any;
  social_links: {
    icon: any;
    link: any;
  }[];
  copyright: any;
}>();
</script>

<style>
*::-webkit-scrollbar {
  display: none;
}

body {
  overflow-x: hidden;
}
</style>
