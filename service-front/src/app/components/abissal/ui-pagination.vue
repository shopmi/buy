<script setup>
const props = defineProps({
  data: { type: Object, required: true },
});

const pageGoto = (page) => {
  if (props.data.setPage) {
    props.data.setPage(page);
  } else {
    // Fallback if setPage is not defined in the object (though it should be)
    // This part essentially duplicates logic if we wanted to be safe,
    // but the instruction implies relying on the object customization.
    // For now, assuming scope.productPage has setPage as per recent edits.
    console.warn("setPage method missing on pagination data object");
  }
};
</script>

<template>
  <div
    v-if="props.data.pages > 1"
    class="mt-24 flex justify-center items-center gap-4 text-sm uppercase tracking-widest"
  >
    <button
      type="button"
      class="disabled:opacity-30 transition-colors"
      :class="{
        'text-gray-500 hover:text-white': props.data.params.page != 1,
        'text-blood-red font-bold': props.data.params.page == 1,
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
      <template v-for="page in props.data.pages">
        <button
          type="button"
          class="transition-colors px-2"
          :class="{
            'text-gray-500 hover:text-white': page != props.data.params.page,
            'text-blood-red font-bold': page == props.data.params.page,
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
        'text-gray-500 hover:text-white':
          props.data.params.page != props.data.pages,
        'text-blood-red font-bold': props.data.params.page == props.data.pages,
      }"
      @click="pageGoto('last')"
    >
      Fim &gt;&gt;
    </button>
  </div>
</template>
