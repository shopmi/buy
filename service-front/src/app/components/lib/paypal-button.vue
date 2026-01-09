<template>
  <div :id="lib.id"></div>
</template>

<script setup>
const YOUR_CLIENT_ID =
  "AQdALwsmBN-4ee1qo38i5oW1uBmdH_ON-IMArBOc2Djbm-IuXT3xPuI_kjHjbpaTqLGjVumyeU-NJX4G";

const props = defineProps({
  options: { type: Object, default: () => ({}) },
});

const emit = defineEmits(["init"]);

const lib = reactive({
  id: "lib-paypal-button-" + Math.round(Math.random() * 9999),
  async init() {
    const dependenciesReady = (all) => {
      return new Promise((resolve) => {
        const check = () => {
          all.every((name) => !!window[name])
            ? resolve(true)
            : requestAnimationFrame(check);
        };
        check();
      });
    };

    await dependenciesReady(["paypal"]);
    emit("init", lib);

    paypal
      .Buttons({
        style: {
          layout: "vertical",
          color: "blue",
          shape: "rect",
          label: "paypal",
        },
      })
      .render(`#${lib.id}`);
  },
});

onMounted(async () => {
  await lib.init();
});

useHead({
  script: [
    {
      key: "paypal-buttons",
      src: `https://www.paypal.com/sdk/js?client-id=${YOUR_CLIENT_ID}&components=buttons`,
    },
  ],
});
</script>
