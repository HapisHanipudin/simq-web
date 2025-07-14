<template>
  <template v-show="title === selectedTitle">
    <div :style="{ '--sub-program-count': `repeat(${page?.data.sub_program.length}, minmax(0, 1fr))` }" class="justify-center flex flex-wrap gap-2">
      <div v-for="item in page?.data.sub_program" class="shadow-lg rounded-2xl flex flex-col gap-4 px-6 py-4 w-[520px] border-[0.1px] border-gray-200">
        <h3 class="text-xl text-primary-600 font-bold">{{ item.sub_title }}</h3>
        <span class="text-3xl">{{ item.pricing }} </span>
        <div>
          <PrismicLink
            :class="{
              'bg-primary-600 text-white': item.button.variant === 'Primary',
              'border-[0.2px] border-primary-600 text-primary-600': item.button.variant === 'Secondary',
            }"
            class="px-4 rounded-full py-2"
            :field="item.button"
          />
        </div>
        <hr class="border-gray-400" />
        <PrismicRichText :components="{ list: ProgramUl, listItem: ProgramLi }" :field="item.benefits" />
      </div>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { ProgramUl, ProgramLi } from "#components";
import { ListFormat } from "typescript";
const { title } = defineProps({
  title: String,
});
const selectedTitle = inject("selectedTitle");

const prismic = usePrismic();

const route = useRoute();

const { data: page } = await useAsyncData(
  `[programs-uid-${title}]`,

  () => prismic.client.getByUID("programs", title as string)
);
</script>
