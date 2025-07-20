import { useQuery } from '@tanstack/react-query'
import Apiclient from '../Service/api-client'
import type { Products } from './useProducts'


const apiclient = new Apiclient<Products>('/products')

const useProduct = (id: string | number) => useQuery({
     queryKey:['product',id],
     queryFn:()=>apiclient.get(id)
})

export default useProduct