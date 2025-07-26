import { create } from "zustand";
import type { Products } from "../hooks/useProducts";
import auth from "../config/firebase-config";
import {
  saveCartToLocalStorage,
  getCartFromLocalStorage,
} from "../utils/localStorage";

export interface cartProduct extends Products {
  quantity: number;
}

interface ShoppingStatus {
  cart?: cartProduct[];
}

interface ShoppingStore {
  shoppingstatus: ShoppingStatus;
  setCart: (product: cartProduct) => void;
  removeProduct: (id: number) => void;
  increasequantity: (id: number) => void;
  decreasequantity: (id: number) => void;
  loadCartFromLocalStorage: () => void;
}

const useShoppingstore = create<ShoppingStore>((set, get) => ({
  shoppingstatus: {
    cart: [],
  },

  setCart: (product) => {
    const user = auth.currentUser;
    if (!user) return;

    const currentCart = get().shoppingstatus.cart || [];
    const exists = currentCart.find((item) => item.id === product.id);

    const updatedCart = exists
      ? currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...currentCart, { ...product, quantity: 1 }];

    saveCartToLocalStorage(user.uid, updatedCart);
    set({ shoppingstatus: { cart: updatedCart } });
  },

  removeProduct: (id) => {
    const user = auth.currentUser;
    if (!user) return;

    const updatedCart =
      get().shoppingstatus.cart?.filter((item) => item.id !== id) || [];
    saveCartToLocalStorage(user.uid, updatedCart);
    set({ shoppingstatus: { cart: updatedCart } });
  },

  increasequantity: (id) => {
    const user = auth.currentUser;
    if (!user) return;

    const updatedCart =
      get().shoppingstatus.cart?.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ) || [];

    saveCartToLocalStorage(user.uid, updatedCart);
    set({ shoppingstatus: { cart: updatedCart } });
  },

  decreasequantity: (id) => {
    const user = auth.currentUser;
    if (!user) return;

    const updatedCart =
      get().shoppingstatus.cart?.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ) || [];

    saveCartToLocalStorage(user.uid, updatedCart);
    set({ shoppingstatus: { cart: updatedCart } });
  },

  loadCartFromLocalStorage: () => {
    const user = auth.currentUser;
    if (!user) return;

    const localCart = getCartFromLocalStorage(user.uid);
    console.log("Loaded cart from localStorage:", localCart);
    set({ shoppingstatus: { cart: localCart } });
  },
}));

export default useShoppingstore;

