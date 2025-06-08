<template>
  <div>
    <Divisi title="IT" :items="items" />
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    label: "Web Development",
    description: "Learn how to build websites and web applications.",
    icon: "i-lucide-code",
  },
  {
    label: "Data Science",
    description:
      "Explore data analysis and machine learning techniques.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos sapiente voluptates, cum illo cupiditate saepe molestias labore atque quisquam veniam, doloribus praesentium quaerat aliquam explicabo est ab id qui nostrum perspiciatis? Doloremque eaque omnis nihil delectus est reiciendis minima.    Explore data analysis and machine learning techniques.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos sapiente voluptates, cum illo cupiditate saepe molestias labore atque quisquam veniam, doloribus praesentium quaerat aliquam explicabo est ab id qui nostrum perspiciatis? Doloremque eaque omnis nihil delectus est reiciendis minima.    Explore data analysis and machine learning techniques.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos sapiente voluptates, cum illo cupiditate saepe molestias labore atque quisquam veniam, doloribus praesentium quaerat aliquam explicabo est ab id qui nostrum perspiciatis? Doloremque eaque omnis nihil delectus est reiciendis minima.    Explore data analysis and machine learning techniques.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos sapiente voluptates, cum illo cupiditate saepe molestias labore atque quisquam veniam, doloribus praesentium quaerat aliquam explicabo est ab id qui nostrum perspiciatis? Doloremque eaque omnis nihil delectus est reiciendis minima.    ",
    icon: "i-lucide-database",
  },
  {
    label: "Cybersecurity",
    description: "Understand the principles of protecting systems and networks.",
    icon: "i-lucide-shield",
  },
  {
    label: "Mobile Development",
    description: "Create applications for mobile devices.",
    icon: "i-lucide-smartphone",
  },
] satisfies TabsItem[];
</script>

<style></style>
