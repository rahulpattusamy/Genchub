import { create } from "zustand";
import type { Products } from "./hooks/useProducts";

interface ShoppingStatus {
  cart?: Products[];
}

interface ShoppingStore {
  shoppingstatus: ShoppingStatus;
  setCart: (cart: Products) => void;
  removeProduct: (id: number) => void;
}

const useShoppingstore = create<ShoppingStore>((set) => ({
  shoppingstatus: {},
  setCart: (products) =>
    set((state) => ({
      shoppingstatus: {
        ...state.shoppingstatus,
        cart: [...(state.shoppingstatus.cart || []), products],
      },
    })),
    removeProduct:(id)=>set((state)=>{
      const updatedcart = state.shoppingstatus.cart?.filter(e=>e.id !== id)
      return {shoppingstatus:{...state.shoppingstatus, cart:updatedcart}}
    })
}));

export default useShoppingstore;
