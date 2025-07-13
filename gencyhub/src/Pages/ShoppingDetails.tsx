import CartCard from "../components/CartCard";
import OrderSummary from "../components/OrderSummary";


const ShoppingDetails = () => {
  return<> 
   <h1 className="text-5xl text-center ">My Cart</h1>
  <div className="flex flex-col h-full mt-5 justify-between  lg:flex lg:flex-row lg:justify-around lg:mt-10">
    <CartCard/>
    <OrderSummary/>
  </div>
  </>
};

export default ShoppingDetails;
