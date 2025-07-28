import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import ShoppingDetails from "./Pages/ShoppingDetails";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import ProductDetail from "./Pages/ProductDetail";
import Auth from "./Pages/Auth";
import Wishlist from "./Pages/Wishlist";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/cart", element: <ShoppingDetails /> },
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/login", element: <Auth /> },
    ],
  },
]);

export default router;
