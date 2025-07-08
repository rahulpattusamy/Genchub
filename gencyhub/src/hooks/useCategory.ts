import { useQuery } from "@tanstack/react-query"
import apiclient from "../Service/api-client"


const useCategory = () => {
  return useQuery({
     queryKey:["categories"],
     queryFn:()=>apiclient('/categories')
  })
}

export default useCategory