import CartCard from "../components/CartCard";


const ShoppingDetails = () => {
  return<> 
   <h1 className="text-5xl text-center ">My Cart</h1>
  <div className="flex justify-around mt-10">
    
    <CartCard/>
  </div>
  </>
};

export default ShoppingDetails;
