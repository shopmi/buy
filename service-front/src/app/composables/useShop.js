import _ from "lodash";

export default (id) => {
  const modules = import.meta.glob("@/assets/data/*.js");

  const scope = defineStore(id, () => {
    const importFn = modules[`/assets/data/${id}.js`];
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
    });
  })();

  return scope;
};
