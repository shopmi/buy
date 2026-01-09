<script setup>
const route = useRoute();
const router = useRouter();
const scope = useShop("abissal");

const product = computed(() => {
  if (!route.params.slug) return null;
  return scope.products.find((p) => p.id == route.params.slug);
});

const closeModal = () => {
  router.push("/abissal");
};

const addToCart = () => {
  if (product.value) {
    scope.cart.add(product.value.id, 1);
    scope.cart.drawer.toggle(true);
  }
};

// Prevent background scrolling when modal is open
watch(product, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? "hidden" : "";
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="product"
      class="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6"
    >
      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer transition-opacity"
        @click="closeModal"
      >
        <!-- Noise overlay on backdrop -->
        <div
          class="absolute inset-0 opacity-[0.03] pointer-events-none noise-bg"
        ></div>
      </div>

      <!-- Modal Container -->
      <div
        class="relative w-full max-w-7xl h-full md:h-auto md:max-h-[85vh] bg-[#050505] border border-[#222] shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col md:flex-row overflow-hidden group/modal"
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 z-50 text-gray-400 hover:text-white hover:rotate-90 transition-all duration-300 bg-black/50 p-2 rounded-full backdrop-blur-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Image Section -->
        <div
          class="w-full h-64 md:h-auto md:w-1/2 relative bg-[#111] overflow-hidden shrink-0"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover opacity-90 group-hover/modal:scale-105 transition-transform duration-[2s] ease-in-out"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"
          ></div>

          <!-- Decorative Glitch Text -->
          <div
            class="absolute bottom-6 left-6 font-mono text-xs text-blood-red opacity-60 tracking-widest writing-vertical-rl rotate-180 hidden md:block"
          >
            ARTIFACT ID: {{ product.id.split("-").pop().toUpperCase() }} //
          </div>
        </div>

        <!-- Details Section -->
        <div
          class="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col relative text-bone-white"
        >
          <!-- Header -->
          <div class="mb-8 border-b border-[#222] pb-6">
            <div class="flex gap-2 mb-2">
              <span
                v-for="tag in product.tags"
                :key="tag"
                class="text-[10px] uppercase tracking-[0.2em] text-gray-500 border border-[#333] px-2 py-1"
              >
                {{ tag }}
              </span>
            </div>
            <h1
              class="text-4xl md:text-5xl font-cinzel font-bold text-white mb-2 leading-tight"
            >
              {{ product.name }}
            </h1>
            <div class="flex items-center justify-between mt-4">
              <span class="text-3xl font-mono text-gray-300"
                >${{ product.price }}</span
              >
              <div
                v-if="product.flags && product.flags.includes('promo')"
                class="bg-blood-red/20 text-blood-red px-3 py-1 text-xs uppercase font-bold tracking-widest border border-blood-red/50 animate-pulse"
              >
                Special Offer
              </div>
            </div>
          </div>

          <!-- Description (Placeholder Lore) -->
          <div
            class="space-y-6 mb-12 text-gray-400 font-courier text-sm md:text-base leading-relaxed"
          >
            <p>
              An unearthed relic from the void. This item carries with it the
              weight of forgotten rituals and lost media. Fabricated with
              materials sourced from the shadows.
            </p>
            <p class="italic opacity-70 border-l-2 border-blood-red pl-4">
              "To wear this is to invite the gaze of the abyss. Proceed with
              caution, initiate."
            </p>

            <div
              class="grid grid-cols-2 gap-4 text-xs font-mono uppercase text-gray-600 mt-6"
            >
              <div class="border border-[#222] p-3">
                <span class="block text-gray-500 mb-1">Material</span>
                <span class="text-white">100% Void Cotton</span>
              </div>
              <div class="border border-[#222] p-3">
                <span class="block text-gray-500 mb-1">Origin</span>
                <span class="text-white">Unknown</span>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="mt-auto space-y-4">
            <button
              @click="addToCart"
              class="w-full bg-white text-black py-4 uppercase tracking-[0.2em] font-bold hover:bg-blood-red hover:text-white transition-all duration-300 relative group overflow-hidden"
            >
              <span
                class="relative z-10 flex items-center justify-center gap-2"
              >
                Add to Ritual <i class="fas fa-plus"></i>
              </span>
              <div
                class="absolute inset-0 bg-blood-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 z-0"
              ></div>
            </button>
            <p
              class="text-[10px] text-center text-gray-600 uppercase tracking-widest"
            >
              Free shipping for orders over $666
            </p>
          </div>

          <!-- Background sigil decoration -->
          <div
            class="absolute top-10 right-10 text-[10rem] opacity-[0.02] pointer-events-none font-gothic text-blood-red select-none"
          >
            🜏
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.font-cinzel {
  font-family: "Cinzel", serif;
}
.font-courier {
  font-family: "Courier Prime", monospace;
}
.font-gothic {
  font-family: "UnifrakturMaguntia", cursive;
}
.text-blood-red {
  color: #8a0303;
}
.bg-blood-red {
  background-color: #8a0303;
}
.text-bone-white {
  color: #d4d4d4;
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #050505;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #222;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #8a0303;
}

/* Noise BG support if global class not available in scope */
.noise-bg {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

.writing-vertical-rl {
  writing-mode: vertical-rl;
}
</style>
