<script setup lang="ts">
definePageMeta({
  scrollToTop: false,
});

useHead({
  title: "Mercado Livre - Busca",
  bodyAttrs: {
    class: "bg-[#ebebeb] text-[#333]",
  },
});

const scope = useShop("mlivre");
</script>

<template>
  <div>
    <!-- <pre>{{ scope }}</pre> -->
    <mlivre-section-shop />
    <mlivre-section-product />
  </div>
</template>
