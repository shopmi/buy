<script setup lang="ts">
useHead({
  title: "Abissal | Archivist of the Obscure",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Cinzel:wght@400;700;900&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap",
    },
  ],
  bodyAttrs: {
    class: "bg-[#050505]", // Ensure global background matches void black to avoid flashes
  },
});
const shop = useShop("abissal");
</script>

<template>
  <div class="abissal-layout selection:bg-blood-red selection:text-black">
    <div class="noise-overlay"></div>

    <!-- Background Symbols -->
    <div
      class="fixed top-20 left-10 text-ashes-gray/10 text-9xl pointer-events-none select-none z-0"
    >
      🜏
    </div>
    <div
      class="fixed bottom-40 right-10 text-ashes-gray/10 text-9xl pointer-events-none select-none z-0 symbol-spin"
    >
      ⛤
    </div>
    <div
      class="fixed top-1/3 right-1/4 text-ashes-gray/10 text-6xl pointer-events-none select-none z-0"
    >
      👁
    </div>
    <!-- New Symbols -->
    <div
      class="fixed top-1/4 left-1/3 text-blood-red/5 text-8xl pointer-events-none select-none z-0 symbol-float"
    >
      🜂
    </div>
    <div
      class="fixed bottom-10 left-20 text-ashes-gray/10 text-6xl pointer-events-none select-none z-0"
      style="transform: rotate(45deg)"
    >
      🜍
    </div>
    <div
      class="fixed top-10 right-1/3 text-ashes-gray/5 text-9xl pointer-events-none select-none z-0 symbol-spin"
      style="animation-duration: 40s"
    >
      ❂
    </div>
    <div
      class="fixed bottom-1/4 right-20 text-blood-red/10 text-5xl pointer-events-none select-none z-0 symbol-float"
      style="animation-delay: 1s"
    >
      ☾
    </div>

    <!-- Navigation -->
    <nav
      class="fixed top-0 w-full z-40 bg-void-black/80 backdrop-grayscale border-b border-ashes-gray/30"
    >
      <div
        class="container mx-auto px-6 py-4 flex justify-between items-center"
      >
        <!-- Logo -->
        <a
          href="#"
          class="flex items-center gap-2 group"
        >
          <span
            class="text-2xl tracking-widest uppercase font-cinzel text-white group-hover:text-blood-red transition-colors font-bold"
            >Abissal</span
          >
        </a>

        <!-- Desktop Menu -->
        <div
          class="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-500"
        >
          <a
            href="#shop"
            class="hover:text-white transition-colors"
            >Cinema</a
          >
          <a
            href="#shop"
            class="hover:text-white transition-colors"
            >Sonic</a
          >
          <a
            href="#shop"
            class="hover:text-white transition-colors"
            >Oddities</a
          >
          <a
            href="#manifesto"
            class="text-blood-red hover:text-white transition-colors"
            >Manifesto</a
          >
        </div>
      </div>
    </nav>

    <!-- Floating Cart Trigger -->
    <div
      @click="shop.cart.drawer.toggle()"
      class="fixed bottom-8 right-8 z-[500] w-16 h-16 bg-[#050505] border border-red-900/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-900/20 hover:scale-110 hover:rotate-6 transition-all duration-300 shadow-[0_0_30px_rgba(138,3,3,0.2)] group"
    >
      <i
        class="fas fa-shopping-basket text-2xl text-gray-400 group-hover:text-[#8a0303] transition-colors"
      ></i>
      <div
        v-if="shop.cart.items.length > 0"
        class="absolute -top-1 -right-1 flex items-center justify-center w-6 h-6 bg-[#8a0303] text-white text-[10px] font-bold rounded-full border border-black shadow-lg"
      >
        {{ shop.cart.items.length }}
      </div>
      <!-- Pulse Effect -->
      <div
        class="absolute inset-0 rounded-full border border-red-900/20 animate-ping opacity-20 pointer-events-none"
      ></div>

      <icon
        name="material-symbols:shopping-bag-sharp"
        class="text-blood-red"
        size="30"
      />
    </div>

    <slot name="default"></slot>

    <!-- Manifesto -->
    <section
      class="py-24 bg-zinc-900 text-center relative border-y border-gray-800"
    >
      <div class="container mx-auto px-6 max-w-3xl">
        <div class="text-4xl mb-6 text-blood-red">🜄 🜃 🜂 🜁</div>
        <h2 class="text-4xl md:text-5xl mb-8">We Serve the Void</h2>
        <p class="text-gray-400 leading-loose">
          In a world of mass-produced mediocrity, we curate the strange, the
          unsettling, and the profound. Our garments are not mere clothing; they
          are signals to others who dwell in the shadows. Whether you worship at
          the altar of Jodorowsky or find solace in the noise of Merzbow, you
          have found your coven.
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer
      class="bg-black py-20 text-gray-600 text-xs border-t border-gray-900 relative overflow-hidden"
    >
      <div class="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <h4 class="text-white text-lg mb-6">Explore</h4>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="hover:text-blood-red transition-colors"
                >New Arrivals</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-blood-red transition-colors"
                >Best Sellers</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-blood-red transition-colors"
                >Artists</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-blood-red transition-colors"
                >Gift Cards</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-white text-lg mb-6">Support</h4>
          <ul class="space-y-3">
            <li>
              <a
                href="#"
                class="hover:text-blood-red transition-colors"
                >Shipping & Returns</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-blood-red transition-colors"
                >FAQ</a
              >
            </li>
            <li>
              <a
                href="#"
                class="hover:text-blood-red transition-colors"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
        <div class="md:col-span-2">
          <h4 class="text-white text-lg mb-6">Join the Outer Circle</h4>
          <p class="mb-6 max-w-md">
            Subscribe to receive updates on new drops, esoteric rituals, and
            forbidden knowledge.
          </p>
          <div class="flex border-b border-white/20 pb-2 max-w-sm">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              class="bg-transparent w-full outline-none text-white placeholder-gray-700 uppercase"
            />
            <button
              class="text-blood-red hover:text-white uppercase font-bold text-sm"
            >
              Submit
            </button>
          </div>
          <div class="flex gap-6 mt-8 text-xl">
            <a
              href="#"
              class="hover:text-white transition-colors"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              href="#"
              class="hover:text-white transition-colors"
              ><i class="fab fa-twitter"></i
            ></a>
            <a
              href="#"
              class="hover:text-white transition-colors"
              ><i class="fab fa-pinterest"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="mt-20 text-center uppercase tracking-widest opacity-30">
        &copy; 2026 Abissal. The abyss gazes back.
      </div>

      <!-- Background decorative text -->
      <div
        class="absolute bottom-0 right-0 text-[10rem] leading-none text-white/5 pointer-events-none select-none font-bold mix-blend-overlay"
      >
        VOID
      </div>
    </footer>
  </div>
</template>

<style>
.abissal-layout {
  /* Variables defined in @theme mapped to CSS variables here for local scope use if needed,
       but Tailwind classes like bg-void-black need these to be in the theme config 
       OR we can define them as simple CSS variables and use arbitrary values if theme isn't updated.
       To be safe and faithful to the provided CSS, I will define the variables on the root.
       However, the provided HTML uses classes like 'bg-void-black' which implies these colors are in the tailwind theme.
       If they are NOT in the globally configured theme, these classes won't work.
       The user provided:
       @theme { --color-void-black: #050505; ... }
       In Tailwind v4 css-in-js, this works.
       To replicate this in a Vue component without touching the global tailwind config,
       we can use distinct classes or style attributes, but the user asked for faithful translation.
       
       Solution: I'll map the custom colors to standard CSS classes within this scope to ensure they work 
       even if the global tailwind config doesn't have them. 
       Wait, 'bg-void-black' is a utility class generated from the theme.
       I will add the CSS variables and manually create the utility classes for these SPECIFIC colors 
       in the style block to ensure the HTML works as is.
    */
  --color-void-black: #050505;
  --color-blood-red: #8a0303;
  --color-bone-white: #d4d4d4;
  --color-ashes-gray: #4a4a4a;
  --color-cold-blue: #1c2e4a;

  background-color: var(--color-void-black);
  color: var(--color-bone-white);
  font-family: "Courier Prime", monospace;
  overflow-x: hidden;
  min-height: 100vh;
}

/* Utility class overrides/polyfills for the custom theme colors if they don't exist globally */
.bg-void-black {
  background-color: var(--color-void-black);
}
.text-void-black {
  color: var(--color-void-black);
}
.from-void-black {
  --tw-gradient-from: var(--color-void-black);
  --tw-gradient-to: rgb(5 5 5 / 0);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.to-void-black {
  --tw-gradient-to: var(--color-void-black);
}
.bg-blood-red {
  background-color: var(--color-blood-red);
}
.text-blood-red {
  color: var(--color-blood-red);
}
.border-blood-red {
  border-color: var(--color-blood-red);
}
.accent-blood-red {
  accent-color: var(--color-blood-red);
}
.selection\:bg-blood-red::selection {
  background-color: var(--color-blood-red);
}
/* text-blood-red/5 -> This opacity syntax requires Tailwind to know the color or using rgba/hsla variables. 
   I will attempt to handle the opacity classes used: 
   text-ashes-gray/10
   text-ashes-gray/5
   text-blood-red/10
   text-blood-red/5
   bg-void-black/80
   border-ashes-gray/30
*/
.text-ashes-gray\/10 {
  color: color-mix(in srgb, var(--color-ashes-gray), transparent 90%);
}
.text-ashes-gray\/5 {
  color: color-mix(in srgb, var(--color-ashes-gray), transparent 95%);
}
.text-blood-red\/10 {
  color: color-mix(in srgb, var(--color-blood-red), transparent 90%);
}
.text-blood-red\/5 {
  color: color-mix(in srgb, var(--color-blood-red), transparent 95%);
}
.bg-void-black\/80 {
  background-color: color-mix(
    in srgb,
    var(--color-void-black),
    transparent 20%
  );
}
.border-ashes-gray\/30 {
  border-color: color-mix(in srgb, var(--color-ashes-gray), transparent 70%);
}

/* Standard CSS from the provided snippet */

h1,
h2,
h3,
h4 {
  font-family: "Cinzel", serif;
  letter-spacing: 0.05em;
}

.font-gothic {
  font-family: "UnifrakturMaguntia", cursive;
}
.font-cinzel {
  font-family: "Cinzel", serif;
}

/* Noise Grain Texture */
.noise-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;
  opacity: 0.07;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}

/* Occult Symbols Rotation */
.symbol-spin {
  animation: spin-slow 20s linear infinite;
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Glitch Effect on Hover */
.glitch-hover:hover {
  animation: glitch-anim 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  filter: invert(1) contrast(1.5);
}

@keyframes glitch-anim {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

.red-glow {
  text-shadow: 0 0 10px rgba(138, 3, 3, 0.8);
}

/* Floating Animation */
.symbol-float {
  animation: float-anim 6s ease-in-out infinite;
}

@keyframes float-anim {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* Global Scrollbar for Abissal Theme */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: #050505;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(138, 3, 3, 0.5);
  border-radius: 999px;
  border: 3px solid #050505;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(138, 3, 3, 0.8);
  border: 2px solid #050505;
}
</style>
