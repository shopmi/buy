<script setup>
definePageMeta({
  scrollToTop: false,
});
</script>

<template>
  <nuxt-layout name="abissal">
    <template #default>
      <abissal-section-hero />
      <abissal-section-shop />
      <abissal-section-product />
      <abissal-section-cart />
    </template>
  </nuxt-layout>
</template>
