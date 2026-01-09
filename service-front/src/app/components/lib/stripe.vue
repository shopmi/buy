<template>
  <div
    class="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100"
  >
    <div class="text-center mb-6">
      <div
        class="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4"
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
      <h3 class="text-xl font-bold text-gray-800">Checkout Dinâmico</h3>
      <p class="text-gray-500 text-sm">Sem Backend • PIX e Cartão</p>
    </div>

    <div class="bg-gray-50 p-4 rounded-lg mb-6 text-sm border border-gray-200">
      <div class="flex justify-between items-center mb-2">
        <span class="text-gray-600">Produto (Fixo):</span>
        <span class="font-medium text-gray-900">Camiseta Premium</span>
      </div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-gray-600">Preço Base:</span>
        <span class="font-mono text-gray-600">R$ 1,00 (unidade)</span>
      </div>
      <div
        class="flex justify-between items-center pt-2 border-t border-gray-200"
      >
        <span class="text-gray-800 font-bold">Total (Qtd):</span>
        <div class="flex items-center space-x-2">
          <button
            @click="lib.quantity > 1 ? lib.quantity-- : null"
            class="w-6 h-6 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
          >
            -
          </button>
          <span class="font-bold text-indigo-600 text-lg">{{
            lib.quantity
          }}</span>
          <button
            @click="lib.quantity++"
            class="w-6 h-6 rounded bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
      <div class="mt-2 text-right text-xs text-gray-400">
        Total a pagar: R$ {{ lib.quantity }},00
      </div>
    </div>

    <div
      v-if="lib.errorMessage"
      class="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center"
    >
      {{ lib.errorMessage }}
    </div>

    <button
      @click="lib.checkout"
      :disabled="lib.loading || !lib.stripe"
      class="w-full bg-indigo-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 transition-all duration-200 flex items-center justify-center"
    >
      <span
        v-if="lib.loading"
        class="flex items-center"
      >
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
      successUrl.searchParams.set("status", "success");

      const cancelUrl = new URL(currentUrl);
      cancelUrl.searchParams.set("status", "cancel");

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
