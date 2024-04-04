import { cart } from '@/constants.js';

export const useClickAdd = () => {
  const addToCart = (item) => {
    if (item.sizes.some((size) => size.active)) {
      cart.value.push(item);
      item.isAdded = true;
      localStorage.setItem('cart', JSON.stringify(cart.value));
    } else {
      item.isShownTooltip = true;
    }
  };

  const removeFromCart = (item) => {
    cart.value.splice(cart.value.indexOf(item), 1);
    item.isAdded = false;
    item.sizes.forEach((size) => (size.active = false));
    localStorage.setItem('cart', JSON.stringify(cart.value));
  };

  const onClickAdd = (item) => {
    if (!item.isAdded) {
      addToCart(item);
    } else {
      removeFromCart(item);
    }
  };

  return { cart, addToCart, removeFromCart, onClickAdd };
};
