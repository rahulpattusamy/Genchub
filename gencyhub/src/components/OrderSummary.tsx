import toast from "react-hot-toast";
import useAuthStore from "../store/authstore";
import useShoppingstore from "../store/ShoppingStatus";
import useCarlength from "../utils/cartLength";
import useCartPrice from "../utils/cartPrice";
import { loadRazorpayScript } from "../utils/loadRazor";
import { saveOrderToLocal } from "../utils/localorder";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const cart = useShoppingstore((s) => s.shoppingstatus.cart);
  const price = useCartPrice();
  const cartlength = useCarlength();
  const fixedprice = price.toFixed();
  const finalprice = parseInt(fixedprice);
  const user = useAuthStore((s) => s.user);
  const clearcart = useShoppingstore((s) => s.clearCart);
  const navigate = useNavigate();
  const handleCheckout = async () => {
    const isLoaded = await loadRazorpayScript();

    if (!isLoaded) {
      toast.error("Failed to load Razorpay SDK. Please try again later.");
      return;
    }

    const options = {
      key: "rzp_test_1x2aZUhMp99CXe",
      amount: finalprice * 100,
      currency: "USD",
      name: "Genzhub",
      description: `Purchase of ${cartlength} items`,
      handler: function (response: any) {
        toast.success("Payment successful!", { duration: 1500 });
        console.log("Payment ID:", response.razorpay_payment_id);
        saveOrderToLocal(user?.uid, cart, finalprice);
        navigate("/product");
        clearcart();
        rzp.close();
      },
      prefill: {
        name: user?.displayName,
        email: user?.email,
      },
      theme: {
        color: "#3399cc",
      },
      method: {
        upi: true,
        card: true,
        netbanking: true,
        wallet: true,
        emi: true,
      },
      modal: {
        payment_methods: ["upi"],
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

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

        <button
          onClick={handleCheckout}
          className="px-32 text-sm md:ml-5  lg:px-21 rounded-sm cursor-pointer py-2 bg-gray-800 text-white"
        >
          Checkout
        </button>
      </div>
    );
};

export default OrderSummary;
