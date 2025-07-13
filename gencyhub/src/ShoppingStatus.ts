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
  setCart: (cart: cartProduct) => void;
  removeProduct: (id: number) => void;
}

const useShoppingstore = create<ShoppingStore>((set) => ({
  shoppingstatus: {},
  setCart: (products) =>
    set((state) => ({
      shoppingstatus: {
        ...state.shoppingstatus,
        cart: [...(state.shoppingstatus.cart || []), {...products, quantity:1}],
      },
    })),
    removeProduct:(id)=>set((state)=>{
      const updatedcart = state.shoppingstatus.cart?.filter(e=>e.id !== id)
      return {shoppingstatus:{...state.shoppingstatus, cart:updatedcart}}
    })
}));

export default useShoppingstore;
