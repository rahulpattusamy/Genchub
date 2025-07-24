import { create } from "zustand";

interface ProductQuery {
  category?: string;
  searchText?: string;
}

interface ProductQueryStore {
  productquery: ProductQuery;
  setCategory: (category: string) => void;
  setSearchText: (search: string) => void;
}

const useProductquery = create<ProductQueryStore>((set) => ({
  productquery: {},
  setCategory: (category) => set(() => ({ productquery: { category } })),
  setSearchText: (searchText: string) =>
    set(() => ({ productquery: { searchText } })),
}));

export default useProductquery;
