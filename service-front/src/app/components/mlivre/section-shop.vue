<script setup>
const scope = useShop("mlivre");

// Helper to toggle array filters
const toggleFilter = (array, value) => {
  const index = array.indexOf(value);
  if (index === -1) array.push(value);
  else array.splice(index, 1);
};
</script>

<template>
  <div
    class="font-[Proxima Nova,-apple-system,Helvetica_Neue,Helvetica,Roboto,Arial,sans-serif]"
  >
    <!-- Header Simples -->
    <header
      class="bg-[#ffe600] border-b border-[#e6e6e6] py-2 sticky top-0 z-50"
    >
      <div
        class="container mx-auto max-w-[1200px] px-4 flex gap-8 items-center h-12"
      >
        <!-- Logo -->
        <nuxt-link
          to="/mlivre"
          class="flex flex-col leading-none shrink-0 border-none outline-none"
        >
          <span class="text-2xl font-black text-[#2d3277]">mercado</span>
          <span class="text-2xl font-black text-[#2d3277] -mt-2">livre</span>
        </nuxt-link>

        <!-- Search -->
        <div class="flex-1 relative shadow-sm max-w-[600px]">
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
            class="w-full h-10 px-4 py-2 rounded-sm outline-none text-[16px] text-[#333] shadow-sm placeholder-gray-400 border-r border-gray-200"
            v-model="scope.productPage.params.term"
          />
          <button
            class="absolute right-0 top-0 h-10 w-12 bg-white flex items-center justify-center text-gray-500 rounded-r-sm hover:bg-gray-50"
          >
            <i class="fas fa-search"></i>
          </button>
        </div>

        <div class="flex gap-6 text-[13px] text-[#333] items-center ml-auto">
          <div class="hidden md:flex flex-col leading-none">
            <span class="text-[11px] font-light">Olá, Visitante</span>
            <span class="font-medium">Mais ofertas</span>
          </div>
          <i class="fas fa-shopping-cart text-lg opacity-60"></i>
        </div>
      </div>
    </header>

    <!-- Main Layout -->
    <main class="container mx-auto max-w-[1200px] px-4 py-8 flex gap-8">
      <!-- Sidebar Filters -->
      <aside class="w-[240px] shrink-0 hidden md:block">
        <h1 class="text-[22px] font-semibold text-[#333] mb-2 leading-tight">
          Resultados da Busca
        </h1>
        <p class="text-[14px] text-[#666] mb-6">
          {{ scope.productPage.results }} resultados
        </p>

        <!-- Active Filters (Chips) -->
        <div class="mb-8 flex flex-wrap gap-2">
          <template
            v-for="type in scope.productPage.params.types"
            :key="type"
          >
            <div
              class="bg-white border rounded px-3 py-1.5 text-[14px] font-medium inline-flex items-center gap-2 group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              @click="toggleFilter(scope.productPage.params.types, type)"
            >
              {{
                scope.taxonomy.types.find((t) => t.id === type)?.name || type
              }}
              <i
                class="fas fa-times text-gray-400 group-hover:text-gray-600"
              ></i>
            </div>
          </template>
          <template
            v-for="tag in scope.productPage.params.tags"
            :key="tag"
          >
            <div
              class="bg-white border rounded px-3 py-1.5 text-[14px] font-medium inline-flex items-center gap-2 group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              @click="toggleFilter(scope.productPage.params.tags, tag)"
            >
              {{ scope.taxonomy.tags.find((t) => t.id === tag)?.name || tag }}
              <i
                class="fas fa-times text-gray-400 group-hover:text-gray-600"
              ></i>
            </div>
          </template>
        </div>

        <!-- Filters List -->
        <div class="space-y-8">
          <!-- Price Input -->
          <div>
            <h3 class="font-semibold text-[16px] mb-3 text-[#333]">Preço</h3>
            <div class="flex gap-2 items-center mb-2">
              <input
                type="number"
                placeholder="Mínimo"
                v-model.number="scope.productPage.params.priceMin"
                class="w-20 px-2 py-1.5 border rounded text-sm text-[#333] outline-none focus:border-blue-500"
              />
              <span class="text-gray-400">-</span>
              <input
                type="number"
                placeholder="Máximo"
                v-model.number="scope.productPage.params.priceMax"
                class="w-20 px-2 py-1.5 border rounded text-sm text-[#333] outline-none focus:border-blue-500"
              />
              <button
                class="w-8 h-8 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300"
              >
                <i class="fas fa-chevron-right text-xs"></i>
              </button>
            </div>
          </div>

          <!-- Types List -->
          <div v-if="scope.taxonomy.types">
            <h3 class="font-semibold text-[16px] mb-3 text-[#333]">Tipo</h3>
            <ul class="space-y-1.5">
              <li
                v-for="type in scope.taxonomy.types"
                :key="type.id"
              >
                <label
                  class="text-[14px] text-[#666] hover:text-[#333] flex gap-2 items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    :value="type.id"
                    v-model="scope.productPage.params.types"
                    class="rounded text-blue-500 focus:ring-blue-500"
                  />
                  <span>{{ type.name }}</span>
                </label>
              </li>
            </ul>
          </div>

          <!-- Tags List -->
          <div v-if="scope.taxonomy.tags">
            <h3 class="font-semibold text-[16px] mb-3 text-[#333]">
              Categorias
            </h3>
            <ul class="space-y-1.5">
              <li
                v-for="tag in scope.taxonomy.tags"
                :key="tag.id"
              >
                <label
                  class="text-[14px] text-[#666] hover:text-[#333] flex gap-2 items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    :value="tag.id"
                    v-model="scope.productPage.params.tags"
                    class="rounded text-blue-500 focus:ring-blue-500"
                  />
                  <span>{{ tag.name }}</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <!-- Product Grid -->
      <section class="flex-1">
        <!-- Sort Bar -->
        <div class="flex justify-end mb-4">
          <div class="flex items-center gap-2 text-[14px]">
            <span class="text-[#333] font-medium">Ordenar por:</span>
            <span
              class="text-[#333] cursor-pointer font-medium flex items-center gap-1"
            >
              Mais relevantes
              <i class="fas fa-chevron-down text-[#3483fa] text-xs"></i>
            </span>
          </div>
        </div>

        <!-- Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <article
            v-for="prod in scope.productPage.data"
            :key="prod.id"
            class="bg-white rounded-[4px] shadow-sm hover:shadow-xl transition-shadow cursor-pointer flex flex-col h-full border border-gray-100 group relative"
          >
            <!-- Link Wrapper -->
            <nuxt-link
              :to="`/mlivre/${prod.id}`"
              class="absolute inset-0 z-10"
            ></nuxt-link>

            <!-- Image -->
            <div
              class="w-full h-[224px] border-b border-gray-50 flex items-center justify-center p-4 relative"
            >
              <img
                :src="prod.image"
                :alt="prod.name"
                class="max-w-full max-h-full mix-blend-multiply transition-opacity group-hover:opacity-90"
              />
              <div
                v-if="prod.flags && prod.flags.includes('promo')"
                class="absolute top-2 right-2 bg-white text-blue-500 p-1 rounded-full shadow-sm text-xs"
              >
                <i class="fas fa-tag"></i>
              </div>
            </div>

            <div class="p-4 flex flex-col flex-1">
              <!-- Prices -->
              <div class="mb-2">
                <div class="flex flex-col">
                  <span class="text-xs text-gray-300 line-through"
                    >R$ {{ (prod.price * 1.5).toFixed(2) }}</span
                  >
                  <div class="flex items-center gap-2">
                    <span class="text-[22px] font-normal text-[#333]"
                      >R$ {{ prod.price.toFixed(2) }}</span
                    >
                    <span class="text-[12px] font-medium text-[#00a650]"
                      >33% OFF</span
                    >
                  </div>
                </div>
                <div class="text-[12px] text-[#333]">
                  em
                  <span class="text-[#00a650] font-medium"
                    >10x R$ {{ (prod.price / 10).toFixed(2) }} sem juros</span
                  >
                </div>
                <div
                  class="mt-1"
                  v-if="prod.flags && prod.flags.includes('limited')"
                >
                  <span
                    class="text-[12px] font-bold italic text-[#00a650] flex items-center gap-1"
                  >
                    <i class="fas fa-bolt text-[10px]"></i> FULL
                  </span>
                </div>
              </div>

              <div class="text-[12px] font-bold text-[#00a650] mb-2">
                Frete grátis
              </div>

              <!-- Title -->
              <h2
                class="text-[14px] font-light text-[#333]/90 mb-1 group-hover:text-blue-600 line-clamp-2 leading-snug"
              >
                {{ prod.name }}
              </h2>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <div
          class="mt-12 flex justify-center pb-12"
          v-if="scope.productPage.pages > 1"
        >
          <div class="flex items-center gap-2">
            <button
              @click="scope.productPage.params.page--"
              :disabled="scope.productPage.params.page <= 1"
              class="w-10 h-10 flex items-center justify-center text-[#3483fa] font-medium bg-gray-100 rounded-[4px] hover:bg-gray-200 disabled:opacity-50"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <div class="flex gap-1 font-medium text-[16px] text-[#999]">
              <span
                class="bg-gray-200 text-[#333] w-10 h-10 flex items-center justify-center rounded-[4px]"
                >{{ scope.productPage.params.page }}</span
              >
              <span
                class="w-10 h-10 flex items-center justify-center text-xs text-gray-400"
                >de</span
              >
              <span class="w-10 h-10 flex items-center justify-center">{{
                scope.productPage.pages
              }}</span>
            </div>
            <button
              @click="scope.productPage.params.page++"
              :disabled="
                scope.productPage.params.page >= scope.productPage.pages
              "
              class="flex items-center justify-center px-4 h-10 text-[#3483fa] font-medium bg-white hover:text-blue-700 disabled:opacity-50"
            >
              Seguinte <i class="fas fa-chevron-right ml-2 text-xs"></i>
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
