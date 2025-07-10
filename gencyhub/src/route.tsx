import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import ShoppingDetails from "./Pages/ShoppingDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> },{path:'/cart' , element:<ShoppingDetails/>}],
  },
]);

export default router