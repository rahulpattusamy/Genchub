import { useInfiniteQuery } from "@tanstack/react-query";
import Apiclient from "../Service/api-client";
import useProductendpoint from "./useProductendpoint";

export interface Products {
  id: number;
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
  images:string[]
  quantity: number;
  description:string
  stock:number
  discountPercentage:number
}

interface response {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}

const useProducts = () => {
  const { endpoint, productquery } = useProductendpoint();

  const apiclient = new Apiclient<response>(endpoint);
  return useInfiniteQuery({
    queryKey: ["products", productquery],
    queryFn: ({ pageParam = 0 }) =>
      apiclient.getAll({
        params: {
          skip: pageParam,
          limit: 12,
          
          

        },
      }),
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    initialPageParam:0
  });
};

export default useProducts;
