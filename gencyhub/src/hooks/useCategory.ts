import { useQuery } from "@tanstack/react-query"
import apiclient from "../Service/api-client"

type categorylist = string[]

const useCategory = () => {
  return useQuery({
     queryKey:["category-list"],
     queryFn:()=>apiclient.get<categorylist[]>('/products/category-list').then(res=>res.data)
  })
}

export default useCategory