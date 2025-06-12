<template>
  <div id="#tentang">
    <div class="py-20 px-5 lg:px-10 min-h-screen flex items-center justify-center text-white bg-emerald-700">
      <div class="grid container grid-cols-1 lg:grid-cols-3">
        <div class="h-full">
          <PrismicImage class="h-full object-cover rounded-bl-[3.5rem] rounded-tr-[3.5rem] rounded-tl-xl rounded-br-xl" :field="image" />
          <!-- <img class="h-full object-cover rounded-bl-[3.5rem] rounded-tr-[3.5rem] rounded-tl-xl rounded-br-xl" src="https://picsum.photos/700" alt="" /> -->
        </div>
        <div class="col-span-2 lg:ml-20 py-5">
          <div>
            <h2 class="text-4xl lg:text-5xl uppercase font-semibold">{{ title }}</h2>
            <div class="duration-300 text-slate-300 w-36 lg:w-48 h-0.5 mt-3 mb-4 bg-primary"></div>
            <PrismicRichText :field="description" />
            <!-- <p class="text-sm lg:text-lg mb-5 lg:mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod consequuntur, delectus minima unde ratione vel. Facere consequatur minus numquam quia hic possimus vel rem eligendi.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius hic nesciunt laborum, repellat placeat dolores minus tempora nostrum similique aut sed ipsa. Reiciendis cum, nihil sapiente iusto, fugiat, illum accusantium eum
              perspiciatis fugit alias dolorum?
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, minima sed consectetur et nemo ut in velit numquam rerum laborum?
            </p> -->
          </div>
          <!-- <div class="w-auto lg:w-auto flex-wrap flex gap-5">
            <a class="bg-primary p-3 gap-2 rounded-full flex text-sm lg:text-lg font-semibold capitalize" href="https://www.youtube.com/@art-qtionofficial2273"><YoutubeIcon class="w-6 h-auto" /> our youtube</a>
            <a class="bg-primary p-3 gap-2 rounded-full flex text-sm lg:text-lg font-semibold capitalize" href="https://www.instagram.com/artqtion.official"><InstagramIcon class="w-6 h-auto" /> our instagram</a>
            <a class="bg-primary p-3 gap-2 rounded-full flex text-sm lg:text-lg font-semibold capitalize" href="https://www.tiktok.com/@artqtion.official"><TiktokIcon class="w-6 h-auto" /> our TikTok</a>
          </div> -->
          <!-- <div class="flex mt-8">
            <div class="h-12 lg:h-28 mx-3 lg:mx-5">
              <img class="h-full object-cover" src="../assets/img/logo-os.png" alt="" />
            </div>
            <div class="duration-300 text-slate-300 w-px mx-5 bg-primary"></div>
            <div class="h-12 lg:h-28 mx-3 lg:mx-5">
              <img class="h-full object-cover" src="../assets/img/logo-si.png" alt="" />
            </div>
            <div class="duration-300 text-slate-300 w-px mx-5 bg-primary"></div>
            <div class="h-12 lg:h-28 mx-3 lg:mx-5 scale-150">
              <img class="h-full object-cover" src="../assets/img/ArtqLogoo.png" alt="" />
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { title, description, image } = defineProps<{
  title: any;
  description: any;
  image: any;
}>();
</script>

<style></style>
