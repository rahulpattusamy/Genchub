import { Link } from "react-router-dom";
import useShoppingstore from "../store/ShoppingStatus";
import { MdDelete } from "react-icons/md";
import AddToCart from "../components/AddToCart";
import { Toaster } from "react-hot-toast";
import EmptyWishlist from "../components/EmptyWishlist";
import useAuthStore from "../store/authstore";

const Wishlist = () => {
  const data = useShoppingstore((s) => s.shoppingstatus.wishlist);
  const removeitem = useShoppingstore((s) => s.removeFromWishlist);
  const user = useAuthStore((s) => s.user);

  if (!user) {
    return <EmptyWishlist />;
  }
  if (data?.length === 0) return <EmptyWishlist />;
  if (user)
    return (
      <div className="grid grid-cols-2 items-center p-10 gap-3  md:grid-cols-2 lg:grid-cols-4 lg:gap-5 relative overflow-hidden h-full">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              backgroundColor: "white",
              color: "#1f2937",
              fontWeight: "500",
              padding: "1px",
              marginTop: "4rem",
            },
            iconTheme: {
              primary: "#166534",
              secondary: "#ffffff",
            },
            error: {
              iconTheme: {
                primary: "#b91c1c",
                secondary: "#ffffff",
              },
            },
          }}
        />
        {data?.map((item) => {
          const ratingbg =
            item.rating >= 4 ? "text-lime-700" : "text-orange-300";
          return (
            <div className="card">
              <img
                className=" w-full h-35 object-cover  sm:w-full sm:h-45 sm:object-cover  md:w-full md:h-45 md:object-cover "
                src={item.thumbnail}
                alt=""
              />
              <div className="pt-4 pl-1.5  h-30 flex flex-col gap-1.5">
                <Link to={"/products/" + item.id}>
                  <p className="text md:text-sm hover:underline">
                    {item.title}
                  </p>
                </Link>
                <p className=" text sm:text-lg font-bold flex justify-between items-center">
                  ${item.price.toFixed()}{" "}
                  <button
                    className="btn text-xl mr-2"
                    onClick={() => removeitem(item.id)}
                  >
                    <MdDelete />
                  </button>
                </p>
                <p className="border-b border-gray-600"></p>
              </div>
              <div className="flex p-2  -ml-2 justify-between  items-center">
                <AddToCart product={item} />
                <button className={`  ${ratingbg} font-bold`}>
                  {item.rating}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
};

export default Wishlist;
