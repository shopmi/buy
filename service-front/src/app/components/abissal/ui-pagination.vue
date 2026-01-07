<script setup>
const props = defineProps({
  page: { type: Number, default: 1 },
  pages: { type: Number, default: 0 },
  limit: { type: Number, default: 6 },
});

const emit = defineEmits(["update:page", "update:limit"]);

const pageGoto = (page) => {
  if (page == "prev") {
    page = props.page - 1;
  }
  if (page == "next") {
    page = props.page + 1;
  }
  if (page == "last") {
    page = props.pages;
  }
  if (page < 1) {
    page = 1;
  }
  if (page > props.pages) {
    page = props.pages;
  }
  emit("update:page", page);
};
</script>

<template>
  <div
    class="mt-24 flex justify-center items-center gap-4 text-sm uppercase tracking-widest"
  >
    <button
      type="button"
      class="disabled:opacity-30 transition-colors"
      :class="{
        'text-gray-500 hover:text-white': props.page != 1,
        'text-blood-red font-bold': props.page == 1,
      }"
      @click="pageGoto(1)"
    >
      &lt;&lt; Início
    </button>

    <button
      type="button"
      class="disabled:opacity-30 transition-colors"
      @click="pageGoto('prev')"
    >
      &lt;
    </button>

    <div class="flex gap-2">
      <template v-for="page in props.pages">
        <button
          type="button"
          class="transition-colors px-2"
          :class="{
            'text-gray-500 hover:text-white': page != props.page,
            'text-blood-red font-bold': page == props.page,
          }"
          @click="pageGoto(page)"
        >
          {{ page }}
        </button>
      </template>
    </div>

    <button
      type="button"
      class="disabled:opacity-30 transition-colors"
      @click="pageGoto('next')"
    >
      &gt;
    </button>

    <button
      type="button"
      class="disabled:opacity-30 transition-colors"
      :class="{
        'text-gray-500 hover:text-white': props.page != props.pages,
        'text-blood-red font-bold': props.page == props.pages,
      }"
      @click="pageGoto('last')"
    >
      Fim &gt;&gt;
    </button>
  </div>
</template>
