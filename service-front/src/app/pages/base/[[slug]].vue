<script setup>
const scope = useShop("base");

useHead({
  title: "BASE. | Mininal Store",
  bodyAttrs: {
    class: "bg-white text-gray-900 antialiased font-sans",
  },
});

definePageMeta({
  scrollToTop: false,
});

const isFiltered = (array, value) => array.includes(value);
</script>

<template>
  <div class="min-h-screen flex flex-col font-inter">
    <!-- Announcement Bar -->
    <div
      class="bg-black text-white text-[10px] md:text-xs text-center py-2 tracking-widest uppercase font-medium"
    >
      Free Worldwide Shipping on Orders Over $200
    </div>

    <!-- Header -->
    <header
      class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div
        class="container mx-auto px-6 h-20 flex items-center justify-between"
      >
        <!-- Mobile Menu -->
        <button class="md:hidden text-2xl"><i class="fas fa-bars"></i></button>

        <!-- Logo -->
        <nuxt-link
          to="/base"
          class="text-2xl md:text-3xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          BASE<span class="text-blue-600">.</span>
        </nuxt-link>

        <!-- Desktop Nav -->
        <nav
          class="hidden md:flex gap-8 text-sm font-medium tracking-wide text-gray-600"
        >
          <a
            href="#"
            class="text-black hover:text-blue-600 transition-colors"
            >New Arrivals</a
          >
          <a
            href="#"
            class="hover:text-blue-600 transition-colors"
            >Men</a
          >
          <a
            href="#"
            class="hover:text-blue-600 transition-colors"
            >Women</a
          >
          <a
            href="#"
            class="hover:text-blue-600 transition-colors"
            >Accessories</a
          >
          <a
            href="#"
            class="text-red-600 hover:text-red-700 transition-colors"
            >Sale</a
          >
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-6 text-gray-800">
          <div
            class="hidden md:flex items-center gap-2 border-b border-transparent hover:border-gray-300 transition-all pb-0.5 group"
          >
            <i class="fas fa-search text-gray-400 group-hover:text-black"></i>
            <input
              type="text"
              v-model="scope.productPage.params.term"
              placeholder="Search..."
              class="w-20 focus:w-40 transition-all outline-none bg-transparent text-sm placeholder-gray-400"
            />
          </div>
          <button class="hover:text-blue-600 transition-colors">
            <i class="far fa-heart"></i>
          </button>
          <button class="relative hover:text-blue-600 transition-colors">
            <i class="fas fa-shopping-bag"></i>
            <span
              class="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold"
              >2</span
            >
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section (Only on first page maybe? Let's keep it static for now as branding) -->
    <section
      v-if="
        scope.productPage.params.page === 1 && !scope.productPage.params.term
      "
      class="relative h-[400px] md:h-[500px] bg-gray-50 flex items-center overflow-hidden mb-8"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop"
          class="w-full h-full object-cover opacity-90 grayscale brightness-125"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-gray-100/90 via-gray-100/50 to-transparent"
        ></div>
      </div>
      <div
        class="container mx-auto px-6 relative z-10 flex flex-col items-start max-w-2xl"
      >
        <span
          class="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 mb-4 uppercase tracking-wider"
          >Fall Collection 2026</span
        >
        <h1
          class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
        >
          Refined <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500"
            >Minimalism.</span
          >
        </h1>
      </div>
    </section>

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-8 flex flex-col md:flex-row gap-12">
      <!-- Sidebar -->
      <aside class="w-full md:w-64 shrink-0 space-y-10">
        <!-- Search -->
        <div>
          <h3
            class="font-bold text-sm uppercase tracking-widest mb-6 border-b border-gray-200 pb-2"
          >
            Search
          </h3>
          <div class="relative">
            <input
              type="text"
              v-model="scope.productPage.params.term"
              placeholder="Product name..."
              class="w-full bg-gray-50 border border-gray-200 p-3 pl-10 text-sm rounded-sm focus:border-black outline-none transition-colors"
            />
            <icon
              name="ic:baseline-search"
              class="absolute left-3 top-3 text-gray-400"
              size="18"
            />
          </div>
        </div>

        <div>
          <h4 class="text-xs font-semibold mb-3 uppercase tracking-wide">
            Price Range
          </h4>
          <div class="flex items-center gap-2 text-sm">
            <input
              type="number"
              v-model.number="scope.productPage.params.priceMin"
              placeholder="0"
              class="w-full bg-gray-50 border border-gray-200 p-2 text-xs rounded-sm focus:border-black outline-none transition-colors"
            />
            <span class="text-gray-400">-</span>
            <input
              type="number"
              v-model.number="scope.productPage.params.priceMax"
              placeholder="Max"
              class="w-full bg-gray-50 border border-gray-200 p-2 text-xs rounded-sm focus:border-black outline-none transition-colors"
            />
          </div>
        </div>

        <!-- Categories (Tags) -->
        <div v-if="scope.taxonomy.tags">
          <h3
            class="font-bold text-sm uppercase tracking-widest mb-6 border-b border-gray-200 pb-2"
          >
            Collections
          </h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li
              v-for="tag in scope.taxonomy.tags"
              :key="tag.id"
              class="flex justify-between items-center cursor-pointer transition-all hover:text-black px-2 py-1 -mx-2 rounded"
              :class="
                isFiltered(scope.productPage.params.tags, tag.id)
                  ? 'font-bold text-black bg-gray-100'
                  : ''
              "
              @click="
                scope.productPage.paramToggle(
                  tag.id,
                  scope.productPage.params.tags
                )
              "
            >
              <span>{{ tag.name }}</span>
              <!-- <span class="text-xs text-gray-400">12</span> Mock count -->
            </li>
          </ul>
        </div>

        <!-- Types -->
        <div v-if="scope.taxonomy.types">
          <h3
            class="font-bold text-sm uppercase tracking-widest mb-6 border-b border-gray-200 pb-2"
          >
            Category
          </h3>

          <div class="mb-6">
            <div class="space-y-2">
              <label
                v-for="type in scope.taxonomy.types"
                :key="type.id"
                class="flex items-center gap-2 cursor-pointer group"
              >
                <div
                  class="w-4 h-4 border border-gray-300 rounded flex items-center justify-center transition-colors group-hover:border-black"
                  :class="
                    isFiltered(scope.productPage.params.types, type.id)
                      ? 'bg-black border-black'
                      : 'bg-white'
                  "
                >
                  <i
                    class="fas fa-check text-white text-[10px]"
                    v-if="isFiltered(scope.productPage.params.types, type.id)"
                  ></i>
                </div>
                <span
                  class="text-sm text-gray-600 group-hover:text-black transition-colors"
                  >{{ type.name }}</span
                >
              </label>
            </div>
          </div>
        </div>
        <!-- Ad Banner Sidebar -->
        <div class="bg-gray-100 p-6 text-center rounded-sm">
          <h4 class="font-serif italic text-lg mb-2">Summer Sale</h4>
          <p class="text-xs text-gray-600 mb-4">
            Up to 50% Off on selected items.
          </p>
          <a
            href="#"
            class="text-xs font-bold underline hover:text-blue-600"
            >View Offers</a
          >
        </div>
      </aside>

      <!-- Product Listing -->
      <div class="flex-1">
        <!-- Tools Bar -->
        <div
          class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-gray-100 pb-4"
        >
          <p class="text-sm text-gray-500">
            Showing
            <span class="font-bold text-black">{{
              scope.productPage.data.length
            }}</span>
            working results
          </p>
          <div class="flex items-center gap-4">
            <!-- Sort mock -->
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <span>Ordenar Por:</span>
              <select
                v-model="scope.productPage.params.order"
                class="border-none bg-transparent font-semibold text-black focus:ring-0 cursor-pointer outline-none"
              >
                <option value="price:asc">Menor Preço</option>
                <option value="price:desc">Maior Preço</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Grid -->
        <div
          v-if="scope.productPage.data.length > 0"
          class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
        >
          <div
            v-for="product in scope.productPage.data"
            :key="product.id"
            class="group cursor-pointer"
          >
            <!-- Image Container -->
            <div
              class="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-sm"
            >
              <img
                :src="product.image"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <!-- Badges from Flags -->
              <div
                v-if="product.flags && product.flags.length"
                class="absolute top-2 left-2 flex flex-col gap-1 items-start"
              >
                <span
                  v-for="flag in product.flags"
                  :key="flag"
                  class="bg-white px-2 py-1 text-[10px] uppercase font-bold tracking-wider shadow-sm"
                  :class="flag === 'promo' ? 'text-red-600' : 'text-black'"
                >
                  {{
                    scope.taxonomy.flags.find((f) => f.id === flag)?.name ||
                    flag
                  }}
                </span>
              </div>

              <!-- Hover Actions -->
              <div
                class="absolute bottom-4 left-0 right-0 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <button
                  class="w-full bg-white/95 backdrop-blur-sm text-black py-3 text-xs uppercase font-bold tracking-widest hover:bg-black hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  Add to Cart
                </button>
              </div>

              <button
                class="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:text-red-500 shadow-sm translate-x-2 group-hover:translate-x-0"
              >
                <i class="far fa-heart"></i>
              </button>
            </div>

            <!-- Info -->
            <div class="space-y-1">
              <div class="flex justify-between items-start">
                <h3
                  class="text-sm font-medium text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors"
                >
                  {{ product.name }}
                </h3>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-sm font-semibold text-gray-900"
                  >R$ {{ product.price.toFixed(2) }}</span
                >
              </div>
              <!-- Tags Mock Row -->
              <div class="text-[10px] text-gray-400 line-clamp-1">
                {{
                  product.tags
                    .map(
                      (t) =>
                        scope.taxonomy.tags.find((tag) => tag.id === t)?.name
                    )
                    .join(", ")
                }}
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="py-20 text-center text-gray-500"
        >
          <p class="text-xl font-light mb-4">No products found.</p>
          <button
            @click="
              scope.productPage.params = {
                ...scope.productPage.params,
                term: '',
                types: [],
                tags: [],
                priceMin: null,
                priceMax: null,
              }
            "
            class="text-blue-600 underline text-sm"
          >
            Clear filters
          </button>
        </div>

        <!-- Pagination -->
        <div
          class="mt-20 flex justify-center"
          v-if="scope.productPage.pages > 1"
        >
          <nav class="flex items-center gap-2">
            <button
              @click="scope.productPage.setPage('first')"
              class="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all text-xs font-medium rounded-sm disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600"
            >
              <icon
                name="ic:round-keyboard-double-arrow-left"
                size="30"
              />
            </button>

            <button
              @click="scope.productPage.setPage('prev')"
              class="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all text-xs font-medium rounded-sm disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600"
            >
              <icon
                name="ic:baseline-keyboard-arrow-left"
                size="30"
              />
            </button>

            <template
              v-for="p in scope.productPage.pages"
              :key="p"
            >
              <button
                @click="scope.productPage.setPage(p)"
                class="w-10 h-10 flex items-center justify-center border text-xs font-medium rounded-sm transition-all"
                :class="
                  scope.productPage.params.page === p
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 text-gray-600 hover:border-black hover:bg-black hover:text-white'
                "
              >
                {{ p }}
              </button>
            </template>

            <button
              @click="scope.productPage.setPage('next')"
              class="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all text-xs font-medium rounded-sm disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600"
            >
              <icon
                name="ic:round-keyboard-double-arrow-right"
                size="30"
              />
            </button>

            <button
              @click="scope.productPage.setPage('last')"
              class="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-black hover:text-white transition-all text-xs font-medium rounded-sm disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-600"
            >
              <icon
                name="ic:baseline-keyboard-arrow-right"
                size="30"
              />
            </button>
          </nav>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div
        class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
      >
        <div class="space-y-6">
          <a
            href="#"
            class="text-2xl font-bold tracking-tighter block"
            >BASE<span class="text-blue-500">.</span></a
          >
          <p class="text-gray-400 text-sm leading-relaxed">
            Designed for the modern individual. We curate timeless essentials
            that elevate your everyday life. Quality over quantity, always.
          </p>
          <div class="flex gap-4">
            <a
              href="#"
              class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              href="#"
              class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              ><i class="fab fa-twitter"></i
            ></a>
            <a
              href="#"
              class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              ><i class="fab fa-pinterest"></i
            ></a>
          </div>
        </div>

        <div>
          <h4 class="font-bold text-sm uppercase tracking-widest mb-6">Shop</h4>
          <ul class="space-y-4 text-sm text-gray-400">
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors"
                >All Products</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors"
                >New Arrivals</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors"
                >Best Sellers</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors"
                >Sale</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-sm uppercase tracking-widest mb-6">
            Support
          </h4>
          <ul class="space-y-4 text-sm text-gray-400">
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors"
                >Contact Us</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors"
                >Shipping & Returns</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors"
                >FAQ</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-sm uppercase tracking-widest mb-6">
            Newsletter
          </h4>
          <p class="text-gray-400 text-sm mb-4">
            Subscribe to receive updates.
          </p>
          <form class="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              class="bg-gray-800 border-none text-white text-sm w-full px-4 py-3 outline-none focus:ring-1 ring-blue-500"
            />
            <button
              class="bg-blue-600 px-6 font-bold uppercase text-xs tracking-widest hover:bg-blue-700 transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div
        class="container mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4"
      >
        <p>&copy; 2026 BASE Store.</p>
        <div class="flex gap-4">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.font-inter {
  font-family: "Inter", system-ui, -apple-system, sans-serif;
}
</style>
