<script setup>
useHead({
  title: "BASE. | Mininal Store",
  bodyAttrs: {
    class: "bg-white text-gray-900 antialiased font-sans",
  },
});

const products = [
  {
    id: 1,
    name: "Premium Wool coat",
    price: 299.0,
    oldPrice: 350.0,
    tag: "Sale",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Linen Blend Suit",
    price: 189.0,
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Minimalist Leather Watch",
    price: 120.0,
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Signature Canvas Tote",
    price: 85.0,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Chelsea Boots Midnight",
    price: 210.0,
    image:
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Oxford Cotton Shirt",
    price: 55.0,
    oldPrice: 75.0,
    tag: "-25%",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Relaxed Fit Chinos",
    price: 65.0,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Cashmere Scarf",
    price: 45.0,
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=900&auto=format&fit=crop",
  },
];
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
        <a
          href="#"
          class="text-2xl md:text-3xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          BASE<span class="text-blue-600">.</span>
        </a>

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

    <!-- Hero Section -->
    <section
      class="relative h-[500px] md:h-[600px] bg-gray-50 flex items-center overflow-hidden"
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
          class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
        >
          Refined <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500"
            >Minimalism.</span
          >
        </h1>
        <p class="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
          Clean lines, premium materials, and timeless silhouettes. Discover the
          new standard in modern essentials.
        </p>
        <div class="flex gap-4">
          <button
            class="bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-all text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Shop Men
          </button>
          <button
            class="bg-white text-black border border-gray-200 px-8 py-4 font-semibold hover:bg-gray-50 transition-all text-sm uppercase tracking-wider shadow-sm hover:shadow-md"
          >
            Shop Women
          </button>
        </div>
      </div>
    </section>

    <!-- Trusted Bar -->
    <div class="border-y border-gray-100 py-8 bg-white">
      <div class="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="flex items-center gap-4 text-gray-500">
          <i class="fas fa-shipping-fast text-2xl"></i>
          <div class="flex flex-col">
            <span
              class="text-xs font-bold uppercase tracking-wide text-gray-900"
              >Fast Shipping</span
            >
            <span class="text-[10px]">Free delivery over $200</span>
          </div>
        </div>
        <div class="flex items-center gap-4 text-gray-500">
          <i class="fas fa-undo text-2xl"></i>
          <div class="flex flex-col">
            <span
              class="text-xs font-bold uppercase tracking-wide text-gray-900"
              >Free Returns</span
            >
            <span class="text-[10px]">30-day return policy</span>
          </div>
        </div>
        <div class="flex items-center gap-4 text-gray-500">
          <i class="fas fa-shield-alt text-2xl"></i>
          <div class="flex flex-col">
            <span
              class="text-xs font-bold uppercase tracking-wide text-gray-900"
              >Secure Payment</span
            >
            <span class="text-[10px]">100% secure checkout</span>
          </div>
        </div>
        <div class="flex items-center gap-4 text-gray-500">
          <i class="fas fa-headset text-2xl"></i>
          <div class="flex flex-col">
            <span
              class="text-xs font-bold uppercase tracking-wide text-gray-900"
              >24/7 Support</span
            >
            <span class="text-[10px]">Dedicated support team</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <main class="container mx-auto px-6 py-16 flex flex-col md:flex-row gap-12">
      <!-- Sidebar -->
      <aside class="w-full md:w-64 shrink-0 space-y-10">
        <!-- Categories -->
        <div>
          <h3
            class="font-bold text-sm uppercase tracking-widest mb-6 border-b border-gray-200 pb-2"
          >
            Collections
          </h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li
              class="flex justify-between items-center cursor-pointer hover:text-black hover:translate-x-1 transition-all"
            >
              <span>All Products</span>
              <span class="text-xs text-gray-400">124</span>
            </li>
            <li
              class="flex justify-between items-center cursor-pointer hover:text-black hover:translate-x-1 transition-all"
            >
              <span>New Arrivals</span>
              <span class="text-xs text-blue-600 font-bold">New</span>
            </li>
            <li
              class="flex justify-between items-center cursor-pointer hover:text-black hover:translate-x-1 transition-all"
            >
              <span>Coats & Jackets</span>
              <span class="text-xs text-gray-400">18</span>
            </li>
            <li
              class="flex justify-between items-center cursor-pointer hover:text-black hover:translate-x-1 transition-all"
            >
              <span>Trousers</span>
              <span class="text-xs text-gray-400">24</span>
            </li>
            <li
              class="flex justify-between items-center cursor-pointer hover:text-black hover:translate-x-1 transition-all"
            >
              <span>Accessories</span>
              <span class="text-xs text-gray-400">42</span>
            </li>
          </ul>
        </div>

        <!-- Filters -->
        <div>
          <h3
            class="font-bold text-sm uppercase tracking-widest mb-6 border-b border-gray-200 pb-2"
          >
            Filter By
          </h3>

          <div class="mb-6">
            <h4 class="text-xs font-semibold mb-3">Color</h4>
            <div class="flex flex-wrap gap-2">
              <button
                class="w-6 h-6 rounded-full bg-black border border-gray-200 hover:ring-2 ring-offset-1 ring-gray-300"
              ></button>
              <button
                class="w-6 h-6 rounded-full bg-white border border-gray-300 hover:ring-2 ring-offset-1 ring-gray-300"
              ></button>
              <button
                class="w-6 h-6 rounded-full bg-gray-500 border border-gray-200 hover:ring-2 ring-offset-1 ring-gray-300"
              ></button>
              <button
                class="w-6 h-6 rounded-full bg-blue-900 border border-gray-200 hover:ring-2 ring-offset-1 ring-gray-300"
              ></button>
              <button
                class="w-6 h-6 rounded-full bg-[#e5d0b1] border border-gray-200 hover:ring-2 ring-offset-1 ring-gray-300"
              ></button>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-xs font-semibold mb-3">Size</h4>
            <div class="grid grid-cols-4 gap-2">
              <button
                class="border border-gray-200 py-1 text-xs hover:border-black hover:bg-black hover:text-white transition-all"
              >
                S
              </button>
              <button
                class="border border-black bg-black text-white py-1 text-xs"
              >
                M
              </button>
              <button
                class="border border-gray-200 py-1 text-xs hover:border-black hover:bg-black hover:text-white transition-all"
              >
                L
              </button>
              <button
                class="border border-gray-200 py-1 text-xs hover:border-black hover:bg-black hover:text-white transition-all"
              >
                XL
              </button>
            </div>
          </div>

          <div>
            <h4 class="text-xs font-semibold mb-3">Price Range</h4>
            <div class="flex items-center gap-2 text-sm">
              <input
                type="number"
                placeholder="0"
                class="w-full bg-gray-50 border border-gray-200 p-2 text-xs rounded-sm"
              />
              <span class="text-gray-400">-</span>
              <input
                type="number"
                placeholder="500"
                class="w-full bg-gray-50 border border-gray-200 p-2 text-xs rounded-sm"
              />
            </div>
          </div>
        </div>
        <!-- Ad Banner Sidebar -->
        <div class="bg-gray-100 p-6 text-center">
          <h4 class="font-serif italic text-lg mb-2">Summer Sale</h4>
          <p class="text-xs text-gray-600 mb-4">
            Up to 50% Off on selected items.
          </p>
          <a
            href="#"
            class="text-xs font-bold underline"
            >View Offers</a
          >
        </div>
      </aside>

      <!-- Product Listing -->
      <div class="flex-1">
        <!-- Tools Bar -->
        <div
          class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
        >
          <p class="text-sm text-gray-500">
            Showing <span class="font-bold text-black">8</span> of
            <span class="font-bold text-black">124</span> Products
          </p>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <span>Sort By:</span>
              <select
                class="border-none bg-transparent font-semibold text-black focus:ring-0 cursor-pointer"
              >
                <option>Recommended</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div class="flex text-gray-400 gap-2 border-l border-gray-200 pl-4">
              <button class="text-black">
                <i class="fas fa-th-large"></i>
              </button>
              <button class="hover:text-black">
                <i class="fas fa-list"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Grid -->
        <div
          class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
        >
          <div
            v-for="product in products"
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

              <!-- Badges -->
              <div
                v-if="product.tag"
                class="absolute top-2 left-2 bg-white px-2 py-1 text-[10px] uppercase font-bold tracking-wider"
                :class="
                  product.tag.includes('%') ? 'text-red-600' : 'text-black'
                "
              >
                {{ product.tag }}
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
                  >${{ product.price.toFixed(2) }}</span
                >
                <span
                  v-if="product.oldPrice"
                  class="text-xs text-gray-400 line-through"
                  >${{ product.oldPrice.toFixed(2) }}</span
                >
              </div>
              <!-- Colors (Mock) -->
              <div
                class="flex gap-1 pt-1 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div class="w-2 h-2 rounded-full bg-black"></div>
                <div class="w-2 h-2 rounded-full bg-gray-400"></div>
                <div
                  v-if="product.id % 2 === 0"
                  class="w-2 h-2 rounded-full bg-[#d2b48c]"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-20 flex justify-center">
          <nav class="flex items-center gap-2">
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all text-xs font-medium rounded-sm"
            >
              <i class="fas fa-angle-double-left"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all text-xs font-medium rounded-sm"
            >
              <i class="fas fa-angle-left"></i>
            </a>

            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center border border-black bg-black text-white text-xs font-medium rounded-sm"
              >1</a
            >
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all text-xs font-medium rounded-sm"
              >2</a
            >
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all text-xs font-medium rounded-sm"
              >3</a
            >

            <span
              class="w-10 h-10 flex items-center justify-center text-gray-400 text-xs"
              >...</span
            >

            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all text-xs font-medium rounded-sm"
            >
              <i class="fas fa-angle-right"></i>
            </a>
            <a
              href="#"
              class="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-600 hover:border-black hover:bg-black hover:text-white transition-all text-xs font-medium rounded-sm"
            >
              <i class="fas fa-angle-double-right"></i>
            </a>
          </nav>
        </div>
      </div>
    </main>

    <!-- Visual Banner -->
    <section class="container mx-auto px-6 mb-20">
      <div
        class="relative h-[300px] rounded-sm overflow-hidden flex items-center justify-center text-center"
      >
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 text-white max-w-lg mx-auto px-4">
          <h2 class="text-3xl font-serif italic mb-4">
            "Style is a way to say who you are, without having to speak."
          </h2>
          <p class="text-xs uppercase tracking-widest opacity-80">
            — Rachel Zoe
          </p>
        </div>
      </div>
    </section>

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
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors"
                >Gift Cards</a
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
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors"
                >Size Guide</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-white transition-colors"
                >Privacy Policy</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-sm uppercase tracking-widest mb-6">
            Newsletter
          </h4>
          <p class="text-gray-400 text-sm mb-4">
            Subscribe to receive updates, access to exclusive deals, and more.
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
        <p>&copy; 2026 BASE Store. All rights reserved.</p>
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
