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
          />
          <i class="fas fa-search absolute top-3.5 left-3 text-gray-500"></i>
        </div>

        <!-- Categories -->
        <div>
          <h3
            class="text-xl text-white mb-6 border-l-2 border-blood-red pl-3 uppercase flex items-center gap-2"
          >
            <span class="text-blood-red">🜃</span> Categoria
          </h3>
          <div class="space-y-3">
            <label class="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                class="accent-blood-red w-4 h-4 bg-gray-900 border-gray-700 rounded-none focus:ring-0"
              />
              <span
                class="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm uppercase"
                >Filmes Cult (66)</span
              >
            </label>
            <label class="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                class="accent-blood-red w-4 h-4 bg-gray-900 border-gray-700 rounded-none focus:ring-0"
              />
              <span
                class="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm uppercase"
                >Bandas Obscuras (42)</span
              >
            </label>
            <label class="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                class="accent-blood-red w-4 h-4 bg-gray-900 border-gray-700 rounded-none focus:ring-0"
              />
              <span
                class="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm uppercase"
                >Anime Gore (13)</span
              >
            </label>
            <label class="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                class="accent-blood-red w-4 h-4 bg-gray-900 border-gray-700 rounded-none focus:ring-0"
              />
              <span
                class="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm uppercase"
                >Ocultismo (9)</span
              >
            </label>
            <label class="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                class="accent-blood-red w-4 h-4 bg-gray-900 border-gray-700 rounded-none focus:ring-0"
              />
              <span
                class="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm uppercase"
                >Séries B (21)</span
              >
            </label>
          </div>
        </div>

        <!-- Product Type -->
        <div>
          <h3
            class="text-xl text-white mb-6 border-l-2 border-blood-red pl-3 uppercase flex items-center gap-2"
          >
            <span class="text-blood-red">🜂</span> Tipo de Produto
          </h3>
          <div class="space-y-3">
            <label class="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                class="accent-blood-red w-4 h-4"
              />
              <span
                class="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm uppercase"
                >Camisetas</span
              >
            </label>
            <label class="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                class="accent-blood-red w-4 h-4"
              />
              <span
                class="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm uppercase"
                >Moletons</span
              >
            </label>
            <label class="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                class="accent-blood-red w-4 h-4"
              />
              <span
                class="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm uppercase"
                >Canecas</span
              >
            </label>
            <label class="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                class="accent-blood-red w-4 h-4"
              />
              <span
                class="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm uppercase"
                >Almofadas</span
              >
            </label>
            <label class="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                class="accent-blood-red w-4 h-4"
              />
              <span
                class="ml-3 text-gray-400 group-hover:text-white transition-colors text-sm uppercase"
                >Prints / Quadros</span
              >
            </label>
          </div>
        </div>

        <!-- Sizes -->
        <div>
          <h3
            class="text-xl text-white mb-6 border-l-2 border-blood-red pl-3 uppercase flex items-center gap-2"
          >
            <span class="text-blood-red">🜄</span> Tamanho
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
          <p class="text-gray-500 text-sm">Showing 6 of 666 Artifacts</p>
          <div class="flex gap-4 text-sm">
            <span class="text-gray-500">Sort by:</span>
            <select
              class="bg-transparent text-white outline-none cursor-pointer uppercase font-bold"
            >
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <!-- Item 1 -->
          <div class="group cursor-pointer">
            <div
              class="relative aspect-[4/5] overflow-hidden bg-gray-900 mb-4 border border-gray-800 group-hover:border-blood-red transition-colors"
            >
              <img
                src="https://placehold.co/600x800/111111/dddddd?text=ERASERHEAD"
                class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 glitch-hover filter grayscale contrast-125"
              />
              <div
                class="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 font-mono uppercase"
              >
                Lynchian Tech
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3
                  class="text-xl font-bold mb-1 group-hover:text-blood-red transition-colors"
                >
                  In Heaven T-Shirt
                </h3>
                <p class="text-xs text-gray-500 uppercase tracking-wider">
                  Filme / Surrealismo
                </p>
              </div>
              <span class="text-lg font-bold text-gray-300">$35</span>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="group cursor-pointer">
            <div
              class="relative aspect-[4/5] overflow-hidden bg-gray-900 mb-4 border border-gray-800 group-hover:border-blood-red transition-colors"
            >
              <img
                src="https://placehold.co/600x800/050505/8a0303?text=SUSPIRIA"
                class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 glitch-hover"
              />
              <div class="absolute top-2 right-2 flex gap-1">
                <span class="text-blood-red text-xs">●</span>
                <span class="text-blood-red text-xs">●</span>
                <span class="text-blood-red text-xs">●</span>
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3
                  class="text-xl font-bold mb-1 group-hover:text-blood-red transition-colors"
                >
                  Three Mothers Hoodie
                </h3>
                <p class="text-xs text-gray-500 uppercase tracking-wider">
                  Filme / Giallo
                </p>
              </div>
              <span class="text-lg font-bold text-gray-300">$65</span>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="group cursor-pointer">
            <div
              class="relative aspect-[4/5] overflow-hidden bg-gray-900 mb-4 border border-gray-800 group-hover:border-blood-red transition-colors"
            >
              <img
                src="https://placehold.co/600x800/1a1a1a/cccccc?text=JOY+DIVISION"
                class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 glitch-hover filter grayscale contrast-150"
              />
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3
                  class="text-xl font-bold mb-1 group-hover:text-blood-red transition-colors"
                >
                  Unknown Pleasures Mug
                </h3>
                <p class="text-xs text-gray-500 uppercase tracking-wider">
                  Música / Post-Punk
                </p>
              </div>
              <span class="text-lg font-bold text-gray-300">$20</span>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="group cursor-pointer">
            <div
              class="relative aspect-[4/5] overflow-hidden bg-gray-900 mb-4 border border-gray-800 group-hover:border-blood-red transition-colors"
            >
              <img
                src="https://placehold.co/600x800/000000/ffffff?text=JODOROWSKY"
                class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 glitch-hover"
              />
              <div
                class="absolute bottom-2 left-2 bg-blood-red text-black text-xs px-2 py-1 font-mono uppercase font-bold"
              >
                Limited
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3
                  class="text-xl font-bold mb-1 group-hover:text-blood-red transition-colors"
                >
                  Holy Mountain Print
                </h3>
                <p class="text-xs text-gray-500 uppercase tracking-wider">
                  Arte / Esotérico
                </p>
              </div>
              <span class="text-lg font-bold text-gray-300">$45</span>
            </div>
          </div>

          <!-- Item 5 -->
          <div class="group cursor-pointer">
            <div
              class="relative aspect-[4/5] overflow-hidden bg-gray-900 mb-4 border border-gray-800 group-hover:border-blood-red transition-colors"
            >
              <img
                src="https://placehold.co/600x800/0a0a0a/444444?text=BAUHAUS"
                class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 glitch-hover filter grayscale contrast-125"
              />
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3
                  class="text-xl font-bold mb-1 group-hover:text-blood-red transition-colors"
                >
                  Bela Lugosi's Tote
                </h3>
                <p class="text-xs text-gray-500 uppercase tracking-wider">
                  Música / Goth
                </p>
              </div>
              <span class="text-lg font-bold text-gray-300">$25</span>
            </div>
          </div>

          <!-- Item 6 -->
          <div class="group cursor-pointer">
            <div
              class="relative aspect-[4/5] overflow-hidden bg-gray-900 mb-4 border border-gray-800 group-hover:border-blood-red transition-colors"
            >
              <img
                src="https://placehold.co/600x800/050505/222222?text=H%C3%A4xan"
                class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 glitch-hover"
              />
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-white/20"
              >
                ⛧
              </div>
            </div>
            <div class="flex justify-between items-start">
              <div>
                <h3
                  class="text-xl font-bold mb-1 group-hover:text-blood-red transition-colors"
                >
                  Witchcraft Pillow
                </h3>
                <p class="text-xs text-gray-500 uppercase tracking-wider">
                  Cinema / Silent
                </p>
              </div>
              <span class="text-lg font-bold text-gray-300">$40</span>
            </div>
          </div>
        </div>

        <div class="mt-24 text-center">
          <button
            class="border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition-all uppercase tracking-widest"
          >
            Load More from the Abyss
          </button>
        </div>
      </main>
    </div>
  </section>
</template>
