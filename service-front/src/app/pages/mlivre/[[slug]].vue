<script setup lang="ts">
// Prevent scroll to top when navigating to child routes (product modal)
definePageMeta({
  scrollToTop: false,
});

useHead({
  title: "Mercado Livre - Busca",
  bodyAttrs: {
    class: "bg-[#ebebeb] text-[#333]",
  },
});
</script>

<template>
  <div>
    <mlivre-section-shop />
    <mlivre-section-product />
  </div>
</template>
