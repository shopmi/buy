import _ from "lodash";
import { useStorage } from "@vueuse/core";

export default (storeId) => {
  const modules = import.meta.glob("@/assets/data/*.js");

  const scope = defineStore(storeId, () => {
    const route = useRoute();
    const importFn = modules[`/assets/data/${storeId}.js`];
    importFn().then((mod) => {
      mod = mod.default || mod;
      scope.ready = true;

      scope.taxonomy = mod.taxonomy;
      Object.entries(scope.taxonomy).map(([attr, items]) => {
        for (const item of items) {
          item.icon = item.icon || "ci:dot-04-l";
          item.color = item.color || "gray";
        }
      });

      scope.products = mod.products.map((product) => {
        for (const attr in scope.taxonomy) {
          product[attr] = product[attr] || [];
        }
        return {
          id: "",
          name: "",
          description: "",
          image: null,
          price: 0,
          priceOld: 0,
          url: null,
          ...product,
        };
      });

      scope.taxonomyItems = (attr, values) => {
        if (typeof scope.taxonomy[attr] == "undefined") return [];
        const taxItems = [...scope.taxonomy[attr]];
        values = [...(values || [])];

        return values.map((value) => {
          return taxItems.find((item) => item.id === value);
        });
      };

      scope.productPage = {
        results: 0,
        pages: 0,
        params: {
          page: 1,
          limit: 12,
          term: "",
          order: "id:desc",
          priceMin: null,
          priceMax: null,
          types: [],
          tags: [],
          flags: [],
        },
        paramToggle(value, array) {
          const index = array.indexOf(value);
          if (index === -1) array.push(value);
          else array.splice(index, 1);
        },
        setPage(page) {
          if (page == "prev") {
            page = scope.productPage.params.page - 1;
          } else if (page == "next") {
            page = scope.productPage.params.page + 1;
          } else if (page == "first") {
            page = 1;
          } else if (page == "last") {
            page = scope.productPage.pages;
          }

          if (page < 1) page = 1;
          if (page > scope.productPage.pages) {
            page = scope.productPage.pages;
          }

          scope.productPage.params.page = page;
        },
      };

      scope.productPage.data = computed(() => {
        let items = [...scope.products];

        if (scope.productPage.params.term.length > 0) {
          items = items.filter((item) => {
            return item.name
              .toLowerCase()
              .includes(scope.productPage.params.term.toLowerCase());
          });
        }

        if (scope.productPage.params.priceMin !== null) {
          items = items.filter((item) => {
            return item.price >= scope.productPage.params.priceMin;
          });
        }

        if (scope.productPage.params.priceMax !== null) {
          items = items.filter((item) => {
            return item.price <= scope.productPage.params.priceMax;
          });
        }

        if (scope.productPage.params.types.length > 0) {
          items = items.filter((item) => {
            return item.types.some((t) =>
              scope.productPage.params.types.includes(t)
            );
          });
        }

        if (scope.productPage.params.tags.length > 0) {
          items = items.filter((item) => {
            return item.tags.some((t) =>
              scope.productPage.params.tags.includes(t)
            );
          });
        }

        if (scope.productPage.params.flags.length > 0) {
          items = items.filter((item) => {
            return item.flags.some((t) =>
              scope.productPage.params.flags.includes(t)
            );
          });
        }

        const [orderBy, order] = scope.productPage.params.order.split(":");
        items = _.orderBy(items, [orderBy], [order]);

        const chunk = (arr, size) =>
          Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
          );

        const chunks = chunk(items, scope.productPage.params.limit);
        scope.productPage.pages = chunks.length;
        scope.productPage.results = items.length;
        return chunks[scope.productPage.params.page - 1] || [];
      });

      scope.cart = {
        items: useStorage(`cart-${storeId}`, []),
        total: computed(() => {
          let total = 0;

          for (const item of scope.cart.items) {
            const product = scope.products.find(
              (product) => product.id === item.productId
            );
            if (product) {
              total += (product.price || 0) * item.quantity;
            }
          }
          return total;
        }),
        add(productId, quantityToAdd = 1) {
          const index = scope.cart.items.findIndex(
            (item) => item.productId === productId
          );

          if (index > -1) {
            const newQuantity =
              scope.cart.items[index].quantity + quantityToAdd;
            if (newQuantity <= 0) {
              scope.cart.items.splice(index, 1);
            } else if (newQuantity <= 99) {
              scope.cart.items[index].quantity = newQuantity;
            }
          } else if (quantityToAdd > 0) {
            scope.cart.items.push({
              productId,
              quantity: Math.min(quantityToAdd, 99),
            });
          }
        },
        remove(productId) {
          const index = scope.cart.items.findIndex(
            (i) => i.productId === productId
          );
          if (index !== -1) {
            scope.cart.items.splice(index, 1);
          }
        },
        drawer: {
          show: false,
          toggle(value = null) {
            if (value === null) {
              value = !scope.cart.drawer.show;
            }
            scope.cart.drawer.show = value;
          },
        },
      };

      if (route.query.order_status) {
        if (route.query.order_status === "success") {
          //
        } else if (route.query.order_status === "cancel") {
          //
        }
      }
    });

    return reactive({
      ready: false,
      head: { title: "" },
      productPage: {
        params: {},
        data: [],
        results: 0,
        pages: 0,
      },
      taxonomy: {},
      products: [],

      cart: {
        items: useStorage(`cart-${storeId}`, []),
        add: () => null,
        remove: () => null,
        drawer: {
          show: false,
          toggle: () => null,
        },
      },
    });
  })();

  return scope;
};
