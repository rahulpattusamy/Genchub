import { useQuery } from "@tanstack/react-query";
import Apiclient from "../Service/api-client";
import useProductendpoint from "./useProductendpoint";

export interface Products {
  id: number;
  title: string;
  price: number;
  rating:number;
  thumbnail: string;
  quantity:number
}

interface response {
  products: Products[];
}

const useProducts = () => {
  const { endpoint, productquery } = useProductendpoint();

  const apiclient = new Apiclient<response>(endpoint);
  return useQuery({
    queryKey: ["products", productquery],
    queryFn: () => apiclient.getAll(),
  });
};

export default useProducts;
