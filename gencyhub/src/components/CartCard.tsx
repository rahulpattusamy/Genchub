import { MdOutlineDelete } from "react-icons/md";
import useShoppingstore from "../store/ShoppingStatus";
import EmptycartMessage from "./EmptyCartMessage";
import { Link } from "react-router-dom";

const CartCard = () => {
  const cart = useShoppingstore((s) => s.shoppingstatus.cart);
  const removefromcart = useShoppingstore((s) => s.removeProduct);
  const increaseQuantity = useShoppingstore((s) => s.increasequantity);
  const decreaseQuantity = useShoppingstore((s) => s.decreasequantity);

  if (!cart) return <EmptycartMessage />;
  if (cart.length == 0) return <EmptycartMessage />
  return (
    <div>
      <div className=" flex flex-col items-center lg:flex lg:flex-col justify-around gap-y-5">
        {cart?.map((item) => {
          const price = item.price.toFixed();
          return (
            <div className=" flex" key={item.id}>
              <div className="left">
                <img
                  className=" md:w-35 md:h-45 object-cover"
                  src={item.thumbnail}
                  alt=""
                />
              </div>
              <div className="right mt-1.5 ml-7">
                <Link to={'/products/' + item.id}>
                 <h1 className=" md:w-60 md:text2 dark:text-white hover:underline " >{item.title}</h1>
                </Link>
               
                <h2 className="mt-1">
                  <span className="text2 font-bold">
                    ${parseInt(price) * item.quantity}
                  </span>
                </h2>
                <div className="mt-4">
                  <h3 className="h-5 flex items-center text-center md:text2 dark:text-white">
                    Quantity:
                    <div className="flex items-center w-25 justify-between ml-5">
                      <button
                        className="btn4 dark:bg-neutral-700"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>{" "}
                      <p className="text-black dark:text-white">{item.quantity}</p>
                      <button
                        className="btn4 dark:bg-neutral-700"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </h3>
                </div>
                <div className=" button flex justify-between mt-5 w-55">
                  <button
                    onClick={() => removefromcart(item.id)}
                    className="btn3 p-2 bg-red-400"
                  >
                    <div className="text-lg">
                      <MdOutlineDelete />
                    </div>
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
