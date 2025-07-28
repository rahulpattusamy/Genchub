import type { Products } from "../hooks/useProducts";
import type { cartProduct } from "../store/ShoppingStatus";

export const saveCartToLocalStorage = (uid: string, cart?: cartProduct[]) => {
  localStorage.setItem(`genzhub-cart-${uid}`, JSON.stringify(cart));
};

export const getCartFromLocalStorage = (uid: string): cartProduct[] => {
  const data = localStorage.getItem(`genzhub-cart-${uid}`);
  return data ? JSON.parse(data) : [];
};



export const saveWishlistToLocalStorage = (uid: string, wishilst?:Products[]) => {
  localStorage.setItem(`genzhub-wishlist-${uid}`, JSON.stringify(wishilst));
};

export const getWishlistFromLocalStorage = (uid: string): Products[] => {
  const data = localStorage.getItem(`genzhub-wishlist-${uid}`);
  return data ? JSON.parse(data) : [];
};