import { create } from "zustand";
import type { Products } from "./hooks/useProducts";

interface ShoppingStatus {
  cart?: Products[];
}

interface ShoppingStore {
  shoppingstatus: ShoppingStatus;
  setCart: (cart: Products) => void;
}

const useShoppingstore = create<ShoppingStore>((set) => ({
  shoppingstatus: {},
  setCart: (products) =>
    set((state) => ({
      shoppingstatus: {
        ...state.shoppingstatus,
        cart: { ...(state.shoppingstatus.cart || []), products },
      },
    })),
}));

export default useShoppingstore;
