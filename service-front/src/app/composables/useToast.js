export default () => {
  const scope = defineStore("toast", () => {
    return reactive({
      items: [],
      add(item) {
        const toastItem = {
          type: "success",
          title: "",
          text: "",
          timeout: 5000,
          ...item,
        };
        scope.items.push(toastItem);
        if (toastItem.timeout) {
          setTimeout(() => {
            scope.close(toastItem);
          }, toastItem.timeout);
        }
      },
      close(item) {
        const index = scope.items.indexOf(item);
        scope.items.splice(index, 1);
      },
    });
  })();

  return scope;
};
