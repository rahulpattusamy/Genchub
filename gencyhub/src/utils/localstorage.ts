import type { cartProduct } from "../store/ShoppingStatus";

export const saveCartToLocalStorage = (uid: string, cart: cartProduct[]) => {
  localStorage.setItem(`genczhub-cart-${uid}`, JSON.stringify(cart));
};

export const getCartFromLocalStorage = (uid: string): cartProduct[] => {
  const data = localStorage.getItem(`genczhub-cart-${uid}`);
  return data ? JSON.parse(data) : [];
};



