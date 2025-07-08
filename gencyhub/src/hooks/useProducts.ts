import { useQuery } from "@tanstack/react-query";
import apiclient from "../Service/api-client";

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
  return useQuery({
    queryKey: ["products"],
    queryFn: () =>
      apiclient.get<response>("/products").then((res) => res.data),
  });
};

export default useProducts