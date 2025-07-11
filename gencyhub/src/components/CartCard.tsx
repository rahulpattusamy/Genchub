import { MdOutlineDelete } from "react-icons/md";
import useShoppingstore from "../ShoppingStatus";

const CartCard = () => {
  const cart = useShoppingstore((s) => s.shoppingstatus.cart);
  const removefromcart = useShoppingstore((s) => s.removeProduct);
  return (
    <div>
      <div className="flex flex-col justify-around gap-y-5">
        {cart?.map((item) => {
          return (
            <div className=" flex" key={item.id}>
              <div className="left">
                <img
                  className="w-35 h-45 object-cover"
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <div className="right mt-1.5 ml-7">
                <h1 className=" w-60 text2">{item.title}</h1>
                <h2 className="mt-1">
                  <span className="text2 ">Price: &#36;</span>
                  <span className="text2">{item.price}</span>
                </h2>
                <div className="mt-4">
                  <h3 className="h-5 flex items-center text-center text2">
                    Quantity:
                    <div className="flex items-center w-25 justify-between ml-5">
                      <button className="btn4">-</button>{" "}
                      <p className="text-black">{(item.quantity = 1)}</p>
                      <button className="btn4">+</button>
                    </div>
                  </h3>
                </div>
                <div className=" button flex justify-between mt-5 w-55">
                  <button
                    onClick={() => removefromcart(item.id)}
                    className="btn3 bg-red-400"
                  >
                    <div className="text-lg">
                      <MdOutlineDelete />
                    </div>
                  </button>
                  <button className="btn text-lg">
                    Move to wishlist
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartCard;
