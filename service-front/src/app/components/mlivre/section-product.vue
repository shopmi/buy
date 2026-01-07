<script setup>
const route = useRoute();
const router = useRouter();
const scope = useShop("mlivre");

const product = computed(() => {
  if (!route.params.slug) return null;
  return scope.products.find((p) => p.id == route.params.slug);
});

const closeModal = () => {
  router.push("/mlivre");
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
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="product"
      class="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-6 bg-black/50 overflow-y-auto"
    >
      <!-- Backdrop Click -->
      <div
        class="absolute inset-0"
        @click="closeModal"
      ></div>

      <!-- Modal Card -->
      <div
        class="relative bg-white w-full max-w-5xl rounded-[4px] shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[600px] my-auto"
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-600"
        >
          <i class="fas fa-times text-xl"></i>
        </button>

        <!-- Left: Images -->
        <div class="w-full md:w-2/3 p-4 md:p-8 flex flex-col md:flex-row gap-4">
          <!-- Thumbnails (Mock) -->
          <div class="flex md:flex-col gap-2 order-2 md:order-1">
            <div
              class="w-12 h-12 border border-blue-500 rounded-[2px] p-0.5 cursor-pointer"
            >
              <img
                :src="product.image"
                class="w-full h-full object-contain"
              />
            </div>
            <div
              class="w-12 h-12 border border-gray-200 rounded-[2px] p-0.5 cursor-pointer hover:border-gray-300"
            >
              <img
                :src="product.image"
                class="w-full h-full object-contain opacity-50"
              />
            </div>
          </div>

          <!-- Main Image -->
          <div
            class="flex-1 order-1 md:order-2 flex items-center justify-center p-4"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="max-w-full max-h-[500px] object-contain cursor-zoom-in"
            />
          </div>
        </div>

        <!-- Right: Info -->
        <div class="w-full md:w-1/3 p-6 border-l border-gray-100 flex flex-col">
          <div class="text-[12px] text-gray-500 mb-2">Novo | +100 vendidos</div>

          <h1 class="text-[22px] font-semibold text-[#333] leading-snug mb-4">
            {{ product.name }}
          </h1>

          <!-- Rating -->
          <div class="flex items-center gap-2 mb-4">
            <div class="flex text-[#3483fa] text-[14px]">
              <i class="fas fa-star"></i><i class="fas fa-star"></i
              ><i class="fas fa-star"></i><i class="fas fa-star"></i
              ><i class="fas fa-star"></i>
            </div>
            <span class="text-gray-500 text-[14px]">45 avaliações</span>
          </div>

          <!-- Price -->
          <div class="mb-6">
            <span class="text-gray-400 line-through text-[14px]"
              >R$ {{ (product.price * 1.5).toFixed(2) }}</span
            >
            <div class="flex items-center gap-3">
              <span class="text-[36px] font-light text-[#333]"
                >R$ {{ product.price.toFixed(2) }}</span
              >
              <span class="text-[18px] font-medium text-[#00a650]"
                >33% OFF</span
              >
            </div>
            <p class="text-[16px]">
              em
              <span class="text-[#00a650] font-medium"
                >10x R$ {{ (product.price / 10).toFixed(2) }} sem juros</span
              >
            </p>
          </div>

          <div class="text-[14px] mb-6">
            <a
              href="#"
              class="text-[#3483fa] font-medium"
              >Ver os meios de pagamento</a
            >
          </div>

          <!-- Shipping -->
          <div class="flex gap-3 mb-6">
            <i class="fas fa-truck text-[#00a650] text-lg mt-1"></i>
            <div>
              <p class="text-[#00a650] text-[14px] font-medium">
                Chegará grátis amanhã
              </p>
              <p class="text-gray-500 text-[12px]">
                Saiba os prazos de entrega e as formas de envio.
              </p>
              <a
                href="#"
                class="text-[#3483fa] text-[13px] font-medium"
                >Calcular o prazo de entrega</a
              >
            </div>
          </div>

          <!-- Seller -->
          <div class="flex gap-3 mb-8">
            <i class="fas fa-store text-gray-400 text-sm mt-1"></i>
            <div>
              <p class="text-[13px]">
                Vendido por <span class="text-[#3483fa]">MercadoLoja</span>
              </p>
              <p class="text-[#333] text-[12px]">
                MercadoLíder Platinum | +1000 vendas
              </p>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col gap-2 mt-auto">
            <button
              class="bg-[#3483fa] hover:bg-[#2968c8] text-white font-semibold py-3.5 rounded-[4px] transition-colors text-[16px]"
            >
              Comprar agora
            </button>
            <button
              class="bg-[#e3edfb] hover:bg-[#d0e4fa] text-[#3483fa] font-semibold py-3.5 rounded-[4px] transition-colors text-[16px]"
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
