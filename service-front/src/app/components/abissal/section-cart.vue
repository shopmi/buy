<template>
  <Teleport to="body">
    <div class="font-sans">
      <!-- Fallback font family wrapper -->
      <!-- Overlay -->
      <div
        v-if="shop.cart.drawer.show"
        class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] transition-opacity"
        style="z-index: 9999"
        @click="shop.cart.drawer.toggle(false)"
      ></div>

      <!-- Drawer -->
      <aside
        class="fixed top-0 right-0 h-full w-full max-w-md bg-[#050505] z-[9999] transform transition-transform duration-500 ease-out flex flex-col text-gray-200"
        style="
          z-index: 9999;
          background-color: #050505;
          box-shadow: -1px 0 0 rgba(138, 3, 3, 0.3),
            -10px 0 40px rgba(138, 3, 3, 0.1), -20px 0 50px rgba(0, 0, 0, 0.9);
        "
        :class="shop.cart.drawer.show ? 'translate-x-0' : 'translate-x-full'"
      >
        <!-- Header -->
        <div
          class="p-8 flex justify-between items-center relative overflow-hidden"
        >
          <h2
            class="text-2xl font-serif text-[#8a0303] tracking-widest relative z-10"
            style="font-family: 'Cinzel', serif"
          >
            Ritual Offerings
          </h2>
          <button
            @click="shop.cart.drawer.toggle(false)"
            class="text-gray-500 hover:text-white transition-colors relative z-10 text-2xl"
          >
            &times;
          </button>

          <!-- Background Symbol -->
          <div
            class="absolute -right-4 -top-4 text-6xl text-red-900/10 pointer-events-none select-none z-0"
          >
            🜏
          </div>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto px-8 space-y-6">
          <div
            v-if="cartDetails.length === 0"
            class="h-full flex flex-col items-center justify-center text-gray-600 opacity-50"
          >
            <span class="text-4xl mb-4">🕳️</span>
            <p
              class="tracking-widest"
              style="font-family: 'Cinzel', serif"
            >
              The void is empty
            </p>
          </div>

          <div
            v-for="item in cartDetails"
            :key="item.id"
            class="group flex gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-sm transition-all"
          >
            <div
              class="w-20 h-24 bg-black overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500"
            >
              <!-- Placeholder se não tiver imagem, ou usar a imagem do produto -->
              <img
                v-if="item.image"
                :src="item.image"
                class="w-full h-full object-cover"
              />
              <div
                v-else
                class="w-full h-full flex items-center justify-center text-gray-800"
              >
                ?
              </div>
            </div>

            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h3
                  class="text-gray-200 text-lg leading-tight"
                  style="font-family: 'Cinzel', serif"
                >
                  {{ item.name }}
                </h3>
                <p class="text-[#8a0303] text-sm mt-1">
                  R$ {{ item.price }},00
                </p>
              </div>

              <div class="flex justify-between items-center mt-2">
                <div
                  class="flex items-center gap-4 bg-black/40 px-3 py-1 rounded-sm"
                >
                  <button
                    @click="shop.cart.add(item.id, -1)"
                    class="text-gray-400 hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span class="text-sm font-mono text-gray-300">{{
                    item.quantity
                  }}</span>
                  <button
                    @click="shop.cart.add(item.id, 1)"
                    class="text-gray-400 hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  @click="shop.cart.remove(item.id)"
                  class="text-xs text-gray-600 hover:text-red-500 uppercase tracking-widest transition-colors"
                >
                  Sacrifice
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer / Checkout -->
        <div
          class="p-8 bg-gradient-to-t from-black via-black/90 to-transparent"
        >
          <div
            class="flex justify-between items-end mb-6"
            style="font-family: 'Cinzel', serif"
          >
            <span class="text-gray-500 text-sm uppercase tracking-widest"
              >Tribute Total</span
            >
            <span class="text-3xl text-white">R$ {{ shop.cart.total }},00</span>
          </div>

          <LibStripe
            v-if="shop.cart.total > 0"
            :initial-amount="shop.cart.total"
          >
            <template #default="{ checkout, loading, errorMessage }">
              <div
                v-if="errorMessage"
                class="mb-4 text-red-500 text-xs text-center font-mono bg-red-900/10 p-2 rounded-sm"
              >
                {{ errorMessage }}
              </div>

              <button
                @click="checkout"
                :disabled="loading"
                class="w-full font-bold uppercase tracking-[0.2em] py-4 px-6 relative overflow-hidden group transition-all duration-300 clip-path-polygon flex items-center justify-center rounded-sm"
                style="background-color: #8a0303; color: white"
              >
                <span
                  class="relative z-10 flex items-center justify-center gap-2"
                >
                  <span
                    v-if="loading"
                    class="animate-spin"
                    >⛤</span
                  >
                  <span v-else>Summon Gateway (Checkout)</span>
                </span>
                <!-- Glitch overlay on hover -->
                <div
                  class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"
                ></div>
              </button>
            </template>
          </LibStripe>
        </div>
      </aside>
    </div>
  </Teleport>
</template>

<script setup>
const shop = useShop("abissal");

const cartDetails = computed(() => {
  return shop.cart.items
    .map((cartItem) => {
      const product = shop.products.find((p) => p.id === cartItem.productId);
      if (!product) return null;
      return {
        ...product,
        quantity: cartItem.quantity,
      };
    })
    .filter(Boolean); // Remove nulos caso produto não seja encontrado
});
</script>

<style scoped>
.clip-path-polygon {
  clip-path: polygon(
    10px 0,
    100% 0,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    0 100%,
    0 10px
  );
}
</style>
