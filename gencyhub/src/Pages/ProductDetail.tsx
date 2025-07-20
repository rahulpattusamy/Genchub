import { useParams } from "react-router-dom"
import useProduct from "../hooks/useProduct"


const ProductDetail = () => {

   const {id}  =  useParams()
  const {data}= useProduct(id!)
  return (
    <div>
     {data?.title}
    </div>
  )
}

export default ProductDetail