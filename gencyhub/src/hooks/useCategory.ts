import { useQuery } from "@tanstack/react-query"
import apiclient from "../Service/api-client"



const useCategory = () => {
  return useQuery({
     queryKey:["category-list"],
     queryFn:()=>apiclient.get('/products/category-list').then(res=>res.data)
  })
}

export default useCategory