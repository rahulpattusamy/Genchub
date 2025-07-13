import { create } from "zustand";
import type { Products } from "./hooks/useProducts";

interface ShoppingStatus {
  cart?: Products[];
}

interface cartProduct extends Products {
  quantity: number;
}

interface ShoppingStore {
  shoppingstatus: ShoppingStatus;
  setCart: (Products: cartProduct) => void;
  removeProduct: (id: number) => void;
  increasequantity: (id: number) => void;
  decreasequantity: (id: number) => void;
}

const useShoppingstore = create<ShoppingStore>((set) => ({
  shoppingstatus: {},
  setCart: (products) =>
    set((state) => {
      const updatedCart = [
        ...(state.shoppingstatus.cart || []),
        { ...products, quantity: 1 },
      ];
      return {
        shoppingstatus: { ...state.shoppingstatus, cart: updatedCart },
      };
    }),

  removeProduct: (id) =>
    set((state) => ({
      shoppingstatus: {
        ...state.shoppingstatus,
        cart: state.shoppingstatus.cart?.filter((p) => p.id !== id),
      },
    })),

  increasequantity: (id) =>
    set((state) => ({
      shoppingstatus: {
        ...state.shoppingstatus,
        cart: state.shoppingstatus.cart?.map((item) =>
          item.id == id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      },
    })),
  decreasequantity: (id) =>
    set((state) => ({
      shoppingstatus: {
        ...state.shoppingstatus,
        cart: state.shoppingstatus.cart?.map((item) =>
          item.id == id
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item
        ),
      },
    })),
}));

export default useShoppingstore;
