import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import { useState } from "react";
import AddToCart from "../components/AddToCart";
import { Toaster } from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useProduct(id!);
  const [Img, setimage] = useState(0);
  const stock = (data?.stock || 0) >= 1 ? "In Stock" : "Out of Stock";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-20 py-10 ">
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
        }}
      />
      <div>
        <img className=" h-50 md:h-90" src={data?.images[Img]} />
        <div className=" w-70 flex justify-between gap-5">
          {data?.images.map((img, index) => (
            <ul className="" key={index}>
              <li className="" key={index}>
                {" "}
                <img
                  key={index}
                  className={`h-15 cursor-pointer ${
                    Img == index
                      ? "border-1 rounded-lg dark:border-white"
                      : "border-0"
                  }`}
                  onClick={() => setimage(index)}
                  src={img}
                  alt=""
                />
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="mt-5 md:mt-0 flex flex-col gap-4">
        <p className="text-xl md:text-2xl font-medium dark:text-white">
          {data?.title}
        </p>
        <p className="font-bold text-3xl dark:text-white">
          ${data?.price.toFixed()}
        </p>
        <p className=" text-sm w-60 md:w-full md:text-xl text-gray-800 font-light dark:text-white">
          {data?.description}
        </p>
        <p
          className={`${
            (data?.rating || 0) >= 4 ? "bg-lime-700" : "bg-orange-300"
          } w-10  text-center rounded-sm text-white font-bold`}
        >
          {data?.rating}
        </p>
        <h2
          className={`${
            !stock ? "text-red-500" : "text-green-600"
          } font-medium text-xl`}
        >
          {stock}
        </h2>
        <h2 className="font-light text-2xl dark:text-white">
          Total: {data?.stock}
        </h2>
        <div className="-ml-2 flex gap-4">
          {data && <AddToCart product={data!} />}
          <p className="btn bg-gray-900">{data?.discountPercentage}%OFF</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
