import { MdFavoriteBorder } from "react-icons/md";
import useProducts from "../hooks/useProducts";
import AddToCart from "./AddToCart";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const ProductCard = () => {
  const { data, error, fetchNextPage, hasNextPage } = useProducts();
  if (error) return <p>{error.message}</p>;
  const products = data?.pages.flatMap((page) => page.products) || [];
  const InfiniteScrollComponent = InfiniteScroll as unknown as React.FC<any>;

  return (
    <>
      {" "}
      <InfiniteScrollComponent
        dataLength={products.length}
        next={fetchNextPage}
        hasMore={!!hasNextPage}
        loader={<p className="text-center font-bold pt-5 text-xl py-4">Loading more...</p>}
      >
        <div className="grid grid-cols-2 items-center gap-2.5 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 ">
          {data?.pages.map((P) =>
            P.products.map((product) => {
              const ratingbg =
                product.rating >= 4 ? "text-lime-700" : "text-orange-300";
              return (
                <React.Fragment key={product.id}>
                  <div className="card">
                    <img
                      className=" w-full h-20 object-cover  sm:w-full sm:h-45 sm:object-cover  md:w-full md:h-45 md:object-cover"
                      src={product.thumbnail}
                      alt=""
                    />
                    <div className="pt-4 pl-1.5  h-30 flex flex-col gap-1.5">
                      <p className="text md:text-sm">{product.title}</p>
                      <p className=" text sm:text-lg font-bold flex justify-between items-center">
                        ${product.price.toFixed()}{" "}
                        <button onClick={() => {}} className="btn2 mr-2">
                          <MdFavoriteBorder size={20} />
                        </button>
                      </p>
                      <p className="border-b border-gray-600"></p>
                    </div>
                    <div className="flex p-2  -ml-2 justify-between  items-center">
                      <AddToCart product={product} />
                      <button className={`  ${ratingbg} font-bold`}>
                        {product.rating}
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          )}
        </div>
      </InfiniteScrollComponent>
    </>
  );
};

export default ProductCard;
