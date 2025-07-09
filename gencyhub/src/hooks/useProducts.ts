import { useQuery } from "@tanstack/react-query";
import Apiclient from "../Service/api-client";
import useProductquery from "../productquerystore";

interface Products {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

interface response{
     products:Products[]
}



const useProducts = () => {
  const productquery = useProductquery(s=>s.productquery)
  const category = useProductquery(s=>s.productquery.category)
  const endpoint = category? `/products/category/${category}`:'/products'
  const apiclient = new Apiclient<response>(endpoint)
  return useQuery({
    queryKey: ["products",productquery],
    queryFn: () =>apiclient.getAll(),
  });
};

export default useProducts