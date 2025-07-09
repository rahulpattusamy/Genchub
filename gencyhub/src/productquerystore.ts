import { create } from "zustand";

interface ProductQuery {
  category?: string;
}

interface ProductQueryStore {
  productquery: ProductQuery;
  setCategory: (category: string) => void;
}

const useProductquery = create<ProductQueryStore>((set) => ({
  productquery: {},
  setCategory: (category) =>
    set((state) => ({ productquery: { ...state.productquery, category } })),
}));

export default useProductquery
