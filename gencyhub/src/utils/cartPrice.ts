import useShoppingstore from "../store/ShoppingStatus";

const useCartPrice = () => {
  const cart = useShoppingstore((s) => s.shoppingstatus.cart);
  return cart?.reduce((acc, cart) => acc + cart.price * cart.quantity, 0) || 0;
};

export default useCartPrice;
