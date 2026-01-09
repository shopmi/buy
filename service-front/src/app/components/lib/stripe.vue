<template>
  <div>
    <!-- Default UI (Fallback) -->
    <div
      v-if="!$slots.default"
      class="w-full max-w-md mx-auto p-4 rounded-xl text-center border border-white/10 bg-white/5"
    >
      <div class="mb-6">
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-white rounded-full mb-4"
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
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h3 class="text-xl font-bold text-white">Checkout Dinâmico</h3>
        <p class="text-gray-400 text-sm">Sem Backend • PIX e Cartão</p>
      </div>

      <div
        class="bg-black/20 p-4 rounded-lg mb-6 text-sm border border-white/5"
      >
        <div class="flex justify-between items-center mb-2 text-gray-300">
          <span>Produto (Fixo):</span>
          <span class="font-medium text-white">Camiseta Premium</span>
        </div>
        <div class="flex justify-between items-center mb-2 text-gray-300">
          <span>Preço Base:</span>
          <span class="font-mono text-white">R$ 1,00 (unidade)</span>
        </div>
        <div
          class="flex justify-between items-center pt-2 border-t border-white/10"
        >
          <span class="font-bold text-gray-300">Total (Qtd):</span>
          <div class="flex items-center space-x-2">
            <button
              @click="lib.quantity > 1 ? lib.quantity-- : null"
              class="w-6 h-6 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              -
            </button>
            <span class="font-bold text-white text-lg">{{ lib.quantity }}</span>
            <button
              @click="lib.quantity++"
              class="w-6 h-6 rounded bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              +
            </button>
          </div>
        </div>
        <div class="mt-2 text-right text-xs text-gray-500">
          Total a pagar: R$ {{ lib.quantity }},00
        </div>
      </div>

      <div
        v-if="lib.errorMessage"
        class="mb-4 p-3 bg-red-900/20 text-red-400 text-sm rounded-lg text-center border border-red-500/30"
      >
        {{ lib.errorMessage }}
      </div>

      <button
        @click="lib.checkout"
        :disabled="lib.loading || !lib.stripe"
        class="w-full bg-white text-black font-bold py-4 px-6 rounded-lg hover:bg-gray-200 focus:outline-none transition-all duration-200 flex items-center justify-center"
      >
        <span
          v-if="lib.loading"
          class="flex items-center"
        >
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Inicializando...
        </span>
        <span v-else> Pagar R$ {{ lib.quantity }},00 com Stripe </span>
      </button>
    </div>

    <!-- Custom UI Slot -->
    <slot
      :checkout="lib.checkout"
      :loading="lib.loading"
      :quantity="lib.quantity"
      :error-message="lib.errorMessage"
    />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const props = defineProps({
  priceId: { type: String, default: "" },
  initialAmount: { type: Number, default: 99 },
});

const emit = defineEmits(["init"]);

const lib = reactive({
  id: "lib-stripe-checkout-" + Math.round(Math.random() * 9999),
  stripe: null,
  loading: true,
  quantity: props.initialAmount,
  errorMessage: "",

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

    await dependenciesReady(["Stripe"]);

    if (config.public.stripeKey) {
      lib.stripe = Stripe(config.public.stripeKey);
    } else {
      lib.errorMessage = "Stripe Key não configurada.";
    }

    lib.loading = false;
    emit("init", lib);
  },

  async checkout() {
    if (!lib.stripe) return;
    lib.loading = true;

    const priceId = props.priceId || config.public.stripePriceId;

    if (!priceId) {
      lib.errorMessage = "Price ID não configurado.";
      lib.loading = false;
      return;
    }

    try {
      const currentUrl = new URL(window.location.href);
      const successUrl = new URL(currentUrl);
      successUrl.searchParams.set("order_status", "success");

      const cancelUrl = new URL(currentUrl);
      cancelUrl.searchParams.set("order_status", "cancel");

      console.log("Iniciando Checkout:", {
        price: priceId,
        quantity: parseInt(lib.quantity),
      });

      const { error } = await lib.stripe.redirectToCheckout({
        lineItems: [
          {
            price: priceId,
            quantity: parseInt(lib.quantity),
          },
        ],
        mode: "payment",
        successUrl: successUrl.toString(),
        cancelUrl: cancelUrl.toString(),
      });

      if (error) {
        console.error("Stripe Error:", error);
        lib.errorMessage = error.message;
        lib.loading = false;
      }
    } catch (e) {
      console.error("System Error:", e);
      lib.errorMessage = e.message || "Erro desconhecido ao redirecionar.";
      lib.loading = false;
    }
  },
});

onMounted(() => {
  lib.init();
});

useHead({
  script: [{ key: "stripe", src: "https://js.stripe.com/v3/" }],
});
</script>
