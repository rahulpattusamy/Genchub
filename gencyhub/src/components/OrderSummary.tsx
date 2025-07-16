import useShoppingstore from "../ShoppingStatus";
import useCarlength from "../utils/cartLength";
import useCartPrice from "../utils/cartPrice";

const OrderSummary = () => {
  const cart = useShoppingstore((s) => s.shoppingstatus.cart);
  const price = useCartPrice();
  const cartlength = useCarlength()
  
  if (cart)
    return (
      <div className="priceCard mt-20 md:mt-10 lg:mt-0">
        <p className=" md:text-4xl  text-black text-center">Order Summary</p>
        <p className="pricedetails">
          Price:<span>${price.toFixed()}</span>
        </p>
        <p className="pricedetails">
          Total Item: <span>{cartlength}</span>
          {}
        </p>
        <p className="pricedetails">
          Delivery Fee: <span className="text-green-500">Free</span>
        </p>
        <p className="pricedetails  font-bold">
          Total Amount:<span>${price.toFixed()}</span>
        </p>

        <button className="px-32 text-sm md:ml-5  lg:px-21 rounded-sm cursor-pointer py-2 bg-gray-800 text-white">
          Checkout
        </button>
      </div>
    );
};

export default OrderSummary;
