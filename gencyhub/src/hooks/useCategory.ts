import { useQuery } from "@tanstack/react-query";
import Apiclient from "../Service/api-client";
import Category from "../data/Category";

interface categories{
  slug: string;
  name:string
}

    const apiclient = new Apiclient<categories[]>('/products/categories')

const useCategory = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () =>
    apiclient.getAll(),
    initialData:Category
  });
  
};

export default useCategory;
