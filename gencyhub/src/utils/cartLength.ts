import useShoppingstore from "../ShoppingStatus";


const useCarlength = ()=>{
 const cart = useShoppingstore((s) => s.shoppingstatus.cart);
     
     return  cart?.reduce((acc, result) => acc + result.quantity, 0) || 0
       
}

;

export default useCarlength