import { useQuery } from "@tanstack/react-query";
import Apiclient from "../Service/api-client";

interface categories{
  slug: string;
  url: string;
}

    const apiclient = new Apiclient<categories[]>('/products/categories')

const useCategory = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      apiclient.getAll(),
  });
};

export default useCategory;
