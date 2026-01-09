<template>
  <div
    :id="lib.id"
    style="width: 300px"
  ></div>
</template>

<script setup>
const props = defineProps({
  options: { type: Object, default: () => ({}) },
});

const lib = reactive({
  id: "lib-vanilla-calendar-" + Math.round(Math.random() * 9999),
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

    await dependenciesReady(["VanillaCalendarPro"]);
    const { Calendar } = window.VanillaCalendarPro;
    const calendar = new Calendar(`#${lib.id}`, props.options);
    calendar.init();
  },
});

onMounted(async () => {
  await lib.init();
});

useHead({
  script: [
    {
      key: "vanilla-calendar-pro",
      src: "https://cdn.jsdelivr.net/npm/vanilla-calendar-pro/index.js",
    },
  ],
  link: [
    {
      key: "vanilla-calendar-pro",
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/vanilla-calendar-pro/styles/index.css",
    },
  ],
});
</script>
