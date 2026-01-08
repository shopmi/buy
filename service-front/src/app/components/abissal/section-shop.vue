<script setup>
const scope = useShop("abissal");
</script>

<template>
  <section class="py-24 relative z-10 border-t border-gray-900">
    <div class="container mx-auto px-6 flex flex-col lg:flex-row gap-12">
      <!-- Sidebar Filters -->
      <aside class="lg:w-1/4 space-y-12">
        <!-- Search -->
        <div class="relative">
          <input
            type="text"
            placeholder="Search the archive..."
            class="w-full bg-gray-900/50 border border-gray-700 text-white p-3 pl-10 focus:border-blood-red outline-none text-sm uppercase placeholder-gray-600 transition-colors"
            v-model="scope.productPage.params.term"
          />
          <i class="fas fa-search absolute top-3.5 left-3 text-gray-500"></i>
        </div>

        <!-- Price Range -->
        <div>
          <h3
            class="text-xl text-white mb-6 border-l-2 border-blood-red pl-3 uppercase flex items-center gap-2"
          >
            <span class="text-blood-red">🜏</span> Preço
          </h3>
          <div class="flex gap-4">
            <input
              type="number"
              placeholder="Min"
              v-model.number="scope.productPage.params.priceMin"
              class="w-full bg-gray-900/50 border border-gray-700 text-white p-2 outline-none text-sm uppercase placeholder-gray-600 focus:border-blood-red transition-colors"
            />
            <input
              type="number"
              placeholder="Max"
              v-model.number="scope.productPage.params.priceMax"
              class="w-full bg-gray-900/50 border border-gray-700 text-white p-2 outline-none text-sm uppercase placeholder-gray-600 focus:border-blood-red transition-colors"
            />
          </div>
        </div>

        <!-- Product Type -->
        <div>
          <h3
            class="text-xl text-white mb-6 border-l-2 border-blood-red pl-3 uppercase flex items-center gap-2"
          >
            <span class="text-blood-red">🜏</span> Tipo de Produto
          </h3>
          <div class="space-y-3">
            <template
              v-for="t in scope.taxonomy.types"
              :key="t.id"
            >
              <label class="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  class="accent-blood-red w-4 h-4"
                  :value="t.id"
                  v-model="scope.productPage.params.types"
                />
                <span
                  class="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm uppercase"
                  >{{ t.name }}</span
                >
              </label>
            </template>
          </div>
        </div>

        <!-- Sizes -->
        <div>
          <h3
            class="text-xl text-white mb-6 border-l-2 border-blood-red pl-3 uppercase flex items-center gap-2"
          >
            <span class="text-blood-red">🜏</span> Tamanho
          </h3>
          <div class="grid grid-cols-3 gap-2">
            <button
              class="border border-gray-700 hover:border-white py-2 text-xs uppercase hover:bg-white hover:text-black transition-all"
            >
              P
            </button>
            <button
              class="border border-gray-700 hover:border-white py-2 text-xs uppercase hover:bg-white hover:text-black transition-all"
            >
              M
            </button>
            <button
              class="border border-gray-700 hover:border-white py-2 text-xs uppercase hover:bg-white hover:text-black transition-all bg-white text-black font-bold"
            >
              G
            </button>
            <button
              class="border border-gray-700 hover:border-white py-2 text-xs uppercase hover:bg-white hover:text-black transition-all"
            >
              GG
            </button>
            <button
              class="border border-gray-700 hover:border-white py-2 text-xs uppercase hover:bg-white hover:text-black transition-all"
            >
              XG
            </button>
          </div>
        </div>
      </aside>

      <!-- Product Grid -->
      <main class="lg:w-3/4">
        <div
          class="flex justify-between items-center mb-8 pb-4 border-b border-gray-900"
        >
          <p class="text-gray-500 text-sm">
            Exibindo {{ scope.productPage.data.length }} de
            {{ scope.productPage.results }} Elementos
          </p>
          <div class="flex gap-4 text-sm">
            <span class="text-gray-500">Ordenar por:</span>
            <select
              class="bg-transparent text-white outline-none cursor-pointer uppercase font-bold"
              v-model="scope.productPage.params.order"
            >
              <option
                value="price:asc"
                class="text-black"
              >
                Menor Preço
              </option>
              <option
                value="price:desc"
                class="text-black"
              >
                Maior Preço
              </option>
            </select>
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <template v-for="p in scope.productPage.data">
            <div class="group cursor-pointer">
              <div
                class="relative aspect-[4/5] overflow-hidden bg-gray-900 mb-4 border border-gray-800 group-hover:border-blood-red transition-colors"
              >
                <nuxt-link :to="`/abissal/${p.id}`">
                  <img
                    :src="p.image"
                    class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 glitch-hover"
                  />
                </nuxt-link>
                <div
                  class="flex flex-col gap-1 absolute bottom-2 left-2 text-black text-xs font-mono uppercase font-bold"
                >
                  <template
                    v-for="flag in scope.taxonomyItems('flags', p.flags)"
                  >
                    <div class="bg-blood-red px-2 py-1">{{ flag.name }}</div>
                  </template>
                </div>
              </div>
              <div class="flex justify-between items-start">
                <div>
                  <h3
                    class="text-xl font-bold mb-1 group-hover:text-blood-red transition-colors"
                  >
                    {{ p.name }}
                  </h3>
                  <p class="text-xs text-gray-500 uppercase tracking-wider">
                    Arte / Esotérico
                  </p>
                </div>
                <span class="text-lg font-bold text-gray-300">$45</span>
              </div>
            </div>
          </template>
        </div>

        <abissal-ui-pagination :data="scope.productPage" />
      </main>
    </div>
  </section>
</template>
