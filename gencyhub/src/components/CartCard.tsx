import { MdFavoriteBorder, MdOutlineDelete } from "react-icons/md";
import useShoppingstore from "../ShoppingStatus";

const CartCard = () => {
  const cart = useShoppingstore((s) => s.shoppingstatus.cart);
  const removefromcart = useShoppingstore((s) => s.removeProduct);
  return (
    <div>
      <div className="flex flex-col justify-around gap-y-5">
        {cart?.map((item) => {
          return (
            <div className="cartcard flex" key={item.id}>
              <div className="left">
                <img
                  className="w-33 h-full object-cover"
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <div className="right mt-1.5 ml-7">
                <h1 className=" w-60 text">{item.title}</h1>
                <h2 className="mt-1">
                  <span className="text">Price: &#36;</span>
                  <span className="text">{item.price}</span>
                </h2>
                <div className="mt-1">
                  <h3 className="h-5 text-center text flex">
                    Quantity:
                    <div className="flex w-20 justify-between ml-5">
                      <button className="btn4">-</button>{" "}
                      <p className="text-black">{(item.quantity = 1)}</p>
                      <button className="btn4">+</button>
                    </div>
                  </h3>
                </div>
                <div className="button flex justify-between mt-3 w-55">
                  <button
                    onClick={() => removefromcart(item.id)}
                    className="btn3 bg-red-400"
                  >
                    <MdOutlineDelete />
                    Remove
                  </button>
                  <button className="btn2">
                    <MdFavoriteBorder />
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
