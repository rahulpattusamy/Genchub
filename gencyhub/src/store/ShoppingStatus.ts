import { create } from "zustand";
import type { Products } from "../hooks/useProducts";
import auth from "../config/firebase-config";
import {
  saveCartToLocalStorage,
  getCartFromLocalStorage,
  saveWishlistToLocalStorage,
  getWishlistFromLocalStorage,
} from "../utils/localstorage";

export interface cartProduct extends Products {
  quantity: number;
}

interface ShoppingStatus {
  cart?: cartProduct[];
  wishlist?: Products[];
}

interface ShoppingStore {
  shoppingstatus: ShoppingStatus;
  setCart: (product: cartProduct) => void;
  setWishlist: (product: Products) => void;
  removeProduct: (id: number) => void;
  removeFromWishlist: (id: number) => void;
  increasequantity: (id: number) => void;
  decreasequantity: (id: number) => void;
  loadCartFromLocalStorage: () => void;
  loadWishlistFromLocalStorage: () => void;
  clearCart: () => void;
}

const useShoppingstore = create<ShoppingStore>((set, get) => ({
  shoppingstatus: {
    cart: [],
    wishlist: [],
  },

  setCart: (product) => {
    const user = auth.currentUser;
    if (!user) return;

    const cart = get().shoppingstatus.cart || [];
    const exists = cart.find((item) => item.id === product.id);

    const updatedCart = exists
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    saveCartToLocalStorage(user.uid, updatedCart);
    set({
      shoppingstatus: {
        ...get().shoppingstatus,
        cart: updatedCart,
      },
    });
  },

  setWishlist: (product) => {
    const user = auth.currentUser;
    if (!user) return;

    const currentWishlist = get().shoppingstatus.wishlist || [];
    const exists = currentWishlist.find((item) => item.id === product.id);
    if (exists) return;

    const updatedWishlist = [...currentWishlist, product];
    saveWishlistToLocalStorage(user.uid, updatedWishlist);
    set({
      shoppingstatus: {
        ...get().shoppingstatus,
        wishlist: updatedWishlist,
      },
    });
  },

  removeProduct: (id) => {
    const user = auth.currentUser;
    if (!user) return;

    const updatedCart =
      get().shoppingstatus.cart?.filter((item) => item.id !== id) || [];

    saveCartToLocalStorage(user.uid, updatedCart);
    set({
      shoppingstatus: {
        ...get().shoppingstatus,
        cart: updatedCart,
      },
    });
  },

  removeFromWishlist: (id) => {
    const user = auth.currentUser;
    if (!user) return;

    const updatedWishlist =
      get().shoppingstatus.wishlist?.filter((item) => item.id !== id) || [];

    saveWishlistToLocalStorage(user.uid, updatedWishlist);
    set({
      shoppingstatus: {
        ...get().shoppingstatus,
        wishlist: updatedWishlist,
      },
    });
  },

  increasequantity: (id) => {
    const user = auth.currentUser;
    if (!user) return;

    const updatedCart =
      get().shoppingstatus.cart?.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ) || [];

    saveCartToLocalStorage(user.uid, updatedCart);
    set({
      shoppingstatus: {
        ...get().shoppingstatus,
        cart: updatedCart,
      },
    });
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
    set({
      shoppingstatus: {
        ...get().shoppingstatus,
        cart: updatedCart,
      },
    });
  },

  loadCartFromLocalStorage: () => {
    const user = auth.currentUser;
    if (!user) return;

    const localCart = getCartFromLocalStorage(user.uid) || [];
    set({
      shoppingstatus: {
        ...get().shoppingstatus,
        cart: localCart,
      },
    });
  },

  loadWishlistFromLocalStorage: () => {
    const user = auth.currentUser;
    if (!user) return;

    const localWishlist = getWishlistFromLocalStorage(user.uid) || [];
    set({
      shoppingstatus: {
        ...get().shoppingstatus,
        wishlist: localWishlist,
      },
    });
  },

  clearCart: () =>
    set((state) => ({ shoppingstatus: { ...state.shoppingstatus, cart: [] } })),
}));

export default useShoppingstore;
