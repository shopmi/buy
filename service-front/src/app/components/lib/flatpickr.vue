<template>
  <div
    :id="lib.id"
    style="width: 300px"
  ></div>
</template>

<script setup>
const props = defineProps({
  dark: { type: Boolean, default: false },
  options: { type: Object, default: () => ({}) },
});

const emit = defineEmits(["init"]);

const lib = reactive({
  id: "lib-flatpickr-" + Math.round(Math.random() * 9999),
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

    await dependenciesReady(["flatpickr"]);
    document.querySelector(`#${lib.id}`).innerHTML = "";

    const pickr = flatpickr(`#${lib.id}`, {
      inline: true,
      enableTime: true,
      ...props.options,
    });

    lib.getInstance = () => pickr;

    if (props.dark) {
      pickr.calendarContainer.classList.add("flatpickr-calendar-dark");
    }
    emit("init", lib);
  },
});

onMounted(async () => {
  await lib.init();
});

useHead({
  script: [
    {
      key: "flatpickr",
      src: "https://cdn.jsdelivr.net/npm/flatpickr",
    },
  ],
  link: [
    {
      key: "flatpickr",
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css",
    },
  ],
});
</script>

<style>
.flatpickr-calendar {
  border: none !important;
  box-shadow: none !important;
  background: transparent !important;
}

.flatpickr-calendar-dark * {
  color: #eee !important;
}

.flatpickr-calendar-dark .flatpickr-prev-month,
.flatpickr-calendar-dark .flatpickr-next-month {
  fill: #fff !important;
}

.flatpickr-calendar .flatpickr-day {
  border-radius: 0 !important;
}

.flatpickr-calendar-dark .flatpickr-day:hover {
  background-color: #ffffff55;
  border-color: transparent !important;
}

.flatpickr-calendar-dark input {
  background-color: transparent !important;
}

.flatpickr-calendar-dark option {
  color: #222 !important;
}
</style>
