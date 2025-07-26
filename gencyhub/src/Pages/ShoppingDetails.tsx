import CartCard from "../components/CartCard";
import EmptycartMessage from "../components/EmptyCartMessage";
import OrderSummary from "../components/OrderSummary";
import auth from "../config/firebase-config";
import useShoppingstore from "../store/ShoppingStatus";

const ShoppingDetails = () => {
  const cart = useShoppingstore((s) => s.shoppingstatus.cart);
  if (!cart) return <EmptycartMessage />;
  if (cart.length == 0) return <EmptycartMessage />;
  const user = auth.currentUser;
  if(!user){
    return <EmptycartMessage/>
  }
  if(user)
  return (
    <>
      <h1 className="text-5xl text-center ">My Cart</h1>
      <div className="flex flex-col h-full mt-5 justify-between  lg:flex lg:flex-row lg:justify-around lg:mt-10">
        <CartCard />
        <OrderSummary />
      </div>
    </>
  );
};

export default ShoppingDetails;
