export const useRememberCartState = (arr) => {
  const localCart = JSON.parse(localStorage.getItem('cart'));

  if (localCart) {
    arr.value.forEach((a) => {
      localCart.forEach((b) => {
        if (a.id === b.id) {
          a.isAdded = true;
          const i = b.sizes.findIndex((c) => {
            return c.active === true;
          });
          a.sizes[i].active = true;
        }
      });
    });
  }
};
