export default (id, data) => {
  return defineStore(id, () => {
    const scope = reactive({ test: true });

    scope.taxonomy = data.taxonomy;
    scope.products = data.products;

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
        priceMin: null,
        priceMax: null,
        types: [],
        tags: [],
        flags: [],
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

      const chunk = (arr, size) =>
        Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
          arr.slice(i * size, i * size + size)
        );

      const chunks = chunk(items, scope.productPage.params.limit);
      scope.productPage.pages = chunks.length;
      scope.productPage.results = items.length;
      return chunks[scope.productPage.params.page - 1] || [];
    });

    return scope;
  })();
};
