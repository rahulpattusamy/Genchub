import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import b1 from "../assets/Brown and White Simple Fashion Sale Banner.png";
import b2 from "../assets/Beige and Brown  Minimal Modern.png";
import b3 from "../assets/Neutral Minimalist.png";
import b4 from "../assets/Purple and Pink Simple New Arrival.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const images = [b1, b2, b3, b4];
 const scrollToCategory = () => {
    const element = document.getElementById("category");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navigate = useNavigate();
  

  return (
    <div>
       <section className=" py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-600 dark:text-white ">
          Welcome to <span className="text-rose-400 dark:text-fuchsia-700">Genzhub</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 dark:text-white max-w-2xl mx-auto mb-6">
          Shop smarter. Live better. From electronics to fashion and home
          essentials — everything you need, all in one place.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={()=>navigate('/product')} className="bg-red-400 text-white px-6 py-3 rounded-full text-lg hover:bg-red-500 transition">
            Start Shopping
          </button>
          <button onClick={scrollToCategory} className="border border-red-400 text-red-400 px-6 py-3 rounded-full text-lg hover:bg-red-500 hover:text-white transition">
            Explore Categories
          </button>
        </div>
      </section>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        interval={3000}
        transitionTime={600}
        swipeable
        emulateTouch
        className="rounded-lg"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full gap-4  md:w-full lg:w-260  lg:ml-40  md:h-[390px]  flex items-center md:gap-2 cursor-pointer  rounded-sm lg:h-[400px]"
            onClick={() => navigate("/product")}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="h-40 rounded-2xl object-cover sm:object-cover md:h-full  lg:h-full lg:object-cover overflow-hidden md:rounded-lg  cursor-pointer"
            />
          </div>
        ))}
      </Carousel>
        <section className="py-16 px-6 ">
        <h2 className="text-3xl font-semibold text-center mb-12 dark:text-white">
          Why Shop on Genzhub?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto text-center">
          {[
            "✔️ Wide Product Range",
            "🚚 Fast & Reliable Delivery",
            "🔄 Easy Returns & Refunds",
            "🔒 Secure Payments",
            "🔥 Daily Deals & Discounts",
          ].map((feature) => (
            <div
              key={feature}
              className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md dark:border-fuchsia-700 dark:border dark:bg-black"
            >
              <p className="text-lg text-gray-800 dark:text-white font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </section>
      <h2 className="text-3xl font-semibold text-center mb-12 dark:text-white">
          Top Categories
        </h2>
    </div>
  );
};

export default HeroSection;
